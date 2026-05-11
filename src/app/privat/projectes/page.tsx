'use client';
import { useState } from 'react';

type Status = 'Pendent' | 'En curs' | 'Completat';

interface Project {
  id: string;
  name: string;
  member: string;
  product: string;
  installType: string;
  progress: number;
  status: Status;
  startWeek: number; // 1-based, out of totalWeeks
  durationWeeks: number;
  color: string;
}

const TOTAL_WEEKS = 16;

const statusConfig: Record<Status, { label: string; textColor: string; bgColor: string; barColor: string }> = {
  Pendent:   { label: 'Pendent',  textColor: '#6B7280', bgColor: '#6B728018', barColor: '#374151' },
  'En curs': { label: 'En curs', textColor: '#2563EB', bgColor: '#2563EB18', barColor: '#2563EB' },
  Completat: { label: 'Completat', textColor: '#10B981', bgColor: '#10B98118', barColor: '#10B981' },
};

const initialProjects: Project[] = [
  { id: 'p1', name: 'ICT Bloc Residencial A', member: 'Jordi Puig', product: 'Cable UTP Cat6', installType: 'ICT Residencial', progress: 100, status: 'Completat', startWeek: 1, durationWeeks: 3, color: '#10B981' },
  { id: 'p2', name: 'Fibra Campus Tècnic', member: 'Laura Vidal', product: 'Fibra SM OS2', installType: 'Fibra Òptica', progress: 75, status: 'En curs', startWeek: 2, durationWeeks: 5, color: '#2563EB' },
  { id: 'p3', name: 'CCTV Magatzem Nord', member: 'David Martí', product: 'Càmeres IP DS-2CD', installType: 'Seguretat', progress: 40, status: 'En curs', startWeek: 5, durationWeeks: 4, color: '#2563EB' },
  { id: 'p4', name: 'Xarxa Oficines BCN', member: 'Laura Vidal', product: 'Switch Cisco C9200', installType: 'Xarxes Dades', progress: 0, status: 'Pendent', startWeek: 8, durationWeeks: 3, color: '#374151' },
  { id: 'p5', name: 'ICT Hotel Estrella', member: 'Jordi Puig', product: 'Material ICT complet', installType: 'ICT Hoteler', progress: 90, status: 'En curs', startWeek: 1, durationWeeks: 8, color: '#2563EB' },
  { id: 'p6', name: 'Control Accés Corporatiu', member: 'David Martí', product: 'Lectors RFID HID', installType: 'Seguretat', progress: 100, status: 'Completat', startWeek: 3, durationWeeks: 2, color: '#10B981' },
  { id: 'p7', name: 'Migració Fibra Edifici Gov', member: 'Anna Ferrer', product: 'Fibra MM OM4', installType: 'Fibra Òptica', progress: 0, status: 'Pendent', startWeek: 11, durationWeeks: 4, color: '#374151' },
  { id: 'p8', name: 'Wi-Fi Centre Comercial', member: 'Laura Vidal', product: 'AP Cisco Meraki', installType: 'Xarxes Dades', progress: 55, status: 'En curs', startWeek: 6, durationWeeks: 6, color: '#2563EB' },
];

const WEEK_LABELS = Array.from({ length: TOTAL_WEEKS }, (_, i) => `S${i + 1}`);

