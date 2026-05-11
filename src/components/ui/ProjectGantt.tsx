'use client';
import { GanttSection } from "@/data/projectsData";

export function ProjectGantt({ sections }: { sections: GanttSection[] }) {
  // Find project start date and end date to calculate total weeks
  let projectStart = new Date("2099-01-01");
  let projectEnd = new Date("1970-01-01");
  
  sections.forEach(s => {
    s.tasks.forEach(t => {
      const d1 = new Date(t.startDate);
      const d2 = new Date(t.endDate);
      if (d1 < projectStart) projectStart = d1;
      if (d2 > projectEnd) projectEnd = d2;
    });
  });

  // Calculate total weeks
  const MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
  let totalWeeks = Math.max(1, Math.ceil((projectEnd.getTime() - projectStart.getTime()) / MS_PER_WEEK));
  if (totalWeeks > 20) totalWeeks = 20; // Cap it for UI safety if dates are too wide

  const WEEK_LABELS = Array.from({ length: totalWeeks }, (_, i) => `S${i + 1}`);
  
  const statusConfig = {
    Pendent:   { textColor: '#6B7280', bgColor: '#6B728018', barColor: '#374151' },
    'En curs': { textColor: '#2563EB', bgColor: '#2563EB18', barColor: '#2563EB' },
    Completat: { textColor: '#10B981', bgColor: '#10B98118', barColor: '#10B981' },
  };

  const getWeekOffset = (dateStr: string) => {
    const d = new Date(dateStr);
    return Math.max(0, Math.floor((d.getTime() - projectStart.getTime()) / MS_PER_WEEK));
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ca-ES', { day: '2-digit', month: '2-digit' });
  };

  return (
    <div className="w-full">
      <div className="rounded-xl border border-[#2A2A2A] overflow-x-auto bg-[#111111]">
        <div style={{ minWidth: `${450 + totalWeeks * 44}px` }}>
          {/* Week headers */}
          <div className="flex border-b border-[#2A2A2A] bg-[#0D0D0D] sticky top-0 z-10">
            <div className="w-64 flex-shrink-0 px-4 py-3 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#6B7280] border-r border-[#2A2A2A]">
              Apartat / Tasca
            </div>
            <div className="w-32 flex-shrink-0 px-4 py-3 text-[10px] font-semibold tracking-[0.1em] uppercase text-[#6B7280] border-r border-[#2A2A2A] text-center">
              Dates
            </div>
            <div className="flex flex-1">
              {WEEK_LABELS.map((w) => (
                <div
                  key={w}
                  className="relative flex-1 text-center py-3 text-[10px] font-medium border-r border-[#1E1E1E] last:border-r-0 text-[#6B7280]"
                >
                  {w}
                </div>
              ))}
            </div>
          </div>

          {/* Gantt rows */}
          {sections.map((section, sIdx) => (
            <div key={sIdx}>
              {/* Section Header */}
              <div className="flex border-b border-[#1E1E1E] bg-[#161616] min-h-[40px] items-center">
                <div className="w-64 flex-shrink-0 px-4 py-2 border-r border-[#2A2A2A]">
                  <span className="text-xs font-semibold text-[#F5F0E8]">{section.name}</span>
                </div>
                <div className="w-32 flex-shrink-0 px-4 py-2 border-r border-[#2A2A2A]"></div>
                <div className="flex flex-1 relative h-full"></div>
              </div>

              {/* Tasks */}
              {section.tasks.map((t) => {
                const s = statusConfig[t.status];
                const color = s.barColor;
                
                const startWeek = getWeekOffset(t.startDate) + 1;
                let endW = getWeekOffset(t.endDate) + 1;
                if (endW < startWeek) endW = startWeek;
                const durationWeeks = Math.max(1, endW - startWeek + 1);

                return (
                  <div
                    key={t.id}
                    className="flex border-b border-[#1E1E1E] hover:bg-[#1A1A1A] transition-colors min-h-[52px] items-center"
                  >
                    {/* Task name */}
                    <div className="w-64 flex-shrink-0 px-4 py-3 border-r border-[#2A2A2A]">
                      <div className="flex items-center gap-1.5 pl-4">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }}/>
                        <span className="text-[11px] text-[#A89F91]">{t.name}</span>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="w-32 flex-shrink-0 px-2 py-3 border-r border-[#2A2A2A] flex justify-center items-center">
                       <span className="text-[10px] font-mono text-[#6B7280]">
                        {formatDate(t.startDate)} - {formatDate(t.endDate)}
                      </span>
                    </div>

                    {/* Gantt cells */}
                    <div className="flex flex-1 relative h-full items-center">
                      {WEEK_LABELS.map((_, i) => {
                        const week = i + 1;
                        const inRange = week >= startWeek && week < startWeek + durationWeeks;
                        const isStart = week === startWeek;
                        const isEnd = week === startWeek + durationWeeks - 1;
                        
                        return (
                          <div
                            key={week}
                            className="relative flex-1 h-10 border-r border-[#1E1E1E] last:border-r-0 flex items-center justify-center"
                          >
                            {inRange && (
                              <div
                                className={`absolute inset-y-2 transition-colors ${
                                  isStart ? 'left-2 rounded-l-md' : 'left-0'
                                } ${isEnd ? 'right-2 rounded-r-md' : 'right-0'}`}
                                style={{
                                  backgroundColor: color,
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
