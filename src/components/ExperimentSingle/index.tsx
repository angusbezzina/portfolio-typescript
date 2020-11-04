import React from "react";
import classnames from 'classnames';

import Flex from "components/Flex";

import formatSectionTitle from "utils/formatSectionTitle";

import { LanguageContext } from "components/LanguageContext";
import { experiments } from "utils/db/data";

import styles from "./styles.module.css";
import "styles/common.css";

type ExperimentSingleProps = {
  experimentData: {
    title: string;
    titleSpanish: string;
    slug: string;
    tagline?: string;
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
    dateSpanish: string;
  };
  animate?: boolean;
};

const ExperimentSingle = (props: ExperimentSingleProps) => {
  const { state } = React.useContext(LanguageContext);
  const language = state.language;
  const experimentData = props.experimentData;
  

  return (
    <Flex
      direction="column"
      className={classnames(styles.experimentsSlideContent, {[styles.animate]: props.animate})}
    >
      {language === "english"
        ? formatSectionTitle(
            experiments.title,
            styles.experimentsTitle,
            "blackText"
          )
        : formatSectionTitle(
            experiments.titleSpanish,
            styles.experimentsTitle,
            "blackText"
          )}
      <Flex className={styles.experimentsImage}></Flex>
      <Flex className={styles.experimentsContent}>
        <Flex className={styles.experimentsSubtitle}>
          <h3>
            {language === "english"
              ? experimentData.title
              : experimentData.titleSpanish}
            <span className="redText">.</span>
          </h3>
        </Flex>
        <Flex className={styles.experimentsText}>
          <Flex
            direction="column"
            align="start"
            justify="start"
            className={styles.experimentsDetails}
          >
            <p className={styles.experimentsLabel}>
              {language === "english"
                ? experimentData.date
                : experimentData.dateSpanish}
              <span className="redText">.</span>
            </p>
            <p className={styles.experimentsDetail}>
              {`${language === "english" ? "Frontend:" : "Interfaz:"} ${
                experimentData.stack.frontend
              }`}
            </p>
            <p className={styles.experimentsDetail}>
              Backend: {experimentData.stack.backend}
            </p>
            {experimentData.url && (
              <a
                href={experimentData.url}
                className={styles.experimentsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === "english"
                  ? "View the experiment"
                  : "Ver el experimento"}
              </a>
            )}
            {!experimentData.url && (
              <p className={styles.experimentsDeadLink}>
                {language === "english"
                  ? "Link coming soon"
                  : "Enlace próximamente"}
                <span className="redText">.</span>
              </p>
            )}
          </Flex>
          <Flex direction="column" className={styles.experimentsDescription}>
            {language === "english"
              ? experimentData.description
              : experimentData.descriptionSpanish}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExperimentSingle;
