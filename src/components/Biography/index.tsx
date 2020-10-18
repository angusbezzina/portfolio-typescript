import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import formatLastWord from "utils/formatLastWord";
import { biography } from "utils/db/data";
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
        { snapSection: props.snapTo },
        { animate: props.animate }
      )}
    >
      <Flex className={styles.biographyContent}>
        <Flex className={styles.biographyContentLeft}>
          <h2 className={styles.biographyTitle}>
            {biography.title}
            <span className="blackText">.</span>
          </h2>
          <Flex className={styles.biographySubtitle}>
            {formatLastWord(biography.subtitle, "italicText redText ")}
          </Flex>
          <p>{biography.text}</p>
        </Flex>
        <Flex className={styles.biographyContentRight}>
          <div className={styles.biographyContentRightInner}>
            {[
              ...biography.skills.map((skillset, index) => {
                return (
                  <Flex direction="column" key={index}>
                    <h4 className={styles.biographySkillsTitle}>
                      {skillset.title}
                    </h4>
                    <ul className={styles.biographySkillsList}>
                      {[...skillset.skillList].map((skill, index) => {
                        return <li key={index}>{skill}</li>;
                      })}
                    </ul>
                  </Flex>
                );
              }),
            ]}
          </div>
        </Flex>
      </Flex>
    </div>
  )
);

export default Biography;
