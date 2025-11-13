import { ICONS } from "../assets/Icons";
import { IMAGES } from "../assets/Images";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Causes", href: "/donations" },
  { label: "Contact", href: "/contact" },
];

// Causes Data
export const CAUSES_DATA = [
  {
    id: 1,
    title: "Education for All",
    description:
      "Providing quality education and learning resources to underprivileged children in rural communities.",
    raised: 45000,
    goal: 80000,
    image: IMAGES.cause1,
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    description:
      "Building wells and water filtration systems to provide clean drinking water to communities in need.",
    raised: 32000,
    goal: 50000,
    image: IMAGES.cause2,
  },
  {
    id: 3,
    title: "Healthcare Access",
    description:
      "Delivering medical supplies and healthcare services to remote areas with limited medical facilities.",
    raised: 58000,
    goal: 100000,
    image: IMAGES.cause3,
  },
];

// FAQ Data
export const faqs = [
  {
    question: "What is Sunamganj Jela Welfare?",
    answer:
      "Sunamganj Jela Welfare is a global charity organization dedicated to connecting donors with impactful projects that improve lives and communities worldwide.",
  },
  {
    question: "How can I make a donation?",
    answer:
      "You can donate directly through our secure online platform by clicking the 'Start Donating' button. We accept all major payment methods and ensure full transparency in how your donations are used.",
  },
  {
    question: "Are my donations tax-deductible?",
    answer:
      "Yes! Sunamganj Jela Welfare is a registered nonprofit organization, and your donations may be tax-deductible depending on your country’s laws. You’ll receive an email receipt after donating.",
  },
  {
    question: "Can I choose where my donation goes?",
    answer:
      "Absolutely. You can browse our active causes and select which campaign or project your donation supports.",
  },
  {
    question: "How does Sunamganj Jela Welfare ensure transparency?",
    answer:
      "We regularly update donors with project reports, photos, and impact summaries. Every contribution is tracked, and 100% transparency is maintained at each step.",
  },
];

export const stats = [
  {
    icon: ICONS.Users,
    value: 50000,
    suffix: "+",
    label: "People Helped",
    key: "people",
  },
  {
    icon: ICONS.Target,
    value: 200,
    suffix: "+",
    label: "Projects Completed",
    key: "projects",
  },
  {
    icon: ICONS.TrendingUp,
    value: 2000000,
    suffix: "+",
    label: "Funds Raised",
    key: "funds",
    prefix: "$",
  },
];

export const teamMembers = [
  {
    name: "Engineer Habibur Rahman",
    role: "Chairman",
    address: "98 Lincoln Avenue, Rush Green, Romford, RM7 0SJ",
    village: "Bhurakhali Jagannatpur, Sunamganj",
    phone: "07429023462",
    img: IMAGES.Chairman,
  },
  // {
  //   name: "Aman Ali",
  //   role: "ChairPerson",
  //   img: IMAGES.Chairperson,
  // },
  {
    name: "Ex Councillor Ruhul Amin",
    role: "General Secretary",
    img: IMAGES.GS,
  },
  {
    name: "Joynal Abedin",
    role: "Senior Joint Secretary",
    img: IMAGES.SGS,
  },
  // {
  //   name: "Anwar  Kamal Dulal",
  //   role: "Joint Secretary",
  //   img: IMAGES.JS,
  // },
  // {
  //   name: "Bodor Udding",
  //   role: "Vice ChairPerson",
  //   img: IMAGES.VCP,
  // },
  {
    name: "M A Qayyum Miah",
    role: "Senior Vice Chairman",
    img: IMAGES.SVC,
  },
  {
    name: "Md Abu Yasin Shuman",
    role: "Treasurer",
    address: "37 Hitherbroom Road, Hayes, UB3- 3AD",
    village: "Borokapon, Jagannatpur, Sunamgan",
    phone: "07429023462",
    img: IMAGES.Treasurer,
  },
  {
    name: "Bodor Shamsu Uddin",
    role: "Vice Chairman",
    address: "214 Boleyn road London E7 9QJ",
    village: "Ishakpur  Tana Jagannathpur",
    phone: "+447984034057",
    img: IMAGES.VC,
  },
  {
    name: "MD Abdus Sabur",
    role: "Sports Secretary",
    address: "49 Braven avenue IG 11 9NW",
    "P/O":"Sreeramishi Bazar Jogonnath pur, Sunamgonj",
    village: "Sreeramishi",
    phone: "+447984034057",
    img: IMAGES.SS,
  },
  // {
  //   name: "Md Raju Miah",

  //   role: "Joint Secretary",
  //   img: IMAGES.JS2,
  // },
  {
    name: "Ataur Rahman Ansar",

    role: "Vice Chairman",
    img: IMAGES.VC1,
  },
];

