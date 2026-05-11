import type { Metadata } from "next";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Clients de FastNets: empreses, institucions i promotors que confien en els nostres serveis professionals de telecomunicació.",
};

const clients = [
  { name: "Ofis S.A.", sector: "Sector Financer / Corporatiu", initials: "OS" },
  { name: "Bar JB", sector: "Oci Nocturn / Restauració", initials: "JB" },
  { name: "Grup Construccions RW", sector: "Promotora", initials: "GC" },
  { name: "Universitat Oberta", sector: "Educació", initials: "UO" },
];

const faqItems = [
  {
    question: "Quins serveis tecnològics oferiu per a empreses?",
    answer:
      "Realitzem el desplegament de xarxes estructurades, integració de telefonia VoIP, instal·lació i organització de racks de servidors, sistemes CCTV i control d'accessos, així com projectes audiovisuals per a locals d'oci (sistemes DMX, sonorització professional i projectors sincronitzats).",
  },
  {
    question: "Quins són els vostres canals de suport oficials?",
    answer:
      "Atenem a les consultes i incidències a través del nostre correu electrònic oficial info@fastnets.com o per telèfon al 900 123 456. Per a emergències fora d'horari, els clients de manteniment disposen d'un canal directe prioritari.",
  },
  {
    question: "Com sol·licito un pressupost personalitzat?",
    answer:
      "Pots escriure'ns a l'adreça de contacte detallant les necessitats globals del teu projecte (plànols, número de llocs de treball, equipament audiovisual...). Un tècnic respondrà amb una proposta o sol·licitarà una visita presencial per valorar l'espai.",
  },
  {
    question: "Quina garantia tenen les vostres instal·lacions?",
    answer:
      "Garantim tot el nostre cablejat estructurat amb certificacions oficials que avalen el rendiment a llarg termini. A més, els equips actius tenen la garantia oficial del fabricant gestionada directament per nosaltres.",
  },
  {
    question: "Realitzeu instal·lacions 'clau en mà'?",
    answer:
      "Sí, ens encarreguem de tot el procés estratègic i operatiu, des del disseny inicial i l'estudi de cobertura fins a la instal·lació física del cablejat, la configuració dels equips de xarxa actius i la certificació final de l'origen al destí.",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="section-label mb-4">Clients</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F5F0E8] mb-6 max-w-2xl leading-tight">
              Empreses que confien en nosaltres
            </h1>
            <p className="text-[#A89F91] max-w-2xl leading-relaxed">
              Des de promotores i industrials fins a institucions públiques i centres de dades. La diversitat dels nostres clients reflecteix la versatilitat del nostre equip.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-10">
            <h2 className="text-xl font-semibold text-[#F5F0E8]">Principals clients</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] rounded-xl overflow-hidden" staggerDelay={0.06}>
            {clients.map((c) => (
              <StaggerItem key={c.name}>
                <div className="bg-[#111111] p-6 flex flex-col items-start gap-3 hover:bg-[#161616] transition-colors group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-sm font-semibold text-[#A89F91] group-hover:border-[#3A3A3A] transition-colors">
                    {c.initials}
                  </div>
                  <div>
                    <div className="font-medium text-[#F5F0E8] text-sm leading-snug">{c.name}</div>
                    <div className="text-xs text-[#6B7280] mt-1">{c.sector}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn>
              <div>
                <div className="section-label mb-3">Preguntes Freqüents</div>
                <h2 className="text-2xl font-semibold text-[#F5F0E8] mb-4">
                  Teniu dubtes?
                </h2>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Aquí responem les preguntes més habituals dels nostres clients. Si no trobeu el que busqueu, no dubteu en contactar-nos.
                </p>
              </div>
            </FadeIn>
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <FAQ items={faqItems} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <div className="section-label mb-3">Contacte</div>
            <h2 className="text-2xl font-semibold text-[#F5F0E8]">
              Sol·liciteu un pressupost
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl">
              <form id="contact-form" className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#6B7280] mb-2 font-medium">Nom</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="El vostre nom"
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-[#6B7280] mb-2 font-medium">Empresa</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Nom de l'empresa"
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-[#6B7280] mb-2 font-medium">Correu electrònic</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="correu@empresa.cat"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs text-[#6B7280] mb-2 font-medium">Servei d'interès</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#A89F91] focus:outline-none focus:border-[#2563EB] transition-colors"
                  >
                    <option value="">Seleccioneu un servei</option>
                    <option>Instal·lació ICT</option>
                    <option>Fibra Òptica</option>
                    <option>Xarxes de Dades</option>
                    <option>CCTV i Seguretat</option>
                    <option>Projecte Tècnic</option>
                    <option>Manteniment</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-[#6B7280] mb-2 font-medium">Descripció del projecte</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Descriviu breument el vostre projecte o necessitat..."
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                  />
                </div>
                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Enviar sol·licitud
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>

              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-medium text-[#F5F0E8] text-sm mb-3">Informació de contacte</h3>
                  <div className="space-y-3 text-sm text-[#6B7280]">
                    <p>📧 info@fastnets.cat</p>
                    <p>📞 +34 93 000 00 00</p>
                    <p>📍 Carrer de la Tecnologia, 42<br/>08000 Barcelona, Catalunya</p>
                    <p>🕐 Dilluns–Divendres, 8:00–18:00</p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="font-medium text-[#F5F0E8] text-sm mb-2">Temps de resposta</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Els nostres tècnics us respondran en un termini màxim de <span className="text-[#10B981]">24 hores laborables</span>. Per a urgències, contacteu directament per telèfon.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
