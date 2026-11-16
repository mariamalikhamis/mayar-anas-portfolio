// ─────────────────────────────────────────────────────────────
// PROJECTS — edit this file to add, remove or reorder work.
// The order of this array is the order on the home page.
// A project with `page` gets its own page at /work/[slug].
// ─────────────────────────────────────────────────────────────

export const categories = {
  urban: 'Urban Planning & Development',
  res: 'Residential Architecture',
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
    coverSize: [1867, 1015],
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
            { src: '/work/minet/location.webp', alt: 'Site location maps, from the world map down to the Western and Eastern Harbours of Alexandria', w: 2000, h: 361 },
            { src: '/work/minet/access.webp', alt: 'Site accessibility diagram showing public and private transport routes, tram line, heavy vehicles and traffic jams', w: 2000, h: 698 },
          ],
        },
        {
          eyebrow: '02 · Analysis',
          title: 'Reading the site',
          text: 'Sustainability runs through the plan: reducing energy use in line with LEED certification and applying the UN Sustainable Development Goals.',
          shots: [
            { src: '/work/minet/analysis.webp', alt: 'Site analysis: photos of existing warehouses and maps of building condition, height, use and solid-void', w: 2000, h: 1119, caption: 'Site analysis: most of the buildings are warehouses', wide: true },
            { src: '/work/minet/swot.webp', alt: 'SWOT analysis of strengths, weaknesses, opportunities and threats', w: 2000, h: 311, caption: 'SWOT analysis' },
            { src: '/work/minet/sustain.webp', alt: 'Sustainability strategies: LEED credit categories, electric carts, solar lighting, recycling and solar-covered parking', w: 2000, h: 885, caption: 'Sustainability: LEED and SDGs' },
          ],
        },
        {
          eyebrow: '03 · Idea & concept',
          title: 'Reviving the heritage area by reusing its buildings in a way that attracts people',
          text: 'The link between the cotton heritage buildings, the commercial port and the sea led to a fashion and textile program that reflects the area’s past and its foreign trade. Two main approaches, one from the heritage buildings and one from the tourist station, draw visitors in, while open spaces serve the people who live there.',
          shots: [
            { src: '/work/minet/idea.webp', alt: 'Idea diagram linking fashion and textile, heritage industry, the waterfront port and tourism', w: 1663, h: 952, caption: 'Idea' },
            { src: '/work/minet/concept.webp', alt: 'Concept and strategy diagram with two main approaches, gathering plazas, waterfront public realm and network connections', w: 2000, h: 1484, caption: 'Concept and strategy' },
          ],
        },
        {
          eyebrow: '04 · Program & masterplan',
          title: 'The plan',
          shots: [
            { src: '/work/minet/masterplan.webp', alt: 'Master plan of the district and its waterfront basin', w: 2000, h: 1888, wide: true },
            { src: '/work/minet/zoning.webp', alt: 'Program and zoning plan with a table of zones and areas, total 311 acres', w: 2000, h: 997, caption: 'Program and zoning · total area 311 acres' },
            { src: '/work/minet/action.webp', alt: 'Action area plan with pedestrian routes between the blocks', w: 2000, h: 2102, caption: 'Action area' },
          ],
        },
        {
          eyebrow: '05 · Old and new',
          title: 'Keeping the street’s memory',
          text: 'Elevations compare the district’s streets as they are today with the proposed design.',
          shots: [
            { src: '/work/minet/elev1old.webp', alt: 'Existing street elevation 1 with Makbas Misr, Makbas El Nile and Alexandria Bank', w: 2000, h: 512, caption: 'Elevation 1, existing' },
            { src: '/work/minet/elev1new.webp', alt: 'Proposed street elevation 1', w: 2000, h: 384, caption: 'Elevation 1, proposed' },
            { src: '/work/minet/elev2old.webp', alt: 'Existing street elevation 2 with Makbas El Tareikh and Makbas 45', w: 2000, h: 455, caption: 'Elevation 2, existing' },
            { src: '/work/minet/elev2new.webp', alt: 'Proposed street elevation 2', w: 2000, h: 426, caption: 'Elevation 2, proposed' },
          ],
        },
        {
          eyebrow: '06 · In 3D',
          title: 'Walking through it',
          shots: [
            { src: '/work/minet/section3d.webp', alt: '3D section through the restored warehouses and the central open space', w: 2000, h: 395, caption: '3D section', wide: true },
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
            { src: '/work/shipyard/site.webp', alt: 'Strategic location board: access routes, the site on the world shipping map and the geographic context of Adabiya on the Gulf of Suez', w: 1820, h: 1270 },
          ],
        },
        {
          eyebrow: '02 · Where it started',
          title: 'A strong site without the infrastructure',
          text: 'The site has a direct waterfront and sits near major ports and shipping lanes, but it lacks specialised marine infrastructure and enough room to operate. The existing elements were a main workshop, a service building, the entrance, the waterfront and the boundary wall.',
          shots: [
            { src: '/work/shipyard/existing.webp', alt: 'Aerial view of the existing site with numbered existing elements: workshop, service building, entrance, waterfront and boundary wall', w: 1820, h: 491, wide: true },
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
            { src: '/work/shipyard/elements.webp', alt: 'Development plan over an aerial photo with the eleven numbered elements', w: 1820, h: 929, wide: true },
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
            { src: '/work/shipyard/zoning.webp', alt: 'Functional zoning plan from above: workshop, services, administration, quay, launch area, crane track, storage and security gates', w: 1092, h: 1270, caption: 'Functional zoning' },
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
              h: 1071,
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
              h: 1071,
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
              h: 1071,
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
              h: 1071,
              caption: "Functional zoning",
              src: "/work/suez-shipyard/zoning.webp",
            },
            {
              alt: "Production flow diagram linking the workshops in sequence",
              w: 1680,
              h: 1071,
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
              h: 1071,
              caption: "Dry dock",
              src: "/work/suez-shipyard/drydock.webp",
            },
            {
              alt: "Ship-lift expansion board comparing the existing and proposed platforms",
              w: 1680,
              h: 1071,
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
              h: 1071,
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
              h: 1071,
              caption: "Zoning axonometric",
              src: "/work/suez-shipyard/admin-axo.webp",
            },
            {
              alt: "Administration Building floor plan with the interior zones",
              w: 1680,
              h: 1071,
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
              h: 1071,
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