export default function ProjectesPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [filter, setFilter] = useState<Status | 'Tots'>('Tots');

  const filtered = filter === 'Tots' ? projects : projects.filter((p) => p.status === filter);
  const today = 6; // Simulate "today" at week 6

  const updateProgress = (id: string, progress: number) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              progress,
              status: progress === 100 ? 'Completat' : progress === 0 ? 'Pendent' : 'En curs',
              color: progress === 100 ? '#10B981' : progress === 0 ? '#374151' : '#2563EB',
            }
          : p
      )
    );
  };

  const totals = {
    total: projects.length,
    completed: projects.filter((p) => p.status === 'Completat').length,
    active: projects.filter((p) => p.status === 'En curs').length,
    pending: projects.filter((p) => p.status === 'Pendent').length,
  };

  const avgProgress = Math.round(projects.reduce((a, p) => a + p.progress, 0) / projects.length);

  return (
    <div className="p-8 min-w-0">
      {/* Header */}
      <div className="mb-6">
        <div className="section-label mb-2">Àrea Privada</div>
        <h1 className="text-2xl font-semibold text-[#F5F0E8]">Gestió de Projectes</h1>
        <p className="text-sm text-[#6B7280] mt-1">Vista combinada Excel + Gantt · {TOTAL_WEEKS} setmanes</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Total Projectes', value: totals.total, accent: '#F5F0E8' },
          { label: 'Completats', value: totals.completed, accent: '#10B981' },
          { label: 'En Curs', value: totals.active, accent: '#2563EB' },
          { label: 'Pendents', value: totals.pending, accent: '#6B7280' },
        ].map((kpi) => (
          <div key={kpi.label} className="card py-4">
            <div className="text-2xl font-semibold mb-0.5" style={{ color: kpi.accent }}>{kpi.value}</div>
            <div className="text-xs text-[#6B7280]">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Overall progress bar */}
      <div className="card mb-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#6B7280]">Progrés global del portfolio</span>
          <span className="text-sm font-semibold text-[#F5F0E8]">{avgProgress}%</span>
        </div>
        <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981] rounded-full transition-all duration-700"
            style={{ width: `${avgProgress}%` }}
          />
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-4">
        {(['Tots', 'Pendent', 'En curs', 'Completat'] as const).map((f) => (
          <button
            key={f}
            id={`filter-${f}`}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filter === f
                ? 'bg-[#2563EB] text-white'
                : 'bg-[#1A1A1A] text-[#6B7280] border border-[#2A2A2A] hover:border-[#3A3A3A] hover:text-[#A89F91]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Combined Table + Gantt */}
      <div className="rounded-xl border border-[#2A2A2A] overflow-hidden bg-[#111111]">
        {/* Header row */}
        <div className="grid border-b border-[#2A2A2A] bg-[#0D0D0D]" style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 140px 1fr' }}>
          {['Projecte', 'Responsable', 'Producte', 'Tipus', 'Progrés', 'Estat'].map((h) => (
            <div key={h} className="px-4 py-3 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#6B7280] border-r border-[#2A2A2A] last:border-r-0">
              {h}
            </div>
          ))}
        </div>

        {/* Table rows */}
        {filtered.map((p, idx) => {
          const s = statusConfig[p.status];
          return (
            <div key={p.id}>
              <div
                className={`grid border-b border-[#1E1E1E] hover:bg-[#161616] transition-colors group`}
                style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 140px 1fr' }}
              >
                {/* Name */}
                <div className="px-4 py-3.5 border-r border-[#1E1E1E] flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-2.5 flex-shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-sm text-[#F5F0E8] font-medium truncate">{p.name}</span>
                </div>
                {/* Member */}
                <div className="px-4 py-3.5 border-r border-[#1E1E1E] flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[9px] font-semibold text-[#A89F91] mr-2 flex-shrink-0">
                    {p.member.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-xs text-[#A89F91] truncate">{p.member}</span>
                </div>
                {/* Product */}
                <div className="px-4 py-3.5 border-r border-[#1E1E1E] flex items-center">
                  <span className="text-xs text-[#6B7280] truncate">{p.product}</span>
                </div>
                {/* Type */}
                <div className="px-4 py-3.5 border-r border-[#1E1E1E] flex items-center">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#1A1A1A] text-[#A89F91] border border-[#2A2A2A] truncate">
                    {p.installType}
                  </span>
                </div>
                {/* Progress */}
                <div className="px-4 py-3.5 border-r border-[#1E1E1E] flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${p.progress}%`, backgroundColor: p.color }}
                    />
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={p.progress}
                    onChange={(e) => updateProgress(p.id, Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-10 bg-transparent text-[10px] text-[#A89F91] text-right focus:outline-none"
                    aria-label={`Progrés de ${p.name}`}
                  />
                  <span className="text-[10px] text-[#6B7280]">%</span>
                </div>
                {/* Status */}
                <div className="px-4 py-3.5 flex items-center">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded"
                    style={{ color: s.textColor, backgroundColor: s.bgColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.textColor }}/>
                    {s.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GANTT Section */}
      <div className="mt-8 mb-2">
        <h2 className="text-sm font-semibold text-[#F5F0E8] mb-1">Diagrama de Gantt · {TOTAL_WEEKS} Setmanes</h2>
        <p className="text-xs text-[#6B7280]">
          Línia vermella = setmana actual (S{today})
        </p>
      </div>

      <div className="rounded-xl border border-[#2A2A2A] overflow-x-auto bg-[#111111]">
        <div style={{ minWidth: `${200 + TOTAL_WEEKS * 44}px` }}>
          {/* Week headers */}
          <div className="flex border-b border-[#2A2A2A] bg-[#0D0D0D] sticky top-0 z-10">
            <div className="w-48 flex-shrink-0 px-4 py-3 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#6B7280] border-r border-[#2A2A2A]">
              Projecte
            </div>
            <div className="flex flex-1">
              {WEEK_LABELS.map((w, i) => (
                <div
                  key={w}
                  className={`relative flex-1 text-center py-3 text-[10px] font-medium border-r border-[#1E1E1E] last:border-r-0 ${
                    i + 1 === today ? 'text-red-400' : 'text-[#6B7280]'
                  }`}
                >
                  {w}
                  {i + 1 === today && (
                    <div className="absolute inset-0 border-r-2 border-red-500/50 pointer-events-none"/>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Gantt rows */}
          {filtered.map((p) => (
            <div
              key={p.id}
              className="flex border-b border-[#1E1E1E] hover:bg-[#161616] transition-colors min-h-[52px] items-center"
            >
              {/* Project name */}
              <div className="w-48 flex-shrink-0 px-4 py-3 border-r border-[#2A2A2A]">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }}/>
                  <span className="text-xs text-[#A89F91] truncate">{p.name}</span>
                </div>
              </div>

              {/* Gantt cells */}
              <div className="flex flex-1 relative h-full items-center">
                {WEEK_LABELS.map((_, i) => {
                  const week = i + 1;
                  const inRange = week >= p.startWeek && week < p.startWeek + p.durationWeeks;
                  const isStart = week === p.startWeek;
                  const isEnd = week === p.startWeek + p.durationWeeks - 1;
                  const progressFill = p.status === 'Completat' ? 1 : p.progress / 100;
                  const cellsCompleted = Math.round(p.durationWeeks * progressFill);
                  const isComplete = inRange && week < p.startWeek + cellsCompleted;

                  return (
                    <div
                      key={week}
                      className={`relative flex-1 h-10 border-r border-[#1E1E1E] last:border-r-0 flex items-center justify-center ${
                        week === today ? 'bg-red-950/20' : ''
                      }`}
                    >
                      {inRange && (
                        <div
                          className={`absolute inset-y-2 transition-colors ${
                            isStart ? 'left-2 rounded-l-md' : 'left-0'
                          } ${isEnd ? 'right-2 rounded-r-md' : 'right-0'}`}
                          style={{
                            backgroundColor: isComplete ? p.color : p.color + '30',
                          }}
                        />
                      )}
                      {/* Today marker */}
                      {week === today && (
                        <div className="absolute inset-0 border-x-0 border-r-2 border-red-500/40 pointer-events-none z-10"/>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        {Object.entries(statusConfig).map(([key, s]) => (
          <div key={key} className="flex items-center gap-2 text-xs text-[#6B7280]">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: s.barColor }}/>
            {s.label}
          </div>
        ))}
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <div className="w-3 h-3 rounded-sm opacity-30" style={{ backgroundColor: '#2563EB' }}/>
          Pendent d&apos;execució
        </div>
        <div className="flex items-center gap-2 text-xs text-red-400">
          <div className="w-px h-3 bg-red-500"/>
          Avui (S{today})
        </div>
      </div>
    </div>
  );
}
