import type { Metadata } from "next";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Qui Som",
  description:
    "Coneix l'equip de FastNets: professionals especialitzats en telecomunicacions amb més de 15 anys d'experiència al sector.",
};

const team = [
  {
    name: "Oriol Bellido",
    role: "CEO de l'equip",
    dept: "Empresa FastNets",
    bio: "oriol.bellido@fastnets.com",
    initials: "OB",
    color: "#2563EB",
    image: "/img/member1.png"
  },
  {
    name: "Genis Espier",
    role: "Membre de l'equip",
    dept: "Empresa FastNets",
    bio: "genis.espier@fastnets.com",
    initials: "GE",
    color: "#C8A96E",
    image: "/img/member2.png"
  },
  {
    name: "Alejandro Figueras",
    role: "Membre de l'equip",
    dept: "Empresa FastNets",
    bio: "alejandro.figueras@fastnets.com",
    initials: "AF",
    color: "#10B981",
    image: "/img/member3.png"
  },
  {
    name: "Enguel Peguero",
    role: "Membre de l'equip",
    dept: "Empresa FastNets",
    bio: "enguel.peguero@fastnets.com",
    initials: "EP",
    color: "#8B5CF6",
    image: "/img/member4.png"
  },
  {
    name: "Ivan Castro",
    role: "Membre de l'equip",
    dept: "Empresa FastNets",
    bio: "ivan.castro@fastnets.com",
    initials: "IC",
    color: "#EF4444",
    image: "/img/member5.png"
  },
  {
    name: "Aitor",
    role: "Membre de l'equip",
    dept: "Empresa FastNets",
    bio: "aitor@fastnets.com",
    initials: "A",
    color: "#F59E0B",
    image: "/img/member6.png"
  },
];

const orgLayers = [
  {
    tier: "FastNets",
    color: "#2563EB",
    members: [
      "Oriol Bellido",
      "Genis Espier",
      "Alejandro Figueras",
      "Enguel Peguero",
      "Ivan Castro",
      "Aitor"
    ],
  }
];

export default function QuiSomPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="section-label mb-4">Qui Som</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F5F0E8] mb-6 max-w-2xl leading-tight">
              Un equip tècnic al vostre servei
            </h1>
            <p className="text-[#A89F91] max-w-2xl leading-relaxed">
              FastNets és una empresa de telecomunicacions fundada per professionals del sector. Combinem rigor tècnic, experiència i un tracte proper per oferir solucions d'alta qualitat als nostres clients.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="text-2xl font-semibold text-[#F5F0E8]">Equip Directiu i Tècnic</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card group h-full">
                  <div className="flex items-start gap-4 mb-4">
                    {member.image ? (
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-[#2A2A2A]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 font-semibold text-lg text-white"
                        style={{ backgroundColor: member.color + '22', color: member.color }}
                      >
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-[#F5F0E8] text-sm">{member.name}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{member.role}</div>
                      <div
                        className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-1.5"
                        style={{ backgroundColor: member.color + '20', color: member.color }}
                      >
                        {member.dept}
                      </div>
                    </div>
                  </div>
                  <a href={`mailto:${member.bio}`} className="text-xs text-[#2563EB] hover:underline leading-relaxed">{member.bio}</a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Organigrama */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <div className="section-label mb-3">Estructura</div>
            <h2 className="text-2xl font-semibold text-[#F5F0E8]">Organigrama</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {orgLayers.map((layer, li) => (
                <div key={layer.tier}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: layer.color }}>
                      {layer.tier}
                    </span>
                  </div>
                  <div className={`grid gap-3 ${layer.members.length === 1 ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {layer.members.map((m) => (
                      <div
                        key={m}
                        className="px-4 py-3 rounded-lg border text-sm text-[#A89F91]"
                        style={{ borderColor: layer.color + '40', backgroundColor: layer.color + '08' }}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                  {li < orgLayers.length - 1 && (
                    <div className="mt-3 ml-1 w-px h-5 bg-[#2A2A2A]" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-10 md:p-14 max-w-2xl">
              <div className="section-label mb-4">Contacte</div>
              <h2 className="text-2xl font-semibold text-[#F5F0E8] mb-4">
                Poseu-vos en contacte amb nosaltres
              </h2>
              <p className="text-[#A89F91] text-sm mb-8 leading-relaxed">
                Per a qualsevol consulta tècnica, sol·licitud de pressupost o informació sobre els nostres serveis, no dubteu a contactar directament amb el nostre equip.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@fastnets.cat"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] mb-0.5">Correu electrònic</div>
                    <div className="text-sm text-[#2563EB] group-hover:underline">info@fastnets.cat</div>
                  </div>
                </a>
                <a
                  href="tel:+34930000000"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 text-[#10B981] flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5 2H3a1 1 0 00-1 1c0 6.627 5.373 12 12 12a1 1 0 001-1v-2a1 1 0 00-1-1h-2.5a1 1 0 00-.8.4L9.5 12c-1.5-.8-2.7-2-3.5-3.5l.6-.7A1 1 0 006 7V4a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280] mb-0.5">Telèfon</div>
                    <div className="text-sm text-[#F5F0E8]">+34 93 000 00 00</div>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
