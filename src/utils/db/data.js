import forWordBackgroundImage from "img/forWord.jpg";
import oqpiBackgroundImage from "img/oqpi.png";
import yourWorkoutAppBackgroundImage from "img/yourworkoutapp.png";
import emetBackgroundImage from "img/emetISLHD.png";
import linmickBackgroundImage from "img/linmickDistributors.png";
import focusAustraliaBackgroundImage from "img/focusAustralia.png";

export const welcome = {
  title: "Welcome",
  titleSpanish: "Bienvenido",
  thankyouText: "With special thanks",
  thankyouTextSpanish: "Con agradecimiento especial",
};
export const biography = {
  title: "About me",
  titleSpanish: "Sobre mí",
  subtitle: "Hi, my name is Angus",
  subtitleSpanish: "Hola, mi nombre es Angus",
  text:
    "I'm a software engineer with skills in React, NodeJS, Typescript, Python, PHP, HTML, CSS, AWS and Serverless amongst other things. I've created this site as a place where you can connect with me and explore my work and the projects I experiment with in my spare time. I hope you enjoy it!",
  textSpanish:
    "Soy un ingeniero de software con habilidades en React, NodeJS, Typescript, Python, PHP, HTML, CSS, AWS y Serverless, entre otras cosas. He creado este sitio como un lugar donde puedes conectarte conmigo y explorar mi trabajo y los proyectos con los que experimento en mi tiempo libre. ¡Espero que lo disfruten!",
  skills: [
    {
      title: "Technical Skills",
      titleSpanish: "Habilidades Técnicas",
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
      skillListSpanish: [
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
    },
    {
      title: "Soft Skills",
      titleSpanish: "Habilidades blandas",
      skillList: [
        "Critical thinking",
        "Adaptability",
        "Creativity",
        "Verbal communication",
        "Written communication",
        "Leadership",
        "Punctuality",
      ],
      skillListSpanish: [
        "Pensamiento crítico",
        "Adaptabilidad",
        "Creatividad",
        "Comunicación verbal",
        "Comunicación escrita",
        "Liderazgo",
        "Puntualidad",
      ],
    },
  ],
};

export const caseStudies = {
  title: "Projects",
  titleSpanish: "Proyectos",
  projects: [
    {
      title: "Emergency Medicine Education and Training",
      titleSpanish: "Educación y Capacitación en Medicina de Emergencia",
      slug: "emet-islhd",
      url: "https://emet-islhd.blog",
      description:
        "Podcast and website created for the Emergency Medicine Education and Training branch of the Illawarra Shoalhaven Local Health District.",
      descriptionSpanish:
        "Podcast y sitio web creado para la rama de Educación y Capacitación en Medicina de Emergencia del Distrito de Salud Local de Illawarra Shoalhaven.",
      featureImage: {
        src: emetBackgroundImage,
        alt: "EMET-ISLHD Screenshot",
        altSpanish: "EMET-ISLHD Captura de pantalla",
      },
      stack: {
        backend: "Wordpress",
        frontend: "Javascript, HTML, CSS",
      },
      date: "January, 2019",
      dateSpanish: "Enero, 2019",
    },
    {
      title: "Linmick Distributors",
      titleSpanish: "Linmick Distributors",
      slug: "linmick",
      url: "https://linmick.com.au/",
      description:
        "Website created for a small Illawarra business specialising in food and general store supply distribution.",
      descriptionSpanish:
        "Sitio web creado para una pequeña empresa de Illawarra especializada en distribución de alimentos y suministros para tiendas generales.",
      featureImage: {
        src: linmickBackgroundImage,
        alt: "Linmick Distributors Screenshot",
        altSpanish: "Linmick Distributors Captura de pantalla",
      },
      stack: {
        backend: "Wordpress",
        frontend: "Javascript, HTML, CSS",
      },
      date: "July, 2018",
      dateSpanish: "Julio, 2018",
    },
    {
      title: "Focus Australia",
      titleSpanish: "Focus Australia",
      slug: "focus-australia",
      url: "http://focusau.com.au/",
      description: "Simple static website created for a local business.",
      descriptionSpanish:
        "Sitio web estático simple creado para una empresa local.",
      featureImage: {
        src: focusAustraliaBackgroundImage,
        alt: "Focus Australia Screenshot",
        altSpanish: "Focus Australia Captura de pantalla",
      },
      stack: {
        backend: "N/A",
        frontend: "Javascript, HTML, CSS",
      },
      date: "July, 2020",
      dateSpanish: "Julio, 2020",
    },
  ],
};

export const experiments = {
  title: "Experiments",
  titleSpanish: "Experimentos",
  experimentList: [
    {
      title: "Your Workout App",
      titleSpanish: "Your Workout App",
      slug: "your-workout-app",
      url: "https://yourworkout.app/",
      description:
        "Workout app that generates random workouts based on user preferences.",
      descriptionSpanish:
        "Aplicación de entrenamiento que genera entrenamientos aleatorios según las preferencias del usuario.",
      featureImage: {
        src: yourWorkoutAppBackgroundImage,
        alt: "Your Workout App screenshot",
        altSpanish: "Your Workout App Captura de pantalla",
      },
      stack: {
        backend: "AWS",
        frontend: "Javascript (React), HTML, CSS",
      },
      date: "September, 2019",
      dateSpanish: "Septiembre, 2019",
    },
    {
      title: "OQPI",
      titleSpanish: "OQPI",
      slug: "oqpi",
      url: "https://oqpi.com.au/",
      description:
        "Remote business workflow app that was designed to allow guests of a local hotel to check-in remotely using a tablet on the premises.",
      descriptionSpanish:
        "Aplicación de flujo de trabajo empresarial remoto que fue diseñada para permitir a los huéspedes de un hotel local registrarse de forma remota utilizando una tableta en las instalaciones.",
      featureImage: {
        src: oqpiBackgroundImage,
        alt: "OQPI screenshot",
        altSpanish: "OQPI Captura de pantalla",
      },
      stack: {
        backend: "AWS",
        frontend: "Javascript (React), HTML, CSS",
      },
      date: "January, 2020",
      dateSpanish: "Enero, 2020",
    },
    {
      title: "ForeWord",
      titleSpanish: "ForeWord",
      slug: "foreword",
      url: "",
      description:
        "Building an app where users can subscribe too learn a new word in a foreign language every day.",
      descriptionSpanish:
        "Creación de una aplicación donde los usuarios pueden suscribirse y aprender una nueva palabra en un idioma extranjero todos los días.",
      featureImage: {
        src: forWordBackgroundImage,
        alt: "ForWord App screenshot",
        altSpanish: "ForeWord Captura de pantalla",
      },
      stack: {
        backend: "AWS",
        frontend: "Javascript (React), HTML, CSS",
      },
      date: "July, 2020 (currently in development)",
      dateSpanish: "Julio, 2020",
    },
  ],
};

export const contactDetails = {
  preTitle: "Want to work with me?",
  preTitleSpanish: "¿Quieres trabajar conmigo?",
  title: "Get in touch",
  titleSpanish: "Poner en contacto",
  email: "angusbezzina@gmail.com",
  phone: "+(61) 423 269 154",
};

export const socialDetails = {
  twitter: "https://twitter.com/angus1192",
  gitHub: "https://github.com/angusbezzina",
  linkedIn: "https://www.linkedin.com/in/angus-bezzina",
};
