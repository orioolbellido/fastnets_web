import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/Animations";
import { DocumentList } from "@/components/ui/DocumentList";
import fs from "fs";
import path from "path";

export const metadata: Metadata = { title: "Documentació Interna | Àrea Privada" };

interface FileNode {
  name: string;
  url: string;
  size: number;
}

interface CategoryDocs {
  name: string;
  files: FileNode[];
}

interface ProjectDocs {
  name: string;
  categories: CategoryDocs[];
}

function getFilesByCategory(dirPath: string, basePath: string): CategoryDocs[] {
  const categoriesMap = new Map<string, FileNode[]>();
  
  function walk(currentPath: string, topLevelCategory: string) {
    try {
      const files = fs.readdirSync(currentPath);
      files.forEach((file) => {
        const fullPath = path.join(currentPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
          walk(fullPath, topLevelCategory);
        } else {
          const stat = fs.statSync(fullPath);
          if (!file.startsWith('.')) {
            const relativePath = path.relative(basePath, fullPath);
            const fileNode = {
              name: file,
              url: `/privat/${relativePath.replace(/\\/g, '/')}`,
              size: stat.size
            };
            
            if (!categoriesMap.has(topLevelCategory)) {
              categoriesMap.set(topLevelCategory, []);
            }
            categoriesMap.get(topLevelCategory)!.push(fileNode);
          }
        }
      });
    } catch (e) {
      // Ignore
    }
  }

  try {
    const topLevelDirs = fs.readdirSync(dirPath);
    topLevelDirs.forEach(item => {
      const fullPath = path.join(dirPath, item);
      if (fs.statSync(fullPath).isDirectory() && !item.startsWith('.')) {
        walk(fullPath, item);
      } else if (!fs.statSync(fullPath).isDirectory() && !item.startsWith('.')) {
        walk(fullPath, "Documents Generals");
      }
    });
  } catch (e) {
    // Ignore
  }

  const result: CategoryDocs[] = [];
  categoriesMap.forEach((files, name) => {
    result.push({ name, files });
  });
  
  result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}

export default function DocumentacioPage() {
  const publicPrivatDir = path.join(process.cwd(), 'public', 'privat');
  
  let projects: ProjectDocs[] = [];
  let otherCategories: CategoryDocs[] = [];
  
  try {
    const dirs = fs.readdirSync(publicPrivatDir);
    dirs.forEach(dir => {
      const dirPath = path.join(publicPrivatDir, dir);
      if (fs.statSync(dirPath).isDirectory()) {
        if (dir.startsWith("Projecte")) {
          const categories = getFilesByCategory(dirPath, publicPrivatDir);
          projects.push({ name: dir, categories });
        } else if (!dir.startsWith('.')) {
          const files: FileNode[] = [];
          function getFlatFiles(p: string) {
            try {
               fs.readdirSync(p).forEach(f => {
                  const fp = path.join(p, f);
                  if(fs.statSync(fp).isDirectory()) getFlatFiles(fp);
                  else if (!f.startsWith('.')) {
                      files.push({
                         name: f,
                         url: `/privat/${path.relative(publicPrivatDir, fp).replace(/\\/g, '/')}`,
                         size: fs.statSync(fp).size
                      });
                  }
               });
            } catch(e) {}
          }
          getFlatFiles(dirPath);
          if (files.length > 0) {
              otherCategories.push({ name: dir, files });
          }
        }
      }
    });
  } catch (e) {
    // Ignore
  }

  projects.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-8">
      <FadeIn>
        <div className="mb-8">
          <div className="section-label mb-2">Àrea de Documentació</div>
          <h1 className="text-2xl font-semibold text-[#F5F0E8]">Arxiu Documental</h1>
          <p className="text-sm text-[#6B7280] mt-1">Explora i visualitza online tota la documentació classificada per projecte i secció.</p>
        </div>
      </FadeIn>

      <DocumentList projects={projects} otherCategories={otherCategories} />
    </div>
  );
}
