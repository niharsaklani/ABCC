/* ==========================================================================
   PREMIUM UI/UX DESIGNER PORTFOLIO — CASE STUDIES DATA & MODAL ENGINE
   Comprehensive case study deep-dives with interactive tabs, metrics, and workflows
   ========================================================================== */

const CASE_STUDIES_DATA = {
  kinetix: {
    id: "kinetix",
    title: "Kinetix — Algorithmic Wealth & Multi-Asset Rebalancer",
    subtitle: "Reimagining institutional portfolio management into an intuitive, high-velocity web experience.",
    category: "SaaS Dashboard & Web Application",
    year: "2025",
    client: "Kinetix Financial Technologies (Series A)",
    role: "Lead Product Designer (UX Research, Interaction Design, Design System)",
    timeline: "6 Months (Q3–Q4 2025)",
    tools: "Figma, ProtoPie, UserTesting, Tailwind Token Architecture, WebGL",
    metrics: [
      { label: "Trade Execution Speed", value: "+41%" },
      { label: "Onboarding Completion", value: "2.4x" },
      { label: "Critical Usability Errors", value: "0" },
      { label: "Total Asset Flow (Beta)", value: "$180M+" }
    ],
    overview: `Kinetix is an institutional-grade portfolio rebalancing and algorithmic trading platform designed for registered investment advisors (RIAs) and wealth managers. Prior to our redesign, advisors relied on dense legacy terminals that caused frequent order errors and required extensive manual spreadsheet reconciliation.
    
    Our objective was to distill complex multi-asset mathematical models into an interface that feels calm, authoritative, and instantaneous—allowing advisors to execute portfolio rebalancing across hundreds of client accounts with zero cognitive friction.`,
    
    challenge: `Legacy trading tools suffer from the 'data dump' syndrome: dozens of unorganized tables, microscopic fonts, and no clear visual hierarchy. Through contextual inquiry, we discovered that wealth advisors spend 70% of their day manually checking asset drift percentages across individual accounts before submitting rebalance orders.
    
    The primary challenge was designing an interface that supports rapid multi-account batch actions while preventing catastrophic execution mistakes through intentional friction and confirmation affordances.`,
    
    research: `We conducted 18 in-depth qualitative interviews with RIA portfolio managers and fintech analysts. We also ran moderated usability sessions analyzing their actual terminal workflows during market opening hours.
    
    Key Qualitative Insights:
    • 'I don't need 20 charts open simultaneously. I need to know immediately which 15 accounts have drifted beyond client risk tolerance.'
    • 'Executing orders in legacy software feels like diffusing a bomb—every button looks the same, and there is no visual verification before order routing.'
    • 'Speed is essential, but confidence is non-negotiable.'`,
    
    persona: {
      name: "Marcus Vance",
      title: "Senior Quantitative Wealth Advisor",
      quote: "My clients trust me with $45 million. A single accidental market order on the wrong account can cost us a client relationship. I need precision, speed, and absolute clarity.",
      needs: "Instant portfolio drift detection, one-click tax-loss harvesting recommendations, and clear pre-flight order confirmation."
    },
    
    solution: `We designed a modular, high-contrast trading workspace organized around 'Actionable Drift':
    
    1. Real-Time Drift Heatmap: Instead of endless rows of numbers, advisors see an intuitive spatial heatmap highlighting accounts that require immediate rebalancing.
    2. Smart Rebalance Flow: A 3-step staged workflow that calculates optimal tax-loss harvesting, displays preview allocations side-by-side with historical baselines, and executes via smart order routing.
    3. Intentional Safeguards: Introduced 'Slide-to-Execute' gestures for trades exceeding $500k to prevent accidental clicks while keeping execution under 2 seconds.
    4. Adaptive Density Modes: Users can toggle between 'Spacious Review' (for client meetings) and 'High-Density Execution' (for active market hours).`,
    
    outcome: `Following the public launch across 40 wealth management firms:
    • Trade execution velocity increased by 41% across all user cohorts.
    • Onboarding time for new analysts dropped from 3 weeks to just 2 days.
    • Zero erroneous trades reported across $180M+ in transacted volume during the initial 90-day beta.
    • Secured $14M Series A funding led by top-tier fintech investors.`,
    
    reflection: `Designing for fintech taught me that true minimalist UI is not about removing features—it is about sequencing information so the user's cognitive load remains completely flat, regardless of market volatility.`
  },

  aura: {
    id: "aura",
    title: "Aura Health — Personalized Circadian & Mental Wellness",
    subtitle: "Translating complex wearable biometrics into restorative daily routines through calm, spatial interface design.",
    category: "iOS & Android Mobile Application",
    year: "2026",
    client: "Aura Health Labs",
    role: "Principal Mobile Product Designer & User Researcher",
    timeline: "4 Months (Q1 2026)",
    tools: "Figma, Principle, Swift UI Handoff, Maze Usability Testing",
    metrics: [
      { label: "Day-30 Retention", value: "78%" },
      { label: "App Store Rating", value: "4.9★" },
      { label: "Active Daily Routines", value: "1.2M+" },
      { label: "Apple Design Nominee", value: "2026" }
    ],
    overview: `Aura Health is an iOS and Android companion app that connects with continuous biometric sensors (Oura Ring, Apple Watch, Whoop) to synchronize the user's daily habits with their natural circadian rhythm.
    
    Instead of bombarding users with clinical charts and guilt-inducing alerts, Aura transforms biometric data into calm, fluid ambient visual feedback that guides sleep, focus intervals, light exposure, and evening wind-down routines.`,
    
    challenge: `The digital health market is saturated with anxiety-inducing dashboards. Users often abandon wearable trackers after 60 days because seeing 'Poor Sleep Score: 52' without an immediate, gentle recovery plan creates stress rather than wellness.
    
    Our design challenge: How do we communicate deep cardiovascular, HRV, and sleep phase telemetry without triggering health anxiety?`,
    
    research: `We led a 3-week longitudinal diary study with 28 participants wearing continuous biometric monitors. We mapped daily emotion curves against phone notification timestamps.
    
    Critical Discoveries:
    • Notification fatigue peaks between 7:00 AM and 9:00 AM when users check morning scores.
    • Users prefer qualitative, sensory guidance ('Your body is primed for creative focus today') over raw numerical data ('HRV 42ms, REM 18%').
    • Tactile micro-interactions (soft haptic pulses) significantly increase mindfulness exercise completion rates.`,
    
    persona: {
      name: "Dr. Elena Rostova",
      title: "Biomedical Researcher & Remote Professional",
      quote: "I love health data, but most apps make me feel like a failing patient. I want an app that gently nudges my day rather than grading me on numbers I can't immediately change.",
      needs: "Context-aware audio soundscapes, gentle circadian wake-up cues, and zero clinical jargon."
    },
    
    solution: `We anchored the entire mobile interface around the concept of the 'Circadian Orb':
    
    1. Dynamic Ambient Canvas: The background subtly shifts temperature and luminance according to solar time and biometric readiness—golden dawn, crisp midday daylight, and warm amber twilight.
    2. 3-Minute Micro-Interventions: Direct one-tap audio breathwork and optic realignment sessions designed to fit naturally into micro-breaks.
    3. Haptic Resonance: Custom tactile feedback tuned to human respiratory frequencies (4-7-8 breathing) so users can meditate with their eyes closed.
    4. Widget & Dynamic Island: Glanceable circadian status on the iOS Lock Screen without requiring users to open the app.`,
    
    outcome: `• Day-30 retention reached an industry-record 78% (more than 3x the health app benchmark of 22%).
    • Nominated for Apple Design Award in the Social Impact & Inclusivity category.
    • Over 1.2 million daily routines logged within the first quarter of release.`,
    
    reflection: `Great mobile design is polite. It knows when to speak, how softly to speak, and when to let the user return to their real world.`
  },

  prism: {
    id: "prism",
    title: "Prism OS — Multi-Brand Design System & Component Infrastructure",
    subtitle: "An enterprise design token architecture and 60+ accessible component primitives powering 4 cross-platform product suites.",
    category: "Design System & Design Engineering",
    year: "2025–2026",
    client: "OmniTech Cloud Ecosystem",
    role: "Design Systems Architect & Front-End Prototyper",
    timeline: "8 Months (2025–2026)",
    tools: "Figma Token Studio, Style Dictionary, Storybook, Semantic HTML/CSS, TypeScript",
    metrics: [
      { label: "Handoff Velocity Gain", value: "58%" },
      { label: "WCAG Accessibility", value: "100% AAA" },
      { label: "Component Primitives", value: "60+" },
      { label: "Engineers Migrated", value: "48+" }
    ],
    overview: `Prism OS is an open-spec, multi-brand design system created to unify 4 enterprise SaaS applications under one cohesive aesthetic language and technical foundation.
    
    As the lead design system architect, I established the global token schema, built the comprehensive Figma component library, authored interactive documentation in Storybook, and paired with front-end engineers to ensure 100% WCAG 2.2 AAA accessibility compliance.`,
    
    challenge: `Four acquired business units were maintaining separate UI kits in varying states of decay. Product designers spent 40% of their sprints redrawing standard components, while front-end engineers routinely reimplemented buttons, dropdowns, and modals with differing accessibility behaviors and CSS conflicts.
    
    The challenge was establishing a single source of truth flexible enough for diverse products without compromising consistency or performance.`,
    
    research: `Conducted an exhaustive UI audit across 320 distinct views across all 4 products. Identified 42 different shades of blue, 19 modal implementations, and widespread accessibility failures in keyboard focus states and screen reader announcements.
    
    We held cross-functional workshops with design leads, frontend engineers, and accessibility advocates to define governance and token taxonomy.`,
    
    persona: {
      name: "David Chen",
      title: "Senior Full-Stack Engineer",
      quote: "I want to build features, not debate padding and hex codes on pull requests. Give me rock-solid primitives that work out of the box with keyboard navigation and zero CSS bugs.",
      needs: "Strong TypeScript typings, zero-overhead CSS variables, and copy-paste interactive Storybook recipes."
    },
    
    solution: `Built a 3-layer atomic token structure powered by Style Dictionary:
    
    1. Global Primitives: Unopinionated math scales for spacing, color hex values, and font metrics.
    2. Semantic Tokens: Purpose-driven tokens (e.g., --color-surface-elevated, --focus-ring-color) that adapt seamlessly across Light, Dark, and High-Contrast modes.
    3. Component Primitives: 60+ robust components featuring full keyboard navigation, ARIA live announcements, and responsive micro-interactions.
    4. Automated CI/CD Token Pipeline: Designers update tokens in Figma Token Studio; GitHub Actions automatically builds and publishes NPM packages for React, Vue, and vanilla CSS variables.`,
    
    outcome: `• Decreased designer-to-developer handoff time by 58%.
    • 100% WCAG 2.2 AAA color and keyboard compliance achieved across all 4 product suites.
    • Reduced CSS bundle payload by 44% by eliminating duplicate utility libraries.
    • Won 'Best Internal Tooling Initiative' at OmniTech Annual Engineering Awards.`,
    
    reflection: `A design system is 20% components and 80% communication. The most elegant Figma library is useless unless engineers and designers trust each other and have frictionless contribution channels.`
  },

  vesper: {
    id: "vesper",
    title: "Vesper — Curated Architectural & Spatial E-Commerce",
    subtitle: "Merging museum-grade editorial storytelling with interactive 3D spatial previews and frictionless 1-tap checkout.",
    category: "Premium E-Commerce & Interactive 3D",
    year: "2026",
    client: "Vesper Architectural Objects",
    role: "Creative Director & Lead UI/UX Designer",
    timeline: "3 Months (Q2 2026)",
    tools: "Figma, Three.js prototyping, GSAP, Blender, Shopify Plus",
    metrics: [
      { label: "Average Order Value (AOV)", value: "+34%" },
      { label: "Return Rate Reduction", value: "18%" },
      { label: "Checkout Conversion", value: "4.2%" },
      { label: "Awwwards Feature", value: "Site of Day" }
    ],
    overview: `Vesper is a high-end architectural furniture and spatial decor brand based in Zurich. They craft bespoke, limited-run physical objects ($2,500 – $18,000) that blur the line between furniture and modern sculpture.
    
    We designed an e-commerce platform that matches the reverence of an art museum catalog while providing interactive 3D material inspection and an instantaneous purchasing flow.`,
    
    challenge: `Selling luxury furniture online is fraught with spatial hesitation. Customers hesitate to invest $8,000 in an architectural armchair without seeing how the leather patinates, how sunlight strikes the brushed aluminum joints, and how the proportions fit within their living space.
    
    Traditional e-commerce templates failed to convey the weight, tactile craft, and provenance of these pieces.`,
    
    research: `Interviewed 14 private interior collectors and architects who regularly specify high-end furniture.
    
    Key Insights:
    • High-net-worth buyers don't browse grids of 40 tiny photos; they want deep editorial essays on materials, joinery, and architectural philosophy.
    • Interactive 3D is only effective if it loads in under 1 second without lagging the browser.
    • Checkout must feel discreet, secure, and respectful—no intrusive popups or urgency countdown timers.`,
    
    persona: {
      name: "Soren Lindqvist",
      title: "Architectural Collector & Interior Designer",
      quote: "When I purchase a bespoke chair, I am buying a piece of architectural heritage. The digital experience must reflect the same quiet dignity and uncompromising material truth.",
      needs: "Accurate material visualization, dimensional blueprints, and direct concierge inquiry channels."
    },
    
    solution: `Created an editorial digital gallery rooted in Swiss typography and spatial interaction:
    
    1. Interactive Dimensional Blueprint: Customers toggle between high-resolution studio photography and an interactive wireframe blueprint showing millimeter-accurate dimensions.
    2. Real-Time Material Configurator: Seamlessly swap between Aniline Saddle Leather, Charred Shou Sugi Ban Wood, and Brushed Cobalt Steel with physically based rendering (PBR).
    3. Spatial Room Scale Mode: Augmented reality preview lets buyers place the exact object into their space with 1 tap.
    4. Concierge 1-Tap Checkout: Apple Pay and Wire Transfer integration with dedicated white-glove delivery scheduling.`,
    
    outcome: `• Average Order Value jumped by 34% due to multi-material configuration.
    • Product return rate dropped by 18% as buyers had precise spatial and color understanding prior to delivery.
    • Featured on Awwwards Site of the Day, Typewolf, and Mindsparkle Mag for excellence in typography and interaction design.`,
    
    reflection: `Restraint is the ultimate luxury. By stripping away standard e-commerce clutter (badges, discount popups, flashing banners), the beauty of the object speaks for itself.`
  }
};

