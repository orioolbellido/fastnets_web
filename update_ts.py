import json

with open("gantt_real.json", "r") as f:
    gantt_data = json.load(f)

ts_content = """export interface GanttTask {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: 'Completat' | 'En curs' | 'Pendent';
}

export interface GanttSection {
  name: string;
  tasks: GanttTask[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  overview: string;
  systems: { name: string; items: string[] }[];
  requirements: string[];
  images: string[];
  sections: GanttSection[];
}

export const projectsDataList: ProjectDetail[] = [
  {
    id: "ofis-sa",
    title: "Projecte 1: Ofis S.A.",
    category: "Corporatiu",
    client: "Ofis S.A.",
    location: "Seu Corporativa",
    duration: "7 Setmanes",
    overview: "Execució integral de la infraestructura de xarxa multiservei per a la nova seu d'Ofis S.A., unificant dades, telefonia VoIP i seguretat.",
    systems: [
      { name: "Xarxes i Dades", items: ["44 punts de cablejat estructurat", "Instal·lació de Rack centralitzat", "Sistemes d'Alimentació Ininterrompuda (SAI)"] },
      { name: "Seguretat", items: ["Sistemes de videovigilància (CCTV)", "Control d'accessos IP"] }
    ],
    requirements: [
      "Xarxa Gigabit certificada per a tots els llocs de treball.",
      "Sistema de seguretat centralitzat i accessible remotament.",
      "Alta disponibilitat energètica als servidors principals."
    ],
    images: [
      "/img/Projecte1_OfisSA/rack1_acabat.jpeg",
      "/img/Projecte1_OfisSA/rack2_acabat.jpeg",
      "/img/Projecte1_OfisSA/cctv_exterior.jpeg"
    ],
    sections: """ + json.dumps(gantt_data.get("ofis-sa", []), indent=6) + """
  },
  {
    id: "bar-jb",
    title: "Projecte 2: Bar JB",
    category: "Oci Nocturn",
    client: "Bar JB",
    location: "Local d'oci",
    duration: "7 Setmanes",
    overview: "Reforma integral de les instal·lacions tecnològiques del Bar JB per a la seva conversió en un modern Bar Musical.",
    systems: [
      { name: "So i Imatge", items: ["Sonorització d'alt rendiment amb rack encastat", "Projecció avançada per a Karaoke", "Prompter sincronitzat"] },
      { name: "Il·luminació i Extres", items: ["Gestió d'il·luminació automatitzada (DMX)", "Emissora de ràdio FM pròpia"] }
    ],
    requirements: [
      "Potència acústica sense distorsió i integrada en la decoració.",
      "Sistema Karaoke fàcil d'utilitzar per al personal.",
      "Control d'il·luminació sincronitzat amb la música."
    ],
    images: [
      "/img/Projecte2_BarJB/control_so.jpeg",
      "/img/Projecte2_BarJB/trhus_focos.jpeg",
      "/img/Projecte2_BarJB/rack1_acabat.jpeg"
    ],
    sections: """ + json.dumps(gantt_data.get("bar-jb", []), indent=6) + """
  },
  {
    id: "hotel-pilson",
    title: "Projecte 3: Hotel Pilson",
    category: "Hostaleria",
    client: "Cadena Hotelera Pilson",
    location: "Catalunya",
    duration: "8 Setmanes",
    overview: "Disseny, configuració i posada en marxa de la infraestructura integral de telecomunicacions i electricitat per a un nou establiment de la cadena hotelera Hotels Pilson.",
    systems: [
      { name: "Telecomunicacions", items: ["Distribució de TV", "Xarxa unificada de telefonia IP", "Wi-Fi segmentat"] },
      { name: "Seguretat i Electricitat", items: ["Sistema localitzat d'alarma contra incendis", "Fil musical", "Adequació de la instal·lació elèctrica"] }
    ],
    requirements: [
      "Garantir cobertura Wi-Fi a totes les zones comunes i habitacions amb xarxes separades.",
      "Sistema de TV d'alta definició amb canals internacionals per satèl·lit.",
      "Infraestructura elèctrica completament certificada i sistema anti-incendis autònom."
    ],
    images: [
      "/img/Projecte3_Pilson/GeneralHotel.png",
      "/img/Projecte3_Pilson/TV_Capçelera.jpeg"
    ],
    sections: """ + json.dumps(gantt_data.get("hotel-pilson", []), indent=6) + """
  },
  {
    id: "auditori-vilaneta",
    title: "Projecte 4: Auditori Vilaneta del Riu",
    category: "Equipament Públic",
    client: "Ajuntament de Vilaneta del Riu",
    location: "Vilaneta del Riu",
    duration: "8 Setmanes",
    overview: "Finalització i posada en marxa de les instal·lacions tecnològiques de l'Auditori Municipal.",
    systems: [
      { name: "Audiovisuals", items: ["Sonorització professional de sala", "Sistema de projecció", "Control d'il·luminació DMX"] },
      { name: "Broadcasting i Control", items: ["Emissió en directe (Broadcasting)", "Cabina de control independent", "Xarxa informàtica"] }
    ],
    requirements: [
      "Acabar les instal·lacions deixades a mitges per l'anterior empresa.",
      "Integrar tot el control audiovisual en una única cabina de comandament.",
      "Garantir qualitat de so òptima per a concerts i presentacions."
    ],
    images: [
      "/img/Projecte4_Auditori/Control_General.jpeg",
      "/img/Projecte4_Auditori/Control_TV.jpeg",
      "/img/Projecte4_Auditori/Escenari.jpeg"
    ],
    sections: """ + json.dumps(gantt_data.get("auditori-vilaneta", []), indent=6) + """
  }
];

// Helper per mantenir compatibilitat (ara com a list no cal Object.values, però per si de cas es busca per ID)
export const projectsData = projectsDataList.reduce((acc, proj) => {
  acc[proj.id] = proj;
  return acc;
}, {} as Record<string, ProjectDetail>);
"""

with open("src/data/projectsData.ts", "w") as f:
    f.write(ts_content)

