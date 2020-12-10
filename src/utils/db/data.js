import oqpiBackgroundImage from "img/oqpi.png";
import yourWorkoutAppBackgroundImage from "img/yourworkoutapp.png";
import emetBackgroundImage from "img/emetISLHD.png";
import linmickBackgroundImage from "img/linmickdistributors.png";
import portfolioBackgroundImage from "img/portfolio.png";

export const welcome = {
  english: {
    title: "Welcome",
    thankyouText: "With special thanks to",
  },
  spanish: {
    title: "Bienvenido",
    thankyouText: "Con agradecimiento especial",
  },
};
export const biography = {
  english: {
    title: "About me",
    subtitle: "Hi, my name is Angus",
    text:
    "I'm a software engineer with skills in React, NodeJS, Typescript, Python, PHP, HTML, CSS, AWS and Serverless amongst other things. I've created this site as a place where you can connect with me and explore my work and the projects I experiment with in my spare time. I hope you enjoy it!",
    skills: [{
      title: "Technical Skills",
      skillList: [
        "Javascript/HTML/CSS",
        "React",
        "Typescript",
        "NodeJS",
        "AWS",
        "Serverless",
        "Python",
        "C",
        "PHP",
      ],
    }, {
      title: "Soft Skills",
      skillList: [
        "Critical thinking",
        "Adaptability",
        "Creativity",
        "Verbal communication",
        "Written communication",
        "Leadership",
        "Punctuality"
      ]
    }],
  },
  spanish: {
    title: "Sobre mí",
    subtitle: "Hola, mi nombre es Angus",
    text:
    "Soy un ingeniero de software con habilidades en React, NodeJS, Typescript, Python, PHP, HTML, CSS, AWS y Serverless, entre otras cosas. He creado este sitio como un lugar donde puedes conectarte conmigo y explorar mi trabajo y los proyectos con los que experimento en mi tiempo libre. ¡Espero que lo disfruten!",
    skills: [{
      title: "Habilidades Técnicas",
      skillList: [
        "Javascript/HTML/CSS",
        "React",
        "Typescript",
        "NodeJS",
        "AWS",
        "Serverless",
        "Python",
        "C",
        "PHP",
      ],
    }, {
      title: "Habilidades blandas",
      skillList: [
        "Pensamiento crítico",
        "Adaptabilidad",
        "Creatividad",
        "Comunicación verbal",
        "Comunicación escrita",
        "Liderazgo",
        "Puntualidad"
      ],
    }],
  }
};

export const caseStudies = {
  english: {
    title: "Projects",
  },
  spanish: {
    title: "Proyectos",
  },
  projects: [
    {
      english: {
        title: "Emergency Medicine Education and Training",
        description:
          "Podcast and website created for the Emergency Medicine Education and Training branch of the Illawarra Shoalhaven Local Health District.",
        featureImageAlt: "EMET-ISLHD Screenshot",
        date: "January, 2019",
      },
      spanish: {
        title: "Educación y Capacitación en Medicina de Emergencia",
        description:
          "Podcast y sitio web creado para la rama de Educación y Capacitación en Medicina de Emergencia del Distrito de Salud Local de Illawarra Shoalhaven.",
        featureImageAlt: "EMET-ISLHD Captura de pantalla",
        date: "Enero, 2019",
      },
      slug: "emet-islhd",
      url: "https://emet-islhd.blog",
      featureImageSrc: emetBackgroundImage,
      stack: {
        backend: "Wordpress",
        frontend: "Javascript, HTML, CSS",
      },
    },
    {
      english: {
        title: "Linmick Distributors",
        description:
          "Website created for a small Illawarra business specialising in food and general store supply distribution.",
        featureImageAlt: "Linmick Distributors Screenshot",
        date: "July, 2018",
      },
      spanish: {
        title: "Linmick Distributors",
        description:
          "Sitio web creado para una pequeña empresa de Illawarra especializada en distribución de alimentos y suministros para tiendas generales.",
        featureImageAlt: "Linmick Distributors Captura de pantalla",
        date: "Julio, 2018",
      },
      slug: "linmick",
      url: "https://linmick.com.au/",
      featureImageSrc: linmickBackgroundImage,
      stack: {
        backend: "Wordpress",
        frontend: "Javascript, HTML, CSS",
      },
    },
    {
      english: {
        title: "AngusBezzina.com",
        description:
          "Portfolio website built with React and Typescript. Utilises a simple contact form that is connected to AirTable with an AWS λ function.",
        featureImageAlt: "AngusBezzina.com Screenshot",
        date: "September, 2020",
      },
      spanish: {
        title: "AngusBezzina.com",
        description: "Sitio web de la cartera construido con React y Typescript. Utiliza un formulario de contacto simple que está conectado a AirTable con una función AWS λ.",
        featureImageAlt: "AngusBezzina.com Captura de pantalla",
        date: "Septiembre, 2020",
      },
      slug: "angusbezzina",
      url: "https://angusbezzina.com/",
      featureImageSrc: portfolioBackgroundImage,
      stack: {
        backend: "AWS/Serverless",
        frontend: "React, Typescript",
      },
    },
  ],
};

