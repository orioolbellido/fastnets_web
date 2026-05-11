import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Inici — FastNets",
  description:
    "FastNets: instal·ladors professionals de telecomunicacions a Catalunya. ICT, fibra òptica, xarxes, CCTV i consultoria tècnica.",
};

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
    title: "Xarxes i Telecomunicacions",
    desc: "Desplegament de xarxes multiservei, cablejat estructurat, Wi-Fi segmentat i telefonia IP per a corporacions i hostaleria.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
    title: "Audiovisuals i Sonorització",
    desc: "Sistemes avançats de sonorització, projecció, broadcasting i control d'il·luminació DMX per a auditoris i espais d'oci.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
    title: "Seguretat i Electricitat",
    desc: "Sistemes de videovigilància (CCTV), control d'accessos, detecció d'incendis i adequacions elèctriques integrals.",
  }
];

const stats = [
  { value: "100%", label: "Projectes Certificats" },
  { value: "360º", label: "Integració de Sistemes" },
  { value: "24/7", label: "Suport Tècnic" },
  { value: "A Mida", label: "Disseny d'Infraestructures" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#F5F0E8 1px,transparent 1px),linear-gradient(90deg,#F5F0E8 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#1A1A1A] text-xs text-[#A89F91] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"/>
                Operatiu a Catalunya · Certificats per la CMT
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#F5F0E8] mb-6">
                Telecomunicacions
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
                  d&apos;alta precisió
                </span>
                <br />
                per al vostre negoci
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-[#A89F91] max-w-2xl leading-relaxed mb-10">
                A FastNets dissenyem, instal·lem i mantenim infraestructures integrals per a empreses i espais públicos. Integrem telecomunicacions, sistemes audiovisuals avançats i electricitat amb el màxim rigor tècnic.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/que-fem" className="btn-primary">
                  Veure projectes
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/clients" className="btn-ghost">
                  Parla amb nosaltres
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Stats row */}
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] rounded-xl overflow-hidden mt-24 border border-[#2A2A2A]" staggerDelay={0.08}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="bg-[#111111] px-6 py-8">
                  <div className="text-3xl font-semibold text-[#F5F0E8] mb-1">{s.value}</div>
                  <div className="text-xs text-[#6B7280]">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured Projects Gallery (Bento Box) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="section-label mb-3">Casos d'èxit</div>
                <h2 className="text-3xl font-semibold text-[#F5F0E8]">
                  Infraestructures que parlen per si soles
                </h2>
              </div>
              <Link href="/que-fem" className="btn-ghost shrink-0">
                Veure portfolio complet
              </Link>
            </div>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
            {/* Project 1 - Large (Spans 2 columns on md) */}
            <StaggerItem className="md:col-span-2 relative group rounded-2xl overflow-hidden border border-[#2A2A2A] h-[300px] md:h-[400px]">
              <img src="/img/Projecte4_Auditori/Control_General.jpeg" alt="Auditori Vilaneta del Riu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-1 bg-[#2563EB]/20 text-[#60A5FA] text-[10px] font-semibold uppercase tracking-wider rounded backdrop-blur-md mb-2">Equipament Públic</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Auditori Vilaneta del Riu</h3>
                <p className="text-sm text-[#A89F91] line-clamp-2">Sonorització avançada i control d'il·luminació per a un espai cultural de referència.</p>
              </div>
            </StaggerItem>

            {/* Project 2 - Tall (Spans 1 column) */}
            <StaggerItem className="relative group rounded-2xl overflow-hidden border border-[#2A2A2A] h-[300px] md:h-[400px]">
              <img src="/img/Projecte1_OfisSA/rack1_acabat.jpeg" alt="Ofis S.A." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-1 bg-[#10B981]/20 text-[#34D399] text-[10px] font-semibold uppercase tracking-wider rounded backdrop-blur-md mb-2">Corporatiu</span>
                <h3 className="text-xl font-semibold text-white mb-2">Ofis S.A.</h3>
                <p className="text-sm text-[#A89F91] line-clamp-2">Xarxa multiservei corporativa amb rack centralitzat.</p>
              </div>
            </StaggerItem>

            {/* Project 3 - Normal */}
            <StaggerItem className="relative group rounded-2xl overflow-hidden border border-[#2A2A2A] h-[250px] md:h-[300px]">
              <img src="/img/Projecte3_Pilson/GeneralHotel.png" alt="Hotel Pilson" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-1 bg-[#F59E0B]/20 text-[#FCD34D] text-[10px] font-semibold uppercase tracking-wider rounded backdrop-blur-md mb-2">Hostaleria</span>
                <h3 className="text-xl font-semibold text-white mb-2">Hotel Pilson</h3>
              </div>
            </StaggerItem>

            {/* Project 4 - Normal */}
            <StaggerItem className="md:col-span-2 relative group rounded-2xl overflow-hidden border border-[#2A2A2A] h-[250px] md:h-[300px]">
              <img src="/img/Projecte2_BarJB/control_so.jpeg" alt="Bar JB" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-2 py-1 bg-[#8B5CF6]/20 text-[#C4B5FD] text-[10px] font-semibold uppercase tracking-wider rounded backdrop-blur-md mb-2">Oci Nocturn</span>
                <h3 className="text-xl font-semibold text-white mb-2">Bar Musical JB</h3>
                <p className="text-sm text-[#A89F91] line-clamp-2">Sonorització d'alt rendiment i gestió d'il·luminació automatitzada (DMX).</p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="section-label mb-3">Àrees d'Expertesa</div>
                <h2 className="text-3xl font-semibold text-[#F5F0E8]">
                  Més enllà del cablejat tradicional
                </h2>
              </div>
              <p className="text-sm text-[#6B7280] max-w-sm">
                Oferim solucions claus en mà, integrant infraestructures de xarxa, equips audiovisuals de darrera generació i sistemes de seguretat sota un únic projecte estructurat i certificat.
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A] rounded-xl overflow-hidden" staggerDelay={0.07}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="card rounded-none h-full group hover:bg-[#161616] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-[#F5F0E8] mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[#2A2A2A] p-12 md:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative max-w-2xl">
                <div className="section-label mb-4">Treballem junts</div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F0E8] mb-4">
                  Teniu un projecte en ment?
                </h2>
                <p className="text-[#A89F91] mb-8 leading-relaxed">
                  Contacteu amb nosaltres i us respondrem en menys de 24h. Analitzem els vostres requisits i us presentem una proposta tècnica personalitzada.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:info@fastnets.cat" className="btn-primary">
                    Enviar correu
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 4l5 4 5-4M2 4h10v7H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <Link href="/qui-som" className="btn-ghost">
                    Qui som
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
