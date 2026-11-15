# TerraTwin – Earth to Space Analogue Explorer
> **NASA Space Apps Challenge Prototype**  
> *Identify Earth locations that resemble potential permanent Moon base locations and Martian environments.*

[![NASA Space Apps Challenge](https://img.shields.io/badge/NASA%20Space%20Apps-Challenge%20Prototype-00f0ff?style=for-the-badge&logo=nasa)](https://www.spaceappschallenge.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-38bdf8?style=for-the-badge)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20Vanilla%20JS-f97316?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Leaflet.js](https://img.shields.io/badge/Mapping-Leaflet.js%20%7C%20OpenStreetMap-10b981?style=for-the-badge)](https://leafletjs.com/)

---

## 🌌 Project Overview

**TerraTwin** is an interactive planetary exploration web platform developed for the **NASA Space Apps Challenge**. 

Sending robotic payloads and crewed missions to the Moon or Mars demands extreme reliability. Terrestrial planetary analogues—extreme environments on Earth that physically, geochemically, or operationally mirror conditions on other worlds—serve as essential natural laboratories for:
- Testing autonomous rover mobility, wheel traction, and LiDAR obstacle navigation.
- Validating deep-core regolith sample drills without forward biological contamination.
- Calibrating life-detection spectrometers (Raman, XRD, and deep-UV).
- Simulating astronaut Extravehicular Activity (EVA) biomechanics, spacesuit ergonomics, and communication latency.

TerraTwin provides an interactive, scientific geospatial dashboard and side-by-side comparative laboratory bridging Earth observation data with future lunar and Martian mission landing sites.

---

## 🚀 Key Features

### 1. Interactive Global Analogue Explorer
- **Interactive Leaflet.js & OpenStreetMap:** Custom dark-matter cartographic visualization with neon markers color-coded by target destination (Cyan for Moon, Orange for Mars, Purple for Dual Analogues).
- **Interactive Telemetry Popups:** Inspect site elevation, geographic coordinates, planetary analogues, and operational summaries.
- **Dynamic Target Filters:** Filter candidate sites for **Moon Analogues**, **Mars Analogues**, or **All Sites**.
- **Real-Time Search Engine:** Live keyword filtering across location names, countries, regions, and geological keywords.
- **Scientific Detail Modal:** In-depth inspection covering operational mission history, NASA/ESA field trials, and full 6-vector parameter analyses.

### 2. Planetary Comparison Laboratory
- **Target Planet Selector:** Toggle between **The Moon (Luna)** and **Mars (The Red Planet)**.
- **Side-by-Side Visual Spec Cards:** Direct juxtaposition of terrestrial site metrics against destination parameters (surface gravity, atmospheric pressure, temperature extremes, and target landing zones).
- **Composite Similarity Gauge:** Radial match score with visual percentage gauge and qualitative categorization (*Illustrative prototype scores for hackathon exploration*).
- **4 Scientific Match Vector Bars:**
  - Terrain & Geomorphology Match (%)
  - Geological Chemistry & Mineralogy Match (%)
  - Thermal Extremes Profile (%)
  - Regolith Substrate & Low-Moisture Match (%)
- **6-Vector Comparison Table:** Detailed side-by-side comparative table across:
  1. Terrain Type
  2. Geological Characteristics
  3. Temperature Conditions
  4. Elevation & Topography
  5. Water & Ice Occurrence
  6. Environmental Conditions (Radiation, Pressure, Atmosphere)
- **Comparative Synthesis:** Granular analysis of *Key Scientific Similarities* versus *Critical Differences & Environmental Discrepancies*.
- **Research Utility & Field Applications:** Clear breakdowns of rover locomotion, drill testing, and EVA training suitability.

### 3. Methodology & Critical Limitations
- Transparent scientific breakdown of fundamental terrestrial differences:
  - **1.0 g Gravity vs Low-G:** Earth's standard gravity vs Moon (0.16 g) and Mars (0.38 g).
  - **Atmosphere vs Hard Vacuum:** 1,013 mbar atmospheric buffer vs hard lunar vacuum and 6 mbar CO₂ Martian air.
  - **Radiation Shielding:** Earth's magnetosphere vs unshielded cosmic rays and solar particle events.
  - **Regolith Weathering:** Terrestrial rounded grains vs razor-sharp jagged lunar dust and Martian perchlorates.

---

## 📍 Catalogued Terrestrial Analogue Sites

1. **Atacama Desert, Chile** (*Mars*): Hyper-arid non-polar desert with perchlorate salts, extreme solar UV, and testing ground for NASA ASTEP & IceBreaker rover drills.
2. **McMurdo Dry Valleys, Antarctica** (*Mars*): Cryogenic polar desert with polygonally patterned permafrost mirroring the Mars Phoenix landing site.
3. **Haughton Impact Crater, Devon Island, Canada** (*Moon & Mars*): 23-km Arctic impact crater hosting the NASA Haughton-Mars Project (HMP) and FMARS habitat.
4. **Mauna Loa & HI-SEAS, Hawaii, USA** (*Moon & Mars*): Basaltic volcanic slopes and subterranean lava tubes hosting long-duration human isolation simulations.
5. **Askja Caldera & Dyngjufjöll, Iceland** (*Moon & Mars*): Historic Apollo astronaut field geology training ground (Neil Armstrong, Buzz Aldrin) and rover wheel slip trials.
6. **Cinder Lake Crater Field, Arizona, USA** (*Moon*): Man-made crater field blasted by USGS/NASA in 1967 to train Apollo Lunar Roving Vehicle (LRV) drivers.
7. **Svalbard Archipelago (AMASE), Norway** (*Mars*): Subzero volcanic carbonate globules matching Martian meteorite ALH84001, used to test Curiosity/Perseverance spectrometers.
8. **Lanzarote Volcanic Geopark, Canary Islands, Spain** (*Moon & Mars*): Pristine basalt flows and monumental lava tube networks used for ESA PANGAEA astronaut training.

---

## 📂 Project Structure

```
terratwin/
├── index.html                   # Core semantic web application
├── css/
│   └── style.css                # Deep-space research dashboard stylesheet
├── js/
│   ├── data.js                  # Predefined planetary targets & terrestrial analogue datasets
│   └── app.js                   # State manager, Leaflet map engine, search, filters & lab controller
└── assets/
    └── images/
        ├── terratwin-logo.svg       # Vector brand logo
        ├── earth-hero.svg           # Holographic orbital Earth illustration
        ├── moon-card.svg            # Moon albedo & Artemis South Pole illustration
        ├── mars-card.svg            # Martian surface & Jezero Crater illustration
        └── fallback-location.svg    # Radar topography fallback graphic
```

---

## 🛠️ Technology Stack

- **HTML5:** Semantic markup, accessible dialogs, and responsive grid structures.
- **CSS3:** Custom properties (variables), glassmorphic backdrops, smooth transitions, and responsive breakpoints.
- **Vanilla JavaScript (ES6+):** Pure client-side reactivity, zero build steps, zero external runtime dependencies.
- **Leaflet.js & OpenStreetMap:** Open-source cartography with CartoDB Dark Matter tile styling.
- **Typography:** Space Grotesk (Headings), Inter (Body text), and JetBrains Mono (Telemetry data).

---

## 💻 Local Setup & Execution

TerraTwin requires no build step, no npm packages, and no backend server.

### Option 1: Direct File Launch
Simply double-click `index.html` (or `terratwin/index.html`) to open directly in any modern browser (Chrome, Firefox, Edge, Safari).

### Option 2: Local HTTP Server (Python)
```bash
# Clone the repository
git clone https://github.com/anagha005v1-ops/TerraTwin.git
cd TerraTwin

# Start local server
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📚 Open Data Sources Referenced

- [NASA Earthdata](https://earthdata.nasa.gov/)
- [NASA Planetary Data System (PDS)](https://pds.nasa.gov/)
- [NASA Trek (Moon Trek & Mars Trek)](https://trek.nasa.gov/)
- [USGS Astrogeology Science Center](https://astrogeology.usgs.gov/)
- [NASA Analog Explorer](https://science.nasa.gov/solar-system/analog-explorer/)

*Disclaimer: This project is an educational prototype developed for the NASA Space Apps Challenge. Similarity scores and parameter indices are illustrative values designed for educational demonstration and do not constitute official certified NASA flight data.*

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
