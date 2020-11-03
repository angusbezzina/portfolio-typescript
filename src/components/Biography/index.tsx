import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import formatLastWord from "utils/formatLastWord";
import { biography } from "utils/db/data";
import { LanguageContext } from "components/LanguageContext";

import formatSectionTitle from 'utils/formatSectionTitle';

import styles from "./styles.module.css";
import "styles/common.css";

interface BiographyProps {
  animate?: boolean;
  snapTo?: boolean;
}

const Biography = React.forwardRef(
  (props: BiographyProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;

    return (
      <div
        className={classnames(
          styles.biographySection,
          { snapSection: props.snapTo },
          { [styles.animate]: props.animate }
        )}
        ref={ref}
      >
        <Flex className={styles.biographyContent}>
          <Flex className={styles.biographyContentLeft}>
            <Flex className={styles.biographyContentLeftInner} direction="column">
            {language === "english"
              ? formatSectionTitle(
                  biography.title,
                  styles.biographyTitle,
                  "blackText"
                )
              : formatSectionTitle(
                  biography.titleSpanish,
                  styles.biographyTitle,
                  "blackText"
                )}
            <Flex className={styles.biographySubtitle}>
              {formatLastWord(
                `${
                  language === "english"
                    ? biography.subtitle
                    : biography.subtitleSpanish
                }`,
                "italicText redText "
              )}
            </Flex>
            <p>
              {language === "english" ? biography.text : biography.textSpanish}
            </p>
            </Flex>
          </Flex>
          <Flex className={styles.biographyContentRight}>
            <Flex className={styles.biographyContentRightInner}>
              {[
                ...biography.skills.map((skillset, index) => {
                  return (
                    <Flex
                      key={index}
                      direction="column"
                      className={styles.biographySkillset}
                    >
                      <h4 className={styles.biographySkillsTitle}>
                        {language === "english"
                          ? skillset.title
                          : skillset.titleSpanish}
                      </h4>
                      <ul className={styles.biographySkillsList}>
                        {language === "english"
                          ? [...skillset.skillList].map((skill, index) => {
                              return <li key={index}>{skill}</li>;
                            })
                          : [...skillset.skillListSpanish].map(
                              (skill, index) => {
                                return <li key={index}>{skill}</li>;
                              }
                            )}
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
  }
);

export default Biography;
