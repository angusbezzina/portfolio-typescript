import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import formatLastWord from "utils/formatLastWord";
import { biography } from "utils/db/data";
import { useLanguage } from "components/LanguageContext";

import formatSectionTitle from "utils/formatSectionTitle";

import styles from "./styles.module.css";

const Biography = () => {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const title = biography[language].title;
  const subtitle = biography[language].subtitle;
  const text = biography[language].text;
  const skills = biography[language].skills;


  return (
    <div className={classnames(styles.biographySection)}>
      <Flex className={styles.biographyContent}>
        <Flex className={styles.biographyContentLeft}>
          <Flex className={styles.biographyContentLeftInner} direction="column">
            {formatSectionTitle(
                  title,
                  styles.biographyTitle,
                  "blackText"
                )}
            <Flex className={styles.biographySubtitle}>
              {formatLastWord(
                subtitle,
                "italicText redText "
              )}
            </Flex>
            <p>
              {text}
            </p>
          </Flex>
        </Flex>
        <Flex className={styles.biographyContentRight}>
          <Flex className={styles.biographyContentRightInner}>
            {[
              ...skills.map((skillset, index) => {
                return (
                  <Flex
                    key={index}
                    direction="column"
                    className={styles.biographySkillset}
                  >
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
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Biography;
