'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const DEMO_PASSWORD = 'fastnets2024';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    await new Promise((r) => setTimeout(r, 600));
    if (password === DEMO_PASSWORD) {
      sessionStorage.setItem('fastnets_auth', '1');
      router.push('/privat/documentacio');
    } else {
      setError('Contrasenya incorrecta. Torneu-ho a intentar.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#F5F0E8 1px,transparent 1px),linear-gradient(90deg,#F5F0E8 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }}/>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <img src="/img/logo/Logo+Txt.png" alt="FastNets" className="invert w-[240px] h-auto object-contain" />
              <div className="text-[10px] text-[#6B7280] tracking-wider uppercase mt-2">Àrea Privada</div>
            </div>
          </div>

          <h1 className="text-lg font-semibold text-[#F5F0E8] text-center mb-1">Accés intern</h1>
          <p className="text-xs text-[#6B7280] text-center mb-8">Introduïu la contrasenya per accedir al panell intern</p>

          <form id="login-form" onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-xs text-[#6B7280] mb-2 font-medium">
                Contrasenya
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#4A4A4A] focus:outline-none focus:border-[#2563EB] transition-colors"
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7 4.5v3M7 9.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                {error}
              </motion.div>
            )}

            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                  Verificant...
                </div>
              ) : (
                <>
                  Accedir
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 7h6M8 4l3 3-3 3M1 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A]">
            <p className="text-[10px] text-[#6B7280] text-center">
              Demo: contrasenya <span className="font-mono text-[#A89F91]">fastnets2024</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
