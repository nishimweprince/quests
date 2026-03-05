export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Real Estate', href: '/services/real-estate' },
      { label: 'Import & Export', href: '/services/import-export' },
      { label: 'Logistics', href: '/services/logistics' },
    ],
  },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const STATS = [
  { value: 30, suffix: '+', label: 'Years of Experience' },
  { value: 100, suffix: '+', label: 'Rental Properties' },
  { value: 2000000, suffix: '+', label: 'Tonnes of Cargo Shipped' },
];

export const SERVICES = [
  {
    slug: 'real-estate',
    title: 'Real Estate',
    shortDescription:
      'With over 100 rental options nationwide, we ensure you find the perfect space wherever you are. Trusted by Vivo Energy, World Vision, Bank of Kigali, MTN, and more.',
    description:
      'With over 100 rental options nationwide, we ensure you find the perfect space wherever you are. Our trusted expertise is backed by successful collaborations with industry leaders like Vivo Energy, World Vision, Bank of Kigali, Rubis Energy, Mastercard Foundation, MTN, RRA, Oryx Energies and more.',
    icon: 'Building2',
  },
  {
    slug: 'import-export',
    title: 'Import & Export',
    shortDescription:
      'Our commercial wholesale unit focuses on wheat flour, petroleum products, cement, sugar, salt and cooking oil. Importing from Zambia, China, Tanzania, Kenya, Dubai and more.',
    description:
      'Our import and export unit is mainly focused on wheat flour, petroleum products, cement, sugar, salt and cooking oil. We import from Zambia, China, Tanzania, Kenya, Dubai, Pakistan and export across East and Central Africa.',
    icon: 'Globe2',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    shortDescription:
      'More than 25 years of expertise in cargo shipping with a strong fleet of 300+ tank trailers and 50+ flatbed trailers serving East and Central Africa.',
    description:
      'We have more than 25 years of expertise in cargo shipping with a strong fleet of 300+ tank trailers and more than 50 flatbed trailers. We specialize in petroleum products, wheat flour, cement, clinker, coal, sugar, and consumer goods.',
    icon: 'Truck',
  },
];

/** Partner logos from public/partners. Name used for alt text and accessibility. */
export const PARTNERS: { name: string; logo: string }[] = [
  { name: 'Vivo Energy', logo: '/partners/vivo-energy-logo.svg' },
  { name: 'World Vision', logo: '/partners/world-vision-logo.png' },
  { name: 'Bank of Kigali', logo: '/partners/bank-of-kigali.png' },
  { name: 'Rubis Energy', logo: '/partners/rubis-logo.jpg' },
  { name: 'MTN', logo: '/partners/mtn-logo.jpg' },
  { name: 'RRA', logo: '/partners/rra-logo.jpeg' },
  { name: 'Oryx Energies', logo: '/partners/oryx-energies-logo.png' },
  { name: 'Ecobank', logo: '/partners/ecobank-logo.png' },
  { name: 'Azam', logo: '/partners/azam-logo.png' },
  { name: 'Bakhresa Grain', logo: '/partners/bakhresa-grain-logo.png' },
  { name: 'Bourbon Coffee', logo: '/partners/bourbon-coffee-logo.png' },
  { name: 'Cimerwa Cement', logo: '/partners/cimerwa-cement-logo.png' },
  { name: 'Equity Bank', logo: '/partners/equity-bank-logo.png' },
  { name: 'Irembo', logo: '/partners/irembo-logo.png' },
  { name: 'Kapa Oil Refineries', logo: '/partners/kapa-oil-refineries-logo.webp' },
  { name: 'NCBA', logo: '/partners/ncba-logo.jpg' },
  { name: 'Savannah Cement', logo: '/partners/savannah-cement-logo.png' },
  { name: 'Twiga Cement', logo: '/partners/twiga-cement-logo.jpg' },
];

export const TEAM = {
  Management: [
    { name: 'Kalinganire Yusuf', title: 'Chairman (Founder)' },
    { name: 'Ugirase Zabibu', title: 'Vice-Chairperson' },
    { name: 'Kayumba Godfrey', title: 'Managing Director' },
    { name: 'Rwagarinde Is-Haq', title: 'Vice-Chairperson' },
    { name: 'Munyandekwe Trésor', title: 'Chief Executive Officer' },
    { name: 'Kalinganire Yousra', title: 'Managing Director, Transport & Supply Chain' },
    { name: 'Kalinganire Nouriat', title: 'Managing Director, Real Estate' },
  ],
  Finance: [
    { name: 'Hitimana Monique', title: 'Director of Administration and Finance' },
    { name: 'Kayitesi Liliane', title: 'Property Administrator' },
    { name: 'Bizimana Hassan', title: 'Property Administrator' },
    { name: 'Musabyemariya Yvette', title: 'Property Administrator' },
    { name: 'Kagamba Fabrice', title: 'Property Administrator' },
  ],
  Operations: [
    { name: 'Abdul Djabar', title: 'Deputy Operations Manager' },
    { name: 'Kayumba Kayitesi Flavia', title: 'Procurement' },
    { name: 'Iradukunda Aliance', title: 'HSSE Manager' },
  ],
};

export const PROPERTIES = [
  { name: 'YYUSSA City Center', location: 'Kigali, Rwanda' },
  { name: 'Kigali Heights', location: 'Kigali, Rwanda' },
  { name: 'YYUSSA Nyarutarama', location: 'Nyarutarama, Kigali' },
  { name: 'YYUSSA Plaza', location: 'Kigali, Rwanda' },
  { name: 'YYUSSA Kimironko Center', location: 'Kimironko, Kigali' },
  { name: 'YYUSSA Plaza Giticyinyoni', location: 'Kigali, Rwanda' },
];

export const CORE_VALUES = [
  { value: 'Efficiency', icon: 'Zap' },
  { value: 'Quality of Services', icon: 'Star' },
  { value: 'Reliability', icon: 'Shield' },
  { value: 'Integrity', icon: 'Heart' },
  { value: 'Consistency', icon: 'RefreshCw' },
  { value: 'Accountability', icon: 'CheckCircle' },
  { value: 'Punctuality & Timeliness', icon: 'Clock' },
  { value: 'Flexibility', icon: 'Settings' },
  { value: 'Continuous Improvement', icon: 'TrendingUp' },
  { value: 'Development of People', icon: 'Users' },
];

export const CONTACT_INFO = {
  address: 'Gikondo KK 4 AV 7, Kigali, Rwanda',
  phones: {
    logistics: ['+250 788 387 803', '+250 788 385 069'],
    realEstate: ['+250 788 264 314'],
  },
  hours: 'Monday – Sunday, 7:00 AM – 8:00 PM',
};

export const BLOG_CATEGORIES = [
  { name: 'Business Management', count: 1 },
  { name: 'Compliance Audits', count: 1 },
  { name: 'Employee Relations', count: 1 },
  { name: 'HR Consulting', count: 1 },
  { name: 'Legal Contract', count: 1 },
  { name: 'Small Business HR', count: 1 },
];

export const BLOG_TAGS = [
  'Appraisal', 'Business', 'Consulting', 'Contract',
  'Data', 'Efficiency', 'Employment', 'Help',
  'Legal', 'Management',
];