export const experiments = {
  english: {
    title: "Experiments",
  },
  spanish: {
    title: "Experimentos",
  },
  experimentList: [
    {
      english: {
        title: "Your Workout App",
        description: "Workout app that generates random workouts based on user preferences.",
        featureImageAlt: "Your Workout App screenshot",
        date: "September, 2019",
      },
      spanish: {
        title: "Focus Australia",
        description:
          "Aplicación de entrenamiento que genera entrenamientos aleatorios según las preferencias del usuario.",
        featureImageAlt: "Your Workout App Captura de pantalla",
        date: "Septiembre, 2019",
      },
      slug: "your-workout-app",
      url: "https://yourworkout.app/",
      featureImageSrc: yourWorkoutAppBackgroundImage,
      stack: {
        backend: "Node JS, GraphQL (apollo-server-lambda), AWS Serverless",
        frontend: "React, Apollo",
      },
    },
    {
      english: {
        title: "OQPI",
        description:
          "Remote business workflow app that was designed to allow guests of a local hotel to check-in remotely using a tablet on the premises.",
        featureImageAlt: "OQPI Screenshot",
        date: "January, 2020",
      },
      spanish: {
        title: "OQPI",
        description:
          "Aplicación de flujo de trabajo empresarial remoto que fue diseñada para permitir a los huéspedes de un hotel local registrarse de forma remota utilizando una tableta en las instalaciones.",
        featureImageAlt: "OQPI Captura de pantalla",
        date: "Enero, 2020",
      },
      slug: "oqpi",
      url: "https://oqpi.com.au/",
      featureImageSrc: oqpiBackgroundImage,
      stack: {
        backend: "Node JS, GraphQL (apollo-server-lambda), AWS Serverless",
        frontend: "React, Apollo",
      },
    },
    {
      english: {
        title: "ForeWord",
        description:
          "An app where users can subscribe too learn a new word in a foreign language every day.",
        featureImageAlt: "ForeWord Screenshot",
        date: "July, 2020 (currently in development)",
      },
      spanish: {
        title: "ForeWord",
        description:
          "Una aplicación donde los usuarios pueden suscribirse y aprender una nueva palabra en un idioma extranjero todos los días.",
        date: "Julio, 2020 (actualmente en desarrollo)",
      },
      slug: "foreword",
      url: "",
      stack: {
        backend: "AWS/Serverless",
        frontend: "Javascript (React), HTML, CSS",
      },
    },
  ],
};

export const contactDetails = {
  english: {
    preTitle: "Want to work with me?",
    title: "Get in touch",
  },
  spanish: {
    preTitle: "¿Quieres trabajar conmigo?",
    title: "Poner en contacto",
  },
  email: "angusbezzina@gmail.com",
  phone: "+(61) 423 269 154",
};

export const socialDetails = {
  twitter: "https://twitter.com/angus1192",
  gitHub: "https://github.com/angusbezzina/",
  linkedIn: "https://www.linkedin.com/in/angus-bezzina",
};
