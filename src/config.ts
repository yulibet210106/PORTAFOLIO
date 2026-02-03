export const siteConfig = {
  name: "Yuly Mendoza",
  title: "Desarrolladora Full Stack en JavaScript",
  description: "Portfolio website of Yuly Mendoza",
  accentColor: "#cb46e9",
  social: {
    email: "yulymendoza78@gmail.com",
    linkedin: "https://www.linkedin.com/in/yuly-mendoza-bba899371/",
    github: "https://github.com/yulibet210106",
  },
  aboutMe:
    "Desarrolladora Full Stack Jr apasionada por el ecosistema JavaScript. Actualmente finalizando mi Licenciatura en Sistemas Computacionales y graduada del bootcamp intensivo de Kambcode. ​Mi enfoque está en escribir código limpio y eficiente. Aunque estoy iniciando mi carrera profesional, tengo experiencia práctica creando aplicaciones web responsivas y funcionales. Busco una oportunidad para aplicar mis habilidades en React y Node.js, aprender de un equipo senior y aportar valor desde el primer día.",
  skills: ["Javascript", "HTML5", "CSS3", "React", "Node.js", "Git", "GitHub"],
  projects: [
    {
      name: "Gestor de Tareas Interactivo (Task App)",
      description:
        "Aplicación web para la gestión eficiente de tareas diarias. Implementación de persistencia de datos (Local Storage) para que el usuario no pierda su información al recargar. Lógica avanzada en JavaScript para manipulación del DOM y diseño responsivo con CSS3.",
      link: "https://yulibet210106.github.io/PROYECTO.A/",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Carrito de compras con JavaScript original",
      description:
        "Carrito de compras para e-commerce desarrollado con HTML, CSS y JavaScript puro. Permite agregar y eliminar productos, gestionar cantidades y calcular totales en tiempo real. Proyecto enfocado en buenas prácticas, lógica de negocio y manipulación del DOM sin frameworks.",
      link: "https://yulibet210106.github.io/Carrito-de-Compras/",
      skills: ["HTML5", "CSS3", "JavaScript"],
    },
  //  {
  //    name: "ExtensionKit",
  //    description:
  //      "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
  //    link: "https://extensionkit.io/?ref=devportfolio",
  //    skills: ["React", "Node.js", "AWS"],
  //  },
  ],
  experience: [
    {
      company: "Universidad Latinoamericana en Línea",
      title: "Prácticas Académicas (Portal de seguimiento Estudiantil)",
      dateRange: "2024 - Presente",
      bullets: [
        "Arquitectura de Datos: Organización y consulta de expedientes académicos digitales.",
        "Interfaz UI/UX: Paneles en HTML5/CSS3 para visualización de progreso estudiantil.",
        "Interactividad: Filtros de búsqueda dinámica y navegación con JavaScript.",
        "Validación: Lógica de formularios para garantizar la integridad de la información.",
      ],
    },
  ],
  education: [
    {
      school: "Universidad Latinoamericana en Línea",
      degree: "Licenciatura en Sistemas Computacionales (En Curso)",
      dateRange: "2024 - 2028",
      achievements: [
        "Formación académica enfocada en fundamentos de ingeniería de software, algoritmos y estructuras de datos.",
        "Liderazgo en proyectos universitarios colaborativos, aplicando metodologías ágiles para el desarrollo de software.",
        "Participación activa en hackatones, desarrollando soluciones innovadoras bajo presión de tiempo.",
      ],
    },
    {
      school: "Kambcode",
      degree: "Desarrolladora Full Stack en JavaScript",
      dateRange: "2025",
      achievements: [
        "Programa intensivo (+400 horas) de formación práctica especializado en el stack MERN (JavaScript, Express, React.js, Node.js).",
        "Desarrollo y despliegue de más de 5 aplicaciones web completas (SPA), desde la maquetación hasta la integración con bases de datos.",
        "Especialización técnica en React.js (Hooks, Context API) y Node.js para la construcción de APIs escalables.",
      ],
    },
  ],
};
