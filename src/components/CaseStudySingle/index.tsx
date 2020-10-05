import React from "react";

import Flex from "components/Flex";

import formatFirstWord from 'utils/formatFirstWord';

import styles from "./styles.module.css";
import "styles/common.css";

type CaseStudySingleProps = {
  projectData: {
    title: string;
    slug: string;
    tagline?: string;
    url: string;
    description: string;
    featureImage: {
      src: string;
      alt: string;
    };
    stack: {
      backend: string;
      frontend: string;
    };
    date: string;
  };
};

const CaseStudySingle = (props: CaseStudySingleProps) => {
  const projectData = props.projectData;
  let projectHeader;

  if(projectData.tagline) {
    projectHeader = formatFirstWord(projectData.tagline, "redText italicText")
  } else {
    projectHeader = formatFirstWord(projectData.title, "redText italicText");
  }

  return (
    <Flex className={styles.caseStudiesContent}>
      <Flex direction="column" className={styles.caseStudiesContentLeft}>
        <h2 className={styles.caseStudiesTitle}>
          Pro
          <br />
          jects<span className="redText">.</span>
        </h2>
        <Flex direction="column" className={styles.caseStudiesContentLeftInner}>
          <img
            className={styles.caseStudiesFeatureImage}
            src={projectData.featureImage.src}
            alt={projectData.featureImage.alt}
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
              Frontend: {projectData.stack.frontend}
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
              See the project
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
          <p>{projectData.description}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CaseStudySingle;
