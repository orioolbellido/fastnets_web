import { projectsData } from "@/data/projectsData";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import { ProjectGantt } from "@/components/ui/ProjectGantt";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import Link from "next/link";
import { notFound } from "next/navigation";

// En Next.js 15, `params` es una Promise en páginas de Server Components,
// pero por ahora Next.js 14 es el que usas (según package.json: next@14.x o 15.x? A revisar).
// Si usas Next.js 15, `params` debe ser await params. Si usas 14, no.
// Asumo que en Next 15 es Promise<{ id: string }>
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.id];

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link href="/que-fem" className="inline-flex items-center gap-2 text-sm text-[#A89F91] hover:text-white transition-colors mb-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Tornar a Projectes
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-2.5 py-1 bg-[#2563EB]/20 text-[#60A5FA] text-[10px] font-semibold uppercase tracking-wider rounded backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-[#6B7280] text-sm font-mono">
                {project.client} · {project.location}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-[#F5F0E8] mb-6 max-w-4xl">
              {project.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Description & Systems */}
            <div className="lg:col-span-7 space-y-12">
              <FadeIn delay={0.1}>
                <h2 className="text-xl font-semibold text-[#F5F0E8] mb-4">Visió General</h2>
                <p className="text-[#A89F91] leading-relaxed">
                  {project.overview}
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-xl font-semibold text-[#F5F0E8] mb-4">Requeriments Tècnics</h2>
                <ul className="space-y-3">
                  {project.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3 text-[#A89F91]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h2 className="text-xl font-semibold text-[#F5F0E8] mb-6">Sistemes i Elements Instal·lats</h2>
                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
                  {project.systems.map((sys) => (
                    <StaggerItem key={sys.name}>
                      <div className="p-5 rounded-xl border border-[#2A2A2A] bg-[#111111] h-full">
                        <h3 className="font-semibold text-white mb-3 text-sm">{sys.name}</h3>
                        <ul className="space-y-2">
                          {sys.items.map((item, i) => (
                            <li key={i} className="text-[#A89F91] text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </FadeIn>
            </div>

            {/* Right Column: Images & Meta */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn delay={0.2}>
                 <div className="w-full mb-4">
                   <ProjectCarousel images={project.images} title={project.title} />
                 </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-xl border border-[#2A2A2A] bg-gradient-to-br from-[#161616] to-[#111111]">
                  <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest text-[#6B7280]">Dades del Projecte</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A]">
                      <span className="text-[#A89F91] text-sm">Durada</span>
                      <span className="text-white text-sm font-medium">{project.duration}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A]">
                      <span className="text-[#A89F91] text-sm">Estat</span>
                      <span className="text-[#10B981] text-sm font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Completat
                      </span>
                    </div>
                    <div className="pt-2">
                      <Link href="/privat/login" className="w-full btn-ghost text-center justify-center">
                        Accedir a l'Àrea Privada
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      </Link>
                      <p className="text-xs text-[#6B7280] text-center mt-3">
                        Documentació tècnica exclusiva per a clients.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Temporització Gantt */}
      <section className="py-16 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#F5F0E8] mb-2">Temporització i Execució</h2>
              <p className="text-[#6B7280] text-sm">
                Desglossament de tasques segons el document original d'execució.
              </p>
            </div>
            
            <ProjectGantt sections={project.sections} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
