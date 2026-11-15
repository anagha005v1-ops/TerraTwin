/**
 * TerraTwin – Earth to Space Analogue Explorer
 * Predefined Scientific Sample Dataset for Moon and Mars Analogues
 * 
 * DISCLAIMER:
 * Similarity indices and parameter comparison scores in this dataset are
 * illustrative prototype values designed for hackathon demonstration and
 * educational exploration. They do not constitute official NASA or ESA flight data.
 */

const PLANETARY_TARGETS = {
  Moon: {
    id: "Moon",
    name: "The Moon (Luna)",
    subtitle: "Earth's Natural Satellite // Artemis Exploration Target",
    badgeColor: "moon",
    gravity: "1.62 m/s² (0.166 g)",
    atmosphere: "Surface Boundary Exosphere (He, Ne, Ar, H₂)",
    atmosphericPressure: "~3 × 10⁻¹⁵ bar (Near Hard Vacuum)",
    temperatureRange: "-246°C to +121°C",
    meanTemperature: "-130°C (Polar) / 0°C (Equatorial Mean)",
    radiationEnvironment: "1.36 mSv/day (Unshielded Galactic Cosmic Rays & Solar Flares)",
    primaryComposition: "Anorthositic highland crust, basaltic maria, titanium-rich ilmenite",
    waterOccurrence: "Volatile water ice trapped in Permanently Shadowed Regions (PSRs) at lunar poles",
    targetLandingZones: [
      "Artemis Base Camp (Shackleton Crater Rim)",
      "Malapert Mountain Plateau",
      "Oceanus Procellarum (Marius Hills Lava Tubes)",
      "South Pole-Aitken Basin"
    ],
    terrainSummary: "Heavily cratered regolith mantle, razor-sharp pulverized basalt, highland breccias, collapsed lava tubes, and steep impact crater massifs with zero air or weather erosion.",
    image: "assets/images/moon-card.svg",
    fallbackImage: "assets/images/moon-card.svg"
  },
  Mars: {
    id: "Mars",
    name: "Mars (The Red Planet)",
    subtitle: "Fourth Planet // Candidate for Human Planetary Habitation",
    badgeColor: "mars",
    gravity: "3.72 m/s² (0.379 g)",
    atmosphere: "95.3% CO₂, 2.6% N₂, 1.9% Ar, 0.16% O₂",
    atmosphericPressure: "6.1 mbar (~0.006 atm - Armstrong Limit)",
    temperatureRange: "-140°C to +20°C",
    meanTemperature: "-60°C",
    radiationEnvironment: "0.67 mSv/day (Moderate atmospheric attenuation, high surface flux)",
    primaryComposition: "Basaltic crust, iron(III) oxide dust, silicate minerals, sulfate & perchlorate salts",
    waterOccurrence: "Polar water & dry ice caps, sub-surface permafrost sheets, hydrated clays, and sub-surface glacial tongue deposits",
    targetLandingZones: [
      "Jezero Crater (Perseverance Rover Site)",
      "Gale Crater (Curiosity Rover Site)",
      "Arcadia Planitia (Subsurface Ice Reserves)",
      "Valles Marineris (Grand Canyon of Mars)"
    ],
    terrainSummary: "Wind-sculpted sand dunes, immense volcanic shield calderas, ancient dried fluvial river networks, boulder-strewn volcanic plains, and permafrost polygonal patterned ground.",
    image: "assets/images/mars-card.svg",
    fallbackImage: "assets/images/mars-card.svg"
  }
};