/* --- Global Case Study Modal Renderer --- */
function openCaseStudyModal(projectId) {
  const project = CASE_STUDIES_DATA[projectId];
  if (!project) return;

  const modalOverlay = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('caseStudyModalBody');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalTitle = document.getElementById('modalTitle');

  if (!modalOverlay || !modalBody) return;

  modalCategoryBadge.textContent = project.category;
  modalTitle.textContent = project.title;

  modalBody.innerHTML = `
    <!-- Case Study Header -->
    <div class="case-hero-header">
      <div class="case-category-badge">${project.category} • ${project.year}</div>
      <h2 class="case-headline">${project.title}</h2>
      <p class="section-description" style="font-size: 1.125rem;">${project.subtitle}</p>

      <div class="case-meta-grid">
        <div class="case-meta-item">
          <span class="case-meta-label">Client / Org</span>
          <span class="case-meta-val">${project.client}</span>
        </div>
        <div class="case-meta-item">
          <span class="case-meta-label">My Role</span>
          <span class="case-meta-val">${project.role}</span>
        </div>
        <div class="case-meta-item">
          <span class="case-meta-label">Timeline</span>
          <span class="case-meta-val">${project.timeline}</span>
        </div>
        <div class="case-meta-item">
          <span class="case-meta-label">Core Tools</span>
          <span class="case-meta-val">${project.tools}</span>
        </div>
      </div>
    </div>

    <!-- Impact Metrics Cards -->
    <div class="case-section-block">
      <h3>Key Measurable Impact</h3>
      <div class="project-impact-box" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
        ${project.metrics.map(m => `
          <div class="impact-item">
            <span class="impact-metric" style="color: var(--accent-cobalt);">${m.value}</span>
            <span class="impact-label">${m.label}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Overview & Problem -->
    <div class="case-section-block">
      <h3>01 / The Context & Problem</h3>
      <p>${project.overview.replace(/\n\n/g, '</p><p>')}</p>
      <div class="case-quote-box">
        ${project.challenge.replace(/\n\n/g, '<br><br>')}
      </div>
    </div>

    <!-- Research & Discovery -->
    <div class="case-section-block">
      <h3>02 / Research & Insights</h3>
      <p>${project.research.replace(/\n\n/g, '</p><p>').replace(/• /g, '• ')}</p>
      
      <!-- Persona Card -->
      <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-6); margin-top: var(--space-4);">
        <div style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent-cobalt); text-transform: uppercase; font-weight: 700; margin-bottom: 4px;">User Persona Archetype</div>
        <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">${project.persona.name}</h4>
        <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: var(--space-3);">${project.persona.title}</p>
        <blockquote style="font-style: italic; font-size: 0.9375rem; color: var(--text-primary); border-left: 2px solid var(--accent-cobalt); padding-left: 12px; margin-bottom: var(--space-3);">
          "${project.persona.quote}"
        </blockquote>
        <p style="font-size: 0.8125rem; color: var(--text-secondary);"><strong>Core Need:</strong> ${project.persona.needs}</p>
      </div>
    </div>

    <!-- Solution & Architecture -->
    <div class="case-section-block">
      <h3>03 / UX Strategy & High-Fidelity Solution</h3>
      <p>${project.solution.replace(/\n\n/g, '</p><p>')}</p>
    </div>

    <!-- Business Outcome & Reflection -->
    <div class="case-section-block">
      <h3>04 / Business Outcomes & Retrospective</h3>
      <p>${project.outcome.replace(/\n\n/g, '</p><p>')}</p>
      <div style="padding: var(--space-6); background-color: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-top: var(--space-4);">
        <h5 style="font-size: 0.875rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Designer Reflection:</h5>
        <p style="font-size: 0.875rem; color: var(--text-secondary); font-style: italic;">${project.reflection}</p>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: var(--space-6); margin-top: var(--space-8);">
      <button class="btn btn-secondary" onclick="closeCaseStudyModal()">
        ← Close Case Study
      </button>
      <a href="#contact" class="btn btn-primary" onclick="closeCaseStudyModal()">
        Discuss This Project With Nihar →
      </a>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalOverlay.focus();
}

function closeCaseStudyModal() {
  const modalOverlay = document.getElementById('caseStudyModal');
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

