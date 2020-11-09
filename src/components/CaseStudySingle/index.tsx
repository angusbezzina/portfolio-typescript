import React from "react";

import Flex from "components/Flex";

import formatFirstWord from "utils/formatFirstWord";
import { LanguageContext } from "components/LanguageContext";

import styles from "./styles.module.css";
import "styles/common.css";

type CaseStudySingleProps = {
  projectData: {
    english: {
      title: string;
      description: string;
      featureImageAlt: string;
      date?: string;
    };
    spanish: {
      title: string;
      description: string;
      featureImageAlt: string;
      date?: string;
    };
    slug: string;
    url: string;
    featureImageSrc: string;
    stack: {
      backend: string;
      frontend: string;
    };
  };
};

const CaseStudySingle = (props: CaseStudySingleProps) => {
  const { state } = React.useContext(LanguageContext);
  const language = state.language;
  const projectData = props.projectData;
  const title = projectData[language].title;
  const description = projectData[language].description;
  const date = projectData[language].date;
  const featureImageAlt = projectData[language].featureImageAlt;
  const featureImageSrc = projectData.featureImageSrc;
  const url = projectData.url;
  const frontend = projectData.stack.frontend;
  const backend = projectData.stack.backend;
  const projectHeader = formatFirstWord(title, "redText italicText");

  return (
    <Flex className={styles.caseStudiesContent}>
      <Flex direction="column" className={styles.caseStudiesContentLeft}>
        <Flex direction="column" className={styles.caseStudiesContentLeftInner}>
          <img
            className={styles.caseStudiesFeatureImage}
            src={featureImageSrc}
            alt={featureImageAlt}
          />
          <Flex
            direction="column"
            justify="start"
            align="end"
            className={styles.caseStudiesDetails}
          >
            <div className={styles.caseStudiesMobile}>{projectHeader}</div>
            <p className={styles.caseStudiesLabel}>
              {date}
              <span className="redText">.</span>
            </p>
            <p className={styles.caseStudiesDetail}>
              {`${
                language === "english" ? "Frontend:" : "Interfaz:"
              } ${frontend}`}
            </p>
            <p className={styles.caseStudiesDetail}>Backend: {backend}</p>
            <a
              href={url}
              className={styles.caseStudiesLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "english" ? "See the project" : "Ver el proyecto"}
            </a>
          </Flex>
        </Flex>
      </Flex>
      <Flex className={styles.caseStudiesContentRight}>
        <Flex
          direction="column"
          className={styles.caseStudiesContentRightInner}
        >
          {projectHeader}
          <p>{description}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CaseStudySingle;
