import { consultationEmail, consultationPhone, siteName } from "@/config";
import { type Locale, defaultLocale } from "@/i18n/locales";

type ServiceItem = {
  title: string;
  hook: string;
  points: string[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type WhyChooseItem = {
  title: string;
  description: string;
};

type TestimonialMedia =
  | { type: "video"; src: string; poster?: string }
  | { type: "images"; srcs: string[] };

type TestimonialItem = {
  name: string;
  location: string;
  quote: string;
  tag?: string;
  stars?: number;
  media: TestimonialMedia;
};

export type AppMessages = {
  localeLabel: string;
  metadata: {
    title: string;
    description: string;
    aboutTitle: string;
  };
  header: {
    nav: Array<{ name: string; href: string }>;
    desktopCta: string;
    mobileCta: string;
    openMainMenu: string;
    languageSwitch: string;
  };
  footer: {
    brandDescription: string;
    quickLinks: string;
    home: string;
    about: string;
    testimonial: string;
    allRightsReserved: string;
    locationLabel: string;
    locationValue: string;
  };
  contact: {
    title: string;
    description: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappAction: string;
    instagramLabel: string;
    instagramHandle: string;
    emailLabel: string;
    whatsappQrLabel: string;
    instagramQrLabel: string;
    whatsappQrAlt: string;
    instagramQrAlt: string;
  };
  landing: {
    trustedBadge: string;
    headingLine1: string;
    headingAccent: string;
    heroDescription: string;
    contactUs: string;
    highlights: Array<{ value: string; label: string }>;
    servicesLabel: string;
    servicesTitle: string;
    servicesDescription: string;
    services: ServiceItem[];
    servicesAriaLabel: string;
    discussService: string;
    processLabel: string;
    processTitle: string;
    processSteps: ProcessStep[];
    deliveryTitle: string;
    deliverySubtitle: string;
    whyLabel: string;
    whyTitle: string;
    whyDescription: string;
    whyItems: WhyChooseItem[];
  };
  about: {
    title: string;
    description: string;
    missionTitle: string;
    missionParagraph1: string;
    missionParagraph2: string;
    benefitsTitle: string;
    benefits: string[];
  };
  docs: {
    title: string;
    subtitle: string;
    content: string;
    cta: string;
  };
  testimonial: {
    title: string;
    subtitle: string;
    starsAria: string;
    videoTitle: string;
    browserVideoFallback: string;
    videoBadge: string;
    projectAlt: string;
    testimonials: TestimonialItem[];
  };
  enquiry: {
    iframeTitle: string;
    loading: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
};

const staticBasePath = process.env.NODE_ENV === "production" ? "/md-construction-group" : "";
const testimonialBasePath = `${staticBasePath}/images/testimonial`;

const en: AppMessages = {
  localeLabel: "English",
  metadata: {
    title: `${siteName} | Trusted Home And Commercial Builders`,
    description:
      "End-to-end construction services by MD Construction with transparent planning, quality-first execution, and on-time delivery.",
    aboutTitle: `About | ${siteName}`,
  },
  header: {
    nav: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/#services" },
      { name: "Contact Us", href: "/#contact" },
      { name: "Testimonial", href: "/testimonial" },
      { name: "About", href: "/about" },
    ],
    desktopCta: "Book Free Consultation",
    mobileCta: "Get Free Consultation",
    openMainMenu: "Open main menu",
    languageSwitch: "Language",
  },
  footer: {
    brandDescription:
      "Trusted construction partner for residential and commercial projects. We focus on transparent execution, reliable quality, and clear communication from kickoff to handover.",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About",
    testimonial: "Testimonial",
    allRightsReserved: "All rights reserved.",
    locationLabel: "Location",
    locationValue: "Ashok Nagar, Chennai",
  },
  contact: {
    title: "Let's Build Your Dream Together",
    description:
      "Start your construction journey with MD Construction and get a clear plan for budget, timeline, and execution.",
    phoneLabel: "Phone Number",
    whatsappLabel: "WhatsApp",
    whatsappAction: "Chat on WhatsApp",
    instagramLabel: "Instagram",
    instagramHandle: "@mdconstruction",
    emailLabel: "Email Address",
    whatsappQrLabel: "WhatsApp",
    instagramQrLabel: "Instagram",
    whatsappQrAlt: "WhatsApp QR code",
    instagramQrAlt: "Instagram QR code",
  },
  landing: {
    trustedBadge: "Trusted Since Day One",
    headingLine1: "Trusted Home &",
    headingAccent: "Commercial Builders",
    heroDescription:
      "End-to-end construction services by MD Construction with transparent planning, quality-first execution, and on-time delivery.",
    contactUs: "Contact Us",
    highlights: [
      { value: "250+", label: "Projects Delivered" },
      { value: "12+", label: "Years Of Experience" },
      { value: "98%", label: "On-Time Handover" },
      { value: "24x7", label: "Progress Visibility" },
    ],
    servicesLabel: "Our Services",
    servicesTitle: "Built To Perform. Designed To Last.",
    servicesDescription:
      "A premium construction service stack, from structural planning to full execution, tailored for dependable outcomes.",
    servicesAriaLabel: "Services",
    discussService: "Discuss This Service",
    services: [
      {
        title: "Building Construction & Development",
        hook: "From blueprint to final handover.",
        points: [
          "Residential and commercial end-to-end execution",
          "Quality-first materials and site supervision",
          "Timeline-focused delivery with stage planning",
          "Designs built for durability and modern living",
        ],
      },
      {
        title: "Interior Turnkey Projects",
        hook: "Move into a fully finished space.",
        points: [
          "Planning, execution, and finishing under one team",
          "Functional layouts matched to your lifestyle",
          "Material, lighting, and furniture coordination",
          "Single-point accountability from start to finish",
        ],
      },
      {
        title: "Repair & Rehabilitation",
        hook: "Restore strength. Renew performance.",
        points: [
          "Structural repairs for aging or damaged buildings",
          "Waterproofing and leakage prevention measures",
          "Renovation for safety and modern functionality",
          "Long-life upgrades with minimal disruption",
        ],
      },
      {
        title: "Project Management",
        hook: "Control cost, quality, and timelines.",
        points: [
          "Clear milestones and execution roadmaps",
          "Cross-team coordination and resource planning",
          "Progress tracking with practical reporting",
          "Risk mitigation for predictable delivery",
        ],
      },
      {
        title: "Property Management",
        hook: "Keep your property reliable year-round.",
        points: [
          "Routine maintenance and preventive checks",
          "Fast support for repair and service requests",
          "Operational oversight for residential and commercial units",
          "Cleaner, safer, and better-performing spaces",
        ],
      },
      {
        title: "Structural & Architectural Design",
        hook: "Where aesthetics meet engineering confidence.",
        points: [
          "Concepts aligned with plot and usage goals",
          "Structural planning focused on safety and performance",
          "Architectural detailing for visual impact",
          "Build-ready drawings for smoother execution",
        ],
      },
    ],
    processLabel: "OUR PROCESS",
    processTitle: "How We Deliver Your Vision, Step by Step",
    processSteps: [
      {
        title: "Connect with Us",
        description:
          "Share your basic details through a quick call. Our team consults with you through a free consultation.",
      },
      {
        title: "Define Your Requirement",
        description:
          "Discuss your plot details, budget, and timeline with our experts. We craft a clear project plan tailored to your goals.",
      },
      {
        title: "Approve Design",
        description:
          "Review floor plans, drawings, material selection, and scheduling. Work closely with our architects until every detail is finalized.",
      },
      {
        title: "Build & Monitor",
        description:
          "Our team ensures high quality standards through structured inspections at every project milestone. Stay updated on construction progress with daily photos, quality reports, and payment updates shared via WhatsApp.",
      },
      {
        title: "Handover & Support",
        description:
          "Take possession of your fully completed home with confidence, backed by a 10-year warranty. We ensure a smooth transition through final walkthroughs, complete documentation, and dedicated post-completion support.",
      },
    ],
    deliveryTitle: "On-Time Delivery",
    deliverySubtitle: "Every project, every time",
    whyLabel: "WHY CHOOSE US",
    whyTitle: "Why Choose MD Construction?",
    whyDescription:
      "We bring reliability, transparency, and craftsmanship to every project we undertake.",
    whyItems: [
      {
        title: "Transparent Project Planning",
        description:
          "Clear scope discussions, practical timelines, and stage-wise visibility from foundation to handover.",
      },
      {
        title: "Quality Checks At Every Stage",
        description:
          "Structured inspections and progress updates help maintain build quality and reduce rework.",
      },
      {
        title: "On-Time Handover Focus",
        description:
          "Milestone-based execution and close coordination keep projects moving toward timely delivery.",
      },
    ],
  },
  about: {
    title: "About MD Construction",
    description:
      "Building dependable residential and commercial spaces with transparent planning, quality execution, and responsible delivery.",
    missionTitle: "Our Mission",
    missionParagraph1:
      "We are committed to making construction clear and manageable for every client. Our process aligns design intent, project planning, and on-site execution from day one.",
    missionParagraph2:
      "With experienced supervision and milestone-based communication, we help you make confident decisions at every stage of your build.",
    benefitsTitle: "Key Benefits",
    benefits: [
      "End-to-end support from consultation to handover",
      "Stage-wise quality checks and regular project updates",
      "Practical budgeting and timeline-focused execution",
    ],
  },
  docs: {
    title: "Services And Packages",
    subtitle: "Explore our construction service offerings, package options, and delivery approach.",
    content: `
# Services And Packages

MD Construction offers practical construction solutions for residential and commercial requirements.

## Package Options

### Essential
- Practical scope for budget-conscious home construction
- Standard quality materials and site supervision
- Stage-wise progress communication

### Comfort
- Balanced package with upgraded finish options
- Planning support for key functional spaces
- Documented milestone quality checks

### Signature
- Premium package for customized requirements
- Detailed design personalization support
- Dedicated execution coordination

## How We Execute

1. Consultation and requirement discussion
2. Scope and budget planning
3. Design and material finalization
4. Construction with milestone updates
5. Inspection, handover, and support

## Need A Customized Proposal?

If your project includes phased execution, mixed-use spaces, or specific finishing standards, contact us for a tailored plan.
`,
    cta: "Talk To An Advisor",
  },
  testimonial: {
    title: "What Our Clients Say",
    subtitle: "Real feedback from homeowners and businesses who trusted MD Construction.",
    starsAria: "{count} out of 5 stars",
    videoTitle: "{name} testimonial video",
    browserVideoFallback: "Your browser does not support the video tag.",
    videoBadge: "Video",
    projectAlt: "Project",
    testimonials: [
      {
        name: "Marcus DeLeon",
        location: "Kolathur, Chennai",
        tag: "Duplex villa",
        stars: 5,
        quote:
          "From groundbreaking to ribbon-cutting their team was flawless. Every milestone was met on time and the finish quality exceeded everything in the brief.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/1/1.jpg`,
            `${testimonialBasePath}/1/2.jpg`,
            `${testimonialBasePath}/1/3.jpg`,
          ],
        },
      },
      {
        name: "Priya & Tom Hargreaves",
        location: "ECR, Chennai",
        tag: "Residential",
        stars: 5,
        quote:
          "We were nervous about such a big renovation, but the crew made us feel informed at every step. Neighbours keep asking who built it.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/2/1.jpg`,
            `${testimonialBasePath}/2/2.jpg`,
            `${testimonialBasePath}/2/3.jpg`,
          ],
        },
      },
      {
        name: "Sandra Kowalski",
        location: "Velachery, Chennai",
        tag: "Interior Turnkey",
        stars: 5,
        quote:
          "Their team delivered precision engineering six weeks ahead of schedule with zero incidents. Remarkable professionalism throughout.",
        media: {
          type: "video",
          src: `${testimonialBasePath}/3/1.mp4`,
        },
      },
      {
        name: "Daniel Okafor",
        location: "Saidapet, Chennai",
        tag: "Renovation",
        stars: 4,
        quote:
          "80,000 sq ft in under five months. The project manager kept communication tight and the steelwork is exactly to spec. Would use again.",
        media: {
          type: "video",
          src: `${testimonialBasePath}/4/1.mp4`,
        },
      },
      {
        name: "Helena Rousseau",
        location: "Velachery, Chennai",
        tag: "Restoration",
        stars: 5,
        quote:
          "Their restoration expertise preserved every original feature we cared about while meeting all modern building codes. Guests are blown away.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/5/1.jpg`,
            `${testimonialBasePath}/5/2.jpg`,
            `${testimonialBasePath}/5/3.jpg`,
          ],
        },
      },
      {
        name: "James Whitfield",
        location: "Velachery, Chennai",
        tag: "Education",
        stars: 5,
        quote:
          "They built around a live school calendar - working weekends to minimise disruption. Students walked in on day one to a fully operational facility.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/6/1.jpg`,
            `${testimonialBasePath}/6/2.jpg`,
            `${testimonialBasePath}/6/3.jpg`,
          ],
        },
      },
    ],
  },
  enquiry: {
    iframeTitle: "Book a Free Consultation Form",
    loading: "Loading...",
  },
  notFound: {
    title: "Not Found",
    description: "Could not find requested resource",
    cta: "Return Home",
  },
};

