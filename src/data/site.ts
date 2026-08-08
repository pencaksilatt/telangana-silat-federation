export const ORG = {
  name: "Pencak Silat Sports Association of Telangana",
  short: "PSSATG",
  address: [
    "H.No.1-93/9, RTC Colony, Road No.8,",
    "Medchal, PO: Medchal District,",
    "Medchal Malkajgiri,",
    "Telangana - 501401.",
  ],
  phones: ["9347776946", "7981188678"],
  email: "pencaksilatsportsassociationtg@gmail.com",
  whatsapp: "919347776946",
  whatsappDisplay: "+91 93477 76946",
};

export const WHATSAPP_MESSAGE =
  "Hello, I would like to enquire about Pencak Silat Sports Association of Telangana.";

export const waLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(message)}`;

/**
 * Official social profiles. Replace the `url` values with the association's
 * exact profile URLs when they are provided.
 */
export const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "Pencak Silat Sports Telangana",
    url: "https://www.instagram.com/explore/search/keyword/?q=Pencak%20Silat%20Sports%20Telangana",
  },
  {
    id: "x",
    label: "X (Twitter)",
    handle: "Telangana Silat",
    url: "https://x.com/search?q=Telangana%20Silat",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Pencak Silat Sports Association of Telangana",
    url: "https://www.facebook.com/search/top?q=Pencak%20Silat%20Sports%20Association%20of%20Telangana",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "Telangana Pencak Silat",
    url: "https://www.youtube.com/results?search_query=Telangana+Pencak+Silat",
  },
] as const;

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Pencak Silat", href: "#what-is" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Sports & Events", href: "#events" },
  { label: "History", href: "#history" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Rules", href: "#rules" },
  { label: "Contact", href: "#contact" },
];

export const AFFILIATIONS = [
  "Indian Pencak Silat Federation",
  "Ministry of Youth Affairs & Sports, Government of India",
  "Sports Authority of India",
  "Olympic Council of Asia (OCA)",
  "All India Police Sports Control Board",
  "Association of Indian Universities",
];

export const PILLARS = [
  {
    no: "01",
    title: "Mental-Spiritual",
    text: "Silat develops inner peace, spiritual balance and control of body and mind.",
  },
  {
    no: "02",
    title: "Self-Defence",
    text: "Skills and techniques for effective self-defence.",
  },
  {
    no: "03",
    title: "Art & Culture",
    text: "Aesthetic movements combined with traditional music, costumes and cultural ceremonies.",
  },
  {
    no: "04",
    title: "Sport",
    text: "Pencak Silat as a competitive sport focused on fitness and achievement.",
  },
];

export const WORLD_BODIES = [
  { abbr: "IPSI", name: "Ikatan Pencak Silat Indonesia", country: "Indonesia" },
  { abbr: "PESAKA", name: "Persekutuan Silat Kebangsaan Malaysia", country: "Malaysia" },
  { abbr: "PERSISI", name: "Persekutuan Silat Singapura", country: "Singapore" },
  {
    abbr: "PERSIB",
    name: "Persekutuan Silat Kebangsaan Brunei Darussalam",
    country: "Brunei Darussalam",
  },
];

export const BENEFITS = [
  "Promotes cardiovascular fitness, stamina, flexibility and general health",
  'Can be adopted as "Sport for Life"',
  "Preserves and celebrates traditional art and culture",
  "Provides comprehensive self-defence skills",
  "Builds responsibility and discipline",
  "Develops social interaction and team spirit",
  "Encourages sportsmanship",
  "Helps reduce stress and promote a positive mindset",
];

export const SCORING = [
  {
    title: "Points",
    text: "Winner is determined by accumulated points after three rounds.",
  },
  {
    title: "Technical Knock-Out",
    text: "Opponent cannot continue after the referee's count.",
  },
  {
    title: "Walkover",
    text: "Opponent fails to appear after three calls.",
  },
  {
    title: "Disqualification",
    text: "Includes failure to meet the required weight category after final weighing and serious injury caused through illegal action, according to applicable rules.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Kavitha",
    text: "Pencak Silat has given me discipline, confidence and a strong sense of purpose in training.",
  },
  {
    name: "Manasa",
    text: "The coaching is structured and respectful. Every session builds both technique and character.",
  },
  {
    name: "Madhu",
    text: "Training with the association improved my fitness, focus and understanding of the sport.",
  },
];

export const ENQUIRY_TYPES = [
  "General Enquiry",
  "Training",
  "Competition",
  "Tanding",
  "Tunggal",
  "Ganda",
  "Regu",
  "Solo Creative",
  "Events",
  "Rules & Regulations",
  "Other",
];
