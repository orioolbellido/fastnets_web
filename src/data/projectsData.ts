export interface GanttTask {
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
    duration: "4 Setmanes",
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
    sections: [
      {
            "name": "General",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Reuni\u00f3 amb el client",
                        "startDate": "2025-11-20",
                        "endDate": "2025-11-24",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Fulla de requeriments",
                        "startDate": "2025-11-24",
                        "endDate": "2025-11-26",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t2",
                        "name": "Normativa de l'equip",
                        "startDate": "2025-11-24",
                        "endDate": "2025-11-26",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t3",
                        "name": "Esquemas",
                        "startDate": "2025-11-24",
                        "endDate": "2025-11-26",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t4",
                        "name": "Mesurar dist\u00e0ncies cablejat",
                        "startDate": "2025-11-26",
                        "endDate": "2025-11-26",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t5",
                        "name": "Comanda",
                        "startDate": "2025-11-27",
                        "endDate": "2025-11-27",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t6",
                        "name": "Crimpat de cable UTP (individual)",
                        "startDate": "2025-11-28",
                        "endDate": "2025-12-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t7",
                        "name": "Tirada de cablejat UTP",
                        "startDate": "2025-11-28",
                        "endDate": "2025-12-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t8",
                        "name": "Instal\u00b7laci\u00f3 de rack",
                        "startDate": "2025-11-28",
                        "endDate": "2025-12-01",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t9",
                        "name": "Pach Panel Instal\u00b7laci\u00f3",
                        "startDate": "2025-11-28",
                        "endDate": "2025-12-04",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t10",
                        "name": "Revisi\u00f3 de instalaci\u00f3 electrica + etiquetar",
                        "startDate": "2025-11-28",
                        "endDate": "2025-11-28",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t11",
                        "name": "Instal\u00b7laci\u00f3 Rosetes",
                        "startDate": "2025-11-28",
                        "endDate": "2025-12-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t12",
                        "name": "Etiquetar cablejat (a la vegada que instalaci\u00f3 pach panel i tirada cable)",
                        "startDate": "2025-11-28",
                        "endDate": "2025-12-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t13",
                        "name": "Instalaci\u00f3 switch's",
                        "startDate": "2025-12-01",
                        "endDate": "2025-12-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t14",
                        "name": "Instal\u00b7laci\u00f3 WiFI i Router",
                        "startDate": "2025-12-03",
                        "endDate": "2025-12-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t15",
                        "name": "Instal\u00b7laci\u00f3 de servidors i configuraci\u00f3",
                        "startDate": "2025-12-03",
                        "endDate": "2025-12-05",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t16",
                        "name": "Instal\u00b7laci\u00f3 camara ip i configuraci\u00f3",
                        "startDate": "2025-12-03",
                        "endDate": "2025-12-09",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t17",
                        "name": "Instal\u00b7laci\u00f3 de control d'acces i configuraci\u00f3",
                        "startDate": "2025-12-04",
                        "endDate": "2025-12-09",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t18",
                        "name": "Instal\u00b7laci\u00f3 d'ordinadors",
                        "startDate": "2025-12-09",
                        "endDate": "2025-12-15",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t19",
                        "name": "Instal\u00b7laci\u00f3 de telefons i configuraci\u00f3 centraleta",
                        "startDate": "2025-12-08",
                        "endDate": "2025-12-15",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t20",
                        "name": "Configuraci\u00f3 de S.O",
                        "startDate": "2025-12-10",
                        "endDate": "2025-12-12",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t21",
                        "name": "Clonaci\u00f3 del S.O als altres ordinadors",
                        "startDate": "2025-12-12",
                        "endDate": "2025-12-16",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t22",
                        "name": "Instal\u00b7laci\u00f3 impresores",
                        "startDate": "2025-12-11",
                        "endDate": "2025-12-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t23",
                        "name": "Copies seguretat en linea",
                        "startDate": "2025-12-12",
                        "endDate": "2025-12-17",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      }
]
  },
  {
    id: "bar-jb",
    title: "Projecte 2: Bar JB",
    category: "Oci Nocturn",
    client: "Bar JB",
    location: "Local d'oci",
    duration: "4 Setmanes",
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
    sections: [
      {
            "name": "General",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Reuni\u00f3 amb el client",
                        "startDate": "2026-01-19",
                        "endDate": "2026-01-19",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Fulla de requeriments",
                        "startDate": "2026-01-19",
                        "endDate": "2026-01-19",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t2",
                        "name": "Realitzaci\u00f3 esquemes",
                        "startDate": "2026-01-19",
                        "endDate": "2026-01-21",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t3",
                        "name": "C\u00e0lcul Altaveus",
                        "startDate": "2026-01-19",
                        "endDate": "2026-01-20",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t4",
                        "name": "Mesurar dist\u00e0ncies cablejat",
                        "startDate": "2026-01-19",
                        "endDate": "2026-01-20",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t5",
                        "name": "Comanda Inicial",
                        "startDate": "2026-01-21",
                        "endDate": "2026-01-22",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t6",
                        "name": "Soldadura patch panel",
                        "startDate": "2026-01-23",
                        "endDate": "2026-02-03",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t7",
                        "name": "Tirada de canals",
                        "startDate": "2026-01-23",
                        "endDate": "2026-01-30",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t8",
                        "name": "Instal\u00b7laci\u00f3 cablejat altaveus",
                        "startDate": "2026-01-28",
                        "endDate": "2026-01-29",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t9",
                        "name": "Instal\u00b7laci\u00f3 de rack",
                        "startDate": "2026-01-28",
                        "endDate": "2026-01-29",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t10",
                        "name": "Instal\u00b7laci\u00f3 etapa potencia 1 i 2",
                        "startDate": "2026-01-28",
                        "endDate": "2026-01-29",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t11",
                        "name": "Instal\u00b7laci\u00f3 filtre i patch panels",
                        "startDate": "2026-02-02",
                        "endDate": "2026-02-04",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t12",
                        "name": "Instal\u00b7laci\u00f3 Focus",
                        "startDate": "2026-02-02",
                        "endDate": "2026-02-04",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t13",
                        "name": "Instal\u00b7laci\u00f3 de Projector i \"promter\"",
                        "startDate": "2026-02-04",
                        "endDate": "2026-02-05",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t14",
                        "name": "Instal\u00b7laci\u00f3 de Pantalla (\"escenari\")",
                        "startDate": "2026-02-04",
                        "endDate": "2026-02-05",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t15",
                        "name": "Instal\u00b7laci\u00f3 d'ordinadors (programari tb)",
                        "startDate": "2026-02-05",
                        "endDate": "2026-02-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t16",
                        "name": "Instal\u00b7laci\u00f3 de Taula de s\u00f3",
                        "startDate": "2026-02-09",
                        "endDate": "2026-02-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t17",
                        "name": "Instal\u00b7laci\u00f3 de controladora DJ",
                        "startDate": "2026-02-09",
                        "endDate": "2026-02-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t18",
                        "name": "Instal\u00b7laci\u00f3 altaveu L i R",
                        "startDate": "2026-02-09",
                        "endDate": "2026-02-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t19",
                        "name": "Instal\u00b7laci\u00f3 emissora",
                        "startDate": "2026-02-09",
                        "endDate": "2026-02-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t20",
                        "name": "Instal\u00b7laci\u00f3 antena",
                        "startDate": "2026-02-09",
                        "endDate": "2026-02-09",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t21",
                        "name": "Instal\u00b7laci\u00f3 altaveu SW",
                        "startDate": "2026-02-09",
                        "endDate": "2026-02-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t22",
                        "name": "Instal\u00b7laci\u00f3 antena (BackUP)",
                        "startDate": "2026-02-12",
                        "endDate": "2026-02-12",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      }
]
  },
  {
    id: "hotel-pilson",
    title: "Projecte 3: Hotel Pilson",
    category: "Hostaleria",
    client: "Cadena Hotelera Pilson",
    location: "Catalunya",
    duration: "5 Setmanes",
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
    sections: [
      {
            "name": "General",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Reuni\u00f3 inicial i validaci\u00f3 de requeriments",
                        "startDate": "2026-03-04",
                        "endDate": "2026-03-05",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Disseny d'esquemes i pl\u00e0nols (El\u00e8ctric i Telecom)",
                        "startDate": "2026-03-05",
                        "endDate": "2026-03-09",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t2",
                        "name": "Comanda de material (electr\u00f2nica, cablejat, mecanismes)",
                        "startDate": "2026-03-05",
                        "endDate": "2026-03-06",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t3",
                        "name": "Quadre el\u00e8ctric: magnetot\u00e8rmics i diferencials per hab.",
                        "startDate": "2026-03-09",
                        "endDate": "2026-03-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t4",
                        "name": "Muntatge de preses de corrent (18 endolls en 6 habitacions)",
                        "startDate": "2026-03-09",
                        "endDate": "2026-03-11",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t5",
                        "name": "Instal\u00b7laci\u00f3 d'antenes a la teulada (TDT, FM, DAB, Sat\u00e8l\u00b7lit)",
                        "startDate": "2026-03-12",
                        "endDate": "2026-03-12",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t6",
                        "name": "Verificaci\u00f3 i de l\u00ednies de baixada d'antenes (4 cables)",
                        "startDate": "2026-03-12",
                        "endDate": "2026-03-13",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t7",
                        "name": "Tirada de cablejat de xarxa, TV, \u00e0udio i foc (Passad\u00eds i Habs)",
                        "startDate": "2026-03-17",
                        "endDate": "2026-03-19",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t8",
                        "name": "Muntatge de preses de TV (6 a habitacions, 1 a recepci\u00f3)",
                        "startDate": "2026-03-17",
                        "endDate": "2026-03-19",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t9",
                        "name": "Cap\u00e7alera TV",
                        "startDate": "2026-03-18",
                        "endDate": "2026-03-20",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t10",
                        "name": "Instal\u00b7laci\u00f3 de detectors de fum (6 unitats)",
                        "startDate": "2026-03-18",
                        "endDate": "2026-03-21",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t11",
                        "name": "Configuraci\u00f3 centralita d'incendis",
                        "startDate": "2026-03-20",
                        "endDate": "2026-03-22",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t12",
                        "name": "Instal\u00b7laci\u00f3 d'altaveus encastats i comandaments de fil musical",
                        "startDate": "2026-03-17",
                        "endDate": "2026-03-17",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t13",
                        "name": "Instal\u00b7laci\u00f3 de micr\u00f2fon a recepci\u00f3 i sistema megafonia \"Ding Dong\"",
                        "startDate": "2026-03-23",
                        "endDate": "2026-03-24",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t14",
                        "name": "Muntatge de Punts d'Acc\u00e9s Wi-Fi (Sostre passad\u00eds i Recepci\u00f3)",
                        "startDate": "2026-03-23",
                        "endDate": "2026-03-24",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t15",
                        "name": "Configuraci\u00f3 de VLANs i seguretat Wi-Fi",
                        "startDate": "2026-03-23",
                        "endDate": "2026-03-25",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t16",
                        "name": "Instal\u00b7laci\u00f3 i configuraci\u00f3 de Centraleta IP",
                        "startDate": "2026-03-24",
                        "endDate": "2026-03-25",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t17",
                        "name": "Distribuci\u00f3 i provisi\u00f3 de Tel\u00e8fons IP (6 habs, 2 rec, 2 inal\u00e0mbrics)",
                        "startDate": "2026-03-24",
                        "endDate": "2026-03-26",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t18",
                        "name": "Instal\u00b7laci\u00f3 Altaveu IP al passad\u00eds (Ampliaci\u00f3 futura)",
                        "startDate": "2026-03-26",
                        "endDate": "2026-03-27",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t19",
                        "name": "Configuraci\u00f3 Altaveu IP",
                        "startDate": "2026-03-27",
                        "endDate": "2026-03-28",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t20",
                        "name": "Proves d'integraci\u00f3 globals de tots els sistemes",
                        "startDate": "2026-04-07",
                        "endDate": "2026-04-08",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      }
]
  },
  {
    id: "auditori-vilaneta",
    title: "Projecte 4: Auditori Vilaneta del Riu",
    category: "Equipament Públic",
    client: "Ajuntament de Vilaneta del Riu",
    location: "Vilaneta del Riu",
    duration: "6 Setmanes",
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
    sections: [
      {
            "name": "Xarxa inform\u00e0tica",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Connexionat de el cablejat de xarxa al Switch",
                        "startDate": "2026-04-22",
                        "endDate": "2026-04-22",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Instal\u00b7laci\u00f3 i configuraci\u00f3 ordinadors de control",
                        "startDate": "2026-04-22",
                        "endDate": "2026-04-23",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t2",
                        "name": "Instal\u00b7laci\u00f3 i configuraci\u00f3 ordinador tarima",
                        "startDate": "2026-04-22",
                        "endDate": "2026-04-23",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      },
      {
            "name": "Megafonia i sonoritzaci\u00f3",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Muntage del rack",
                        "startDate": "2026-04-23",
                        "endDate": "2026-04-23",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Instal\u00b7laci\u00f3 d'elements del rack (Eq, DVD, Compresor, etc.)",
                        "startDate": "2026-04-23",
                        "endDate": "2026-04-24",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t2",
                        "name": "Instal\u00b7laci\u00f3 d'altaveus",
                        "startDate": "2026-04-24",
                        "endDate": "2026-04-27",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t3",
                        "name": "Instal\u00b7laci\u00f3 de microfonia",
                        "startDate": "2026-04-27",
                        "endDate": "2026-04-28",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      },
      {
            "name": "Video i projecci\u00f3",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Instal\u00b7laci\u00f3 Extensors VGA/HDMI",
                        "startDate": "2026-04-28",
                        "endDate": "2026-04-28",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Instal\u00b7lacci\u00f3 ATEM Mixer",
                        "startDate": "2026-04-28",
                        "endDate": "2026-04-30",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t2",
                        "name": "Instal\u00b7laci\u00f3 de PTZ",
                        "startDate": "2026-04-29",
                        "endDate": "2026-04-30",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t3",
                        "name": "Instal\u00b7laci\u00f3 de radioenlla\u00e7",
                        "startDate": "2026-04-30",
                        "endDate": "2026-05-05",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t4",
                        "name": "Configuraci\u00f3 transmodulador a TDT",
                        "startDate": "2026-05-04",
                        "endDate": "2026-05-06",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      },
      {
            "name": "I\u00b7luminaci\u00f3",
            "tasks": [
                  {
                        "id": "t0",
                        "name": "Configuraci\u00f3 canals DMX",
                        "startDate": "2026-05-06",
                        "endDate": "2026-06-06",
                        "progress": 100,
                        "status": "Completat"
                  },
                  {
                        "id": "t1",
                        "name": "Instal\u00b7laci\u00f3 de taula de control",
                        "startDate": "2026-05-06",
                        "endDate": "2026-06-06",
                        "progress": 100,
                        "status": "Completat"
                  }
            ]
      }
]
  }
];

// Helper per mantenir compatibilitat (ara com a list no cal Object.values, però per si de cas es busca per ID)
export const projectsData = projectsDataList.reduce((acc, proj) => {
  acc[proj.id] = proj;
  return acc;
}, {} as Record<string, ProjectDetail>);