export const DONATIONS_DATA = [
  {
    id: 1,
    title: "Flood Relief Donations",
    description:
      "Help families affected by devastating floods rebuild their lives",
    image: IMAGES.FR,
    icon: ICONS.Droplets,
    raised: 45000,
    goal: 100000,
    category: "Emergency",
  },
  {
    id: 2,
    title: "Self Reliance Program",
    description:
      "Empower communities with skills and resources for sustainable income",
    image: IMAGES.SR,
    icon: ICONS.Briefcase,
    raised: 28000,
    goal: 75000,
    category: "Development",
  },
  {
    id: 3,
    title: "Clean Water Pump",
    description: "Provide access to safe drinking water in rural communities",
    image: IMAGES.CWP,
    icon: ICONS.Droplets,
    raised: 62000,
    goal: 90000,
    category: "Infrastructure",
  },
  {
    id: 4,
    title: "Winter Blanket Donation",
    description: "Keep families warm during harsh winter months",
    image: IMAGES.WBD,
    icon: ICONS.Wind,
    raised: 18000,
    goal: 50000,
    category: "Seasonal",
  },
  {
    id: 5,
    title: "Healthcare Support",
    description: "Medical assistance for underprivileged communities",
    image: IMAGES.HS,
    icon: ICONS.Hospital,
    raised: 55000,
    goal: 120000,
    category: "Health",
  },
];

export const campaignContent = {
  1: {
    text: [
      "Floods affect thousands of families in the Sunamganj District yearly. Houses are lost, streets are destroyed, and lives are disrupted. It is heartbreaking to see the extent of losses people make when the water floods.",
      "We attempt to restore hope at Sunamganj Jela Welfare Association UK. Food, clean water, and shelter are our starting point in the flood relief work. We reach villages at the time when they need assistance most. When the flood is over, we assist the families in the rebuilding process.",
      "Every donation assists a parent in feeding a child or repairing a roof that is in bad condition. It helps them have the strength to begin afresh. There is nothing we can do to stop the rain, but we can all alleviate the suffering it causes. Any act of kindness will make some person nearer to security and comfort. Disasters demolish, yet goodwill restores.",
    ],
  },
  2: {
    text: [
      "It is our opinion that the most helpful one is the lasting one. The Self-Reliance Program empowers individuals to work and live comfortably. Families rely on haphazard jobs in most areas of Sunamganj. Once that ceases, hunger sets in. We train skills in this program that generate a stable income. Women are taught tailoring and minor trades. Men acquire art and agricultural skills. We also assist families in starting a small business.",

      "This work changes lives. It provides individuals with something better than money. It provides them with pride and meaning. They are no longer the ones waiting to be helped, but they turn out to be the help. The Sunamganj Jela Welfare Association UK is undertaking this program with love and patience. Each individual whom we train is a seed of change in their society.",
    ],
  },
  3: {
    text: [
      "Water is life. Safe water is difficult to access in most regions of Sunamganj. Individuals travel long distances to collect it. There are occasions when they become ill due to the water they drink. Our Clean Water Pump Project constructs water pumps in rural settings. Each pump provides clean drinking water for dozens of families. It saves them time (hours spent walking), makes them healthier, and guards against illnesses.",
      "Joy prevails when a new pump comes to the village. Mothers worry less. Children drink without fear. Life is made easier in a manner that can never be expressed through words. The project itself is not complicated but effective. Clean water provides individuals with time to work, learn, and live. It turns struggle into relief.",
    ],
  },
  4: {
    text: [
      "Night temperatures in Sunamganj may be freezing cold. A lot of individuals lack warm clothes and blankets to cover themselves. Children and the older generation are the worst hit when winter strikes. The Winter Blanket Donation Drive provides warmth to the people who need it the most. We take blankets, jackets, and winter packages and deliver them to the district villages. Every blanket we send out reminds a person that he is not forgotten.",
      "It might be a trivial matter, yet to a person who is lying on a cold floor, it would be life. The affection is love, Bangladeshi community love, in the UK. It makes people remember that compassion can not be separated by distance.",
      "Hope is restored to a weary heart when a blanket falls on two cold hands.",
    ],
  },
  5: {
    text: [
      "Health is precious. In its absence, it all goes astray. A good number of families in Sunamganj are unable to pay money to buy medicine or a doctor visit. There are those who are too far to hospitals to seek help.",
      "It is our Healthcare Support Program that assists individuals in such cases. We offer medicines, treatment expenses, and health education. We are quick in case of an emergency. Our volunteers provide relief and also refer patients to hospitals. We also concern ourselves with the Bangladeshi people in the UK. We assist individuals in locating a local healthcare center and directing them to welfare provisions. All people are entitled to care regardless of their place of residence.",
      "Every time that we assist a person to be healed, we obtain the same peace. Health brings back dignity. It empowers individuals to have a dream once more.",
    ],
  },
};

export const services = [
  {
    icon: ICONS.BookOpen,
    title: "Education and Youth",
    description:
      "Education opens doors. We help children in Sunamganj go to school. We provide books, fees, and support. In the UK, we guide young people to stay proud of their heritage and build strong futures.",
    color: "var(--main-green-color)",
  },
  {
    icon: ICONS.HeartPulse,
    title: "Health and Relief",
    description:
      "We help families during floods, illness, and hardship. During the COVID-19 pandemic, our volunteers gave food and medicine to those in need. We still offer relief when emergencies strike.",
    color: "var(--main-orange-color)",
  },
  {
    icon: ICONS.Home,
    title: "Community Growth",
    description:
      "We help rebuild homes, support small projects, and improve safety. We believe that strong communities grow from shared effort.",
    color: "var(--main-green-color)",
  },
  {
    icon: ICONS.Globe,
    title: "Culture and Unity",
    description:
      "In the UK, we give parties to celebrate our identity. These shows preserve our culture and make the new generations remain in touch with the Bangladeshi background.",
    color: "var(--main-orange-color)",
  },
];
