export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "800+", label: "Properties available" },
  { value: "460+", label: "Happy clients" },
  { value: "280+", label: "Partners" },
  { value: "120+", label: "Awards" },
];

export const services = [
  {
    title: "Buy a property",
    text: "Browse verified listings and get guided from first viewing to signed documents.",
    image: "/yaa-naa-ghana-house-plans-naayaa-front.png",
    alt: "Front view of a modern two-storey house",
  },
  {
    title: "Sell a property",
    text: "We price, market and negotiate so your home reaches serious buyers quickly.",
    image: "/houses-1__FillWzEyMDAsODAwXQ.jpg",
    alt: "Row of newly built houses",
  },
  {
    title: "Rent a property",
    text: "Apartments and family homes for short and long stays, vetted by our agents.",
    image: "/luxury-homes-in-Ghana.jpg",
    alt: "Luxury home with a landscaped front garden",
  },
];

export const listings = [
  { name: "Classic Damara", price: 480500, location: "East Legon, Accra", beds: 4, baths: 2, area: 2824, image: "/20240527_144329-1170x785.jpg" },
  { name: "Manstret Haven", price: 425000, location: "Cantonments, Accra", beds: 4, baths: 2, area: 2820, image: "/36cf643026a85ccd9fb8d137fe6903e2.jpg" },
  { name: "Boston Retreat", price: 350800, location: "Airport Residential, Accra", beds: 4, baths: 2, area: 2640, image: "/625b10a58137b364b18df2ea_iStock-94179607.jpg" },
  { name: "Phenix Otica", price: 428100, location: "Trasacco, Accra", beds: 4, baths: 2, area: 2698, image: "/737793_h_133.jpg" },
  { name: "Welvore Henix", price: 480500, location: "Spintex, Accra", beds: 4, baths: 2, area: 2882, image: "/Green-Park.jpg" },
  { name: "Havasu Bave", price: 398600, location: "Tema Community 25", beds: 4, baths: 2, area: 2466, image: "/houses_and_land-5bfc3326c9e77c0051812eb3.jpg" },
];

export const steps = [
  { title: "Discover property", text: "Search by area, budget and size. Every listing is checked before it goes live.", icon: "/apartment-svgrepo-com.svg" },
  { title: "Schedule a visit", text: "Pick a time that suits you and an agent will confirm the viewing.", icon: "/calender-svgrepo-com.svg" },
  { title: "Inspect the property", text: "Walk through with the agent and ask for documents, surveys and history.", icon: "/secure-svgrepo-com.svg" },
  { title: "Finalise the deal", text: "We handle negotiation and paperwork until you have the keys.", icon: "/offer-svgrepo-com.svg" },
];

export const footerColumns = [
  { title: "Company", links: ["Blog", "Careers", "About us", "Contact"] },
  { title: "Services", links: ["Buy property", "Sell property", "Rent property", "Find an agent"] },
  { title: "Social", links: ["Twitter", "LinkedIn", "Facebook", "Instagram"] },
];

export const formatPrice = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
