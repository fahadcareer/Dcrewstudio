/**
 * Centralized Static Datastore
 * Houses portfolio projects, specialized service channels, FAQ items, and team details.
 */

export const siteServices = [
  {
    id: 'consultation',
    title: 'Architectural & Interior Consultation',
    tagline: 'Conceptualizing spatial programs and material schemes.',
    desc: 'Expert advisory services guiding spatial program development, zoning regulations, solar path tracking, daylight analyses, structural layouts, and high-end curated travertine/timber material selection boards.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
    benefits: [
      'Site-specific solar path and natural ventilation study.',
      'Spatial programming and initial zoning reviews.',
      'Tailored material finishes and mood board advisory.',
      'Architectural lighting circuit schedule planning.',
    ],
    details: [
      { title: 'Vision Briefing', description: 'Aligning spatial volume expectations, timeline milestones, and site restrictions.' },
      { title: 'Concept Schematics', description: 'Generating layout sketch vectors and massing flow studies.' },
      { title: 'Material Curating', description: 'Reviewing travertine stone, certified oak, and metal textures.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
    ]
  },
  {
    id: 'execution',
    title: 'Architectural & Interior Execution',
    tagline: 'Constructing details with absolute site precision.',
    desc: 'Translating schematic models and detail engineering blueprints into physical structures. We execute site framing, concrete foundations pouring, structural bricklaying, bespoke carpentry fittings, and fine masonry work.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200',
    benefits: [
      'Integrated onsite engineering safety supervision.',
      'Precision stonemasonry laying (travertine, granite).',
      'Bespoke joinery and wardrobe detailing assembly.',
      'State-of-the-art structural finishes and tolerances.',
    ],
    details: [
      { title: 'Site Preparation', description: 'Excavation management, earthworks, and setting out grids.' },
      { title: 'Superstructure Build', description: 'Concrete slab pouring, wall assemblies, and structural framing.' },
      { title: 'Fit-out Execution', description: 'Carpentry millwork, window framing installations, and masonry laying.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    ]
  },
  {
    id: 'pmc',
    title: 'Project Management Consultancy',
    tagline: 'Guarding client budgets, timelines, and execution audits.',
    desc: 'Acting as the client’s lead representative. We coordinate external general contracting crews, schedule mechanical networks piping, audit material supply chain invoices, and conduct strict structure quality tests.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
    benefits: [
      'Critical path timeline schedule tracking systems.',
      'Material cost engineering and supplier contract audits.',
      'Third-party work quality inspection checks.',
      'Secure digital client portal feed updates.',
    ],
    details: [
      { title: 'Tendering & Costing', description: 'Auditing material takeoff sheets and contract builder estimates.' },
      { title: 'Schedule Control', description: 'Monitoring delay coordinates to enforce project delivery metrics.' },
      { title: 'Quality Auditing', description: 'Onsite inspections to verify work conforms to blueprints.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    ]
  },
  {
    id: 'turn-key',
    title: 'Turn Key',
    tagline: 'Bespoke design-to-handover contract responsibility.',
    desc: 'Our complete master design-build package. We coordinate the full project pipeline from first design briefing sketches and permit approvals to material sourcing logistics, construction site engineering, and key handovers.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    benefits: [
      'Single point of contract design-build responsibility.',
      'Streamlined communication with zero contractor conflicts.',
      'End-to-end material sourcing and cargo logistics.',
      'Complete walk-in ready handover coordination.',
    ],
    details: [
      { title: 'Integrated Design', description: 'Simultaneous architectural planning and interior detail drawings.' },
      { title: 'Build Engineering', description: 'Integrated onsite crew management and safety oversight.' },
      { title: 'Keys Handover', description: 'Municipal code certifications, system inspections, and move-in readiness.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
    ]
  },
  {
    id: 'visualization',
    title: '3D Visualization',
    tagline: 'Pre-inspecting physical details via high-fidelity CGI.',
    desc: 'Creating photo-realistic CGI architectural renderings, virtual reality walkthroughs, and solar physics models, letting you inspect timber alignments, stone shadows, and spatial volumes before construction.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
    benefits: [
      'Photo-realistic interior and exterior CGI renders.',
      '3D walkthrough video flyovers and VR setups.',
      'Daylight and artificial illumination physics simulation.',
      'Visual detailing checks before onsite purchases.',
    ],
    details: [
      { title: 'Wireframe Modeling', description: 'Building the digital geometry and spatial volumes.' },
      { title: 'Texture Mapping', description: 'Applying accurate material maps (travertine, cedar, brushed brass).' },
      { title: 'Render Calculation', description: 'Simulating daylight reflection physics and shadows.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
    ]
  }
];


export const siteProjects = [
  {
    id: 'obsidian-residence',
    title: 'The Obsidian Residence',
    subtitle: 'High-Contrast Waterfront Villa',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
    aspectRatio: 'portrait',
    overview: {
      client: 'Thorne Estate Holdings',
      location: 'Lake Como, Italy',
      year: '2025',
      area: '5,400 sq ft',
      type: 'Luxury Residential',
    },
    description: 'An architectural statement balancing exposed black concrete slabs against high-transparency glass curtains. Built on a lakeside slope, the Obsidian Residence utilizes cantilevered structures to offer panoramic views while maintaining complete thermal efficiency and privacy.',
    materials: [
      'Exposed Charcoal Concrete',
      'Travertine Floor Tiles',
      'Structural Steel Joists',
      'Double-Glazed Low-E Glass Panels',
      'Bespoke Brushed Brass Accents',
    ],
    timeline: [
      { phase: '01 / Foundation', duration: '3 Months', description: 'Excavation of lakefront slope and pouring of structural concrete piles.' },
      { phase: '02 / Framing', duration: '4 Months', description: 'Erection of structural steel frame and cantilevers.' },
      { phase: '03 / Glazing', duration: '2 Months', description: 'Installation of high-performance sliding glass wall systems.' },
      { phase: '04 / Finishings', duration: '4 Months', description: 'Interior travertine laying, walnut millwork, and custom lighting fixtures.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
    ]
  },
  {
    id: 'aura-living-pavilion',
    title: 'Aura Living Pavilion',
    subtitle: 'Warm Minimalism Living Space',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800',
    aspectRatio: 'square',
    overview: {
      client: 'D. Vane Private Collection',
      location: 'Milan, Italy',
      year: '2024',
      area: '2,800 sq ft',
      type: 'Penthouse Apartment',
    },
    description: 'An interior remodel focusing on spatial quietness. The Aura Living Pavilion features continuous micro-cement floors, wall-recessed pocket doors, custom oak cabinetry, and integrated ambient lighting slots that hide the fixtures to prioritize pure light and shadow patterns.',
    materials: [
      'Seamless Micro-Cement Plaster',
      'Raw Solid White Oak',
      'Brushed Stainless Steel Sheets',
      'Natural Linen Drapery',
      'Concealed LED Fixtures',
    ],
    timeline: [
      { phase: '01 / Demolition', duration: '1 Month', description: 'Stripping out original partition walls, floors, and legacy wiring.' },
      { phase: '02 / Services', duration: '1.5 Months', description: 'Installation of high-efficiency climate control ducting and lighting circuits.' },
      { phase: '03 / Carpentry', duration: '2 Months', description: 'Fitting of custom oak timber wall panels and bespoke wardrobes.' },
      { phase: '04 / Furnishing', duration: '1 Month', description: 'Laying natural linens, placing custom travertine tables, and art curation.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
    ]
  },
  {
    id: 'concrete-gridhouse',
    title: 'The Concrete Gridhouse',
    subtitle: 'Brutalist Framework Concept',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800',
    aspectRatio: 'square',
    overview: {
      client: 'L. Moretti Private Client',
      location: 'Geneva, Switzerland',
      year: '2025',
      area: '4,200 sq ft',
      type: 'Single Family Villa',
    },
    description: 'An architectural design characterized by a rigid, three-dimensional concrete modular frame. The grid pattern controls the placement of double-height windows, floating internal loft walkways, and custom-positioned outdoor garden courtyards.',
    materials: [
      'Rough Board-Formed Concrete',
      'Belgian Bluestone Paving',
      'Anodized Matte Black Aluminum',
      'Tempered Structural Balustrades',
      'Polished Concrete Flooring',
    ],
    timeline: [
      { phase: '01 / Excavation', duration: '2 Months', description: 'Securing structural slope retaining systems.' },
      { phase: '02 / Formwork', duration: '5 Months', description: 'Building the wooden form molds for the custom board-formed grid structure.' },
      { phase: '03 / Enclosure', duration: '2 Months', description: 'Mounting grid aluminum framing and double-pane glazed windows.' },
      { phase: '04 / Landscaping', duration: '2 Months', description: 'Integrating courtyard garden layouts and stone pool structures.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200',
    ]
  },
  {
    id: 'helix-monolith',
    title: 'Helix Office Monolith',
    subtitle: 'Parametric Concrete Facade',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
    aspectRatio: 'portrait',
    overview: {
      client: 'Aethel Commercial Group',
      location: 'Munich, Germany',
      year: '2026',
      area: '45,000 sq ft',
      type: 'Commercial Headquarters',
    },
    description: 'A commercial development building presenting a twisting, parameter-controlled concrete louvers facade. The construction process integrated custom-engineered precast concrete modules assembled via heavy crane lifts on a central elevator shaft.',
    materials: [
      'Precast Parametric Concrete Louvers',
      'Structural Curtain Wall Glazing',
      'Polished White Granite Slabs',
      'Recycled Internal Steel Columns',
      'Smart Climate Systems',
    ],
    timeline: [
      { phase: '01 / Substructure', duration: '4 Months', description: 'Pouring 3-level underground parking basement foundations.' },
      { phase: '02 / Core Lift', duration: '3 Months', description: 'Constructing the slip-formed central elevator concrete core.' },
      { phase: '03 / Precast Install', duration: '6 Months', description: 'Crane mounting of parametric precast louver window shields.' },
      { phase: '04 / Fitout', duration: '5 Months', description: 'Acoustic layouts, modular office system installations, and lobby fit-outs.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
    ]
  }
];

export const siteFaq = [
  {
    question: 'What is D’Crew Studio’s standard project duration?',
    answer: 'Architectural planning and schematics typically take 3 to 6 months. General construction execution varies based on project scale, with luxury residential homes ranging from 12 to 18 months, and commercial developments taking up to 24 months.'
  },
  {
    question: 'Do you manage both the design phase and site construction?',
    answer: 'Yes, we are a integrated design-build studio. We provide a single point of contract responsibility for both the conceptual architecture/interior layout drafting and the physical general construction engineering.'
  },
  {
    question: 'Can you work with client-nominated external general contractors?',
    answer: 'Absolutely. While we offer a fully integrated design-build service, we frequently act purely as the Lead Architect and Interior Designer, collaborating with client-nominated project managers and contractors.'
  },
  {
    question: 'How do you coordinate remote projects for international clients?',
    answer: 'We provide our clients with private, digital project portals. You receive weekly drone surveys, schedule tracking logs, material invoicing details, and photo updates, ensuring full visibility regardless of your physical location.'
  },
  {
    question: 'What sustainable design systems do you integrate?',
    answer: 'We prioritize passive sustainability: solar orientation planning, natural insulation systems, rainwater harvesting structures, and high-efficiency geothermal HVAC plants. We source certified raw timbers and stone materials locally.'
  }
];

export const sitePartners = [
  {
    name: 'Alessandro Moretti',
    role: 'Managing Principal & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    bio: 'With over 20 years leading luxury residential design across Europe, Alessandro oversees the studio’s global architectural direction and material sourcing standards.'
  },
  {
    name: 'Sofia Vane',
    role: 'Director of Interior Architecture',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    bio: 'Sofia specializes in warm minimalism. She leads the interior carpentry, lighting fixtures design, and raw stone material specifications for our private penthouses.'
  },
  {
    name: 'Marcus Brandt',
    role: 'Chief Construction Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600',
    bio: 'Marcus manages general site safety, steel structural calculations, and building permit compliance, ensuring conceptual designs translate to safe, physical masterpieces.'
  }
];