const ANALOGUE_LOCATIONS = [
  {
    id: "atacama-desert",
    name: "Atacama Desert",
    region: "Antofagasta Region",
    country: "Chile",
    coordinates: [-24.0833, -69.8667],
    elevation: "2,400 m to 4,500 m",
    primaryTarget: "Mars",
    supportedTargets: ["Mars"],
    tags: ["Hyper-Arid", "UV Radiation", "Perchlorate Soils", "Rover Mobility"],
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "The driest non-polar desert on Earth, exhibiting extreme aridity, oxidised soils, and lethal UV flux that mirrors equatorial Martian desert plains.",
    detailedDescription: "The hyper-arid core of the Atacama Desert (particularly the Yungay and María Elena basins) has experienced continuous desiccation for over 15 million years. Soil samples from this region contain trace nitrates, perchlorates, and virtually no detectable organic biomolecules in upper layers, mimicking soils tested by the Viking and Curiosity Mars landers. NASA's Spaceward Bound and ASTEP expeditions have tested life-detection instruments, robotic coring drills, and autonomous rover navigation across its salt flats (salares) and rocky plains.",
    nasaProject: "NASA ASTEP / Spaceward Bound / Subsurface Ice and Life Detection (SOLID)",
    analogueFeatures: [
      "Less than 1 mm rainfall per decade in hyper-arid core",
      "Presence of soil perchlorates and oxidising chemical agents",
      "Endolithic microbial colonies surviving inside rock crystal fissures",
      "Extreme diurnal temperature swings and intense ultraviolet-B solar radiation"
    ],
    parameters: {
      terrain: "Wind-sculpted ventifacts, barren gravel plains, salt flats (salares), and dry alluvial fans.",
      geology: "Nitrate, sulfate, and perchlorate rich salts overlying volcanic bedrock; absence of organic soil horizons.",
      temperature: "-5°C at night to +32°C daytime (Mean ~16°C). Extreme diurnal swings.",
      elevationTopography: "High-altitude plateau between the Chilean Coastal Range and Andes (2,400 - 4,500 m).",
      waterIce: "Virtually zero moisture; localized morning fog (camanchaca) near coastal ridges, dry core.",
      environmental: "Hyper-arid, high UV exposure due to altitude and thin ozone; persistent katabatic winds."
    },
    targetComparisons: {
      Mars: {
        similarityScore: 89,
        badgeLabel: "High Fidelity Mars Analogue",
        metrics: {
          terrainMatch: 92,
          geologyMatch: 88,
          thermalMatch: 68,
          substrateMatch: 94
        },
        similarities: [
          "Extreme desiccation: moisture levels near the absolute limit for terrestrial biology.",
          "Oxidized soil chemistry with detectable concentrations of chlorate and perchlorate salts.",
          "Wind-eroded bedrock and pebble-strewn regolith identical in texture to Jezero and Gale plains.",
          "Subsurface life detection testbed: organisms seek shelter inside gypsum and halite crusts."
        ],
        differences: [
          "Atmospheric pressure is 750 mbar at Atacama versus ~6 mbar on Mars (100x thicker).",
          "Ambient temperatures are significantly warmer than Mars' -60°C global average.",
          "Earth's standard gravity (1.0 g) versus Martian gravity (0.38 g).",
          "Rich ambient oxygen (21%) and absence of intense cosmic galactic radiation."
        ],
        researchUtility: "Essential benchmark for testing autonomous rover drilling systems (like NASA IceBreaker and ExoMars drill), spectral biosignature instruments, and extreme-dry operational protocols before launching interplanetary missions.",
        fieldApplications: [
          "Testing deep-core sample extraction drills without contaminating pristine cores",
          "Validating Raman and infrared spectrometers for identifying subsurface bio-pigments",
          "Field testing autonomous long-range rover traverse algorithms on rocky slopes"
        ]
      }
    }
  },

  {
    id: "mcmurdo-dry-valleys",
    name: "McMurdo Dry Valleys",
    region: "Victoria Land",
    country: "Antarctica",
    coordinates: [-77.7167, 162.2500],
    elevation: "0 m to 2,000 m",
    primaryTarget: "Mars",
    supportedTargets: ["Mars"],
    tags: ["Polar Desert", "Permafrost", "Polygonal Ground", "Cryosphere"],
    thumbnail: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "Cold, ice-free polar desert valleys shaped by katabatic winds, continuous permafrost, and sub-surface hypersaline brines resembling Martian cryo-environments.",
    detailedDescription: "The McMurdo Dry Valleys (Taylor, Wright, and Victoria Valleys) comprise the largest ice-free region in Antarctica. Powerful katabatic winds descending from the East Antarctic Ice Sheet reach speeds exceeding 300 km/h, sublimating all moisture and leaving bare, polygonally fractured permafrost. The terrain displays geomorphology nearly indistinguishable from high-latitude Martian terrain observed by the Mars Phoenix Lander and Mars Reconnaissance Orbiter (MRO). Hypersaline sub-surface reservoirs, like the one feeding Blood Falls, model liquid water existence in sub-zero Martian aquifers.",
    nasaProject: "NASA Astrobiology Institute / Dry Valleys Permafrost Research Group",
    analogueFeatures: [
      "Polygonal permafrost ground patterning created by repeated thermal contraction",
      "Mean annual temperatures of -20°C with katabatic gale-force desiccation",
      "Perennially ice-covered lakes with subterranean hypersaline brine networks",
      "Cryptoendolithic lichens living sheltered millimeters beneath sandstone surfaces"
    ],
    parameters: {
      terrain: "Polygonal contraction-crack permafrost, scree slopes, ventifacts, sand wedges, and barren tills.",
      geology: "Beacon sandstone, Ferrar dolerite sills, granite bedrock, frost-shattered gravel regolith.",
      temperature: "-50°C in winter to +5°C in brief summer (Mean annual -20°C).",
      elevationTopography: "Glacially carved deep valleys flanked by high Transantarctic Mountain ridges (0 - 2,000 m).",
      waterIce: "Sublimation-dominated permafrost; zero snow accumulation; perennial lake ice up to 5 m thick.",
      environmental: "Extreme katabatic winds (>300 km/h), ultra-low relative humidity (<10%), months of polar night."
    },
    targetComparisons: {
      Mars: {
        similarityScore: 91,
        badgeLabel: "Premier Martian Cryo-Analogue",
        metrics: {
          terrainMatch: 95,
          geologyMatch: 86,
          thermalMatch: 88,
          substrateMatch: 93
        },
        similarities: [
          "Polygonal ground patterns directly match those photographed by the NASA Phoenix lander.",
          "Sub-zero cryosphere where liquid water can only persist as highly concentrated salt brines.",
          "Glacial and periglacial sublimation processes without active liquid runoff.",
          "Cryptoendolithic ecosystems provide models for potential micro-fossil preservation on Mars."
        ],
        differences: [
          "Dense terrestrial atmosphere provides substantial convective heat transfer.",
          "Standard Earth gravity prevents true low-gravity boulder slip and traction modeling.",
          "Atmosphere contains nitrogen and oxygen rather than dense carbon dioxide.",
          "Solar ultraviolet is filtered by Antarctic stratospheric air columns."
        ],
        researchUtility: "Premier global natural laboratory for researching Martian permafrost physics, cold-tolerant robotic locomotion, sub-glacial aquifer sampling, and ground-penetrating radar calibration for sounding Martian ground ice.",
        fieldApplications: [
          "Calibrating ground-penetrating radar (GPR) systems designed to detect buried ice sheets",
          "Testing cryogenic robotic drills engineered for ice-cemented regolith",
          "Developing containment and decontamination protocols for planetary biosignature exploration"
        ]
      }
    }
  },

  {
    id: "haughton-crater",
    name: "Haughton Impact Crater",
    region: "Devon Island, Nunavut",
    country: "Canada",
    coordinates: [75.3833, -89.6833],
    elevation: "200 m to 400 m",
    primaryTarget: "Moon and Mars",
    supportedTargets: ["Moon", "Mars"],
    tags: ["Impact Geology", "Polar Testbed", "Breccia Rocks", "Artemis & Mars EVAs"],
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "A 23-km wide meteorite impact crater in the High Arctic, serving as a dual Moon/Mars testbed for EVA spacesuits, rover traverses, and impact shock geology.",
    detailedDescription: "Formed approximately 39 million years ago by a massive bolide collision, the Haughton Crater on Devon Island represents one of the northernmost exposed impact craters on Earth. Devon Island is the largest uninhabited island on Earth, characterized by cold, polar rocky desert with shatter cones, polymict impact breccia, paleolake sediment deposits, and pervasive permafrost. It is home to the international Haughton-Mars Project (HMP) and the Flashline Mars Arctic Research Station (FMARS), where NASA and partner scientists have conducted field trials for over two decades.",
    nasaProject: "NASA Haughton-Mars Project (HMP) / Flashline Mars Arctic Research Station",
    analogueFeatures: [
      "Preserved 23-km circular impact crater structure with distinct central uplift features",
      "Vast fields of impact-shattered hydrothermal breccias and shatter cone formations",
      "Severe polar isolation with rocky desert terrain and deeply incised periglacial gullies",
      "Active testbed for pressurized lunar rover prototypes and astronaut EVA timeline simulation"
    ],
    parameters: {
      terrain: "Impact breccia sheets, crater ring terraces, rocky polar desert, and deeply incised tributary canyons.",
      geology: "Carbonate-rich impact melt sheets, shatter cones, target dolostones, paleo-hydrothermal deposits.",
      temperature: "-45°C during Arctic winter to +10°C in mid-summer (Mean annual -17°C).",
      elevationTopography: "Rolling polar plateau at 200 - 400 m with 200 m deep central crater floor.",
      waterIce: "Continuous continuous permafrost exceeding 400 m depth; brief summer active layer melt.",
      environmental: "Severe Arctic polar conditions, extreme logistical isolation, complete radio silence zones."
    },
    targetComparisons: {
      Moon: {
        similarityScore: 84,
        badgeLabel: "High Fidelity Impact Geology",
        metrics: {
          terrainMatch: 88,
          geologyMatch: 90,
          thermalMatch: 62,
          substrateMatch: 86
        },
        similarities: [
          "Classic complex impact crater morphologies: central uplift, rim terraces, and ejecta blanket.",
          "Target rocks heavily shocked by hypervelocity impact, forming shatter cones and impact breccias.",
          "Lack of tree/vegetation cover exposes raw fractured bedrock for lunar field geology training.",
          "Rugged crater rim topography challenges rover suspension and astronaut traverse mechanics."
        ],
        differences: [
          "Terrestrial rainwater and Arctic periglacial runoff have eroded fine impact crater details.",
          "Sedimentary target rock (dolostone) differs from lunar anorthositic highlands and basaltic maria.",
          "Earth's magnetic field and thick atmosphere shield against lunar cosmic ray flux."
        ],
        researchUtility: "Crucial site for training Artemis astronauts in impact geology identification, practicing crater rim ascents and descents with pressurized exploration suits, and verifying rover communication delay architectures.",
        fieldApplications: [
          "Geological sample collection protocol training for Artemis lunar landing crews",
          "Lunar terrain vehicle (LTV) mobility trials across steep ejecta blockfields",
          "Human-robot collaborative field mapping exercises"
        ]
      },
      Mars: {
        similarityScore: 87,
        badgeLabel: "Premier Polar Mars Analog",
        metrics: {
          terrainMatch: 89,
          geologyMatch: 84,
          thermalMatch: 79,
          substrateMatch: 88
        },
        similarities: [
          "Impact crater that hosted ancient post-impact hydrothermal lakes, identical to Jezero and Gale craters.",
          "Polygonal permafrost patterns and gullies resembling Martian mid-latitude valley networks.",
          "Extreme operational isolation providing genuine psychological and logistical fidelity for crewed missions.",
          "Hypolithic communities sheltered beneath translucent target rocks in sub-zero climate."
        ],
        differences: [
          "Oxygenated Arctic atmosphere requires no breathing apparatus for environmental survival.",
          "Full Earth gravity versus 38% Martian gravity.",
          "Seasonal summer thaw creates mud and surface streams absent in modern Mars."
        ],
        researchUtility: "Testing habitat life support architectures, long-range drone/rover surveying protocols, and evaluating how impact-generated hydrothermal systems could have preserved biosignatures in early Martian history.",
        fieldApplications: [
          "Simulating Mars surface operations under communications time delay",
          "Testing Mars robotic aerial vehicles (drones) in turbulent polar valley winds",
          "Investigating hydrothermal impact mineral deposits for fossilized biosignatures"
        ]
      }
    }
  },

  {
    id: "mauna-loa",
    name: "Mauna Loa & HI-SEAS",
    region: "Island of Hawaiʻi",
    country: "United States",
    coordinates: [19.5360, -155.5760],
    elevation: "2,500 m to 4,169 m",
    primaryTarget: "Moon and Mars",
    supportedTargets: ["Moon", "Mars"],
    tags: ["Basaltic Volcanism", "Lava Tubes", "HI-SEAS Habitat", "Astronaut EVA"],
    thumbnail: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "A massive shield volcano with basaltic lava flows and extensive lava tube networks, hosting long-duration human space analog missions for Moon and Mars.",
    detailedDescription: "Mauna Loa is the largest active subaerial volcano on Earth. Its high-altitude slopes (specifically at 2,500 m where the HI-SEAS habitat is situated) present barren, unweathered basaltic lava flows composed of smooth pāhoehoe and jagged, fragmented ʻaʻā. The basaltic mineralogy shares remarkable similarities with lunar mare basalts and Martian volcanic plains. The volcano hosts subterranean lava tubes—natural underground conduits that are considered premier structural candidates for shielding human lunar and Martian bases from cosmic radiation, micrometeorites, and extreme thermal swings.",
    nasaProject: "NASA HI-SEAS (Hawaii Space Exploration Analog and Simulation) / PISCES / BASALT",
    analogueFeatures: [
      "Vast expanses of fresh tholeiitic basalt with minimal biological or organic interference",
      "Subterranean lava tube structures resembling lunar skylights and Martian volcanic conduits",
      "Host facility for 4-to-12 month simulated space crew isolation missions (HI-SEAS)",
      "High altitude (2,500 m) with low vegetation, high solar irradiation, and sharp rock hazards"
    ],
    parameters: {
      terrain: "Fractured ʻaʻā lava fields, ropy pāhoehoe pavements, volcanic cinder cones, and subterranean lava tubes.",
      geology: "Tholeiitic basalt, olivine crystals, vesicular basalts, volcanic tephra, and iron-titanium oxides.",
      temperature: "0°C to +20°C at HI-SEAS elevation; below freezing at summit (-4°C to +12°C).",
      elevationTopography: "Slopes of a giant oceanic shield volcano rising to 4,169 m summit.",
      waterIce: "Porous basalt allows rapid water drainage; permanent ice pockets found deep inside cave structures.",
      environmental: "Barren volcanic badlands, intense high-altitude UV radiation, periodic volcanic degassing."
    },
    targetComparisons: {
      Moon: {
        similarityScore: 82,
        badgeLabel: "High Basalt & Habitat Analogue",
        metrics: {
          terrainMatch: 85,
          geologyMatch: 92,
          thermalMatch: 52,
          substrateMatch: 86
        },
        similarities: [
          "Basaltic mineral composition closely matches titanium-rich and low-titanium lunar mare basalts.",
          "Subterranean lava tubes represent exact structural twins of lunar sinuous rilles and skylights.",
          "Sharp, abrasive basaltic rock fragments test spacesuit fabric abrasion and boot tread durability.",
          "Lava tube interior environments offer constant temperatures and shelter from radiation."
        ],
        differences: [
          "Volcanic rocks on Earth are oxidized by atmospheric oxygen, unlike reduced lunar basalts.",
          "Lunar mare is covered by fine, powdery impact-generated regolith rather than solid lava benches.",
          "Lunar vacuum and zero atmospheric pressure versus Earth mountain atmosphere."
        ],
        researchUtility: "Essential for developing lunar subsurface base infrastructure, mapping lava tubes with LiDAR drones, and evaluating astronaut spacesuit mobility over fractured basaltic fields.",
        fieldApplications: [
          "Lava tube exploration and 3D mapping using autonomous LiDAR drones",
          "Testing regolith excavation and in-situ resource utilization (ISRU) basalt sintering",
          "Spacesuit mobility and dust mitigation testing across sharp volcanic terrain"
        ]
      },
      Mars: {
        similarityScore: 85,
        badgeLabel: "Premier Volcanic & Isolation Habitat",
        metrics: {
          terrainMatch: 86,
          geologyMatch: 89,
          thermalMatch: 64,
          substrateMatch: 84
        },
        similarities: [
          "Shield volcano geology mimics the volcanic flanks of Olympus Mons, Elysium Mons, and Ascraeus Mons.",
          "Long-duration human isolation testing at HI-SEAS simulates mission psychology and operational latency.",
          "Basaltic weathering under low vegetation models early Martian volcanic surface alteration.",
          "Subterranean shelters provide models for pressurized Martian habitat deployment."
        ],
        differences: [
          "Rainfall and oceanic weather produce humidity levels far higher than the Martian atmosphere.",
          "Martian volcanoes are orders of magnitude larger due to lack of plate tectonics and lower gravity.",
          "Earth gravity (1 g) prevents accurate low-gravity astronaut exertion measurement."
        ],
        researchUtility: "Pivotal site for evaluating crew psychological health during long-duration confinement, testing planetary EVA communication protocols with 20-minute latency delays, and robotic exploration of volcanic caves.",
        fieldApplications: [
          "Simulated Mars crew isolation and resource conservation studies at HI-SEAS",
          "EVA bio-monitoring and ergonomic evaluation of advanced planetary suit mockups",
          "Autonomous cave and lava tube ingress/egress robotics"
        ]
      }
    }
  },

  {
    id: "askja-caldera",
    name: "Askja Caldera & Dyngjufjöll",
    region: "Central Highlands",
    country: "Iceland",
    coordinates: [65.0300, -16.7500],
    elevation: "1,100 m to 1,510 m",
    primaryTarget: "Moon and Mars",
    supportedTargets: ["Moon", "Mars"],
    tags: ["Apollo Heritage", "Caldera Collapse", "Pumice Fields", "Rover Navigation"],
    thumbnail: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "A volcanic caldera and expansive pumice field in the desolate Icelandic Highlands, historically used to train Apollo astronauts in lunar geology and modern rover testing.",
    detailedDescription: "Located in the remote rain shadow of the Vatnajökull ice cap, Askja is a complex nested volcanic caldera embedded within the Dyngjufjöll mountains. The landscape is characterized by expansive, black basaltic sand deserts, rhyolitic and basaltic pumice fields from the catastrophic 1875 eruption, and the geothermal crater lake Víti. In 1965 and 1967, NASA brought Apollo astronauts—including Neil Armstrong, Buzz Aldrin, and Harrison Schmitt—to Askja to study volcanic impact structures and basaltic textures. Today, NASA and ESA deploy prototype planetary rovers to test autonomous obstacle traversal in its barren volcanic soils.",
    nasaProject: "Apollo Astronaut Geology Training (1965, 1967) / NASA FINESSE / ESA Pangaea",
    analogueFeatures: [
      "Historic training grounds where 32 Apollo astronauts learned lunar field geology",
      "Vast, un-vegetated volcanic desert (Ódáðahraun) with zero organic vegetation cover",
      "Complex interplay of basaltic effusive lava and explosive felsic pumice tephra",
      "Glacio-volcanic features mimicking volcano-ice interactions on Mars"
    ],
    parameters: {
      terrain: "Nested caldera floor, extensive pumice gravel plains, blocky lava fields, and explosive crater lakes.",
      geology: "Tholeiitic basalt, rhyolitic tephra, vesicular pumice, palagonite tuffs, and hydrothermal sulfur deposits.",
      temperature: "-25°C in winter to +12°C in summer (Mean annual -2°C).",
      elevationTopography: "High volcanic plateau at ~1,100 m enclosed by jagged ring mountains up to 1,510 m.",
      waterIce: "Snow cover persists 8-9 months/year; deep sub-surface permafrost and geothermal hot springs.",
      environmental: "Sub-Arctic high-altitude volcanic plateau; severe blizzards, windstorms, and barren ash flats."
    },
    targetComparisons: {
      Moon: {
        similarityScore: 86,
        badgeLabel: "Historic Apollo Lunar Analogue",
        metrics: {
          terrainMatch: 89,
          geologyMatch: 91,
          thermalMatch: 58,
          substrateMatch: 88
        },
        similarities: [
          "Direct historic Apollo pedigree: chosen by NASA specifically to prepare lunar explorers for volcanic landforms.",
          "Crushed basaltic gravel and vesicular tephra duplicate the mechanical traction of lunar highland soil.",
          "Barren horizon with sharp lighting contrasts mimics shadows and disorientation on the lunar surface.",
          "Abundance of pristine volcanic rocks for training astronauts in sample collection and prioritization."
        ],
        differences: [
          "Icelandic pumice is rich in volatile-derived vesicles that differ in gas chemistry from volatile-poor lunar rocks.",
          "Presence of active geothermal lakes (Víti and Öskjuvatn) that have no liquid counterparts on the Moon.",
          "Standard terrestrial gravity and protective atmospheric pressure."
        ],
        researchUtility: "Gold standard for training human astronaut crews in identifying basaltic mineral evolution, operating remote robotic sampling arms, and testing lunar rover chassis over soft volcanic pumice.",
        fieldApplications: [
          "Astronaut field geology training workshops (ESA Pangaea / NASA Artemis geology refreshers)",
          "Planetary rover wheel slip and traction testing over unconsolidated volcanic sand",
          "Testing geochemical spectrometers on freshly exposed basaltic outcrops"
        ]
      },
      Mars: {
        similarityScore: 83,
        badgeLabel: "Volcano-Ice Interaction Analogue",
        metrics: {
          terrainMatch: 85,
          geologyMatch: 86,
          thermalMatch: 69,
          substrateMatch: 84
        },
        similarities: [
          "Glacio-volcanic palagonite formations identical to those formed when Martian volcanoes erupted under ancient glaciers.",
          "Hydrothermal sulfur and clay deposits model past habitable environments in Martian calderas.",
          "High-latitude sub-Arctic climate produces periglacial sorting and rock circles similar to Martian plains.",
          "Widespread black basaltic sand seas matching Martian dark dunes in sand seas like Olympia Undae."
        ],
        differences: [
          "Presence of seasonal rain and surface water flow which has ceased on modern Mars for billions of years.",
          "Hydrated minerals in Iceland are younger and less chemically weathered than ancient Martian clay beds.",
          "Earth's dense atmosphere dampens wind speeds required to transport sand."
        ],
        researchUtility: "Understanding hydrothermal alteration of basaltic rocks in cold climates, testing autonomous rover navigation across mixed snow-rock obstacles, and studying subglacial volcanic biosignatures.",
        fieldApplications: [
          "Autonomous science-target selection algorithm testing on prototype rovers",
          "Investigating extremophilic bacteria in sub-Arctic volcanic hydrothermal vents",
          "Rover drivetrain durability testing across sharp volcanic tephra"
        ]
      }
    }
  },

  {
    id: "cinder-lake",
    name: "Cinder Lake Crater Field",
    region: "Flagstaff, Arizona",
    country: "United States",
    coordinates: [35.3214, -111.5178],
    elevation: "2,100 m",
    primaryTarget: "Moon",
    supportedTargets: ["Moon"],
    tags: ["Lunar Crater Field", "USGS Astrogeology", "Apollo LRV", "Artemis Testbed"],
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "An engineered lunar surface created in 1967 by USGS and NASA using dynamite to simulate the Apollo 11 Mare Tranquillitatis landing site for rover and astronaut trials.",
    detailedDescription: "In July 1967, the United States Geological Survey (USGS) Astrogeology Branch and NASA detonated hundreds of charges of dynamite across the basaltic cinder fields of northern Arizona to sculpt an exact scale replica of a quadrant of the Moon's Mare Tranquillitatis. The basaltic cinders from nearby Sunset Crater closely matched lunar mare albedo and soil consistency. Cinder Lake served as the primary proving ground for the Lunar Roving Vehicle (LRV) and astronaut traverse navigation drills before Apollo missions. In recent years, NASA has revitalized the site for Artemis rover prototyping and spacesuit testing.",
    nasaProject: "USGS Astrogeology / NASA Apollo LRV Proving Ground / Desert RATS",
    analogueFeatures: [
      "Historically blasted crater field replicating exact photographic coordinates from Lunar Orbiter 2",
      "Uniform layer of black basaltic cinder regolith closely simulating lunar mare mechanical response",
      "Historic test site for the Apollo Lunar Roving Vehicle (LRV) and Apollo navigation sextants",
      "Active testbed for the NASA Desert RATS and Artemis Lunar Terrain Vehicle (LTV) competitions"
    ],
    parameters: {
      terrain: "Man-made impact crater bowls (5 to 40 meters diameter), loose volcanic cinders, and basalt slopes.",
      geology: "Quaternary basaltic volcanic cinders, ash, and lapilli from Sunset Crater volcano.",
      temperature: "-12°C in winter to +30°C in summer (High desert climate).",
      elevationTopography: "High plateau in the San Francisco volcanic field at ~2,100 m elevation.",
      waterIce: "Semi-arid pine forest transition zone; dry cinder surface with high percolation.",
      environmental: "High elevation, sunny exposure, dust devils, and abrasive cinder particles."
    },
    targetComparisons: {
      Moon: {
        similarityScore: 88,
        badgeLabel: "High Fidelity Lunar Mare Analogue",
        metrics: {
          terrainMatch: 94,
          geologyMatch: 85,
          thermalMatch: 60,
          substrateMatch: 92
        },
        similarities: [
          "Crater dimensions and spatial density were calibrated to match Lunar Orbiter orbital imagery.",
          "Cinder regolith causes rover wheels to dig in, slip, and kick up plumes identical to lunar rover footage.",
          "High-contrast basalt shadows produce optical illusions identical to lunar terminator conditions.",
          "Low cohesion of volcanic ash closely mimics the compaction behavior of upper lunar regolith."
        ],
        differences: [
          "Earth gravity (1.0 g) versus lunar gravity (0.16 g) alters projectile trajectory and dust settling time.",
          "Atmosphere creates wind drag on moving vehicles and allows convection.",
          "Lunar regolith contains nano-phase metallic iron and micro-glass beads caused by micrometeorites not present in cinders."
        ],
        researchUtility: "Ideal for benchmark testing wheeled mobility platforms (LTV), testing astronaut gait mechanics with counter-weight suspension systems, and sensor-based obstacle avoidance in cratered terrain.",
        fieldApplications: [
          "Next-generation Artemis Lunar Terrain Vehicle (LTV) mobility trials",
          "Autonomous hazard detection and avoidance camera validation under low sun angles",
          "Astronaut spacesuit dust boot seal durability and cinder wear analysis"
        ]
      }
    }
  },

  {
    id: "svalbard-archipelago",
    name: "Svalbard Archipelago (AMASE)",
    region: "Spitsbergen",
    country: "Norway",
    coordinates: [78.2232, 15.6267],
    elevation: "0 m to 1,000 m",
    primaryTarget: "Mars",
    supportedTargets: ["Mars"],
    tags: ["Arctic Mars", "Carbonate Globules", "AMASE Expeditions", "Cryosphere Biosignatures"],
    thumbnail: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "Arctic volcanic archipelago where subzero volcanic carbonate globules match Martian meteorite ALH84001, used for NASA instrument testing.",
    detailedDescription: "The Arctic Mars Analog Svalbard Expedition (AMASE) has used Svalbard's unique geological features—specifically the Bockfjorden volcanic complex—since 2003. Here, primitive mantle xenoliths and carbonate rosettes formed under subzero conditions within basaltic volcanoes. These mineral structures are identical to the controversial carbonate globules discovered inside the famous Martian meteorite ALH84001. Instruments now operating on NASA's Curiosity and Perseverance rovers (including CheMin, SAM, and SHERLOC) were first rigorously field-tested on Svalbard's glaciers and basalt plateaus.",
    nasaProject: "Arctic Mars Analog Svalbard Expedition (AMASE) / NASA Astrobiology / ESA ExoMars",
    analogueFeatures: [
      "Sub-zero carbonate deposition inside volcanic rocks duplicating ALH84001 meteorite features",
      "Glacier-volcano interactions modeling Martian polar ice sheet basal volcanism",
      "Ultra-clean robotic testing protocols to prevent biological forward contamination",
      "Severe Arctic maritime climate providing high operational rigor for robotic field crews"
    ],
    parameters: {
      terrain: "Glacial moraines, basalt plateaus, permafrost patterned ground, and arctic fjord cliffs.",
      geology: "Quaternary volcanic basalt, mantle peridotite xenoliths, hydrothermal carbonate globules.",
      temperature: "-20°C in winter to +8°C in summer (Mean annual -6°C).",
      elevationTopography: "Rugged arctic archipelago terrain from sea level to 1,000 m glaciated peaks.",
      waterIce: "Continuous permafrost up to 500 m deep; massive tidewater glaciers and ice caps.",
      environmental: "Severe arctic conditions, polar day/night cycle, polar bears (requiring armed safety details)."
    },
    targetComparisons: {
      Mars: {
        similarityScore: 88,
        badgeLabel: "High Fidelity Astrobiology Analogue",
        metrics: {
          terrainMatch: 86,
          geologyMatch: 94,
          thermalMatch: 82,
          substrateMatch: 87
        },
        similarities: [
          "Carbonate globules precipitated in subzero basalt identical to those in Martian meteorite ALH84001.",
          "Glacial ice containing dust and volcanic ash layers resembling Martian polar layered deposits.",
          "Endolithic microbial communities flourishing in extreme cold, dry volcanic pores.",
          "Testing ground for the exact suites of spectrometers and drills now operating on Mars."
        ],
        differences: [
          "Arctic marine air mass provides abundant atmospheric moisture.",
          "Thick Earth atmosphere and geomagnetic shielding prevent cosmic ray flux.",
          "Presence of active lichens and mosses across lower elevations."
        ],
        researchUtility: "Unrivaled testbed for life-detection protocols, evaluating automated sample handling systems, and refining miniaturized Raman and deep-UV spectrometers for Martian astrobiology exploration.",
        fieldApplications: [
          "Testing miniaturized life-detection spectrometers (Raman, Fluorescence, XRD)",
          "Planetary protection and sterility validation for sample-return missions",
          "Autonomous rover navigation across combined ice and scree slopes"
        ]
      }
    }
  },

  {
    id: "lanzarote-geopark",
    name: "Lanzarote Volcanic Geopark",
    region: "Canary Islands",
    country: "Spain",
    coordinates: [29.0250, -13.7250],
    elevation: "0 m to 670 m",
    primaryTarget: "Moon and Mars",
    supportedTargets: ["Moon", "Mars"],
    tags: ["ESA PANGAEA", "Cueva de los Verdes", "Basalt Fields", "Astronaut Training"],
    thumbnail: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
    fallbackThumbnail: "assets/images/fallback-location.svg",
    summary: "Vast historic basaltic lava fields and monumental lava tubes used by ESA's PANGAEA program to train European and NASA astronauts in planetary geology.",
    detailedDescription: "Lanzarote was transformed between 1730 and 1736 by massive volcanic eruptions that coated a third of the island in basaltic lavas, forming the Timanfaya National Park. The island features an almost total absence of vegetation, extensive fields of basaltic lapilli, and the extraordinary Corona lava tube system (spanning over 7.5 kilometers, including the Cueva de los Verdes and submerged Jameos del Agua). Lanzarote is the primary field laboratory for the European Space Agency's PANGAEA astronaut training program, preparing astronauts to act as field scientists on future Moon and Mars surfaces.",
    nasaProject: "ESA PANGAEA Astronaut Planetary Geology Training / NASA Collaborative Fieldwork",
    analogueFeatures: [
      "Pristine, young basaltic volcanism with near-zero chemical weathering due to arid climate",
      "Monumental volcanic lava tubes over 7 km long suitable for subterranean base simulation",
      "Field laboratory for testing astronaut geological sampling tools and hand-held spectrometers",
      "Spectacular variety of volcanic structures: hornitos, volcanic bombs, tephra cones, and spatter rings"
    ],
    parameters: {
      terrain: "Jagged malpaís (badland) basalt fields, cinder cones, ash fields, and monumental subterranean lava tubes.",
      geology: "Alkali olivine basalt, basaltic tephra, volcanic bombs, hydrothermal calcium/sulfate secondary minerals.",
      temperature: "+15°C to +28°C year-round (Mild subtropical arid climate).",
      elevationTopography: "Volcanic island topography ranging from sea level to Montañas del Fuego (670 m).",
      waterIce: "Extremely arid volcanic desert; low rainfall with zero surface streams.",
      environmental: "Steady trade winds, high solar exposure, unshaded basalt landscapes."
    },
    targetComparisons: {
      Moon: {
        similarityScore: 81,
        badgeLabel: "High Basalt & Tube Training Analogue",
        metrics: {
          terrainMatch: 84,
          geologyMatch: 90,
          thermalMatch: 46,
          substrateMatch: 86
        },
        similarities: [
          "Basaltic volcanism with fresh, unweathered mineral surfaces matches lunar mare volcanism.",
          "Corona lava tube system is a direct terrestrial twin to lunar sinuous rilles and collapsed skylights.",
          "Astronauts learn to identify olivine and pyroxene crystals under realistic field lighting conditions.",
          "Jagged basalt fields replicate the difficulty of walking on rugged planetary terrain."
        ],
        differences: [
          "Mild terrestrial climate without the extreme -240°C to +120°C swings of the Moon.",
          "Terrestrial atmospheric pressure eliminates need for pressurized life support suits.",
          "Standard Earth gravity."
        ],
        researchUtility: "Premier facility for teaching astronauts to communicate concise geological descriptions back to mission control, operating handheld spectroscopic tools, and navigating subterranean lava tubes.",
        fieldApplications: [
          "ESA PANGAEA astronaut geological field certification campaigns",
          "Testing handheld planetary spectrometers (Electronic Field Book - EFB)",
          "Subterranean cave exploration and communications relay testing"
        ]
      },
      Mars: {
        similarityScore: 84,
        badgeLabel: "Volcanic & Lava Tube Analogue",
        metrics: {
          terrainMatch: 86,
          geologyMatch: 89,
          thermalMatch: 60,
          substrateMatch: 85
        },
        similarities: [
          "Arid basaltic volcanic landscape mimics Elysium Planitia and Daedalia Planum on Mars.",
          "Lava tubes provide natural structural shielding models for future human Martian habitats.",
          "Secondary sulfate minerals inside lava tubes simulate habitable micro-niches on Mars.",
          "Barren volcanic ash and lapilli resemble coarse Martian sand ripples."
        ],
        differences: [
          "Absence of sub-zero temperatures and absence of permafrost ground ice.",
          "Warm sea breezes and maritime air mass contrast with the Martian carbon dioxide vacuum.",
          "Earth gravity versus 0.38 g Martian gravity."
        ],
        researchUtility: "Developing autonomous cave drones that can map lava tubes without GPS, testing astronaut rover cooperation, and testing microbiological sampling protocols for cave mineral crusts.",
        fieldApplications: [
          "Autonomous 3D LiDAR drone mapping of subterranean lava tubes",
          "Testing sampling tools for extracting secondary sulfate minerals inside caves",
          "Astronaut field mobility and geological documentation drills"
        ]
      }
    }
  }
];

