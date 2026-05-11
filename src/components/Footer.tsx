import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/img/logo/Logo+Txt.png" alt="FastNets" className="invert w-[200px] h-auto object-contain opacity-90" />
            </div>
            <p className="text-[#A89F91] text-sm leading-relaxed max-w-sm">
              Instal·lació professional de telecomunicacions. Solucions tècniques d'alta qualitat per a empreses i institucions.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="mailto:info@fastnets.cat" className="text-[#A89F91] hover:text-[#2563EB] transition-colors text-sm">
                info@fastnets.cat
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A89F91] mb-4">Navegació</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Inici' },
                { href: '/qui-som', label: 'Qui Som' },
                { href: '/que-fem', label: 'Què Fem' },
                { href: '/clients', label: 'Clients' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#6B7280] hover:text-[#F5F0E8] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A89F91] mb-4">Serveis</h4>
            <ul className="space-y-2.5">
              {[
                'ICT · Telecomunicacions',
                'Fibra Òptica',
                'Xarxes de Dades',
                'CCTV i Seguretat',
                'Consultoria Tècnica',
              ].map((s) => (
                <li key={s} className="text-sm text-[#6B7280]">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-[#2A2A2A] mt-12 mb-6"/>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} FastNets. Tots els drets reservats.
          </p>
          <div className="flex gap-6">
            <Link href="/privat/login" className="text-xs text-[#6B7280] hover:text-[#A89F91] transition-colors">
              Àrea Privada
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
