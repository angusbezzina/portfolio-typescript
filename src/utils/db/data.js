import forWordBackgroundImage from "img/forWord.jpg";
import oqpiBackgroundImage from "img/oqpi.png";
import yourWorkoutAppBackgroundImage from "img/yourworkoutapp.png";
import emetBackgroundImage from "img/emetISLHD.png";
import linmickBackgroundImage from "img/linmickDistributors.png";
import focusAustraliaBackgroundImage from "img/focusAustralia.png";

export const biography = {
  title: "About me",
  titleSpanish: "",
  subtitle: "Hi, my name is Angus",
  subtitleSpanish: "",
  text:
    "I'm a software engineer with skills in React, NodeJS, Typescript, Python, PHP, HTML, CSS, AWS and Serverless amongst other things. I've created this site as a place where you can connect with me and explore my work and the projects I experiment with in my spare time. I hope you enjoy it!",
  textSpanish: "",
  skills: [
    {
      title: "Frontend Skills",
      titleSpanish: "",
      skillList: [
        "Javascript/HTML/CSS",
        "React",
        "Typescript",
        "NodeJS",
        "GraphQL",
        "AWS",
        "Serverless",
        "Python",
        "C",
        "PHP",
      ],
      skillListSpanish: [],
    },
    {
      title: "Soft Skills",
      titleSpanish: "",
      skillList: [
        "Critical thinking",
        "Excellent communication",
        "Strong leadership",
        "Adaptability",
        "Creativity",
        "Punctuality",
      ],
      skillListSpanish: [],
    },
  ],
};

export const projects = [
  {
    title: "Emergency Medicine Education and Training",
    titleSpanish: "",
    slug: "emet-islhd",
    url: "https://emet-islhd.blog",
    description:
      "Podcast and website created for the Emergency Medicine Education and Training branch of the Illawarra Shoalhaven Local Health District.",
    descriptionSpanish: "",
    featureImage: {
      src: emetBackgroundImage,
      alt: "EMET-ISLHD Screenshot",
      altSpanish: "",
    },
    stack: {
      backend: "Wordpress",
      frontend: "Javascript, HTML, CSS",
    },
    date: "January, 2019",
    dateSpanish: "",
  },
  {
    title: "Linmick Distributors",
    titleSpanish: "",
    slug: "linmick",
    url: "https://linmick.com.au/",
    description:
      "Website created for a small Illawarra business specialising in food and general store supply distribution.",
    descriptionSpanish: "",
    featureImage: {
      src: linmickBackgroundImage,
      alt: "Linmick Distributors Screenshot",
      altSpanish: "",
    },
    stack: {
      backend: "Wordpress",
      frontend: "Javascript, HTML, CSS",
    },
    date: "July, 2018",
    dateSpanish: "",
  },
  {
    title: "Focus Australia",
    titleSpanish: "",
    slug: "focus-australia",
    url: "http://focusau.com.au/",
    description: "Simple static website created for a local business",
    descriptionSpanish: "",
    featureImage: {
      src: focusAustraliaBackgroundImage,
      alt: "Focus Australia Screenshot",
      altSpanish: "",
    },
    stack: {
      backend: "N/A",
      frontend: "Javascript, HTML, CSS",
    },
    date: "July, 2020",
    dateSpanish: "",
  },
];

export const experiments = [
  {
    title: "Your Workout App",
    titleSpanish: "",
    slug: "your-workout-app",
    url: "https://yourworkout.app/",
    description:
      "Workout app that generates random workouts based on user preferences.",
    descriptionSpanish: "",
    featureImage: {
      src: yourWorkoutAppBackgroundImage,
      alt: "Your Workout App screenshot",
      altSpanish: "",
    },
    stack: {
      backend: "AWS",
      frontend: "Javascript (React), HTML, CSS",
    },
    date: "September, 2019",
    dateSpanish: "",
  },
  {
    title: "OQPI",
    titleSpanish: "",
    slug: "oqpi",
    url: "https://oqpi.com.au/",
    description:
      "Remote business workflow app that was designed to allow guests of a local hotel to check-in remotely using a tablet on the premises.",
    descriptionSpanish: "",
    featureImage: {
      src: oqpiBackgroundImage,
      alt: "OQPI screenshot",
      altSpanish: "",
    },
    stack: {
      backend: "AWS",
      frontend: "Javascript (React), HTML, CSS",
    },
    date: "January, 2020",
    dateSpanish: "",
  },
  {
    title: "ForeWord",
    titleSpanish: "",
    slug: "foreword",
    url: "",
    description:
      "Building an app where users can subscribe too learn a new word in a foreign language every day.",
    descriptionSpanish: "",
    featureImage: {
      src: forWordBackgroundImage,
      alt: "ForWord App screenshot",
      altSpanish: "",
    },
    stack: {
      backend: "AWS",
      frontend: "Javascript (React), HTML, CSS",
    },
    date: "July, 2020 (currently in development)",
    dateSpanish: "",
  },
];

export const contactDetails = {
  preTitle: "Want to work with me?",
  preTitleSpanish: "",
  title: "Get in touch",
  titleSpanish: "",
  email: "angusbezzina@gmail.com",
  phone: "+61423269154",
};

export const socialDetails = {
  twitter: "https://twitter.com/angus1192",
  gitHub: "https://github.com/angusbezzina",
  linkedIn: "https://www.linkedin.com/in/angus-bezzina",
};
