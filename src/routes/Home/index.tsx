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

import { LanguageContext } from "components/LanguageContext";

import "styles/common.css";

const Home = () => {
  const { state } = React.useContext(LanguageContext);
  const [keyMap, setKeyMap] = React.useState({
    time: 0,
    keys: {},
  });
  const [shade, setShade] = React.useState({
    open: false,
    color: "red",
    text: "",
  });
  const [show, doShow] = React.useState({
    sectionHeader: false,
    sectionOne: false,
    sectionTwo: false,
    sectionThree: false,
    sectionFour: false,
  });

  const scrollRefOne = React.useRef<HTMLDivElement | null>(null);
  const scrollRefTwo = React.useRef<HTMLDivElement | null>(null);
  const scrollRefThree = React.useRef<HTMLDivElement | null>(null);
  const scrollRefFour = React.useRef<HTMLDivElement | null>(null);

  const SwiperProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  React.useLayoutEffect(() => {
    const topPosition = (
      elementRef: React.MutableRefObject<HTMLDivElement | null>
    ) =>
      elementRef.current ? elementRef.current.getBoundingClientRect().top : 0;
    const sectionOnePosition = topPosition(scrollRefOne);
    const sectionTwoPosition = topPosition(scrollRefTwo);
    const sectionThreePosition = topPosition(scrollRefThree);
    const sectionFourPosition = topPosition(scrollRefFour);

    const welcomeAnimation = () => {
      setShade(() => ({ ...shade, open: true, color: "red" }));
    };

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (window.scrollY > 100) {
        doShow((state) => ({ ...state, sectionHeader: true }));
      } else {
        doShow((state) => ({ ...state, sectionHeader: false }));
      }

      if (window.scrollY > window.innerHeight) {
        setShade(() => ({ open: true, text: "", color: "red" }));
      }

      if (sectionFourPosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionFour: true }));
      } else if (sectionThreePosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionThree: true }));
      } else if (sectionTwoPosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionTwo: true }));
      } else if (sectionOnePosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionOne: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", (event) => {
      event.preventDefault();
      setTimeout(welcomeAnimation, 100);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [shade]);

  React.useEffect(() => {
    const onKeyDown = (e: any) => {
      const setThankyou = (text: string) => {
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
      <Header headerActive={show.sectionHeader} />
      <Flex className="borderTop"></Flex>
      <Flex className="borderBottom"></Flex>
      <Flex className="borderLeft"></Flex>
      <Flex className="borderRight"></Flex>
      <Flex direction="column" className="appContent">
        <Welcome snapTo shade={shade} />
        <Biography snapTo animate={show.sectionOne} ref={scrollRefOne} />
        <CaseStudies
          snapTo
          swiperProps={SwiperProps}
          animate={show.sectionTwo}
          ref={scrollRefTwo}
        />
        <Experiments
          snapTo
          swiperProps={SwiperProps}
          animate={show.sectionThree}
          ref={scrollRefThree}
        />
        <Contact snapTo animate={show.sectionFour} ref={scrollRefFour} />
      </Flex>
      <SocialLinks />
      <ScrollIndicator />
      <ScrollToTop />
    </Page>
  );
};

export default Home;
