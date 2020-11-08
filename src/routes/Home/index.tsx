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

  const [animation, setAnimation] = React.useState(0);
  const [isHeaderActive, setHeaderActive] = React.useState(false);

  const scrollRefOne = React.useRef<HTMLDivElement | null>(null);
  const scrollRefTwo = React.useRef<HTMLDivElement | null>(null);
  const scrollRefThree = React.useRef<HTMLDivElement | null>(null);
  const scrollRefFour = React.useRef<HTMLDivElement | null>(null);

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
    const topPosition = (
      elementRef: React.MutableRefObject<HTMLDivElement | null>
    ) => (elementRef.current ? elementRef.current.offsetTop : 0);
    const sectionOnePosition = topPosition(scrollRefOne);
    const sectionTwoPosition = topPosition(scrollRefTwo);
    const sectionThreePosition = topPosition(scrollRefThree);
    const sectionFourPosition = topPosition(scrollRefFour);

    const welcomeAnimation = () => {
      setShade(() => ({ ...shade, open: true, color: "red" }));
    };

    const onScroll = () => {
      const windowWidth = window.innerWidth;
      const scrollPosition = window.scrollY + (window.innerHeight - 100);
      let activeSection;
      console.log(scrollPosition);
      

      if (windowWidth < 768) {
        activeSection = 1;
      } else {
        activeSection = 0;
      }

      if (window.scrollY > 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }

      // TODO: Fix this
      if (scrollPosition > sectionThreePosition) {
        setShade(() => ({ open: true, text: "", color: "red" }));
      }

      if (sectionFourPosition < scrollPosition) {
        activeSection = 4;
      } else if (sectionThreePosition < scrollPosition) {
        activeSection = 3;
      } else if (sectionTwoPosition < scrollPosition) {
        activeSection = 2;
      } else if (sectionOnePosition < scrollPosition) {
        activeSection = 1;
      }

      setAnimation(activeSection);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", () => {
      setTimeout(welcomeAnimation, 10);
      onScroll();
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [shade, animation]);

  console.log("---- render");

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
        <Welcome snapTo shade={shade} />
        <Biography snapTo animate={animation > 0} ref={scrollRefOne} />
        <CaseStudies
          snapTo
          swiperProps={swiperProps}
          animate={animation > 1}
          ref={scrollRefTwo}
        />
        <Experiments
          snapTo
          swiperProps={swiperProps}
          animate={animation > 2}
          ref={scrollRefThree}
        />
        <Contact snapTo animate={animation > 3} ref={scrollRefFour} />
      </Flex>
      <SocialLinks />
      <ScrollIndicator />
      <ScrollToTop />
    </Page>
  );
};

export default Home;
