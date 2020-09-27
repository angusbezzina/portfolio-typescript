import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import styles from "./styles.module.css";
import "styles/common.css";

interface BiographyProps {
  animate?: boolean;
  snapTo?: boolean;
}

const Biography = React.forwardRef(
  (props: BiographyProps, ref: React.Ref<HTMLDivElement>) => (
    <div
      className={classnames(
        styles.biographySection,
        {"snapSection": props.snapTo},
        {"animate": props.animate},
      )}
    >
      <Flex className={styles.biographyContent}>
        <Flex className={styles.biographyContentLeft}>
          <h2 className={styles.biographyTitle}>
            About
            <br /> me<span className="blackText">.</span>
          </h2>
          <h3 className={styles.biographySubtitle}>
            Hi, my name is <span className="italicText redText">Angus </span>
          </h3>
          <p>
            I'm a software engineer with skills in React, NodeJS, Typescript,
            Python, PHP, HTML, CSS, AWS and Serverless amongst other things.
            I've created this site as a place where you can connect with me and
            explore my work and the projects I experiment with in my spare time.
            I hope you enjoy it!
          </p>
        </Flex>
        <Flex className={styles.biographyContentRight}>
          <div className={styles.biographyContentRightInner}>
            <h4 className={styles.biographySkillsTitle}>Skills</h4>
            <ul className={styles.biographySkillsList}>
              <li>Example 1</li>
              <li>Example 2</li>
            </ul>
            <h4 className={styles.biographySkillsTitle}>Other Skills</h4>
            <ul className={styles.biographySkillsList}>
              <li>Example 3</li>
              <li>Example 4</li>
            </ul>
          </div>
        </Flex>
      </Flex>
    </div>
  )
);

export default Biography;
