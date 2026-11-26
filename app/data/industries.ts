export interface Industry {
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
  applications: string[];
  grades: string;
  businesses: Array<{
    name: string;
    products: string;
  }>;
}

export const INDUSTRIES: Industry[] = [
  {
    title: "Roofing & Building Products",
    summary: "For FRP roofing, daylight panels and architectural building products.",
    image: {
      src: "/images/hero/industrial-roof.jpg",
      alt: "Industrial roofing panels on a factory building",
    },
    applications: ["Roofing sheets", "Skylights & domes", "Building panels", "Doors & architectural products"],
    grades: "GP, ISO, UV-resistant and sheet-grade polyester resins.",
    businesses: [
      { name: "Roofing Sheet Manufacturers", products: "Corrugated sheets, translucent roofing, flat FRP sheets" },
      { name: "Skylight & Dome Manufacturers", products: "Rooflights, skylights, architectural domes" },
      { name: "Building Panel Manufacturers", products: "Wall panels, cladding, partitions" },
      { name: "Door & Window Manufacturers", products: "FRP doors, door frames, window frames" },
      { name: "Architectural Product Manufacturers", products: "Decorative facades, canopies, architectural structures" },
    ],
  },
  {
    title: "Tanks, Pipes & Industrial Equipment",
    summary: "For containment, fluid-handling and chemical-process equipment.",
    image: {
      src: "/images/hero/industrial-tanks.jpg",
      alt: "Industrial storage tanks at a manufacturing site",
    },
    applications: ["Storage tanks & vessels", "Pipes & fittings", "Pollution control", "Water treatment & cooling towers"],
    grades: "ISO, chemical-resistant polyester and specialised laminating resins.",
    businesses: [
      { name: "Tank & Vessel Manufacturers", products: "Chemical storage tanks, water tanks, process vessels" },
      { name: "Pipe & Fitting Manufacturers", products: "FRP pipes, elbows, flanges, fittings" },
      { name: "Pollution Control Equipment Manufacturers", products: "Scrubbers, exhaust ducts, chimneys" },
      { name: "Water Treatment Equipment Manufacturers", products: "Filtration vessels, STP tanks, treatment systems" },
      { name: "Cooling Tower Manufacturers", products: "Cooling tower bodies, fan stacks, casings" },
      { name: "Industrial Lining Contractors", products: "Chemical-resistant linings, tank linings, protective coatings" },
    ],
  },
  {
    title: "Pultrusion & Structural Composites",
    summary: "For continuous-profile production and durable composite infrastructure.",
    image: {
      src: "/images/hero/industrial-pipes.jpg",
      alt: "Industrial pipework inside a production facility",
    },
    applications: ["Pultruded profiles", "FRP gratings", "Cable trays & ladders", "Composite rebars"],
    grades: "Pultrusion-grade, GP, ISO and specialised structural resins.",
    businesses: [
      { name: "Pultruded Profile Manufacturers", products: "Channels, angles, beams, tubes, rods" },
      { name: "FRP Grating Manufacturers", products: "Moulded and pultruded gratings, industrial flooring" },
      { name: "Cable Management Manufacturers", products: "Cable trays, cable ladders, supports" },
      { name: "Composite Rebar Manufacturers", products: "GFRP reinforcement bars and rods" },
      { name: "Electrical Profile Manufacturers", products: "Insulation rods, insulating profiles, support sections" },
      { name: "Structural Composite Manufacturers", products: "Ladders, handrails, platforms, fencing, walkways" },
    ],
  },
  {
    title: "Moulding & FRP Fabrication",
    summary: "For moulded parts, fabrication work and a wide range of FRP products.",
    image: {
      src: "/images/hero/fiberglass-layup.jpg",
      alt: "Fiberglass lay-up work in a composite production workshop",
    },
    applications: ["Pools & bathtubs", "Automotive & railway", "Moulds & tooling", "General FRP products"],
    grades: "GP, ISO, ISO/NPG, tooling resins, laminating resins and gelcoats.",
    businesses: [
      { name: "Swimming Pool & Spa Manufacturers", products: "Swimming pool shells, jacuzzis, spa shells" },
      { name: "Bath & Shower Product Manufacturers", products: "FRP bathtubs, shower trays, FRP-backed acrylic bathtubs" },
      { name: "Automotive Component Manufacturers", products: "Body panels, bumpers, truck cabins, engine covers" },
      { name: "Railway Component Manufacturers", products: "Interior panels, seats, toilet modules" },
      { name: "Mould & Tooling Manufacturers", products: "FRP moulds, concrete casting moulds, composite tooling" },
      { name: "Playground Equipment Manufacturers", products: "Slides, rides, amusement park structures" },
      { name: "Marine Product Manufacturers", products: "Boats, hulls, marine components" },
      { name: "General FRP Fabricators", products: "Cabins, kiosks, machine covers, portable toilets, customised products" },
    ],
  },
  {
    title: "Marble, Sanitaryware & Cast Products",
    summary: "For polyester-bound stone products, cast surfaces and decorative items.",
    image: {
      src: "/images/support/resin-pour-detail.png",
      alt: "Liquid resin being poured during a manufacturing process",
      position: "center 58%",
    },
    applications: ["Artificial marble", "Sanitaryware & solid surfaces", "Engineered stone", "Decorative castings"],
    grades: "Marble resin, casting resin, clear casting resin, solid-surface resin and specialised stone-processing grades.",
    businesses: [
      { name: "Artificial Marble Manufacturers", products: "Cultured-marble slabs, panels, tiles" },
      { name: "Sanitaryware Manufacturers", products: "Cast washbasins, bathtubs, shower trays" },
      { name: "Solid Surface Manufacturers", products: "Countertops, vanity tops, work surfaces" },
      { name: "Engineered Stone Manufacturers", products: "Polyester-bound quartz slabs, artificial granite" },
      { name: "Decorative Casting Manufacturers", products: "Statues, sculptures, idols, decorative objects" },
      { name: "Furniture & Interior Product Manufacturers", products: "Cast tabletops, furniture, interior accessories" },
      { name: "Marble Processing Businesses", products: "Stone filling, repair and reinforcement" },
    ],
  },
  {
    title: "SMC/BMC & Electrical Composites",
    summary: "For moulding compounds, electrical housings and insulated composite parts.",
    image: {
      src: "/images/hero/composite-workshop.jpg",
      alt: "A composite component being finished in a workshop",
      position: "58% center",
    },
    applications: ["Moulding compounds", "Electrical enclosures", "Switchgear components", "Compression-moulded products"],
    grades: "SMC/BMC-grade polyester, low-shrinkage and specialised electrical-grade resins.",
    businesses: [
      { name: "SMC Compound Manufacturers", products: "Sheet moulding compounds" },
      { name: "BMC/DMC Compound Manufacturers", products: "Bulk and dough moulding compounds" },
      { name: "Electrical Enclosure Manufacturers", products: "Meter boxes, junction boxes, distribution boxes" },
      { name: "Switchgear Component Manufacturers", products: "Insulators, fuse holders, circuit-breaker components" },
      { name: "Compression Moulding Manufacturers", products: "Industrial housings, machine components" },
      { name: "Automotive Composite Manufacturers", products: "Compression-moulded panels, structural components" },
      { name: "Electrical Infrastructure Manufacturers", products: "Composite crossarms, supports, insulating components" },
    ],
  },
];
