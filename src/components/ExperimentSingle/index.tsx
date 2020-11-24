import React from "react";

import Flex from "components/Flex";

import { useLanguage } from "components/LanguageContext";

import styles from "./styles.module.css";

type ExperimentSingleProps = {
  experimentData: {
    english: {
      title: string;
      description: string;
      featureImageAlt: string;
      date: string;
    };
    spanish: {
      title: string;
      description: string;
      featureImageAlt?: string;
      date: string;
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

const ExperimentSingle = (props: ExperimentSingleProps) => {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const experimentData = props.experimentData;
  const title = experimentData[language].title;
  const description = experimentData[language].description;
  const date = experimentData[language].date;
  const url = experimentData.url;
  const frontend = experimentData.stack.frontend;
  const backend = experimentData.stack.backend;
  const image = experimentData.featureImageSrc;

  return (
    <Flex direction="column" className={styles.experimentsSlideContent}>
      <Flex className={styles.experimentsImage} style={{ backgroundImage: `url(${image})` }}>
        {!image && (
          <h2 className={styles.experimentsComingSoon}>
            Coming Soon<span className="redText">.</span>
          </h2>
        )}
      </Flex>
      <Flex className={styles.experimentsContent}>
        <Flex className={styles.experimentsSubtitle}>
          <h2>
            {title}
            <span className="redText">.</span>
          </h2>
        </Flex>
        <Flex className={styles.experimentsText}>
          <Flex
            direction="column"
            align="start"
            justify="start"
            className={styles.experimentsDetails}
          >
            <p className={styles.experimentsLabel}>
              {date}
              <span className="redText">.</span>
            </p>
            <p className={styles.experimentsDetail}>
              {`${language === "english" ? "Frontend:" : "Interfaz:"} ${frontend}`}
            </p>
            <p className={styles.experimentsDetail}>Backend: {backend}</p>
            {url && (
              <a
                href={url}
                className={styles.experimentsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === "english" ? "View the experiment" : "Ver el experimento"}
              </a>
            )}
            {!url && (
              <p className={styles.experimentsDeadLink}>
                {language === "english" ? "Link coming soon" : "Enlace próximamente"}
                <span className="redText">.</span>
              </p>
            )}
          </Flex>
          <Flex direction="column" className={styles.experimentsDescription}>
            {description}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExperimentSingle;
