import React from "react";

import Flex from "components/Flex";

import styles from "./styles.module.css";

type ExperimentSingleProps = {
  experimentData: {
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

const ExperimentSingle = (props: ExperimentSingleProps) => {
  const experimentData = props.experimentData;
  return (
    <Flex direction="column" className={styles.experimentsContent}>
      <h2 className={styles.experimentsTitle}>
        Exper
        <br />
        iments<span className="blackText">.</span>
      </h2>
      <Flex className={styles.experimentsImage}></Flex>
      <Flex className={styles.experimentsContent}>
        <Flex className={styles.experimentsSubtitle}>
          <h3>
            This is my <span className="italicText redText">playground</span>
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
              {`${experimentData.date}`}
              <span className="redText">.</span>
            </p>
            <p className={styles.experimentsDetail}>
              Frontend: {experimentData.stack.frontend}
            </p>
            <p className={styles.experimentsDetail}>
              Backend: {experimentData.stack.backend}
            </p>
            <a
              href={experimentData.url}
              className={styles.experimentsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the experiment
            </a>
          </Flex>
          <Flex direction="column" className={styles.experimentsDescription}>
            {experimentData.description}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExperimentSingle;
