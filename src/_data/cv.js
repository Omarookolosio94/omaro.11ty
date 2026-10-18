module.exports = {
  name: "Oghenemaro Okolosio",
  role: "Senior Software Engineer",
  location: "Lagos, Nigeria (UTC+1)",
  availability: "Remote · 5+ hours daily overlap with US time zones",
  resume:
    "/assets/Oghenemaro_Okolosio_CV.pdf",

  contact: [
    { label: "Email", text: "omarookolosio94@gmail.com", url: "mailto:omarookolosio94@gmail.com" },
    { label: "LinkedIn", text: "oghenemaro-okolosio", url: "https://www.linkedin.com/in/oghenemaro-okolosio/" },
    { label: "GitHub", text: "omarookolosio94", url: "https://github.com/Omarookolosio94" },
    { label: "Meet", text: "Book a call", url: "https://calendar.app.google/DdpEDtJUyqwCBk6M7" },
  ],

  experience: [
    {
      period: "2025 — Now",
      role: "Lead Data Solution Engineer",
      company: "Union Bank of Nigeria",
      url: "https://www.unionbankng.com",
      summary:
        "Alero, the bank's KPI and business-performance platform. A KPI is only useful if people believe it.",
      points: [
        "Lead a team of four and own Alero's architecture, delivery and production reliability across multiple business units.",
        "Design and operate ETL pipelines that collect, validate and reconcile metrics from high-volume source systems, so the number on screen matches the number in the source.",
        "Run code review, set engineering standards, and mentor the team on testing and documentation.",
      ],
      stack: ".NET Core · TypeScript · Vue · PL/SQL · Python · Azure",
    },
    {
      period: "2020 — 2025",
      role: "Software Engineer",
      company: "Stanbic IBTC Bank",
      url: "https://www.stanbicibtcbank.com",
      summary:
        "Five years building payments, lending and onboarding systems used by retail customers and merchants.",
      points: [
        "Designed and built the Buy Now Pay Later platform end to end: the ASP.NET Core API and the Angular merchant portal. Merchants are settled in full; customers repay in instalments.",
        "Pushed every BNPL status change live over SignalR, owned the public API docs, and supported merchant developers through integration.",
        "Rebuilt EZ Cash bulk uploads as a dedicated service, cutting processing from over 25 minutes to under 6, and lifted loan application success rate by 24%.",
        "Built the bank's rewards engine as an event-driven service on Kafka, and the Money Manager API for personal finance.",
        "Reworked onboarding errors into clear next steps for customers, shortening KYC completion time.",
      ],
      stack: "C# · ASP.NET Core · Angular · React · SignalR · Kafka · SQL Server · Azure · Docker",
    },
    {
      period: "2020",
      role: "Software Engineer",
      company: "ITab Solutions",
      url: "https://www.itapsolutions.com/",
      summary: "Xfund, a multi-tenant portfolio and asset management SaaS.",
      points: [
        "Built portfolio valuation, financial instrument management and automated daily valuation runs.",
        "Added live WebSocket progress with SignalR for long-running valuation and reporting jobs.",
        "Integrated Bloomberg APIs, AG-Grid and Telerik; built Docker-based, multi-tenant deployment across Apache, IIS and Nginx.",
      ],
      stack: "TypeScript · React · Redux · SignalR · Docker",
    },
  ],

  partTime: [
    {
      period: "2022 — Now",
      role: "Principal Engineer (part-time)",
      company: "CampusRunz",
      url: "https://campusrunz.com",
      summary:
        "Students need a ride, a delivery, a room, groceries, food. Ten businesses that happen to live in one app.",
      points: [
        "Built all of CampusRunz's web applications hands-on, including the customer web app and the admin portal, from architecture through to production.",
        "Led the admin portal rebuild in React — lazy loading and client-side caching cut load time by over 10 seconds.",
        "Own the platform's architecture and technical direction, and lead a four-engineer team migrating the web, admin and mobile clients onto a rebuilt API without downtime.",
      ],
      stack: "TypeScript · React · Node.js · .NET · Kubernetes · AWS",
    },
    {
      period: "2024",
      role: "Frontend Engineer",
      company: "BusBuzzer",
      url: "https://admin.busbuzzer.com/",
      summary: "An electric school-bus platform. Parents want to know exactly where the bus is.",
      points: [
        "Shipped the operator admin panel in Next.js with a distributed US design and backend team.",
        "Built live vehicle tracking from continuous position streams, handling stale-data edge cases.",
      ],
      stack: "Next.js · TypeScript · Zustand · Geolocation APIs",
    },
  ],

  work: [
    {
      id: "bnpl",
      name: "Stanbic IBTC BNPL",
      url: "https://www.stanbicibtcbank.com/nigeriabank/business/products-and-services/ways-to-bank/buy-now-pay-later",
      description: "Buy Now Pay Later for merchants, with live status for everyone involved.",
    },
    {
      id: "ezcash",
      name: "EZ Cash",
      url: "https://ezcash.stanbicibtc.com/ezcash",
      description: "Instant loans. Bulk processing went from 25 minutes to under 6.",
    },
    {
      id: "campusrunz",
      name: "CampusRunz",
      url: "https://campusrunz.com",
      description: "Rides, deliveries, food and housing for students, in one app.",
    },
    {
      id: "busbuzzer",
      name: "BusBuzzer",
      url: "https://admin.busbuzzer.com/",
      description: "Operator admin and live tracking for electric school buses.",
    },
  ],

  skills: [
    { label: "Languages", items: "TypeScript, JavaScript, C#, SQL, Python" },
    { label: "Backend", items: "Node.js, Express, ASP.NET Core, REST API design, WebSockets / SignalR, Kafka, ETL pipelines" },
    { label: "Frontend", items: "React, Next.js, Angular, Vue, Svelte, Vite, Zustand, Redux, TailwindCSS" },
    { label: "Data", items: "PostgreSQL, SQL Server, MySQL, Oracle, MongoDB, Redis, Firebase" },
    { label: "Cloud", items: "AWS, Azure, Docker, Kubernetes, GitHub Actions, Nginx, Netlify" },
  ],

  education: {
    degree: "B.Sc. Geology",
    school: "Federal University of Petroleum Resources",
    url: "https://fupre.edu.ng/",
    year: "2017",
  },
};
