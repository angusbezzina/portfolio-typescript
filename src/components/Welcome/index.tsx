import React from "react";
import classnames from "classnames";

import { useSpring, animated } from "react-spring";

import Flex from "components/Flex";

import { LanguageContext } from "components/LanguageContext";
import { welcome } from "utils/db/data";

import styles from "./styles.module.css"; 
import "styles/common.css";

interface WelcomeProps {
  animate?: boolean;
  snapTo?: boolean;
  thankYouMessage?: string;
  shade: {
    open: boolean;
    color: string;
    text: string;
  };
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
      transform: props.shade.open ? "scaleX(1)" : "scaleX(0)",
      color: props.shade.color,
    });
    let titleText;
    let subtitleText;

    if(props.shade.text !== '') {
      titleText = props.shade.text;
      if (language === "english") {
        subtitleText = welcome.thankyouText;
      } else {
        subtitleText = welcome.thankyouTextSpanish;
      }
    } else {
      if(language === 'english') {
        titleText = welcome.title;
      } else {
        titleText = welcome.titleSpanish;
      }
    }

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
        ref={ref}
      >
        {subtitleText && <h3 className={styles.welcomeSubtitle}>{subtitleText}</h3>}
        <animated.div
          className={classnames(styles.welcomeSectionShade, {[styles.welcomeSectionShadeBlue]: props.shade.color === 'blue'})}
          style={{
            transform: springShadeProps.transform,
          }}
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
                [styles.welcomeHeaderThankyou]: props.shade.text !== "",
              })}
            >
              {titleText}
              <span className={`${props.shade.color}Text`}>.</span>
            </h1>
          </animated.div>
        </div>
      </Flex>
    );
  }
);

export default Welcome;
