'use client';
import { useState } from 'react';
import { FadeIn } from "@/components/ui/Animations";

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

interface DocumentListProps {
  projects: ProjectDocs[];
  otherCategories: CategoryDocs[];
}

export function DocumentList({ projects, otherCategories }: DocumentListProps) {
  const [previewFile, setPreviewFile] = useState<FileNode | null>(null);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getIcon = (filename: string) => {
    if (filename.endsWith('.pdf')) return '📄';
    if (filename.endsWith('.dwg')) return '📐';
    if (filename.endsWith('.docx') || filename.endsWith('.doc')) return '📝';
    if (filename.endsWith('.xlsx') || filename.endsWith('.xls')) return '📊';
    if (filename.endsWith('.png') || filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return '🖼️';
    return '📁';
  };

  const canPreview = (filename: string) => {
    // Browsers can easily render PDF, PNG, JPG, JPEG via iframe.
    // Excel, Word, DWG cannot be reliably rendered in an iframe natively without an external viewer like Google Docs Viewer.
    // For those, we might still fallback to direct download or google viewer.
    // Google Docs Viewer URL format: https://docs.google.com/viewer?url={url}&embedded=true
    return true; // We'll try to preview everything.
  };

  const renderFileRow = (file: FileNode, i: number) => (
    <div
      key={file.url}
      className={`flex items-center gap-3 px-6 py-4 hover:bg-[#1A1A1A] transition-colors border-b border-r border-[#2A2A2A] ${i % 3 === 2 ? 'border-r-0' : ''}`}
    >
      <div className="text-xl flex-shrink-0 opacity-80">
        {getIcon(file.name)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium text-[#F5F0E8] truncate" title={file.name}>
          {file.name}
        </div>
        <div className="text-[10px] text-[#6B7280] mt-0.5">
          {formatSize(file.size)}
        </div>
      </div>
      <button
        onClick={() => setPreviewFile(file)}
        className="text-[#6B7280] hover:text-[#2563EB] transition-colors flex-shrink-0 p-2 hover:bg-[#2563EB]/10 rounded"
        title="Visualitzar online"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
      <a
        href={file.url}
        download
        className="text-[#6B7280] hover:text-[#10B981] transition-colors flex-shrink-0 p-2 hover:bg-[#10B981]/10 rounded ml-1"
        title="Descarregar"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </a>
    </div>
  );

  return (
    <>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <FadeIn key={project.name} delay={idx * 0.1}>
            <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden shadow-lg">
              <div className="px-6 py-5 border-b border-[#2A2A2A] bg-[#161616]">
                <h2 className="text-lg font-semibold text-[#F5F0E8]">{project.name}</h2>
              </div>
              
              {project.categories.length > 0 ? (
                <div className="flex flex-col">
                  {project.categories.map((category) => (
                    <div key={category.name} className={`border-b border-[#2A2A2A] last:border-b-0`}>
                      <div className="bg-[#1A1A1A] px-6 py-3 border-b border-[#2A2A2A] flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A89F91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <h3 className="font-semibold text-[#A89F91] text-xs tracking-wider uppercase">{category.name}</h3>
                        <span className="ml-auto text-[10px] text-[#6B7280]">{category.files.length} arxius</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {category.files.map((file, i) => renderFileRow(file, i))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-[#6B7280] text-sm">
                  No hi ha documents disponibles per aquest projecte.
                </div>
              )}
            </div>
          </FadeIn>
        ))}

        {otherCategories.length > 0 && (
          <FadeIn delay={0.5}>
            <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden shadow-lg mt-8">
              <div className="px-6 py-5 border-b border-[#2A2A2A] bg-[#161616]">
                <h2 className="text-lg font-semibold text-[#F5F0E8]">Altres Documents</h2>
              </div>
              <div className="flex flex-col">
                {otherCategories.map((category) => (
                  <div key={category.name} className={`border-b border-[#2A2A2A] last:border-b-0`}>
                    <div className="bg-[#1A1A1A] px-6 py-3 border-b border-[#2A2A2A] flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A89F91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <h3 className="font-semibold text-[#A89F91] text-xs tracking-wider uppercase">{category.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                      {category.files.map((file, i) => renderFileRow(file, i))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm" onClick={() => setPreviewFile(null)}>
          <div className="bg-[#111111] w-full max-w-6xl h-full rounded-xl border border-[#2A2A2A] shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A] bg-[#161616]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="text-2xl">{getIcon(previewFile.name)}</div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#F5F0E8] truncate">{previewFile.name}</h3>
                  <p className="text-xs text-[#6B7280]">{formatSize(previewFile.size)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewFile.url}
                  download
                  className="px-3 py-1.5 rounded-md bg-[#2563EB]/20 text-[#60A5FA] text-xs font-medium hover:bg-[#2563EB]/30 transition-colors"
                >
                  Descarregar Original
                </a>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="p-1.5 rounded-md text-[#6B7280] hover:text-white hover:bg-[#2A2A2A] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Iframe Viewer */}
            <div className="flex-1 bg-white relative overflow-hidden rounded-b-xl">
              {/* Fallback msg for dwg/docx that browsers can't render native */}
              {(previewFile.name.endsWith('.dwg') || previewFile.name.endsWith('.docx') || previewFile.name.endsWith('.xlsx')) && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#111111] text-center p-8">
                  <div className="text-6xl mb-4">{getIcon(previewFile.name)}</div>
                  <h2 className="text-xl font-semibold text-[#F5F0E8] mb-2">Previsualització no disponible</h2>
                  <p className="text-[#A89F91] max-w-md mb-6">
                    El teu navegador no suporta la previsualització nativa de fitxers d'aquest tipus ({previewFile.name.split('.').pop()}). 
                    Si us plau, descarrega'l per visualitzar-lo localment.
                  </p>
                  <a
                    href={previewFile.url}
                    download
                    className="btn-primary"
                  >
                    Descarregar Fitxer
                  </a>
                </div>
              )}
              
              {/* The actual preview iframe */}
              <iframe
                src={previewFile.url}
                className="w-full h-full border-0 absolute inset-0 z-0"
                title={previewFile.name}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
