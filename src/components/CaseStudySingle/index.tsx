import React from "react";

import Flex from "components/Flex";

import formatFirstWord from "utils/formatFirstWord";
import { useLanguage } from "components/LanguageContext";

import styles from "./styles.module.css";

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
    featureImageSrc?: string;
    stack: {
      backend: string;
      frontend: string;
    };
  };
};

const CaseStudySingle = (props: CaseStudySingleProps) => {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const projectData = props.projectData;
  const title = projectData[language].title;
  const description = projectData[language].description;
  const date = projectData[language].date;
  const featureImageSrc = projectData.featureImageSrc;
  const url = projectData.url;
  const frontend = projectData.stack.frontend;
  const backend = projectData.stack.backend;
  const projectHeader = formatFirstWord(title, "redText italicText");

  return (
    <Flex className={styles.caseStudiesContent}>
      <Flex direction="column" className={styles.caseStudiesContentLeft}>
        <Flex direction="column" className={styles.caseStudiesContentLeftInner}>
          <Flex
            className={styles.caseStudiesFeatureImage}
            style={{ backgroundImage: `url(${featureImageSrc})` }}
          >
            {!featureImageSrc && (
              <h2 className={styles.caseStudiesComingSoon}>
                Coming Soon<span className="redText">.</span>
              </h2>
            )}
          </Flex>
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
              {`${language === "english" ? "Frontend:" : "Interfaz:"} ${frontend}`}
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
        <Flex direction="column" className={styles.caseStudiesContentRightInner}>
          {projectHeader}
          <p>{description}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CaseStudySingle;
