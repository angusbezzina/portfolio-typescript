import React from "react";
import classnames from 'classnames';

import Flex from 'components/Flex';

import styles from "./styles.module.css";
import 'styles/common.css';

interface WelcomeProps {
  animate?: boolean;
  featureText: string;
  featureTextAlternate?: string;
  snapTo?: boolean;
  language: string,
}

const Welcome = React.forwardRef(
  (props: WelcomeProps, ref: React.Ref<HTMLDivElement>) => (
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
          [styles.welcomeHeader]: props.language === "english",
          [styles.welcomeHeaderSpanish]: props.language === "spanish",
        })}
      >
        {props.featureText}
        <span className="redText">{props.featureTextAlternate}</span>
      </h1>
    </Flex>
  )
);

export default Welcome;
