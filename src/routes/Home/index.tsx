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
  const [show, doShow] = React.useState({
    sectionHeader: false,
    sectionOne: false,
    sectionTwo: false,
    sectionThree: false,
    sectionFour: false,
  });
  const [thankyou, setThankyou] = React.useState({
    buffer: [""],
    lastKeyTime: Date.now(),
    message: "Nothing",
  })
  const scrollRefOne = React.useRef<HTMLDivElement | null>(null);
  const scrollRefTwo = React.useRef<HTMLDivElement | null>(null);
  const scrollRefThree = React.useRef<HTMLDivElement | null>(null);
  const scrollRefFour = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const topPosition = (
      elementRef: React.MutableRefObject<HTMLDivElement | null>
    ) =>
      elementRef.current ? elementRef.current.getBoundingClientRect().top : 0;

    const sectionOnePosition = topPosition(scrollRefOne);
    const sectionTwoPosition = topPosition(scrollRefTwo);
    const sectionThreePosition = topPosition(scrollRefThree);
    const sectionFourPosition = topPosition(scrollRefFour);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (window.scrollY > 100) {
        doShow((state) => ({ ...state, sectionHeader: true }));
      } else {
        doShow((state) => ({ ...state, sectionHeader: false }));
      }

      if (sectionOnePosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionOne: true }));
      } else if (sectionTwoPosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionTwo: true }));
      } else if (sectionThreePosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionThree: true }));
      } else if (sectionFourPosition < scrollPosition) {
        doShow((state) => ({ ...state, sectionFour: true }));
      }
    };

    const keyMapper = (key: string) => {      
      const currentTime = Date.now();
      let buffer: Array<string> = [];
      const keySequences = {
        danai: "Special thanks to Danai",
        mitch: "Special thanks to Mitch",
      };

      if (currentTime - thankyou.lastKeyTime < 1000) {
        buffer = [key];
      } else {
        buffer = [...thankyou.buffer, key];
      }
      console.log(thankyou);

      setThankyou((state) => ({ ...state, lastKeyTime: currentTime }));
      console.log(thankyou);

      const userInput = buffer.join("").toLowerCase();

      if (userInput === "mitch") {
        const newMessage = keySequences[userInput];
        setThankyou((state) => ({
          ...state,
          message: newMessage,
        }));
        console.log(thankyou);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
      const key = event.key;
      keyMapper(key);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", (event) => {
        event.preventDefault();
        const key = event.key;
        keyMapper(key);
      });
    } 
  }, []);

  const SwiperProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <Page className="app">
      <Header headerActive={show.sectionHeader} />
      <Flex className="borderTop"></Flex>
      <Flex className="borderBottom"></Flex>
      <Flex className="borderLeft"></Flex>
      <Flex className="borderRight"></Flex>
      <Flex direction="column" className="appContent">
        <Welcome
          snapTo
          featureText={state.language === "english" ? "Welcome" : "Bienvenido"}
          featureTextAlternate="."
        />
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
