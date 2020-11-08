import React from "react";

import Header from "components/Header";
import Welcome from "components/Welcome";
import Biography from "components/Biography";
import CaseStudies from "components/CaseStudies";
import Experiments from "components/Experiments";
import Contact from "components/Contact";
import Page from "components/Page";
import Flex from "components/Flex";
import ScrollIndicator from "components/ScrollIndicator";
import ScrollToTop from "components/ScrollToTop";
import SocialLinks from "components/SocialLinks";

import "styles/common.css";

const Home = () => {
  const [keyMap, setKeyMap] = React.useState({
    time: 0,
    keys: {},
  });
  const [shade, setShade] = React.useState({
    open: false,
    color: "red",
    text: "",
  });

  const [isHeaderActive, setHeaderActive] = React.useState(false);

  const swiperProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  React.useLayoutEffect(() => {
    const welcomeAnimation = () => {
      setShade(() => ({ ...shade, open: true, color: "red" }));
    };

    window.addEventListener("load", () => {
      setTimeout(welcomeAnimation, 10);
    });
  }, [shade]);

  React.useEffect(() => {
    const onKeyDown = (e: any) => {
      const setThankyou = (text: string) => {
        // Is Mitch, Is Easter Egg change this to one variable and derive the rest of the information from there.
        setShade(() => ({ ...shade, open: false, color: "red" }));
        setTimeout(() => {
          setShade(() => ({ text: text, open: true, color: "blue" }));
        }, 300);
      };
      const keySequences = {
        karen: "Karen Danai Cepeda Alarcón",
        mitch: "Mitchell Heddles",
      };
      const letters = Object.keys(keyMap.keys);
      letters.push(e.key);
      const userInput = letters.join("");

      if (keyMap.time === 0 || new Date().getTime() - keyMap.time < 1000) {
        setKeyMap({
          time: new Date().getTime(),
          keys: { ...keyMap.keys, [e.key]: true },
        });
      } else {
        setKeyMap({
          time: new Date().getTime(),
          keys: {},
        });
      }

      if (userInput === "mitch" || userInput === "karen") {
        console.log(`Special thanks to ${keySequences[userInput]}`);
        setThankyou(keySequences[userInput]);
        setKeyMap({
          time: 0,
          keys: {},
        });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [keyMap, shade]);

  return (
    <Page className="app">
      <Header headerActive={isHeaderActive} />
      <Flex className="borderTop"></Flex>
      <Flex className="borderBottom"></Flex>
      <Flex className="borderLeft"></Flex>
      <Flex className="borderRight"></Flex>
      <Flex direction="column" className="appContent">
        <Welcome shade={shade} />
        <Biography />
        <CaseStudies swiperProps={swiperProps} />
        <Experiments swiperProps={swiperProps} />
        <Contact />
      </Flex>
      <SocialLinks />
      <ScrollIndicator />
      <ScrollToTop />
    </Page>
  );
};

export default Home;
