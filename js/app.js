/**
 * TerraTwin – Earth to Space Analogue Explorer
 * Main Application Logic & User Interaction Controller
 * NASA Space Apps Challenge Prototype
 */

// Global Application Namespace
window.TerraTwin = {
  state: {
    explorerTarget: 'All', // 'All' | 'Moon' | 'Mars'
    searchQuery: '',
    selectedLocationId: 'atacama-desert',
    labTarget: 'Mars',     // 'Moon' | 'Mars'
    labLocationId: 'atacama-desert',
    map: null,
    markersLayer: null,
    markerLookup: {}
  },

  // Public Methods
  setExplorerFilter(target) {
    this.state.explorerTarget = target;
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-target') === target) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    this.renderLocationCards();
    this.renderMapMarkers();
  },

  focusLocationOnMap(id) {
    const loc = AnalogueDataService.getLocationById(id);
    if (!loc || !this.state.map) return;
    this.state.map.setView(loc.coordinates, 6, { animate: true, duration: 1 });
    const marker = this.state.markerLookup[id];
    if (marker) {
      marker.openPopup();
    }
  },

  openDetailModal(id) {
    const loc = AnalogueDataService.getLocationById(id);
    if (!loc) return;

    const modal = document.getElementById('location-detail-modal');
    if (!modal) return;

    document.getElementById('modal-location-img').src = loc.thumbnail;
    document.getElementById('modal-location-img').onerror = function() {
      this.src = loc.fallbackThumbnail;
    };

    document.getElementById('modal-target-badge').textContent = loc.supportedTargets.join(' & ') + ' Analogue';
    document.getElementById('modal-country-badge').textContent = loc.country;
    document.getElementById('modal-location-name').textContent = loc.name;
    document.getElementById('modal-location-coords').textContent = 
      `${loc.coordinates[0].toFixed(4)}°N, ${loc.coordinates[1].toFixed(4)}°E // Elevation: ${loc.elevation} // ${loc.region}`;

    document.getElementById('modal-summary-text').textContent = loc.detailedDescription;
    document.getElementById('modal-nasa-project').textContent = loc.nasaProject;

    // Parameters
    document.getElementById('modal-param-terrain').textContent = loc.parameters.terrain;
    document.getElementById('modal-param-geology').textContent = loc.parameters.geology;
    document.getElementById('modal-param-temp').textContent = loc.parameters.temperature;
    document.getElementById('modal-param-elevation').textContent = loc.parameters.elevationTopography;
    document.getElementById('modal-param-water').textContent = loc.parameters.waterIce;
    document.getElementById('modal-param-env').textContent = loc.parameters.environmental;

    // Analogue Features
    const featuresList = document.getElementById('modal-features-list');
    if (featuresList) {
      featuresList.innerHTML = loc.analogueFeatures.map(feat => `
        <li style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.4rem; padding-left: 1.25rem; position: relative;">
          <span style="position: absolute; left: 0; color: var(--accent-cyan);">✦</span> ${feat}
        </li>
      `).join('');
    }

    const modalCompareBtn = document.getElementById('modal-send-compare-btn');
    if (modalCompareBtn) {
      modalCompareBtn.onclick = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        this.jumpToComparisonLab(loc.id);
      };
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  jumpToComparisonLab(locationId) {
    this.state.labLocationId = locationId;

    const loc = AnalogueDataService.getLocationById(locationId);
    if (loc) {
      if (!loc.supportedTargets.includes(this.state.labTarget)) {
        this.state.labTarget = loc.supportedTargets[0];
      }
    }

    const selectEl = document.getElementById('lab-location-select');
    if (selectEl) {
      selectEl.value = locationId;
    }

    this.updateTargetTabsUI();
    this.updateComparisonLaboratory();

    const compareSection = document.getElementById('compare');
    if (compareSection) {
      compareSection.scrollIntoView({ behavior: 'smooth' });
    }
  },

  updateTargetTabsUI() {
    document.querySelectorAll('.target-tab-btn').forEach(tab => {
      if (tab.getAttribute('data-target') === this.state.labTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  },

  updateComparisonLaboratory() {
    const bundle = AnalogueDataService.getComparisonData(this.state.labLocationId, this.state.labTarget);
    if (!bundle) return;

    const { location, targetData, comparison } = bundle;
    const isMars = this.state.labTarget === 'Mars';

    // 1. Update Header Similarity Gauge
    const scoreValEl = document.getElementById('lab-score-val');
    const scoreBadgeEl = document.getElementById('lab-score-badge');
    const scoreRadialBar = document.getElementById('score-radial-bar');

    if (scoreValEl) scoreValEl.textContent = comparison.similarityScore;
    if (scoreBadgeEl) scoreBadgeEl.textContent = comparison.badgeLabel;

    if (scoreRadialBar) {
      const radius = 48;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (comparison.similarityScore / 100) * circumference;
      scoreRadialBar.style.strokeDasharray = `${circumference}`;
      scoreRadialBar.style.strokeDashoffset = `${offset}`;
      scoreRadialBar.style.stroke = isMars ? 'var(--accent-mars)' : 'var(--accent-cyan)';
    }

    // 2. Update Metric Match Bars
    const metrics = comparison.metrics;
    this.updateMetricBar('metric-terrain', metrics.terrainMatch, isMars);
    this.updateMetricBar('metric-geology', metrics.geologyMatch, isMars);
    this.updateMetricBar('metric-thermal', metrics.thermalMatch, isMars);
    this.updateMetricBar('metric-substrate', metrics.substrateMatch, isMars);

    // 3. Update Side-by-Side Spec Cards
    const earthNameEl = document.getElementById('lab-earth-name');
    const earthRegionEl = document.getElementById('lab-earth-region');
    const earthElevationEl = document.getElementById('lab-earth-elevation');
    const earthCoordsEl = document.getElementById('lab-earth-coords');
    const earthTargetBadgeEl = document.getElementById('lab-earth-target-badge');

    if (earthNameEl) earthNameEl.textContent = location.name;
    if (earthRegionEl) earthRegionEl.textContent = `${location.region}, ${location.country}`;
    if (earthElevationEl) earthElevationEl.textContent = `Elevation: ${location.elevation}`;
    if (earthCoordsEl) earthCoordsEl.textContent = `${location.coordinates[0].toFixed(4)}°, ${location.coordinates[1].toFixed(4)}°`;
    if (earthTargetBadgeEl) {
      earthTargetBadgeEl.className = `badge ${location.supportedTargets.length > 1 ? 'badge-dual' : location.supportedTargets.includes('Mars') ? 'badge-mars' : 'badge-moon'}`;
      earthTargetBadgeEl.textContent = location.supportedTargets.join(' & ') + ' Analogue';
    }

    const spaceNameEl = document.getElementById('lab-space-name');
    const spaceSubEl = document.getElementById('lab-space-sub');
    const spaceGravityEl = document.getElementById('lab-space-gravity');
    const spaceAtmosEl = document.getElementById('lab-space-atmos');
    const spaceCardEl = document.getElementById('lab-space-card');

    if (spaceNameEl) spaceNameEl.textContent = targetData.name;
    if (spaceSubEl) spaceSubEl.textContent = targetData.subtitle;
    if (spaceGravityEl) spaceGravityEl.textContent = `Gravity: ${targetData.gravity} // Temp: ${targetData.meanTemperature}`;
    if (spaceAtmosEl) spaceAtmosEl.textContent = `Atmos: ${targetData.atmosphere} (${targetData.atmosphericPressure})`;

    if (spaceCardEl) {
      if (isMars) {
        spaceCardEl.classList.remove('moon-side');
        spaceCardEl.classList.add('mars-side');
      } else {
        spaceCardEl.classList.remove('mars-side');
        spaceCardEl.classList.add('moon-side');
      }
    }

    // 4. Update 6-Vector Comparison Table
    document.getElementById('table-param-terrain-earth').textContent = location.parameters.terrain;
    document.getElementById('table-param-terrain-space').textContent = targetData.terrainSummary;

    document.getElementById('table-param-geology-earth').textContent = location.parameters.geology;
    document.getElementById('table-param-geology-space').textContent = targetData.primaryComposition;

    document.getElementById('table-param-temp-earth').textContent = location.parameters.temperature;
    document.getElementById('table-param-temp-space').textContent = `${targetData.temperatureRange} (Mean: ${targetData.meanTemperature})`;

    document.getElementById('table-param-elev-earth').textContent = location.parameters.elevationTopography;
    document.getElementById('table-param-elev-space').textContent = `Target Zones: ${targetData.targetLandingZones.join(', ')}`;

    document.getElementById('table-param-water-earth').textContent = location.parameters.waterIce;
    document.getElementById('table-param-water-space').textContent = targetData.waterOccurrence;

    document.getElementById('table-param-env-earth').textContent = location.parameters.environmental;
    document.getElementById('table-param-env-space').textContent = `Radiation: ${targetData.radiationEnvironment}. Surface Pressure: ${targetData.atmosphericPressure}.`;

    // 5. Update Similarities & Differences Lists
    const simListEl = document.getElementById('lab-similarities-list');
    const diffListEl = document.getElementById('lab-differences-list');

    if (simListEl) {
      simListEl.innerHTML = comparison.similarities.map(item => `<li>${item}</li>`).join('');
    }

    if (diffListEl) {
      diffListEl.innerHTML = comparison.differences.map(item => `<li>${item}</li>`).join('');
    }

    // 6. Update Research Utility Callout & Field Applications
    const utilityDescEl = document.getElementById('lab-utility-desc');
    const fieldAppsEl = document.getElementById('lab-field-apps');

    if (utilityDescEl) utilityDescEl.textContent = comparison.researchUtility;

    if (fieldAppsEl && comparison.fieldApplications) {
      fieldAppsEl.innerHTML = comparison.fieldApplications.map(app => `
        <span class="field-app-chip">✦ ${app}</span>
      `).join('');
    }
  },

  updateMetricBar(elementIdPrefix, value, isMars) {
    const valEl = document.getElementById(`${elementIdPrefix}-val`);
    const fillEl = document.getElementById(`${elementIdPrefix}-fill`);

    if (valEl) valEl.textContent = `${value}%`;
    if (fillEl) {
      fillEl.style.width = `${value}%`;
      if (isMars) {
        fillEl.classList.add('mars');
      } else {
        fillEl.classList.remove('mars');
      }
    }
  },

  renderMapMarkers() {
    if (!this.state.map || !this.state.markersLayer) return;

    this.state.markersLayer.clearLayers();
    this.state.markerLookup = {};

    const locations = AnalogueDataService.searchLocations(this.state.searchQuery, this.state.explorerTarget);
    const bounds = [];

    locations.forEach(loc => {
      let markerClass = 'custom-marker-pin';
      if (loc.supportedTargets.length > 1) {
        markerClass += ' dual';
      } else if (loc.supportedTargets.includes('Mars')) {
        markerClass += ' mars';
      } else {
        markerClass += ' moon';
      }

      const customIcon = L.divIcon({
        className: 'custom-leaflet-div-icon',
        html: `<div class="${markerClass}" title="${loc.name}"><div class="marker-inner-dot"></div></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      });

      const marker = L.marker(loc.coordinates, { icon: customIcon });

      const popupHtml = `
        <div class="map-popup-card">
          <img src="${loc.thumbnail}" alt="${loc.name}" class="map-popup-thumb" onerror="this.src='${loc.fallbackThumbnail}'" />
          <div class="map-popup-body">
            <div class="map-popup-badges">
              <span class="badge ${loc.supportedTargets.length > 1 ? 'badge-dual' : loc.supportedTargets.includes('Mars') ? 'badge-mars' : 'badge-moon'}">
                ${loc.supportedTargets.join(' & ')}
              </span>
              <span class="badge badge-country">${loc.country}</span>
            </div>
            <h4 class="map-popup-title">${loc.name}</h4>
            <div class="map-popup-coords">${loc.coordinates[0].toFixed(4)}°, ${loc.coordinates[1].toFixed(4)}° // ${loc.elevation}</div>
            <p class="map-popup-desc">${loc.summary}</p>
            <div class="map-popup-actions">
              <button class="btn btn-secondary btn-sm popup-inspect-btn" data-id="${loc.id}">
                Inspect
              </button>
              <button class="btn btn-primary-cyan btn-sm popup-compare-btn" data-id="${loc.id}">
                Compare Lab
              </button>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 300, minWidth: 260 });
      marker.addTo(this.state.markersLayer);

      this.state.markerLookup[loc.id] = marker;
      bounds.push(loc.coordinates);
    });

    if (bounds.length > 1) {
      this.state.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 5 });
    } else if (bounds.length === 1) {
      this.state.map.setView(bounds[0], 4);
    }
  },

  renderLocationCards() {
    const gridContainer = document.getElementById('locations-grid');
    const resultsCountEl = document.getElementById('results-count-chip');
    if (!gridContainer) return;

    const locations = AnalogueDataService.searchLocations(this.state.searchQuery, this.state.explorerTarget);
    const totalCount = AnalogueDataService.getAllLocations().length;

    if (resultsCountEl) {
      resultsCountEl.textContent = `Showing ${locations.length} of ${totalCount} Sites`;
    }

    if (locations.length === 0) {
      gridContainer.innerHTML = `
        <div class="glass-panel" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
          <h3 style="font-size: 1.4rem; color: #ffffff; margin-bottom: 0.5rem;">No Analogue Sites Match Your Query</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try adjusting your keyword or reset target planetary filters.</p>
          <button class="btn btn-secondary btn-sm" id="reset-search-btn">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-search-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.state.searchQuery = '';
          this.state.explorerTarget = 'All';
          const searchInput = document.getElementById('explorer-search-input');
          if (searchInput) searchInput.value = '';
          this.setExplorerFilter('All');
        });
      }
      return;
    }

    gridContainer.innerHTML = locations.map(loc => {
      const targetBadgeClass = loc.supportedTargets.length > 1 
        ? 'badge-dual' 
        : loc.supportedTargets.includes('Mars') 
          ? 'badge-mars' 
          : 'badge-moon';

      const targetLabel = loc.supportedTargets.join(' & ');
      const tagsHtml = loc.tags.map(tag => `<span class="location-tag">#${tag}</span>`).join('');

      return `
        <article class="location-card" data-id="${loc.id}">
          <div class="location-thumb-wrapper">
            <img 
              src="${loc.thumbnail}" 
              alt="${loc.name}" 
              class="location-thumb"
              loading="lazy"
              onerror="this.src='${loc.fallbackThumbnail}'"
            />
            <div class="location-thumb-overlay"></div>
            <div class="location-thumb-badges">
              <span class="badge ${targetBadgeClass}">${targetLabel}</span>
              <span class="badge badge-country">${loc.country}</span>
            </div>
          </div>
          <div class="location-body">
            <div class="location-header">
              <h3 class="location-name">${loc.name}</h3>
              <div class="location-region">${loc.region} // ${loc.elevation}</div>
            </div>
            <p class="location-summary">${loc.summary}</p>
            <div class="location-tags">
              ${tagsHtml}
            </div>
            <div class="location-actions">
              <button class="btn btn-secondary btn-sm card-inspect-btn" data-id="${loc.id}">
                Scientific Details
              </button>
              <button class="btn btn-primary-cyan btn-sm card-compare-btn" data-id="${loc.id}">
                Compare Lab
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Event delegation
    gridContainer.querySelectorAll('.card-inspect-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.openDetailModal(id);
      });
    });

    gridContainer.querySelectorAll('.card-compare-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.jumpToComparisonLab(id);
      });
    });

    gridContainer.querySelectorAll('.location-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        this.focusLocationOnMap(id);
      });
    });
  }
};

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = window.TerraTwin;

  // 1. Mission Telemetry Clock & Header Navigation
  const clockElement = document.getElementById('mission-clock-time');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateClock() {
    if (!clockElement) return;
    const now = new Date();
    const utcString = now.toISOString().replace('T', ' ').substring(0, 19);
    clockElement.textContent = `UTC ${utcString}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  if (mobileMenuBtn && siteNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      siteNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        siteNav.classList.remove('open');
      });
    });
  }

  // Scrollspy
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 140;
    const sections = ['home', 'concept', 'explorer', 'compare', 'about'];

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${secId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    });
  });

  // 2. Leaflet Map Initialization
  const mapContainer = document.getElementById('analogue-map');
  if (mapContainer && typeof L !== 'undefined') {
    app.state.map = L.map('analogue-map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 12,
      zoomControl: true,
      attributionControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(app.state.map);

    app.state.markersLayer = L.layerGroup().addTo(app.state.map);

    // Map popup button click delegation
    app.state.map.on('popupopen', () => {
      const inspectBtn = document.querySelector('.popup-inspect-btn');
      const compareBtn = document.querySelector('.popup-compare-btn');

      if (inspectBtn) {
        inspectBtn.onclick = () => {
          const id = inspectBtn.getAttribute('data-id');
          app.openDetailModal(id);
        };
      }

      if (compareBtn) {
        compareBtn.onclick = () => {
          const id = compareBtn.getAttribute('data-id');
          app.jumpToComparisonLab(id);
        };
      }
    });

    app.renderMapMarkers();
  }

  // 3. Explorer Controls & Search
  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('explorer-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      app.setExplorerFilter(target);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      app.state.searchQuery = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = app.state.searchQuery.length > 0 ? 'block' : 'none';
      }
      app.renderLocationCards();
      app.renderMapMarkers();
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        app.state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        app.renderLocationCards();
        app.renderMapMarkers();
      });
    }
  }

  // Hero Quick CTAs
  const heroExploreMoonBtn = document.getElementById('hero-explore-moon');
  const heroExploreMarsBtn = document.getElementById('hero-explore-mars');

  if (heroExploreMoonBtn) {
    heroExploreMoonBtn.addEventListener('click', (e) => {
      e.preventDefault();
      app.setExplorerFilter('Moon');
      document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (heroExploreMarsBtn) {
    heroExploreMarsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      app.setExplorerFilter('Mars');
      document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Footer Featured Analogues Links
  document.querySelectorAll('.footer-analogue-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      const locId = link.getAttribute('data-id');
      if (target) app.setExplorerFilter(target);
      if (locId) {
        document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => app.focusLocationOnMap(locId), 400);
      }
    });
  });

  // 4. Location Detail Modal
  const modal = document.getElementById('location-detail-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (modal) {
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      };
    }

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Comparison Laboratory Setup
  const targetTabs = document.querySelectorAll('.target-tab-btn');
  const locationSelect = document.getElementById('lab-location-select');

  if (locationSelect) {
    locationSelect.innerHTML = AnalogueDataService.getAllLocations().map(loc => `
      <option value="${loc.id}">${loc.name} (${loc.country})</option>
    `).join('');

    locationSelect.value = app.state.labLocationId;

    locationSelect.addEventListener('change', (e) => {
      app.state.labLocationId = e.target.value;
      app.updateComparisonLaboratory();
    });
  }

  targetTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      app.state.labTarget = tab.getAttribute('data-target');
      app.updateTargetTabsUI();
      app.updateComparisonLaboratory();
    });
  });

  // Initial render
  app.renderLocationCards();
  app.updateTargetTabsUI();
  app.updateComparisonLaboratory();
});
