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
  const [keyMap, setKeyMap] = React.useState({});
  const [open, setOpen] = React.useState(false);
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
      setOpen(true);
    };

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (window.scrollY > 100) {
        doShow((state) => ({ ...state, sectionHeader: true }));
      } else {
        doShow((state) => ({ ...state, sectionHeader: false }));
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
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e: any) => {
      setKeyMap({ ...keyMap, [e.key]: true });
      const keySequences = {
        danai: "Special thanks to Danai",
        mitch: "Special thanks to Mitch",
      };
      const letters = Object.keys(keyMap);
      const lettersJoined = letters.join("");
      console.log(lettersJoined);

      if (lettersJoined === "danai") {
        console.log(keySequences.danai);
      }

      if (lettersJoined === "mitch") {
        console.log(keySequences.mitch);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [keyMap]);

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
          open={open}
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
