import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { useSpring, animated } from "react-spring";

import Flex from "components/Flex";

import { LanguageContext } from "components/LanguageContext";
import { welcome } from "utils/db/data";

import styles from "./styles.module.css";
import "styles/common.css";

interface WelcomeProps {
  animate?: boolean;
  featureText: string;
  featureTextAlternate?: string;
  snapTo?: boolean;
  thankYouMessage?: string;
  open?: boolean;
}

interface MouseMove {
  clientX: number;
  clientY: number;
}

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

const Welcome = React.forwardRef(
  (props: WelcomeProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;
    const [springTextProps, setSpringText] = useSpring(() => ({
      xy: [0, 0],
      config: { mass: 10, tension: 550, friction: 140 },
    }));
    const springShadeProps = useSpring({
      transform: props.open ? "scaleX(1)" : "scaleX(0)",
    });

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
        <animated.div
          className={styles.welcomeSectionShade}
          style={{ transform: springShadeProps.transform }}
        ></animated.div>
        <div
          className={styles.welcomeAnimationContainer}
          onMouseMove={({ clientX: x, clientY: y }: MouseMove) =>
            setSpringText({ xy: calc(x, y) })
          }
        >
          <animated.div style={{ transform: springTextProps.xy.to(trans1) }}>
            <h1
              className={classnames({
                [styles.welcomeHeader]: language === "english",
                [styles.welcomeHeaderSpanish]: language === "spanish",
              })}
            >
              {language === "english" ? welcome.title : welcome.titleSpanish}
              <span className="redText">{props.featureTextAlternate}</span>
            </h1>
          </animated.div>
        </div>
      </Flex>
    );
  }
);

export default Welcome;
