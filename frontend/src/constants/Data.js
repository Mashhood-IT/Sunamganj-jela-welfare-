import { ICONS } from "../assets/Icons";
import { IMAGES } from "../assets/Images";

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Causes', href: '#causes' },
  { label: 'Contact', href: '/contact' }
];

// Causes Data
export const CAUSES_DATA = [
  {
    id: 1,
    title: 'Education for All',
    description: 'Providing quality education and learning resources to underprivileged children in rural communities.',
    raised: 45000,
    goal: 80000,
    image: IMAGES.cause1
  },
  {
    id: 2,
    title: 'Clean Water Initiative',
    description: 'Building wells and water filtration systems to provide clean drinking water to communities in need.',
    raised: 32000,
    goal: 50000,
    image: IMAGES.cause2
  },
  {
    id: 3,
    title: 'Healthcare Access',
    description: 'Delivering medical supplies and healthcare services to remote areas with limited medical facilities.',
    raised: 58000,
    goal: 100000,
    image: IMAGES.cause3
  }
];

// FAQ Data
 export   const faqs = [
     {
       question: "What is Charit Us?",
       answer:
         "Charit Us is a global charity organization dedicated to connecting donors with impactful projects that improve lives and communities worldwide.",
     },
     {
       question: "How can I make a donation?",
       answer:
         "You can donate directly through our secure online platform by clicking the 'Start Donating' button. We accept all major payment methods and ensure full transparency in how your donations are used.",
     },
     {
       question: "Are my donations tax-deductible?",
       answer:
         "Yes! Charit Us is a registered nonprofit organization, and your donations may be tax-deductible depending on your country’s laws. You’ll receive an email receipt after donating.",
     },
     {
       question: "Can I choose where my donation goes?",
       answer:
         "Absolutely. You can browse our active causes and select which campaign or project your donation supports.",
     },
     {
       question: "How does Charit Us ensure transparency?",
       answer:
         "We regularly update donors with project reports, photos, and impact summaries. Every contribution is tracked, and 100% transparency is maintained at each step.",
     },
   ];

export const stats = [
    { icon: ICONS.Users, value: 50000, suffix: '+', label: 'People Helped', key: 'people' },
    { icon: ICONS.Target, value: 200, suffix: '+', label: 'Projects Completed', key: 'projects' },
    { icon: ICONS.TrendingUp, value: 2000000, suffix: '+', label: 'Funds Raised', key: 'funds', prefix: '$' }
  ];


  export const teamMembers = [
  {
    name: "John Doe",
    role: "Software Engineer",
    img: "https://readymadeui.com/team-1.webp",
    bio: "Expert in full-stack development with 10+ years of experience building scalable web applications.",
  },
  {
    name: "Mark Adair",
    role: "Backend Developer",
    img: "https://readymadeui.com/team-2.webp",
    bio: "Specializes in Node.js and cloud infrastructure, ensuring performance and reliability.",
  },
  {
    name: "Simon Konecki",
    role: "UI/UX Designer",
    img: "https://readymadeui.com/team-3.webp",
    bio: "Crafts seamless user experiences with a focus on accessibility and aesthetics.",
  },
  {
    name: "Sophia",
    role: "Frontend Developer",
    img: "https://readymadeui.com/team-4.webp",
    bio: "Turns designs into responsive, user-friendly interfaces using modern web technologies.",
  },
  {
    name: "Alen",
    role: "Software Engineer",
    img: "https://readymadeui.com/team-5.webp",
    bio: "Passionate about clean code and continuous learning, experienced in both web and mobile development.",
  },
  {
    name: "Eleanor",
    role: "Web Designer",
    img: "https://readymadeui.com/team-6.webp",
    bio: "Designs intuitive and engaging interfaces, blending creativity with usability principles.",
  },
];


export const DONATIONS_DATA = [
  {
    id: 1,
    title: "Flood Relief Donations",
    description: "Help families affected by devastating floods rebuild their lives",
    image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg",
    icon: ICONS.Droplets,
    raised: 45000,
    goal: 100000,
    category: "Emergency"
  },
  {
    id: 2,
    title: "Self Reliance Program",
    description: "Empower communities with skills and resources for sustainable income",
    image: "https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg",
    icon: ICONS.Briefcase,
    raised: 28000,
    goal: 75000,
    category: "Development"
  },
  {
    id: 3,
    title: "Clean Water Pump",
    description: "Provide access to safe drinking water in rural communities",
    image: "https://images.pexels.com/photos/2481526/pexels-photo-2481526.jpeg",
    icon: ICONS.Droplets,
    raised: 62000,
    goal: 90000,
    category: "Infrastructure"
  },
  {
    id: 4,
    title: "Winter Blanket Donation",
    description: "Keep families warm during harsh winter months",
    image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg",
    icon: ICONS.Wind,
    raised: 18000,
    goal: 50000,
    category: "Seasonal"
  },
  {
    id: 5,
    title: "Healthcare Support",
    description: "Medical assistance for underprivileged communities",
    image: "https://images.pexels.com/photos/6127313/pexels-photo-6127313.jpeg",
    icon: ICONS.Hospital,
    raised: 55000,
    goal: 120000,
    category: "Health"
  }
];
