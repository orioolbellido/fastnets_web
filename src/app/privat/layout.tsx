'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const privateNav = [
  {
    href: '/privat/documentacio',
    label: 'Documentació',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2h5l3 3v9H4V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M9 2v3h3M6 7h4M6 9h4M6 11h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/privat/projectes',
    label: 'Gestió de Projectes',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="2" rx="0.5" fill="currentColor" opacity="0.3"/>
        <rect x="2" y="7" width="8" height="2" rx="0.5" fill="currentColor" opacity="0.6"/>
        <rect x="2" y="10" width="10" height="2" rx="0.5" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function PrivatLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === '/privat/login';

  useEffect(() => {
    if (!isLogin) {
      const auth = sessionStorage.getItem('fastnets_auth');
      if (!auth) router.replace('/privat/login');
    }
  }, [isLogin, router]);

  if (isLogin) return <>{children}</>;

  return (
    <div className="min-h-screen pt-16 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#2A2A2A] bg-[#0D0D0D] fixed top-16 bottom-0 left-0 z-30 flex flex-col">
        <div className="p-4 border-b border-[#2A2A2A]">
          <div className="flex flex-col items-center gap-2">
            <img src="/img/logo/Logo.png" alt="FastNets" className="invert h-12 w-auto object-contain opacity-90" />
            <div className="text-center">
              <div className="text-xs font-semibold text-[#F5F0E8]">Àrea Privada</div>
              <div className="text-[10px] text-[#6B7280]">FastNets Intern</div>
            </div>
          </div>
        </div>

        <nav className="p-3 flex-1">
          <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#6B7280] px-2 mb-2">
            Panell
          </div>
          {privateNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                pathname.startsWith(item.href)
                  ? 'bg-[#2563EB]/15 text-[#60A5FA] font-medium'
                  : 'text-[#6B7280] hover:bg-[#1A1A1A] hover:text-[#A89F91]'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-[#2A2A2A]">
          <button
            id="logout-btn"
            onClick={() => {
              sessionStorage.removeItem('fastnets_auth');
              router.push('/privat/login');
            }}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-[#6B7280] hover:bg-[#1A1A1A] hover:text-red-400 transition-colors w-full"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M11 11l3-3-3-3M14 8H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Tancar sessió
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="ml-64 flex-1 min-h-[calc(100vh-4rem)]">
        {children}
      </main>
    </div>
  );
}
