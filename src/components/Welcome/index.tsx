import React from "react";
import classnames from 'classnames';

import styles from "./styles.module.css";
import 'styles/common.css';

interface WelcomeProps {
  animate?: boolean;
  featureText: string;
}

const Welcome = React.forwardRef(
  (props: WelcomeProps, ref: React.Ref<HTMLDivElement>) => (
    <div className={classnames('animatedSection', styles.welcomeSection, `${props.animate ? "animate" : ""}`)}>
      <h1 className={styles.welcomeHeader}>{props.featureText}</h1>
    </div>
  )
);

export default Welcome;