// Helper functions for easy querying
const AnalogueDataService = {
  getAllLocations() {
    return ANALOGUE_LOCATIONS;
  },

  getLocationById(id) {
    return ANALOGUE_LOCATIONS.find(loc => loc.id === id) || null;
  },

  getLocationsByTarget(target) {
    if (!target || target === "All") return ANALOGUE_LOCATIONS;
    return ANALOGUE_LOCATIONS.filter(loc => loc.supportedTargets.includes(target));
  },

  searchLocations(query, targetFilter = "All") {
    let list = this.getLocationsByTarget(targetFilter);
    if (!query || !query.trim()) return list;

    const q = query.toLowerCase().trim();
    return list.filter(loc => {
      const matchName = loc.name.toLowerCase().includes(q);
      const matchCountry = loc.country.toLowerCase().includes(q);
      const matchRegion = loc.region.toLowerCase().includes(q);
      const matchSummary = loc.summary.toLowerCase().includes(q);
      const matchTags = loc.tags.some(tag => tag.toLowerCase().includes(q));
      return matchName || matchCountry || matchRegion || matchSummary || matchTags;
    });
  },

  getPlanetaryTarget(target) {
    return PLANETARY_TARGETS[target] || PLANETARY_TARGETS.Moon;
  },

  getAllPlanetaryTargets() {
    return Object.values(PLANETARY_TARGETS);
  },

  getComparisonData(locationId, planetaryTarget) {
    const location = this.getLocationById(locationId) || ANALOGUE_LOCATIONS[0];
    const target = PLANETARY_TARGETS[planetaryTarget] ? planetaryTarget : "Mars";
    const targetData = PLANETARY_TARGETS[target];

    // Check if location has direct precalculated comparison for this target
    let comparison = location.targetComparisons[target];
    if (!comparison) {
      // If location only officially compares to one, create fallback comparison structure
      const altTarget = Object.keys(location.targetComparisons)[0];
      const altComp = location.targetComparisons[altTarget];
      comparison = {
        similarityScore: Math.max(55, altComp.similarityScore - 15),
        badgeLabel: `Exploratory ${target} Evaluation`,
        metrics: {
          terrainMatch: Math.max(50, altComp.metrics.terrainMatch - 12),
          geologyMatch: Math.max(50, altComp.metrics.geologyMatch - 10),
          thermalMatch: Math.max(40, altComp.metrics.thermalMatch - 15),
          substrateMatch: Math.max(50, altComp.metrics.substrateMatch - 10)
        },
        similarities: [
          `Shares foundational rocky/volcanic or desert substrate with ${targetData.name}.`,
          `Useful for baseline equipment durability and field logistics training.`
        ],
        differences: [
          `Atmosphere, temperature, and geochemical profiles differ substantially from primary ${target} analog targets.`
        ],
        researchUtility: `While primarily catalogued as an analogue for ${altTarget}, this site provides general operational baseline testing for planetary surface hardware.`,
        fieldApplications: [
          "General field instrumentation ruggedization testing",
          "Rover drivetrain stress testing"
        ]
      };
    }

    return {
      location,
      targetData,
      comparison
    };
  }
};
