import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";
import { projectsDataList } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Què Fem",
  description:
    "Projectes professionals de telecomunicació: ICT, fibra òptica, xarxes de dades, CCTV i seguretat. Portfolio de FastNets.",
};

const statusColors: Record<string, string> = {
  Actiu: "#10B981",
  Completat: "#6B7280",
  "En curs": "#2563EB",
};

export default function QueFemPage() {
  const projects = projectsDataList;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="section-label mb-4">Projectes i Serveis</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F5F0E8] mb-6 max-w-2xl leading-tight">
              El que fem, parla per si sol
            </h1>
            <p className="text-[#A89F91] max-w-2xl leading-relaxed">
              Un portfolio de projectes d'instal·lació de telecomunicació que cobreix des d'edificis residencials fins a grans infraestructures industrials i corporatives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {projects.map((p) => (
              <StaggerItem key={p.id}>
                <div className="card h-full flex flex-col group relative">
                  <ProjectCarousel images={p.images || []} title={p.title} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded"
                      style={{
                        color: statusColors['Completat'],
                        backgroundColor: statusColors['Completat'] + '18',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColors['Completat'] }}/>
                      Completat
                    </span>
                    <span className="text-xs text-[#6B7280]">{p.category}</span>
                  </div>

                  <h3 className="font-semibold text-[#F5F0E8] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed flex-1 mb-5 line-clamp-3">
                    {p.overview}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.systems.slice(0, 3).map((s) => (
                      <span key={s.name} className="text-[10px] px-2 py-0.5 rounded bg-[#1A1A1A] text-[#A89F91] border border-[#2A2A2A]">
                        {s.name}
                      </span>
                    ))}
                  </div>

                  <Link href={`/que-fem/${p.id}`} className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-[#F5F0E8] hover:text-[#2563EB] transition-colors py-2 border-t border-[#2A2A2A] group-hover:border-[#3A3A3A] pt-4">
                    Veure Projecte Complet
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <div className="section-label mb-3">Àrees de servei</div>
            <h2 className="text-2xl font-semibold text-[#F5F0E8]">
              Catàleg de serveis professionals
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Instal·lació ICT",
                  items: ["Projecte tècnic ICT", "RITI/RITS", "Arquetes i canalitzacions", "BAT i PAU", "Verificació i certificació"],
                },
                {
                  title: "Fibra Òptica",
                  items: ["Fusió i empatament", "OTDR i certificació", "Rosetes de fibra", "Armaris ODF", "Caixes de splicing"],
                },
                {
                  title: "Xarxes de Dades",
                  items: ["Cablejat estructurat Cat6/6A", "Patch panels i racks", "Switch i routers", "Wi-Fi mesh", "Certificació Fluke"],
                },
                {
                  title: "Seguretat",
                  items: ["CCTV IP i analògic", "VMS i gravació", "Control d'accés RFID", "Intrusió i alarmes", "Integració BMS"],
                },
              ].map((s) => (
                <div key={s.title} className="card">
                  <h3 className="font-semibold text-[#F5F0E8] mb-4 text-sm">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0"/>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