const ta: AppMessages = {
  localeLabel: "தமிழ்",
  metadata: {
    title: `${siteName} | நம்பகமான வீட்டு மற்றும் வணிக கட்டுமான நிறுவனம்`,
    description:
      "தெளிவான திட்டமிடல், தரமிக்க செயலாக்கம் மற்றும் நேரத்துக்கு ஒப்படைப்பு ஆகியவற்றுடன் முழுமையான கட்டுமான சேவைகள்.",
    aboutTitle: `எங்களை பற்றி | ${siteName}`,
  },
  header: {
    nav: [
      { name: "முகப்பு", href: "/" },
      { name: "சேவைகள்", href: "/#services" },
      { name: "தொடர்பு", href: "/#contact" },
      { name: "வாடிக்கையாளர் கருத்துகள்", href: "/testimonial" },
      { name: "எங்களை பற்றி", href: "/about" },
    ],
    desktopCta: "இலவச ஆலோசனை பதிவு செய்யுங்கள்",
    mobileCta: "இலவச ஆலோசனை பெறுங்கள்",
    openMainMenu: "முதன்மை மெனுவை திற",
    languageSwitch: "மொழி",
  },
  footer: {
    brandDescription:
      "வீட்டு மற்றும் வணிகத் திட்டங்களுக்கு நம்பகமான கட்டுமான கூட்டாளி. திட்டத் தொடக்கம் முதல் ஒப்படைப்பு வரை தெளிவான செயற்பாடு மற்றும் தரத்தை முன்னிலைப்படுத்துகிறோம்.",
    quickLinks: "விரைவு இணைப்புகள்",
    home: "முகப்பு",
    about: "எங்களை பற்றி",
    testimonial: "வாடிக்கையாளர் கருத்துகள்",
    allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    locationLabel: "இடம்",
    locationValue: "அசோக் நகர், சென்னை",
  },
  contact: {
    title: "உங்கள் கனவு இல்லத்தை சேர்ந்து கட்டுவோம்",
    description:
      "MD Construction உடன் உங்கள் கட்டுமான பயணத்தை தொடங்குங்கள். செலவு, காலஅட்டவணை மற்றும் செயலாக்கத்திற்கான தெளிவான திட்டம் பெறுங்கள்.",
    phoneLabel: "தொலைபேசி எண்",
    whatsappLabel: "வாட்ஸ்அப்",
    whatsappAction: "வாட்ஸ்அப்பில் உரையாடுங்கள்",
    instagramLabel: "இன்ஸ்டாகிராம்",
    instagramHandle: "@mdconstruction",
    emailLabel: "மின்னஞ்சல் முகவரி",
    whatsappQrLabel: "வாட்ஸ்அப்",
    instagramQrLabel: "இன்ஸ்டாகிராம்",
    whatsappQrAlt: "வாட்ஸ்அப் QR குறியீடு",
    instagramQrAlt: "இன்ஸ்டாகிராம் QR குறியீடு",
  },
  landing: {
    trustedBadge: "தொடங்கிய நாள் முதல் நம்பிக்கை",
    headingLine1: "நம்பகமான வீடு &",
    headingAccent: "வணிக கட்டுமான நிபுணர்கள்",
    heroDescription:
      "தெளிவான திட்டமிடல், தரமிக்க செயலாக்கம் மற்றும் நேரத்துக்கு ஒப்படைப்பு ஆகியவற்றுடன் முழுமையான கட்டுமான சேவைகள்.",
    contactUs: "எங்களை தொடர்புகொள்ளுங்கள்",
    highlights: [
      { value: "250+", label: "முடிக்கப்பட்ட திட்டங்கள்" },
      { value: "12+", label: "ஆண்டுகள் அனுபவம்" },
      { value: "98%", label: "நேரத்துக்கு ஒப்படைப்பு" },
      { value: "24x7", label: "முன்னேற்ற கண்காணிப்பு" },
    ],
    servicesLabel: "எங்கள் சேவைகள்",
    servicesTitle: "திறன் மிக்க கட்டிடம். நீண்டநாள் நிலைத்த வடிவமைப்பு.",
    servicesDescription:
      "கட்டமைப்பு திட்டமிடலிருந்து முழுமையான செயலாக்கம் வரை நம்பகமான முடிவுகளுக்கான சேவை தொகுப்பு.",
    servicesAriaLabel: "சேவைகள்",
    discussService: "இந்த சேவையை பேசுங்கள்",
    services: [
      {
        title: "கட்டிடம் கட்டுமானம் மற்றும் மேம்பாடு",
        hook: "வரைபடத்திலிருந்து இறுதி ஒப்படைப்பு வரை.",
        points: [
          "வீட்டு மற்றும் வணிகத் திட்டங்களுக்கு முழுமையான செயலாக்கம்",
          "தரமான பொருட்கள் மற்றும் தள கண்காணிப்பு",
          "கட்டத்துக்கு கட்டம் காலஅட்டவணை மையமான நிறைவேற்றம்",
          "நீடித்த பயன்பாட்டிற்கான நவீன வடிவமைப்புகள்",
        ],
      },
      {
        title: "இன்டீரியர் டர்ன்கீ திட்டங்கள்",
        hook: "முழுமையாக தயார் செய்யப்பட்ட இடத்திற்கு குடியேறுங்கள்.",
        points: [
          "திட்டமிடல் முதல் நிறைவு வரை ஒரே அணியில்",
          "உங்கள் வாழ்க்கை முறைக்கு ஏற்ற செயல்திறன் மிக்க அமைப்புகள்",
          "பொருள், விளக்கு, பொருட்கள் ஒருங்கிணைப்பு",
          "தொடக்கம் முதல் முடிவு வரை ஒற்றை பொறுப்பாளர்",
        ],
      },
      {
        title: "பழுது மற்றும் மறுசீரமைப்பு",
        hook: "வலிமையை மீட்டெடு. செயல்திறனை புதுப்பி.",
        points: [
          "பழைய அல்லது சேதமடைந்த கட்டிடங்களுக்கு கட்டமைப்பு பழுது",
          "நீர்சுரிதல் தடுப்பு மற்றும் நீர்ப்புகா தீர்வுகள்",
          "பாதுகாப்பு மற்றும் நவீன வசதிக்கான புதுப்பிப்பு",
          "குறைந்த இடையூறுடன் நீண்டநாள் மேம்பாடுகள்",
        ],
      },
      {
        title: "திட்ட மேலாண்மை",
        hook: "செலவு, தரம், காலஅட்டவணையை கட்டுப்படுத்து.",
        points: [
          "தெளிவான இலக்குகள் மற்றும் செயலாக்க வரைபடங்கள்",
          "அணி ஒருங்கிணைப்பு மற்றும் வளத் திட்டமிடல்",
          "நடைமுறை முன்னேற்ற கண்காணிப்பு அறிக்கைகள்",
          "கணிக்கக்கூடிய ஒப்படைப்பிற்கான அபாய கட்டுப்பாடு",
        ],
      },
      {
        title: "சொத்து மேலாண்மை",
        hook: "ஆண்டெங்கும் உங்கள் சொத்தை நம்பகமாக பராமரி.",
        points: [
          "தொடர்ச்சியான பராமரிப்பு மற்றும் தடுப்பு ஆய்வுகள்",
          "பழுது மற்றும் சேவை தேவைகளுக்கு விரைவு ஆதரம்",
          "வீட்டு மற்றும் வணிக வளாகங்களுக்கான செயல்பாட்டு கண்காணிப்பு",
          "சுத்தமான, பாதுகாப்பான, சிறந்த செயல்திறன் கொண்ட இடங்கள்",
        ],
      },
      {
        title: "கட்டமைப்பு மற்றும் கட்டிடக்கலை வடிவமைப்பு",
        hook: "அழகும் பொறியியல் நம்பிக்கையும் இணையும் இடம்.",
        points: [
          "நிலப்பரப்பு மற்றும் பயன்பாட்டு இலக்குகளுடன் ஒத்த கருத்துகள்",
          "பாதுகாப்பு மற்றும் செயல்திறன் மையமான கட்டமைப்பு திட்டம்",
          "காட்சியழகுக்கான கட்டிடக்கலை விவர வடிவமைப்பு",
          "சீரான செயலாக்கத்திற்கான கட்டுமானத் தயாரான வரைபடங்கள்",
        ],
      },
    ],
    processLabel: "எங்கள் செயல்முறை",
    processTitle: "உங்கள் கனவை எப்படிப் படிப்படியாக நிறைவேற்றுகிறோம்",
    processSteps: [
      {
        title: "எங்களை தொடர்புகொள்ளுங்கள்",
        description:
          "ஒரு குறுகிய அழைப்பில் உங்கள் அடிப்படை விவரங்களைப் பகிருங்கள். எங்கள் அணி இலவச ஆலோசனையுடன் வழிகாட்டும்.",
      },
      {
        title: "உங்கள் தேவையை வரையறுக்கவும்",
        description:
          "ப்ளாட் விவரம், பட்ஜெட் மற்றும் காலஅட்டவணையை நிபுணர்களுடன் விவாதிக்கவும். உங்கள் இலக்குகளுக்கு ஏற்ற திட்டத்தை உருவாக்குகிறோம்.",
      },
      {
        title: "வடிவமைப்பை ஒப்புதல் அளிக்கவும்",
        description:
          "தள வரைபடம், பொருட்கள் மற்றும் அட்டவணையை ஆய்வு செய்யுங்கள். ஒவ்வொரு விவரமும் உறுதிப்படுத்தப்படும் வரை இணைந்து செயல்படுகிறோம்.",
      },
      {
        title: "கட்டிடம் & கண்காணிப்பு",
        description:
          "ஒவ்வொரு கட்டத்திலும் தர ஆய்வுகள் மூலம் உயர்தரத்தை உறுதி செய்கிறோம். தினசரி படங்கள் மற்றும் முன்னேற்ற தகவல்கள் வாட்ஸ்அப்பில் பகிரப்படும்.",
      },
      {
        title: "ஒப்படைப்பு & ஆதரவு",
        description:
          "10 ஆண்டு உத்தரவாதத்துடன் உங்கள் முழுமையான வீட்டை நம்பிக்கையுடன் பெற்றுக்கொள்ளுங்கள். இறுதி ஆய்வு, ஆவணங்கள் மற்றும் ஒப்படைப்புக்குப் பிந்தைய ஆதரவு வழங்கப்படும்.",
      },
    ],
    deliveryTitle: "நேரத்துக்கு ஒப்படைப்பு",
    deliverySubtitle: "ஒவ்வொரு திட்டமும், ஒவ்வொரு முறையும்",
    whyLabel: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்",
    whyTitle: "ஏன் MD Construction?",
    whyDescription: "ஒவ்வொரு திட்டத்திலும் நம்பிக்கை, வெளிப்படைத் தன்மை மற்றும் தொழில்நுட்ப திறனை கொண்டு வருகிறோம்.",
    whyItems: [
      {
        title: "வெளிப்படையான திட்டமிடல்",
        description:
          "அடித்தளத்திலிருந்து ஒப்படைப்பு வரை தெளிவான விவாதங்கள், நடைமுறை காலஅட்டவணை மற்றும் கட்டம் வாரியான பார்வை.",
      },
      {
        title: "ஒவ்வொரு கட்டத்திலும் தர பரிசோதனை",
        description: "கட்டுப்பாடான ஆய்வுகள் மற்றும் முன்னேற்ற தகவல்கள் கட்டுமான தரத்தை மேம்படுத்துகின்றன.",
      },
      {
        title: "நேர ஒப்படைப்பில் கவனம்",
        description: "இலக்கு அடிப்படையிலான செயலாக்கம் திட்டத்தை காலத்துக்கு முடிக்க உதவுகிறது.",
      },
    ],
  },
  about: {
    title: "MD Construction பற்றி",
    description:
      "வீட்டு மற்றும் வணிக இடங்களுக்கு வெளிப்படையான திட்டமிடல், தரமான செயலாக்கம் மற்றும் பொறுப்பான ஒப்படைப்பு.",
    missionTitle: "எங்கள் நோக்கம்",
    missionParagraph1:
      "ஒவ்வொரு வாடிக்கையாளருக்கும் கட்டுமானத்தை எளிதாகவும் தெளிவாகவும் மாற்றுவதே எங்கள் நோக்கம். முதல் நாளிலிருந்தே வடிவமைப்பு, திட்டமிடல் மற்றும் தள செயல்பாட்டை இணைக்கிறோம்.",
    missionParagraph2:
      "அனுபவமிக்க கண்காணிப்பு மற்றும் கட்டம் வாரியான தகவல் பரிமாற்றத்துடன், ஒவ்வொரு கட்டத்திலும் நம்பிக்கையான முடிவெடுக்க உதவுகிறோம்.",
    benefitsTitle: "முக்கிய நன்மைகள்",
    benefits: [
      "ஆலோசனை முதல் ஒப்படைப்பு வரை முழுமையான ஆதரவு",
      "கட்டம் வாரியான தர ஆய்வுகள் மற்றும் வழக்கமான முன்னேற்ற தகவல்கள்",
      "நடைமுறை பட்ஜெட் மற்றும் காலஅட்டவணை மையமான செயலாக்கம்",
    ],
  },
  docs: {
    title: "சேவைகள் மற்றும் தொகுப்புகள்",
    subtitle: "எங்கள் கட்டுமான சேவைகள், தொகுப்பு விருப்பங்கள் மற்றும் செயலாக்க முறையை அறியுங்கள்.",
    content: `
# சேவைகள் மற்றும் தொகுப்புகள்

MD Construction வீட்டு மற்றும் வணிகத் தேவைகளுக்கான நடைமுறை கட்டுமான தீர்வுகளை வழங்குகிறது.

## தொகுப்பு விருப்பங்கள்

### Essential
- செலவுக்குள் வீட்டுக்கட்டுமானத்திற்கு நடைமுறை சேவை அளவு
- தரமான அடிப்படை பொருட்கள் மற்றும் தள கண்காணிப்பு
- கட்டம் வாரியான முன்னேற்ற தகவல்

### Comfort
- மேம்பட்ட நிறைவு விருப்பங்களுடன் சமநிலை தொகுப்பு
- முக்கிய செயல்பாட்டு இடங்களுக்கான திட்டமிடல் ஆதரவு
- ஆவணப்படுத்தப்பட்ட தர ஆய்வுகள்

### Signature
- தனிப்பயன் தேவைகளுக்கான பிரீமியம் தொகுப்பு
- விரிவான வடிவமைப்பு தனிப்பயனாக்க உதவி
- தனிப்பட்ட செயலாக்க ஒருங்கிணைப்பு

## நாங்கள் செயல்படுத்தும் முறை

1. ஆலோசனை மற்றும் தேவைகள் விவாதம்
2. சேவை வரம்பு மற்றும் செலவுத்திட்ட திட்டமிடல்
3. வடிவமைப்பு மற்றும் பொருள் இறுதி தேர்வு
4. கட்டுமானம் மற்றும் கட்டம் வாரியான புதுப்பிப்புகள்
5. ஆய்வு, ஒப்படைப்பு மற்றும் ஆதரவு

## தனிப்பயன் திட்டம் வேண்டுமா?

உங்கள் திட்டத்தில் கட்டம் வாரியான செயலாக்கம், கலப்பு பயன்பாட்டு இடங்கள் அல்லது குறிப்பிட்ட நிறைவு தரங்கள் இருந்தால், தனிப்பயன் திட்டத்திற்காக எங்களை தொடர்புகொள்ளுங்கள்.
`,
    cta: "ஆலோசகருடன் பேசுங்கள்",
  },
  testimonial: {
    title: "எங்கள் வாடிக்கையாளர்கள் சொல்வது",
    subtitle: "MD Construction மீது நம்பிக்கை வைத்த வீட்டு உரிமையாளர்கள் மற்றும் நிறுவனங்களின் உண்மையான கருத்துகள்.",
    starsAria: "5 இல் {count} நட்சத்திரங்கள்",
    videoTitle: "{name} வாடிக்கையாளர் காணொளி",
    browserVideoFallback: "உங்கள் உலாவி வீடியோவை ஆதரிக்கவில்லை.",
    videoBadge: "வீடியோ",
    projectAlt: "திட்டம்",
    testimonials: [
      {
        name: "Marcus DeLeon",
        location: "கொளத்தூர், சென்னை",
        tag: "டூப்ளக்ஸ் வில்லா",
        stars: 5,
        quote:
          "அடித்தள தொடக்கம் முதல் இறுதி ஒப்படைப்பு வரை அணியின் செயல்பாடு மிகச் சிறப்பாக இருந்தது. ஒவ்வொரு கட்டமும் நேரத்தில் முடிந்து தரம் எதிர்பார்ப்பை மீறியது.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/1/1.jpg`,
            `${testimonialBasePath}/1/2.jpg`,
            `${testimonialBasePath}/1/3.jpg`,
          ],
        },
      },
      {
        name: "Priya & Tom Hargreaves",
        location: "ECR, சென்னை",
        tag: "வீட்டு திட்டம்",
        stars: 5,
        quote:
          "பெரிய புதுப்பிப்பு திட்டம் என்பதால் ஆரம்பத்தில் பதட்டம் இருந்தது. ஆனால் ஒவ்வொரு கட்டத்திலும் தெளிவாக தகவல் பகிர்ந்ததால் நம்பிக்கை அதிகரித்தது.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/2/1.jpg`,
            `${testimonialBasePath}/2/2.jpg`,
            `${testimonialBasePath}/2/3.jpg`,
          ],
        },
      },
      {
        name: "Sandra Kowalski",
        location: "வேளச்சேரி, சென்னை",
        tag: "இன்டீரியர் டர்ன்கீ",
        stars: 5,
        quote:
          "அணியின் பொறியியல் துல்லியமும் தொழில்முறையும் அற்புதம். திட்டத்தை எதிர்பார்த்த நேரத்துக்கு முன்னதாகவும் சீராகவும் முடித்தனர்.",
        media: {
          type: "video",
          src: `${testimonialBasePath}/3/1.mp4`,
        },
      },
      {
        name: "Daniel Okafor",
        location: "சைதாப்பேட்டை, சென்னை",
        tag: "புதுப்பிப்பு",
        stars: 4,
        quote:
          "மிகப்பெரிய பரப்பளவு கொண்ட திட்டத்தையும் கட்டுப்பாட்டில் வைத்தனர். திட்ட மேலாளர் தொடர்ந்து தெளிவான தகவல் பகிர்ந்தார்.",
        media: {
          type: "video",
          src: `${testimonialBasePath}/4/1.mp4`,
        },
      },
      {
        name: "Helena Rousseau",
        location: "வேளச்சேரி, சென்னை",
        tag: "மீளமைப்பு",
        stars: 5,
        quote:
          "பழமையான அம்சங்களை பாதுகாத்தபடி நவீன தரநிலைகளுடன் மீளமைத்த விதம் மிகவும் கவர்ச்சியாக இருந்தது.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/5/1.jpg`,
            `${testimonialBasePath}/5/2.jpg`,
            `${testimonialBasePath}/5/3.jpg`,
          ],
        },
      },
      {
        name: "James Whitfield",
        location: "வேளச்சேரி, சென்னை",
        tag: "கல்வி வளாகம்",
        stars: 5,
        quote:
          "பள்ளி அட்டவணைக்கு ஏற்ப வேலை திட்டமிட்டு குறைந்த இடையூறில் திட்டத்தை நிறைவு செய்தனர். தொடக்க நாளிலேயே வசதி செயல்பாட்டிற்கு தயாராக இருந்தது.",
        media: {
          type: "images",
          srcs: [
            `${testimonialBasePath}/6/1.jpg`,
            `${testimonialBasePath}/6/2.jpg`,
            `${testimonialBasePath}/6/3.jpg`,
          ],
        },
      },
    ],
  },
  enquiry: {
    iframeTitle: "இலவச ஆலோசனை படிவம்",
    loading: "ஏற்றப்படுகிறது...",
  },
  notFound: {
    title: "பக்கம் கிடைக்கவில்லை",
    description: "நீங்கள் கோரிய பக்கம் கிடைக்கவில்லை",
    cta: "முகப்புக்கு திரும்பு",
  },
};

const dictionaries: Record<Locale, AppMessages> = {
  en,
  ta,
};

export const sharedContactDetails = {
  consultationEmail,
  consultationPhone,
  instagramUrl: "https://instagram.com/md._construction",
};

export function getMessages(locale: Locale): AppMessages {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
