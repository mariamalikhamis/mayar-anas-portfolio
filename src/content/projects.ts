// ─────────────────────────────────────────────────────────────
// PROJECTS — edit this file to add, remove or reorder work.
// The order of this array is the order on the home page.
// A project with `page` gets its own page at /work/[slug].
// ─────────────────────────────────────────────────────────────

export const categories = {
  urban: 'Urban Planning & Development',
  res: 'Residential Architecture',
  com: 'Commercial Architecture',
  ind: 'Industrial Architecture',
  marine: 'Marine & Shipyard Facilities',
  health: 'Healthcare Architecture',
} as const;

export type Category = keyof typeof categories;

/** One image inside a project page section */
export type Shot = {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption?: string;
  /** spans both columns of a 2-column grid */
  wide?: boolean;
  /** crops to this aspect ratio, e.g. '3 / 2' (otherwise the whole image is shown) */
  ratio?: string;
};

export type Section = {
  eyebrow: string;
  title: string;
  text?: string;
  /** chips under the text, e.g. access roads */
  chips?: string[];
  /** two lists side by side, e.g. "On land" / "On the waterfront" */
  lists?: { title: string; items: { title: string; body: string }[] }[];
  /** small cards, e.g. challenges */
  cards?: { title: string; body: string }[];
  /** 'split' puts the text beside the images; default stacks them */
  layout?: 'split' | 'stack';
  shots?: Shot[];
};

export type ProjectPage = {
  lead: string;
  tags: string[];
  facts: { label: string; value: string }[];
  role?: { title: string; text: string; chips: string[] };
  sections: Section[];
  numbers: { value: string; label: string }[];
};

export type Project = {
  slug: string;
  cat: Category;
  type: string;
  tags: string[];
  title: string;
  desc: string;
  cover: string;
  coverAlt: string;
  coverSize: [number, number];
  page?: ProjectPage;
};

