import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import { LanguageContext } from 'components/LanguageContext';
import { welcome } from "utils/db/data";

import styles from "./styles.module.css";
import "styles/common.css";

interface WelcomeProps {
  animate?: boolean;
  featureText: string;
  featureTextAlternate?: string;
  snapTo?: boolean;
  thankYouMessage?: string;
}

const Welcome = React.forwardRef(
  (props: WelcomeProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;

    return (
      <Flex
        id="welcome"
        align="center"
        justify="center"
        className={classnames(
          { snapSection: props.snapTo },
          "animatedSection",
          styles.welcomeSection,
          { animate: props.animate }
        )}
      >
        <h1
          className={classnames({
            [styles.welcomeHeader]: language === "english",
            [styles.welcomeHeaderSpanish]: language === "spanish",
          })}
        >
          {language === "english" ? welcome.title : welcome.titleSpanish}
          <span className="redText">{props.featureTextAlternate}</span>
        </h1>
      </Flex>
    );
  }
);

export default Welcome;
