import React from "react";

import Flex from "components/Flex";

import formatFirstWord from "utils/formatFirstWord";
import { LanguageContext } from "components/LanguageContext";

import styles from "./styles.module.css";
import "styles/common.css";

type CaseStudySingleProps = {
  projectData: {
    title: string;
    titleSpanish: string;
    slug: string;
    tagline?: string;
    taglineSpanish?: string;
    url: string;
    description: string;
    descriptionSpanish: string;
    featureImage: {
      src: string;
      alt: string;
      altSpanish: string;
    };
    stack: {
      backend: string;
      frontend: string;
    };
    date: string;
  };
};

const CaseStudySingle = (props: CaseStudySingleProps) => {
  const { state } = React.useContext(LanguageContext);
  const language = state.language;
  const projectData = props.projectData;
  let projectHeader;

  if (projectData.tagline) {
    projectHeader = formatFirstWord(
      `${
        language === "english"
          ? projectData.tagline
          : projectData.taglineSpanish
      }`,
      "redText italicText"
    );
  } else {
    projectHeader = formatFirstWord(
      `${
        language === "english" ? projectData.title : projectData.titleSpanish
      }`,
      "redText italicText"
    );
  }

  return (
    <Flex
      className={styles.caseStudiesContent}
    >
      <Flex direction="column" className={styles.caseStudiesContentLeft}>
        <Flex direction="column" className={styles.caseStudiesContentLeftInner}>
          <img
            className={styles.caseStudiesFeatureImage}
            src={projectData.featureImage.src}
            alt={
              language === "english"
                ? projectData.featureImage.alt
                : projectData.featureImage.altSpanish
            }
          />
          <Flex
            direction="column"
            justify="start"
            align="end"
            className={styles.caseStudiesDetails}
          >
            <div className={styles.caseStudiesMobile}>{projectHeader}</div>
            <p className={styles.caseStudiesLabel}>
              {`${projectData.date}`}
              <span className="redText">.</span>
            </p>
            <p className={styles.caseStudiesDetail}>
              {`${language === "english" ? "Frontend:" : "Interfaz:"} ${
                projectData.stack.frontend
              }`}
            </p>
            <p className={styles.caseStudiesDetail}>
              Backend: {projectData.stack.backend}
            </p>
            <a
              href={projectData.url}
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
          <p>
            {language === "english"
              ? projectData.description
              : projectData.descriptionSpanish}
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CaseStudySingle;