export const projects: Project[] = [
  {
    slug: 'minet-el-basal',
    cat: 'urban',
    type: 'Urban regeneration',
    tags: ['Western Harbour, Alexandria', '2024', 'Graduation project'],
    title: 'Minet El Basal revitalization',
    desc: 'Reviving a historic port district around textile and fashion industry, with a new waterfront.',
    cover: '/covers/minet.webp',
    coverAlt: 'Render of a public plaza in front of restored red-brick warehouses in Minet El Basal',
    coverSize: [1867, 998],
    page: {
      lead: 'Revitalizing the historic district of Minet El Basal in Alexandria’s Western Harbour around textile and fashion industry, with a new waterfront for the city.',
      tags: ['Urban regeneration', 'Waterfront design', 'Heritage', 'Textile & fashion industry'],
      facts: [
        { label: 'Location', value: 'Western Harbour, Alexandria' },
        { label: 'Year', value: '2024' },
        { label: 'Type', value: 'Graduation project' },
        { label: 'Total area', value: '311 acres' },
        { label: 'Department', value: 'Urban Design, Alexandria University' },
      ],
      sections: [
        {
          eyebrow: '01 · The site',
          title: 'Between two harbours',
          text: 'The site spans three districts, Al-Gomrok, Al-Laban and Minet El Basal, on Alexandria’s Western Harbour. Most of its buildings today are warehouses.',
          chips: ['Unknown Soldier Square', 'Al-Tahrir Square', 'Al-Bahrya Street', 'Abdel Moneim Street', 'Abdelal Street', 'Al-Max', 'Al-Bitash', 'Al-Nasr Street'],
          layout: 'split',
          shots: [
            { src: '/work/minet/location.webp', alt: 'Site location maps, from the world map down to the Western and Eastern Harbours of Alexandria', w: 2000, h: 462 },
            { src: '/work/minet/access.webp', alt: 'Site accessibility diagram showing public and private transport routes, tram line, heavy vehicles and traffic jams', w: 2000, h: 621 },
          ],
        },
        {
          eyebrow: '02 · Analysis',
          title: 'Reading the site',
          text: 'Sustainability runs through the plan: reducing energy use in line with LEED certification and applying the UN Sustainable Development Goals.',
          shots: [
            { src: '/work/minet/analysis.webp', alt: 'Site analysis: photos of existing warehouses and maps of building condition, height, use and solid-void', w: 1965, h: 1114, caption: 'Site analysis: most of the buildings are warehouses', wide: true },
            { src: '/work/minet/swot.webp', alt: 'SWOT analysis of strengths, weaknesses, opportunities and threats', w: 2000, h: 296, caption: 'SWOT analysis' },
            { src: '/work/minet/sustain.webp', alt: 'Sustainability strategies: LEED credit categories, electric carts, solar lighting, recycling and solar-covered parking', w: 2000, h: 696, caption: 'Sustainability: LEED and SDGs' },
          ],
        },
        {
          eyebrow: '03 · Idea & concept',
          title: 'Reviving the heritage area by reusing its buildings in a way that attracts people',
          text: 'The link between the cotton heritage buildings, the commercial port and the sea led to a fashion and textile program that reflects the area’s past and its foreign trade. Two main approaches, one from the heritage buildings and one from the tourist station, draw visitors in, while open spaces serve the people who live there.',
          shots: [
            { src: '/work/minet/idea.webp', alt: 'Idea diagram linking fashion and textile, heritage industry, the waterfront port and tourism', w: 1561, h: 910, caption: 'Idea' },
            { src: '/work/minet/concept.webp', alt: 'Concept and strategy diagram with two main approaches, gathering plazas, waterfront public realm and network connections', w: 2000, h: 1400, caption: 'Concept and strategy' },
          ],
        },
        {
          eyebrow: '04 · Program & masterplan',
          title: 'The plan',
          shots: [
            { src: '/work/minet/masterplan.webp', alt: 'Master plan of the district and its waterfront basin', w: 2000, h: 1888, wide: true },
            { src: '/work/minet/zoning.webp', alt: 'Program and zoning plan with a table of zones and areas, total 311 acres', w: 1985, h: 836, caption: 'Program and zoning · total area 311 acres' },
            { src: '/work/minet/action.webp', alt: 'Action area plan with pedestrian routes between the blocks', w: 1955, h: 2102, caption: 'Action area' },
          ],
        },
        {
          eyebrow: '05 · Old and new',
          title: 'Keeping the street’s memory',
          text: 'Elevations compare the district’s streets as they are today with the proposed design.',
          shots: [
            { src: '/work/minet/elev1old.webp', alt: 'Existing street elevation 1 with Makbas Misr, Makbas El Nile and Alexandria Bank', w: 2000, h: 501, caption: 'Elevation 1, existing' },
            { src: '/work/minet/elev1new.webp', alt: 'Proposed street elevation 1', w: 2000, h: 246, caption: 'Elevation 1, proposed' },
            { src: '/work/minet/elev2old.webp', alt: 'Existing street elevation 2 with Makbas El Tareikh and Makbas 45', w: 2000, h: 458, caption: 'Elevation 2, existing' },
            { src: '/work/minet/elev2new.webp', alt: 'Proposed street elevation 2', w: 2000, h: 338, caption: 'Elevation 2, proposed' },
          ],
        },
        {
          eyebrow: '06 · In 3D',
          title: 'Walking through it',
          shots: [
            { src: '/work/minet/section3d.webp', alt: '3D section through the restored warehouses and the central open space', w: 2000, h: 347, caption: '3D section', wide: true },
            { src: '/work/minet/approach.webp', alt: 'Aerial render of the main approach: a landscaped path leading between the warehouses', w: 2000, h: 818, caption: 'The main approach', ratio: '3 / 2' },
            { src: '/work/minet/shot1.webp', alt: 'Render of shaded picnic tables on a public plaza', w: 1512, h: 1015, caption: 'Public plaza', ratio: '3 / 2' },
            { src: '/work/minet/shot3.webp', alt: 'Render of a green lawn with a pedestrian bridge and the clock tower behind', w: 1867, h: 826, caption: 'The green spine and the clock tower', ratio: '21 / 9', wide: true },
          ],
        },
      ],
      numbers: [
        { value: 'B+', label: 'Graduation project grade, Alexandria University' },
        { value: 'Paris', label: 'Heritage ideas for Minet El Basal presented with French universities, 2023' },
        { value: '311 acres', label: 'Planned across Al-Gomrok, Al-Laban and Minet El Basal' },
      ],
    },
  },
  {
    slug: 'adabiya-shipyard',
    cat: 'marine',
    type: 'Marine & shipyard',
    tags: ['Adabiya, Suez', '10,800 m²', 'Le.Jardin'],
    title: 'Adabiya Shipyard',
    desc: 'Upgrading a shipyard on the Gulf of Suez with a new quay, travel lift, slipway and larger workshops. I worked on design development, 3D modelling of the buildings and landscape, and parts of the rendering.',
    cover: '/covers/shipyard.webp',
    coverAlt: 'Aerial render of Adabiya Shipyard at sunset: a ship on the slipway, the main workshops and a travel lift over the water',
    coverSize: [1540, 863],
    page: {
      lead: 'Upgrading a shipyard on the Gulf of Suez so it can build, repair and launch larger vessels: a new quay, a travel lift, an airbag slipway and bigger workshops.',
      tags: ['Marine & shipyard', 'Industrial', 'Waterfront', 'Schematic design'],
      facts: [
        { label: 'Location', value: 'Adabiya, Suez, Egypt' },
        { label: 'Stage', value: 'Schematic design' },
        { label: 'Land area', value: '10,800 m²' },
        { label: 'Waterfront', value: '315 m' },
        { label: 'Office', value: 'Le.Jardin' },
      ],
      role: {
        title: 'Design development, 3D and visualisation',
        text: 'I contributed to the architectural design development of the project, including the 3D modeling of the building and its surrounding landscape. I also participated in selected aspects of the visualization and rendering process, contributing to the overall visual representation of the design.',
        chips: ['Design development', '3D modelling', 'Landscape', 'Rendering'],
      },
      sections: [
        {
          eyebrow: '01 · The site',
          title: 'On the Gulf of Suez',
          text: 'The site sits on the western shore of the Gulf of Suez, inside one of Egypt’s main maritime and industrial clusters, close to commercial and oil ports. Main roads lead to Cairo, and two railway lines connect the port to military and commercial facilities.',
          chips: ['North · Ain Sokhna Port', 'South · Adabiya Port', 'East · Gulf of Suez', 'West · Adabiya industrial zone'],
          layout: 'split',
          shots: [
            { src: '/work/shipyard/site.webp', alt: 'Strategic location board: access routes, the site on the world shipping map and the geographic context of Adabiya on the Gulf of Suez', w: 1680, h: 1109 },
          ],
        },
        {
          eyebrow: '02 · Where it started',
          title: 'A strong site without the infrastructure',
          text: 'The site has a direct waterfront and sits near major ports and shipping lanes, but it lacks specialised marine infrastructure and enough room to operate. The existing elements were a main workshop, a service building, the entrance, the waterfront and the boundary wall.',
          shots: [
            { src: '/work/shipyard/existing.webp', alt: 'Aerial view of the existing site with numbered existing elements: workshop, service building, entrance, waterfront and boundary wall', w: 1680, h: 991, wide: true },
          ],
          cards: [
            { title: 'Limited operating capacity', body: 'Not enough space to build and repair larger vessels.' },
            { title: 'Limited support services', body: 'Few facilities for administration and workers.' },
            { title: 'Weak land–sea link', body: 'No proper way to move vessels between water and workshops.' },
          ],
        },
        {
          eyebrow: '03 · The plan',
          title: 'Eleven moves, on land and at sea',
          text: 'The client’s brief set the spaces each zone needed. The plan answers it with six moves on land and five on the waterfront.',
          shots: [
            { src: '/work/shipyard/elements.webp', alt: 'Development plan over an aerial photo with the eleven numbered elements', w: 1680, h: 1034, wide: true },
          ],
          lists: [
            {
              title: 'On land',
              items: [
                { title: 'Main entrance', body: 'Moved next to the boundary wall, about 10 m wide.' },
                { title: 'Main building', body: 'Roof extended to create shaded work areas.' },
                { title: 'Service facilities', body: 'Toilets and a rest area for workers.' },
                { title: 'Main workshop', body: 'Extended by 40 m.' },
                { title: 'Administration building', body: 'Offices, stores and toilets.' },
                { title: 'Security', body: 'A security fence with a large main gate.' },
              ],
            },
            {
              title: 'On the waterfront',
              items: [
                { title: 'Land reclamation', body: 'About 12,000 m² of new buildable land.' },
                { title: 'New quay', body: '115 m long, to receive new vessels.' },
                { title: 'Travel-lift track', body: 'A working route for the marine travel lift.' },
                { title: 'Airbag slipway', body: 'Launches large vessels on marine airbags.' },
                { title: 'Marine security barrier', body: 'Extended about 5 m into the sea.' },
              ],
            },
          ],
        },
        {
          eyebrow: '04 · Zoning',
          title: 'How the yard works',
          shots: [
            { src: '/work/shipyard/zoning.webp', alt: 'Functional zoning plan from above: workshop, services, administration, quay, launch area, crane track, storage and security gates', w: 1680, h: 1260, caption: 'Functional zoning' },
            { src: '/work/shipyard/masterplan.webp', alt: 'Master plan render with numbered elements over the shipyard and its new quay', w: 1540, h: 812, caption: 'Master plan' },
          ],
        },
        {
          eyebrow: '05 · Design language',
          title: 'Contemporary marine-industrial',
          text: 'Clear linear forms, a regular structure and a direct relationship with the water. Keeping industrial materials, the design adds open spaces, shaded areas and landscape, so the yard becomes a more organised, comfortable and human place to work.',
          layout: 'split',
          shots: [
            { src: '/work/shipyard/entrance.webp', alt: 'Render of the new main entrance with a truck arriving through the gate at dusk', w: 1540, h: 675, caption: 'The new main entrance', ratio: '4 / 3' },
            { src: '/work/shipyard/workshop.webp', alt: 'Render of the extended main workshop with its large opening and workers outside', w: 1540, h: 650, caption: 'The extended workshop', ratio: '4 / 3' },
          ],
        },
        {
          eyebrow: '06 · The waterfront',
          title: 'Getting vessels in and out',
          text: 'A new 115 m quay receives vessels, a travel lift moves them between the water, the workshops and maintenance areas, and an airbag slipway launches large units without big fixed lifting structures.',
          shots: [
            { src: '/work/shipyard/quay.webp', alt: 'Render of the new quay with a vessel moored beside the workshops', w: 1540, h: 857, caption: 'The new quay', ratio: '3 / 2' },
            { src: '/work/shipyard/slipway.webp', alt: 'Render of the airbag slipway with a vessel being launched', w: 1540, h: 800, caption: 'Airbag slipway', ratio: '3 / 2' },
            { src: '/work/shipyard/waterfront.webp', alt: 'Render of the travel lift over the water at sunset, carrying a vessel', w: 1540, h: 863, caption: 'The travel lift', ratio: '21 / 9', wide: true },
          ],
        },
        {
          eyebrow: '07 · The proposal',
          title: 'The yard, from above',
          shots: [
            { src: '/work/shipyard/aerial.webp', alt: 'Aerial render of the whole shipyard: workshops, quay, slipway and storage yard', w: 1540, h: 863, wide: true },
          ],
        },
      ],
      numbers: [
        { value: '10,800 m²', label: 'Total land area' },
        { value: '~12,000 m²', label: 'New land from reclamation' },
        { value: '115 m', label: 'New quay' },
        { value: '+40 m', label: 'Main workshop extension' },
      ],
    },
  },
  {
    slug: "suez-shipyard",
    cat: "marine",
    type: "Marine & shipyard",
    tags: ["Port Tawfeek, Suez", "68,000 m²", "Le.Jardin"],
    title: "Suez Shipyard",
    desc: "Reorganising the Suez Canal shipyard at Port Tawfeek: a larger ship-lift, connected workshops and a new administration building. I modelled every building in the master plan, designed the landscape and the Administration Building, and worked on parts of the rendering.",
    cover: "/covers/suez-shipyard.webp",
    coverAlt: "Aerial render of the Suez Shipyard on the canal at Port Tawfeek: ships on the ship-lift platforms beside the workshops",
    coverSize: [
      1680,
      942,
    ],
    page: {
      lead: "Upgrading the Suez Canal shipyard at Port Tawfeek: a tripled ship-lift, workshops organised as one production line, a clear road network and a new Administration & Technical Supervision Building.",
      tags: ["Marine & shipyard", "Industrial", "Master plan", "Schematic design"],
      facts: [
        {
          label: "Location",
          value: "Port Tawfeek, Suez, Egypt",
        },
        {
          label: "Client",
          value: "Suez Canal",
        },
        {
          label: "Stage",
          value: "Schematic design",
        },
        {
          label: "Land area",
          value: "68,000 m²",
        },
        {
          label: "Office",
          value: "Le.Jardin",
        },
      ],
      role: {
        title: "Master plan 3D, landscape and the Administration Building",
        text: "I contributed to the overall architectural development of the project, including the 3D modeling of all buildings across the master plan and the design of the surrounding landscape and site elements. My responsibilities also included the architectural design of the Administration Building, with detailed interior space planning and functional layout development. Additionally, I contributed to selected aspects of the visualization and rendering process.",
        chips: ["Architectural design", "3D modelling", "Landscape & site", "Interior space planning", "Rendering"],
      },
      sections: [
        {
          eyebrow: "01 · The site",
          title: "At the southern gate of the canal",
          text: "The yard sits at Port Tawfeek, where the Suez Canal meets the Gulf of Suez. More than 20,000 ships pass it every year, so a yard that repairs them quickly matters for the whole canal.",
          layout: "split",
          shots: [
            {
              alt: "Site board: the shipyard location at Port Tawfeek on the Suez Canal with its surrounding context",
              w: 1680,
              h: 1112,
              src: "/work/suez-shipyard/site.webp",
            },
          ],
        },
        {
          eyebrow: "02 · Where it started",
          title: "A busy yard working against its layout",
          text: "Workshops, berths and storage had grown piece by piece. Work paths were scattered, cranes covered too little of the yard, and workers shared routes with heavy equipment.",
          cards: [
            {
              title: "Operations",
              body: "Disconnected work paths, limited crane coverage and slow material handling.",
            },
            {
              title: "Facilities",
              body: "Ageing workshops and too little waterfront for repairs.",
            },
            {
              title: "Safety",
              body: "No logistics zoning, so workers mix with heavy equipment.",
            },
          ],
          shots: [
            {
              alt: "Existing site analysis with the current buildings, berths and problem areas marked",
              w: 1680,
              h: 1060,
              wide: true,
              src: "/work/suez-shipyard/existing.webp",
            },
          ],
        },
        {
          eyebrow: "03 · The proposals",
          title: "Seven moves to reorganise the yard",
          lists: [
            {
              title: "Land & buildings",
              items: [
                {
                  title: "More land",
                  body: "New land used for the Administration Building and stores.",
                },
                {
                  title: "Maintenance zone",
                  body: "Expanded land for one integrated maintenance area.",
                },
                {
                  title: "Demolish and rebuild",
                  body: "Old buildings replaced with a new, organised layout.",
                },
                {
                  title: "Connected workshops",
                  body: "Workshops grouped into blocks that follow the production flow.",
                },
              ],
            },
            {
              title: "Waterfront & movement",
              items: [
                {
                  title: "Bigger ship-lift",
                  body: "More and larger platforms for repairs.",
                },
                {
                  title: "Keep the berths and dry dock",
                  body: "Existing marine assets kept and made more efficient.",
                },
                {
                  title: "Road hierarchy",
                  body: "Main and secondary roads that separate traffic types.",
                },
              ],
            },
          ],
          shots: [
            {
              alt: "Proposals board: the seven development moves drawn over the site plan",
              w: 1680,
              h: 1003,
              wide: true,
              src: "/work/suez-shipyard/proposals.webp",
            },
          ],
        },
        {
          eyebrow: "04 · Zoning & production",
          title: "One line from raw steel to the dock",
          text: "Workshops are placed in the order the work happens: raw materials, machine cutting, hull fabrication, main assembly, then the dry-dock operating area. Carpentry moves to the Port Tawfeek yard to free space.",
          chips: ["Raw materials", "Machine cutting", "Hull workshop", "Main assembly", "Dry dock"],
          shots: [
            {
              alt: "Functional zoning plan of the shipyard",
              w: 1680,
              h: 1063,
              caption: "Functional zoning",
              src: "/work/suez-shipyard/zoning.webp",
            },
            {
              alt: "Production flow diagram linking the workshops in sequence",
              w: 1680,
              h: 1022,
              caption: "Production flow",
              src: "/work/suez-shipyard/production.webp",
            },
          ],
        },
        {
          eyebrow: "05 · Dry dock & ship-lift",
          title: "Three times the repair capacity",
          text: "The 150 × 30 m dry dock stays, serving 10,000–25,000 DWT ships, with a new 300-ton gantry crane and a 250 m² control unit. The ship-lift area grows from 11,000 to 33,600 m², and repair places go from 5 to 15, for ships up to 80 m.",
          shots: [
            {
              alt: "Dry dock board with the new gantry crane and control unit",
              w: 1680,
              h: 1020,
              caption: "Dry dock",
              src: "/work/suez-shipyard/drydock.webp",
            },
            {
              alt: "Ship-lift expansion board comparing the existing and proposed platforms",
              w: 1680,
              h: 996,
              caption: "Ship-lift expansion",
              src: "/work/suez-shipyard/shiplift.webp",
            },
          ],
        },
        {
          eyebrow: "06 · Circulation",
          title: "Roads that keep people and cranes apart",
          text: "A 15 m main road and 10 m secondary roads form a clear hierarchy. Turning radii of 6–7 m inside and 10 m outside let heavy trucks move without crossing work areas.",
          layout: "split",
          shots: [
            {
              alt: "Circulation plan with the main and secondary road network and turning radii",
              w: 1680,
              h: 1009,
              src: "/work/suez-shipyard/circulation.webp",
            },
          ],
        },
        {
          eyebrow: "07 · Administration Building",
          title: "Every office in one building",
          text: "My main design piece. The building brings all administrative and technical offices together, with a hotel wing for visiting experts, a restaurant and services. Public and operational circulation are kept apart: four gates (workers, vehicles, administration, garage) and a rear staff entrance straight to the hangars.",
          lists: [
            {
              title: "Management & operations",
              items: [
                {
                  title: "Executive management",
                  body: "Yard director, senior management, executive lounge, boardroom, confidential meetings.",
                },
                {
                  title: "Operations & engineering",
                  body: "Operations control room, planning, PMO, marine, mechanical and electrical engineering, QA.",
                },
                {
                  title: "Corporate services",
                  body: "Finance, procurement, HR, legal, printing and archive.",
                },
                {
                  title: "Clients & inspection",
                  body: "Main reception, waiting, client meeting rooms, class-society inspection rooms, yard exhibition.",
                },
              ],
            },
            {
              title: "Support",
              items: [
                {
                  title: "IT",
                  body: "IT offices, data centre and security monitoring.",
                },
                {
                  title: "Meetings & training",
                  body: "Main conference hall, meeting and presentation rooms.",
                },
                {
                  title: "Security & access",
                  body: "Security office, controlled entries, emergency and crisis room.",
                },
                {
                  title: "Shared services",
                  body: "Pantry, WCs, storage and vertical circulation.",
                },
              ],
            },
          ],
          shots: [
            {
              alt: "Render of the Administration Building front facade",
              w: 1680,
              h: 942,
              ratio: "21 / 9",
              wide: true,
              src: "/work/suez-shipyard/admin-front.webp",
            },
            {
              alt: "Axonometric of the Administration Building showing its zones",
              w: 1680,
              h: 1046,
              caption: "Zoning axonometric",
              src: "/work/suez-shipyard/admin-axo.webp",
            },
            {
              alt: "Administration Building floor plan with the interior zones",
              w: 1680,
              h: 1084,
              caption: "Space planning",
              src: "/work/suez-shipyard/admin-plan.webp",
            },
          ],
        },
        {
          eyebrow: "08 · The building up close",
          title: "Shade, palms and a clear way in",
          shots: [
            {
              alt: "Side view render of the Administration Building",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/suez-shipyard/admin-side.webp",
            },
            {
              alt: "Render of the building with palm-lined landscape",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/suez-shipyard/admin-palms.webp",
            },
            {
              alt: "Render of the main entrance of the Administration Building",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/suez-shipyard/admin-entrance.webp",
            },
            {
              alt: "Dusk render of the administration gate",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/suez-shipyard/admin-gate-dusk.webp",
            },
          ],
        },
        {
          eyebrow: "09 · Gates & wayfinding",
          title: "Finding your way in a 68,000 m² yard",
          text: "A blue, green and grey signage system marks gates, zones and routes. A separate workers building gives rest areas, changing rooms and health services close to the workshops.",
          layout: "split",
          shots: [
            {
              alt: "Wayfinding and signage board with the colour palette",
              w: 1680,
              h: 940,
              src: "/work/suez-shipyard/wayfinding.webp",
            },
          ],
        },
        {
          eyebrow: "10 · The proposal",
          title: "The yard, from above",
          shots: [
            {
              alt: "Aerial dusk render of the whole shipyard",
              w: 1680,
              h: 942,
              wide: true,
              src: "/work/suez-shipyard/aerial-dusk.webp",
            },
            {
              alt: "Render of the connected workshop blocks",
              w: 1680,
              h: 942,
              caption: "Workshop blocks",
              ratio: "3 / 2",
              src: "/work/suez-shipyard/workshops.webp",
            },
            {
              alt: "Aerial render of ships on the ship-lift platforms beside the workshops",
              w: 1680,
              h: 942,
              caption: "Ship-lift platforms",
              ratio: "3 / 2",
              src: "/work/suez-shipyard/aerial-city.webp",
            },
            {
              alt: "Aerial render of the waterfront and ship-lift platforms",
              w: 1680,
              h: 942,
              caption: "The waterfront",
              ratio: "21 / 9",
              wide: true,
              src: "/work/suez-shipyard/aerial-waterfront.webp",
            },
          ],
        },
      ],
      numbers: [
        {
          value: "68,000 m²",
          label: "Total land area",
        },
        {
          value: "3×",
          label: "Ship-lift capacity (11,000 → 33,600 m²)",
        },
        {
          value: "15",
          label: "Repair places, up from 5",
        },
        {
          value: "+135%",
          label: "Internal operating efficiency",
        },
      ],
    },
  },
  {
    slug: "rare-air-open-mall",
    cat: "com",
    type: "Commercial",
    tags: ["South 90th Street, New Cairo", "4,392 m²", "Le.Jardin"],
    title: "Rare & Air Open Mall",
    desc: "An open-air retail destination on South 90th Street: shops and cafés around landscaped courtyards and rooftop terraces. I worked on design development, the full 3D model, landscape, interior space planning and the architectural layout.",
    cover: "/covers/rare-air-open-mall.webp",
    coverAlt: "Aerial dusk render of Rare & Air open mall: stone buildings with green terraces around a central courtyard, beside a pedestrian bridge",
    coverSize: [
      1680,
      942,
    ],
    page: {
      lead: "Turning a corner plot in New Cairo into an open-air retail destination: walkable streets, landscaped courtyards, active storefronts and rooftop terraces, built from warm stone and timber shade.",
      tags: ["Commercial", "Retail & F&B", "Landscape", "Schematic design"],
      facts: [
        {
          label: "Location",
          value: "South 90th Street, New Cairo",
        },
        {
          label: "Type",
          value: "Open-air mall",
        },
        {
          label: "Stage",
          value: "Schematic design",
        },
        {
          label: "Site area",
          value: "4,392 m²",
        },
        {
          label: "Office",
          value: "Le.Jardin",
        },
      ],
      role: {
        title: "Design development, 3D, landscape and layout",
        text: "I was actively involved in the overall design development of the project, including the complete 3D modeling, landscape design, and spatial planning and organization of interior spaces. My contribution also included developing the architectural layout, coordinating column positions, and ensuring a well-integrated and functional design.",
        chips: ["Design development", "Full 3D model", "Landscape", "Interior space planning", "Architectural layout", "Column coordination"],
      },
      sections: [
        {
          eyebrow: "01 · The site",
          title: "Between a busy corridor and a quiet neighbourhood",
          text: "The plot sits on South 90th Street, between the commercial energy of the corridor and the calmer residential streets behind it. It faces a major intersection, a bus stop and a pedestrian bridge, so it is easy to see and easy to reach.",
          chips: ["South 90th Street", "Omar Ibn Abdel Aziz Street", "El Sheikh Sayed Tantawy Street"],
          layout: "split",
          shots: [
            {
              alt: "Strategic location board: the site on South 90th Street with its surrounding streets, bus stop and pedestrian bridge",
              w: 1680,
              h: 1038,
              src: "/work/rare-air-open-mall/location.webp",
            },
          ],
        },
        {
          eyebrow: "02 · The vision",
          title: "A place to walk, shop and stay",
          text: "Instead of a closed mall, the brief became an open-air destination: retail units, cafés and restaurants, plazas for gathering and events, and greenery throughout. The identity is refined and timeless, built from natural materials, layered light, landscape and water.",
          chips: ["Retail", "F&B", "Social spaces", "Landscape", "Crafted character"],
          shots: [
            {
              alt: "Project vision board with the programme icons, colour palette, material selection and an axonometric of the scheme",
              w: 1680,
              h: 1039,
              wide: true,
              src: "/work/rare-air-open-mall/vision.webp",
            },
          ],
        },
        {
          eyebrow: "03 · Form development",
          title: "Carving a human-scale block",
          text: "The mass starts from the site edges, then a central void is carved out for the pedestrian heart. The block is broken into smaller volumes of different heights, then layered with terraces, pergolas and screens for shade and depth.",
          chips: ["Site response", "Central void", "Mass fragmentation", "Architectural layering", "Final composition"],
          shots: [
            {
              alt: "Form development diagrams from site response to the final composition",
              w: 1680,
              h: 1048,
              caption: "From mass to composition",
              src: "/work/rare-air-open-mall/form.webp",
            },
            {
              alt: "Aerial render of the open mall from above the pedestrian bridge",
              w: 1680,
              h: 878,
              caption: "The final composition",
              src: "/work/rare-air-open-mall/aerial-plaza.webp",
            },
          ],
        },
        {
          eyebrow: "04 · Site plan",
          title: "65% open space",
          text: "Only 1,536 m² of the site is built footprint. The other 2,856 m² is landscape and seating. A main entrance leads in from the street, service routes link shops, cafés and outdoor spaces, and vertical circulation connects the entrance straight to the central plaza.",
          layout: "split",
          shots: [
            {
              alt: "Site plan with the built footprint, landscape areas, entrance and circulation",
              w: 1680,
              h: 1076,
              src: "/work/rare-air-open-mall/site-plan.webp",
            },
          ],
        },
        {
          eyebrow: "05 · Floor by floor",
          title: "A retail loop around one courtyard",
          text: "Every floor wraps around the same open courtyard, so shoppers always see the activity below. Terraces, bridges and stairs tie the levels together, and the roof becomes a destination of its own.",
          cards: [
            {
              title: "Ground floor",
              body: "1,519 m² · 20 units of 35–90 m², with continuous active frontages.",
            },
            {
              title: "First floor",
              body: "1,269 m² · 20 units of 35–90 m², with terraces and bridges.",
            },
            {
              title: "Second floor",
              body: "1,269 m² · 7 units of 40–65 m², stepped back around the void.",
            },
            {
              title: "Roof",
              body: "1,100 m² · 7 rooftop terraces for dining and gathering.",
            },
          ],
          shots: [
            {
              alt: "Ground floor plan with retail and F&B units around the central courtyard",
              w: 1680,
              h: 1062,
              caption: "Ground floor",
              src: "/work/rare-air-open-mall/ground-floor.webp",
            },
            {
              alt: "First floor plan continuing the retail loop",
              w: 1680,
              h: 1050,
              caption: "First floor",
              src: "/work/rare-air-open-mall/first-floor.webp",
            },
            {
              alt: "Second floor plan with setbacks and terraces",
              w: 1680,
              h: 1050,
              caption: "Second floor",
              src: "/work/rare-air-open-mall/second-floor.webp",
            },
            {
              alt: "Roof plan with terraces, seating and pergolas",
              w: 1680,
              h: 1020,
              caption: "Roof",
              src: "/work/rare-air-open-mall/roof.webp",
            },
          ],
        },
        {
          eyebrow: "06 · Facade & details",
          title: "Stone, timber and deep reveals",
          text: "Limestone cladding, bronze metal, wood-look pergolas and greenery give the facades a warm, timeless identity. A small set of repeated elements keeps the whole mall consistent.",
          cards: [
            {
              title: "Rooftop pergola",
              body: "Steel with a timber finish, shading the terraces.",
            },
            {
              title: "Green rooftop edge",
              body: "Planters with cascading greenery to soften the mass.",
            },
            {
              title: "Arches",
              body: "A stone-clad signature entrance with backlit signage.",
            },
            {
              title: "Railing",
              body: "Perforated dark metal with integrated planters.",
            },
            {
              title: "Vertical fins",
              body: "Recessed fins with warm light for rhythm and depth.",
            },
            {
              title: "Storefront frame",
              body: "Recessed dark-metal frames with louvres.",
            },
          ],
          shots: [
            {
              alt: "Front elevation with the material palette and key plan",
              w: 1680,
              h: 1040,
              wide: true,
              src: "/work/rare-air-open-mall/front-elevation.webp",
            },
            {
              alt: "Architectural elements board with the pergola, green edge, arches, railing, vertical fins and storefront frame",
              w: 1680,
              h: 1018,
              wide: true,
              src: "/work/rare-air-open-mall/elements.webp",
            },
          ],
        },
        {
          eyebrow: "07 · Landscape",
          title: "A plaza built around water",
          text: "A central linear fountain is the focal point, bringing movement, sound and a cooling effect. Seating sits around it and along the storefronts without blocking the main routes, raised planters with palms define the spaces, and low-level lighting keeps the plaza welcoming at night.",
          chips: ["Water feature", "Seating areas", "Greenery & planters", "Landscape lighting"],
          shots: [
            {
              alt: "The central plaza with the fountain, café seating and the arched pergola gateway",
              w: 1680,
              h: 678,
              ratio: "21 / 9",
              wide: true,
              src: "/work/rare-air-open-mall/plaza-arch.webp",
            },
            {
              alt: "Fountain and café seating in front of the storefronts",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/fountain.webp",
            },
            {
              alt: "The courtyard at dusk with seating around the water feature",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/court-dusk.webp",
            },
          ],
        },
        {
          eyebrow: "08 · Signage & shade",
          title: "One language for every brand",
          text: "Warm stone and charcoal metal form the base, with white lettering and restrained warm light. A main mall identity, a repeated black fascia for tenant signs, and timber pergolas with compact awnings for shade.",
          layout: "split",
          shots: [
            {
              alt: "Signage and identity board: main mall identity, tenant storefront signage and architectural signage",
              w: 1680,
              h: 1037,
              src: "/work/rare-air-open-mall/signage.webp",
            },
          ],
        },
        {
          eyebrow: "09 · Inside the mall",
          title: "Courtyards, terraces and storefronts",
          shots: [
            {
              alt: "Arched gateway with a pergola, storefronts and café seating",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/arches.webp",
            },
            {
              alt: "Stepped courtyard with terraces and fountains",
              w: 1680,
              h: 733,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/courtyard-steps.webp",
            },
            {
              alt: "Plaza in front of the stone tower with outdoor dining",
              w: 1680,
              h: 664,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/tower-plaza.webp",
            },
            {
              alt: "Layered terraces above the courtyard dining area",
              w: 1680,
              h: 554,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/terraces.webp",
            },
            {
              alt: "Inner street toward the tower with shops and seating",
              w: 1680,
              h: 942,
              ratio: "21 / 9",
              wide: true,
              src: "/work/rare-air-open-mall/gate-street.webp",
            },
          ],
        },
        {
          eyebrow: "10 · From the street",
          title: "Seen from South 90th",
          shots: [
            {
              alt: "The mall from South 90th Street at dusk",
              w: 1680,
              h: 942,
              wide: true,
              src: "/work/rare-air-open-mall/street-dusk.webp",
            },
            {
              alt: "The main entrance with the mall signage",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/street-entrance.webp",
            },
            {
              alt: "The corner entrance under the black arch at sunset",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/corner-dusk.webp",
            },
            {
              alt: "Storefronts and the staircase up to the upper levels",
              w: 1680,
              h: 578,
              caption: "Storefronts and stairs",
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/storefronts.webp",
            },
            {
              alt: "The mall at night from the street",
              w: 1680,
              h: 942,
              caption: "At night",
              ratio: "3 / 2",
              src: "/work/rare-air-open-mall/street-night.webp",
            },
            {
              alt: "Aerial night render of the courtyard and rooftop terraces",
              w: 1680,
              h: 942,
              ratio: "21 / 9",
              wide: true,
              src: "/work/rare-air-open-mall/aerial-night.webp",
            },
          ],
        },
      ],
      numbers: [
        {
          value: "4,392 m²",
          label: "Site area",
        },
        {
          value: "47",
          label: "Retail & F&B units",
        },
        {
          value: "65%",
          label: "Landscape and seating",
        },
        {
          value: "7",
          label: "Rooftop terraces",
        },
      ],
    },
  },
  {
    slug: "marineera-waterfront-retail",
    cat: "com",
    type: "Commercial",
    tags: ["Sharm El Sheikh", "10,000 m²", "Le.Jardin"],
    title: "Marineera Waterfront Retail",
    desc: "Redesigning the shopping area of Marineera, a waterfront destination in Sharm El Sheikh: boutique shops, cafés and shaded walkways along the marina. I proposed architectural changes to improve function, spatial organisation and the shopping experience.",
    cover: "/covers/marineera-waterfront-retail.webp",
    coverAlt: "Aerial render of the Marineera retail area: timber pergolas over shops and walkways beside yachts in the marina",
    coverSize: [
      1680,
      942,
    ],
    page: {
      lead: "Turning a morning-only diving departure point in Sharm El Sheikh into an all-day waterfront destination, with boutique shops, cafés, shaded walkways and a working marina in one connected place.",
      tags: ["Commercial", "Retail & F&B", "Waterfront", "Schematic design"],
      facts: [
        {
          label: "Location",
          value: "Sharm El Sheikh, South Sinai",
        },
        {
          label: "Client",
          value: "Mostaqbal Misr",
        },
        {
          label: "Stage",
          value: "Schematic design",
        },
        {
          label: "Retail & public realm",
          value: "10,000 m²",
        },
        {
          label: "Office",
          value: "Le.Jardin",
        },
      ],
      role: {
        title: "Redesign of the shopping area",
        text: "I contributed to the development and redesign of the shopping area within the project, proposing architectural modifications and design improvements to enhance the functionality, spatial organization, and overall shopping experience.",
        chips: ["Design development", "Architectural modifications", "Spatial organisation", "Retail experience"],
      },
      sections: [
        {
          eyebrow: "01 · The context",
          title: "One piece of a 1,400-acre masterplan",
          text: "Marineera is a large coastal masterplan at the southern entrance of South Sinai, mixing a waterfront, mountain zones, residential layers and an island resort. The retail area sits on the waterfront zone, beside a boutique hotel, the marina and a yacht shipyard.",
          chips: ["Waterfront", "Mountain integration", "Layered zones", "Island"],
          layout: "split",
          shots: [
            {
              alt: "Masterplan zoning over the Sharm El Sheikh coastline and mountains",
              w: 1680,
              h: 974,
              src: "/work/marineera-waterfront-retail/zoning.webp",
            },
          ],
        },
        {
          eyebrow: "02 · Where it started",
          title: "Busy at 8 am, empty by noon",
          text: "The site was a single-purpose morning node: a departure point for diving trips with a waiting area and little else. Large parts of the land were unused and the development was fragmented.",
          cards: [
            {
              title: "Morning-only activity",
              body: "Active for diving departures, then quiet for the rest of the day and night.",
            },
            {
              title: "Few services",
              body: "Very few shops, amenities or places to wait comfortably.",
            },
            {
              title: "Poor parking & seating",
              body: "Not enough capacity or organisation for visitors.",
            },
          ],
          shots: [
            {
              alt: "Current situation board with the existing harbour and site photos",
              w: 1680,
              h: 992,
              caption: "The existing harbour",
              src: "/work/marineera-waterfront-retail/current.webp",
            },
            {
              alt: "Current and proposed function compared side by side",
              w: 1680,
              h: 1036,
              caption: "Current vs. proposed",
              src: "/work/marineera-waterfront-retail/current-proposed.webp",
            },
          ],
        },
        {
          eyebrow: "03 · The retail zone",
          title: "A continuous edge along the marina",
          text: "The proposal restructures the site for both tourism and daily use: retail and boutique shops, diving and activity stores, restaurants and cafés, shaded outdoor spaces and organised parking, all linked to the marina.",
          chips: ["Retail & boutique shops", "Diving & activity stores", "Restaurants & cafés", "Shaded outdoor spaces", "Organised parking"],
          shots: [
            {
              alt: "Axonometric of the waterfront retail zone with its programme",
              w: 1680,
              h: 967,
              wide: true,
              src: "/work/marineera-waterfront-retail/retail-zone.webp",
            },
            {
              alt: "Site requirements: the retail and public realm, boutique hotel and marina with their dimensions",
              w: 1680,
              h: 1067,
              caption: "Zone areas",
              src: "/work/marineera-waterfront-retail/requirements.webp",
            },
            {
              alt: "Exploded axonometric: roof and pergolas, first floor, circulation and ground floor",
              w: 1680,
              h: 1027,
              caption: "How the levels stack",
              src: "/work/marineera-waterfront-retail/exploded.webp",
            },
          ],
        },
        {
          eyebrow: "04 · The building",
          title: "Shops below, cafés above",
          text: "The ground floor holds the retail shops around open courtyards and landscaped paths. The first floor carries cafés and restaurants with terraces facing the water, tied together by bridges and stairs under timber pergolas.",
          cards: [
            {
              title: "Ground floor",
              body: "26 retail shops, about 40 m² each.",
            },
            {
              title: "First floor",
              body: "9 cafés and restaurants, about 140 m² each.",
            },
            {
              title: "Total built-up",
              body: "3,165 m² of retail and F&B.",
            },
          ],
          shots: [
            {
              alt: "Ground floor plan of the retail shops with courtyards and landscaped paths",
              w: 1116,
              h: 945,
              caption: "Ground floor plan",
              src: "/work/marineera-waterfront-retail/ground-floor.webp",
            },
            {
              alt: "Project module: the two-level unit with shops on the ground floor and cafés above",
              w: 1680,
              h: 1015,
              caption: "The retail module",
              src: "/work/marineera-waterfront-retail/module.webp",
            },
          ],
        },
        {
          eyebrow: "05 · Arrival & parking",
          title: "Cars underground, people on the waterfront",
          text: "A landmark gate marks the arrival and leads straight onto the main pedestrian axis. Most parking goes below ground, keeping cars apart from people and the landscape free.",
          shots: [
            {
              alt: "Project gate board with arrival, digital entrance and the main pedestrian axis",
              w: 1680,
              h: 1016,
              caption: "The gate",
              src: "/work/marineera-waterfront-retail/gates.webp",
            },
            {
              alt: "Parking board with surface and underground parking and the flow strategy",
              w: 1680,
              h: 1017,
              caption: "Parking",
              src: "/work/marineera-waterfront-retail/parking.webp",
            },
          ],
        },
        {
          eyebrow: "06 · Supporting the experience",
          title: "Shade, services and wayfinding",
          text: "Shaded seating areas let visitors stay longer. Service routes and underground infrastructure are kept separate from visitor paths, and one signage system ties shops, activities and routes together.",
          chips: ["Outdoor seating", "Separate service routes", "Underground infrastructure", "Signage & wayfinding"],
          shots: [
            {
              alt: "Outdoor seating board with a shaded seating render and a sun-path section",
              w: 1680,
              h: 1039,
              caption: "Outdoor seating",
              src: "/work/marineera-waterfront-retail/seating.webp",
            },
            {
              alt: "Services board with service routes and underground infrastructure",
              w: 1680,
              h: 1001,
              caption: "Services",
              src: "/work/marineera-waterfront-retail/services.webp",
            },
            {
              alt: "Signage board with the wayfinding totem at the retail entrance",
              w: 1680,
              h: 1007,
              caption: "Signage",
              wide: true,
              src: "/work/marineera-waterfront-retail/signage.webp",
            },
          ],
        },
        {
          eyebrow: "07 · Interiors",
          title: "Inside the shops",
          text: "Arched niches, natural stone and warm clay tones carry the Sinai character from the facades into the units.",
          shots: [
            {
              alt: "Gift shop interior with arched niches, pottery shelves and a stone display table",
              w: 1164,
              h: 884,
              caption: "Gift shop",
              ratio: "4 / 3",
              src: "/work/marineera-waterfront-retail/gift-shop.webp",
            },
            {
              alt: "Café interior with a timber counter and arched windows",
              w: 1169,
              h: 882,
              caption: "Café",
              ratio: "4 / 3",
              src: "/work/marineera-waterfront-retail/cafe.webp",
            },
          ],
        },
        {
          eyebrow: "08 · Walking the waterfront",
          title: "Under the pergolas",
          shots: [
            {
              alt: "Timber pergola over the retail walkway at sunset",
              w: 1680,
              h: 942,
              ratio: "21 / 9",
              wide: true,
              src: "/work/marineera-waterfront-retail/pergola.webp",
            },
            {
              alt: "Walkway under a pergola beside the marina",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/marineera-waterfront-retail/marina-walk.webp",
            },
            {
              alt: "Shaded terrace looking out to the water",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/marineera-waterfront-retail/evening-walk.webp",
            },
            {
              alt: "Pedestrian promenade between the shops",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/marineera-waterfront-retail/promenade.webp",
            },
            {
              alt: "Shops and pergolas at sunset",
              w: 1680,
              h: 942,
              ratio: "3 / 2",
              src: "/work/marineera-waterfront-retail/sunset-shops.webp",
            },
            {
              alt: "The retail entrance and signage totem at night",
              w: 1680,
              h: 942,
              ratio: "21 / 9",
              wide: true,
              src: "/work/marineera-waterfront-retail/night-signage.webp",
            },
          ],
        },
        {
          eyebrow: "09 · From the water",
          title: "Retail, marina and mountains",
          shots: [
            {
              alt: "Aerial render of the retail area and yacht berths",
              w: 1680,
              h: 942,
              wide: true,
              src: "/work/marineera-waterfront-retail/aerial-marina.webp",
            },
            {
              alt: "The marina with the retail buildings and mountains behind",
              w: 1680,
              h: 942,
              ratio: "21 / 9",
              wide: true,
              src: "/work/marineera-waterfront-retail/marina.webp",
            },
          ],
        },
      ],
      numbers: [
        {
          value: "26",
          label: "Retail shops",
        },
        {
          value: "9",
          label: "Cafés & restaurants",
        },
        {
          value: "104",
          label: "Parking spaces, 64 underground",
        },
        {
          value: "10,000 m²",
          label: "Retail & public realm",
        },
      ],
    },
  },
  {
    slug: 'fish-market',
    cat: 'urban',
    type: 'Urban regeneration',
    tags: ['El-Anfoushi, Alexandria'],
    title: 'Fish Market urban renewal',
    desc: 'Turning the old fish market near Qaitbay Citadel into a destination, with a historical exhibition about the area.',
    cover: '/covers/fish-market.webp',
    coverAlt: 'Master plan of the Fish Market urban renewal on the El-Anfoushi waterfront',
    coverSize: [2000, 1339],
  },
  {
    slug: 'district-library',
    cat: 'urban',
    type: 'Public building',
    tags: ['El-Nouzha, Alexandria'],
    title: 'District Library · Culture Hub',
    desc: 'A district library and culture hub for a new urban extension.',
    cover: '/covers/library.webp',
    coverAlt: 'Presentation sheet for the District Library and Culture Hub with plans, sections and renders',
    coverSize: [2000, 1414],
  },
  {
    slug: 'affordable-housing',
    cat: 'res',
    type: 'Residential community',
    tags: ['Burg El Arab, Alexandria'],
    title: 'Affordable Housing',
    desc: 'Livable new communities: affordable housing planned as a neighbourhood.',
    cover: '/covers/affordable-housing.webp',
    coverAlt: 'Render of a playground and seating between white apartment blocks in Burg El Arab',
    coverSize: [2000, 1019],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
/** Projects that have their own page, in home-page order */
export const pagedProjects = projects.filter((p) => p.page);
