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
}

const Welcome = React.forwardRef(
  (props: WelcomeProps, ref: React.Ref<HTMLDivElement>) => (
    <Flex
      align="center"
      justify="center"
      className={classnames(
        {"snapSection": props.snapTo},
        "animatedSection",
        styles.welcomeSection,
        {"animate": props.animate}
      )}
    >
      <h1 className={styles.welcomeHeader}>
        {props.featureText}
        <span>{props.featureTextAlternate}</span>
      </h1>
    </Flex>
  )
);

export default Welcome;
