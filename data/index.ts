export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Working on a project: Satorix",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Satorix",
    des: "Satorix is a production-grade, 10-layer operational intelligence platform built specifically for Indian corporate compliance, due diligence, and infrastructure risk intelligence.",
    img: "/fondry.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/SushantAzad/satorix",
  },
  {
    id: 2,
    title: "AI Health Insurance Fraud Detection",
    des: "Machine Learning based healthcare insurance fraud detection system using Random Forest, XGBoost, and SHAP Explainable AI.",
    img: "/shap.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/SushantAzad/AI-Health-Insurance-Fraud-Detection",
  },
  {
    id: 3,
    title: "Fractional Asset",
    des: "Tokenizing real estate to make property investment accessible to everyone.",
    img: "/collage.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/SushantAzad/FA",
  },
  {
    id: 4,
    title: "AURA AI",
    des: " Real-time cyber threat monitoring and visualization platform that combines advanced 3D graphics.",
    img: "/aura.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/SushantAzad/AURA.AI",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    desc: "Built end to end Machine Learning systems including healthcare fraud detection, feature engineering pipelines, and Explainable AI solutions using Random Forest, XGBoost, and SHAP.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Systems Developer",
    desc: "Developing Satorix, a production grade operational intelligence platform integrating Graph ML, LLM agents, Kafka pipelines, Neo4j, and real time analytics.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Programming Languages",
    desc: "Strong foundation in Python, Java, SQL, and Bash with practical experience building scalable Machine Learning and backend systems.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Data Engineering & Infrastructure",
    desc: "Experienced with Docker, Apache Kafka, Airflow, PostgreSQL, Neo4j, Redis, and modern data pipelines for AI driven applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const timelineItems = [
  {
    id: 1,
    title: "VIT Bhopal University",
    subtitle: "Bachelor of Technology (B.Tech)",
    duration: "2023 - Present",
    description:
      "Currently pursuing a B.Tech degree with a specialization in Computer Science, focusing on Cybersecurity, Digital Forensics, Software Development, and modern web technologies.",
    type: "education" as const,
  },
  {
    id: 2,
    title: "Software Developer",
    subtitle: "Galaxy Weblinks",
    duration: "February 2026 - May 2026",
    description:
      "Worked as a Software Developer, contributing to the design and development of scalable web applications. Collaborated with cross-functional teams, implemented modern frontend and backend solutions, optimized application performance, and participated in the complete software development lifecycle.",
    type: "experience" as const,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    issueDate: "November 2023",
    credentialId: "GOOGLE-IT-XXXXXX", // Replace with your actual credential ID
    description:
      "Industry recognized professional certification covering IT support fundamentals, computer networking, operating systems, system administration, security, and troubleshooting. Developed by Google to prepare learners for entry level IT support roles.",
    skills: [
      "IT Support",
      "Computer Networking",
      "Linux",
      "System Administration",
      "Operating Systems",
      "Cybersecurity",
      "Technical Troubleshooting",
      "Customer Support",
    ],
    image: "/git.png",
    certificateUrl: "#", // Add your certificate link here
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    issueDate: "YOUR_ISSUE_DATE", // e.g. "May 2026"
    credentialId: "DLS-XXXXXX", // Replace with your actual credential ID
    description:
      "Comprehensive specialization by DeepLearning.AI, instructed by Andrew Ng, covering the foundations of deep learning, neural networks, hyperparameter tuning, convolutional neural networks, sequence models, and practical AI applications using TensorFlow.",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "Convolutional Neural Networks",
      "Sequence Models",
      "Machine Learning",
      "Hyperparameter Tuning",
      "Artificial Intelligence",
    ],
    image: "/deep.png",
    certificateUrl: "#", // Add your certificate link here
  },
  {
    id: 3,
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    issueDate: "YOUR_ISSUE_DATE", // e.g. "June 2026"
    credentialId: "CC-XXXXXX", // Replace with your actual credential ID
    description:
      "Globally recognized entry level cybersecurity certification from ISC2 covering security principles, business continuity, access controls, network security, security operations, and incident response. Validates foundational knowledge required for modern cybersecurity roles.",
    skills: [
      "Cybersecurity Fundamentals",
      "Security Principles",
      "Network Security",
      "Access Control",
      "Security Operations",
      "Incident Response",
      "Risk Management",
      "Business Continuity",
    ],
    image: "/cc.png",
    certificateUrl: "#", // Add your certificate verification link here
  },
  // {
  //   id: 4,
  //   title: "Full Stack Web Development",
  //   issuer: "The Complete 2024 Web Development Bootcamp",
  //   issueDate: "May 2023",
  //   description:
  //     "End-to-end web development including frontend, backend, and database design",
  //   skills: ["React", "Node.js", "MongoDB", "REST APIs", "Web Development"],
  //   image: "/cert-placeholder-4.png",
  //   certificateUrl: "#",
  // },
  // {
  //   id: 5,
  //   title: "Cybersecurity Fundamentals",
  //   issuer: "CompTIA Security+",
  //   issueDate: "March 2023",
  //   credentialId: "COMP-SEC-2023-XXXX",
  //   description:
  //     "Foundational certification covering security concepts, network security, and cryptography",
  //   skills: [
  //     "Cybersecurity",
  //     "Network Security",
  //     "Encryption",
  //     "Risk Management",
  //   ],
  //   image: "/cert-placeholder-5.png",
  //   certificateUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "Python for AI Development",
  //   issuer: "Real Python",
  //   issueDate: "June 2023",
  //   description:
  //     "Advanced Python programming for AI and machine learning applications",
  //   skills: ["Python", "AI", "Scikit-learn", "Pandas", "NumPy"],
  //   image: "/cert-placeholder-6.png",
  //   certificateUrl: "#",
  // },
];

export const socialMedia = [
  {
    id: "https://github.com/SushantAzad",
    img: "/git.svg",
  },
  {
    id: "https://x.com/Sushantazad11",
    img: "/twit.svg",
  },
  {
    id: "https://linkedin.com/in/sushant-azad-065a08278",
    img: "/link.svg",
  },
];
