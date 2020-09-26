import React from "react";
import classnames from 'classnames';

import Header from 'components/Header';
import Welcome from 'components/Welcome';
import Biography from 'components/Biography';
import CaseStudies from "components/CaseStudies";
import Experiments from "components/Experiments";
import Contact from "components/Contact";
import Flex from 'components/Flex';
import Page from 'components/Page';

import "styles/common.css";

function App() {
  const [show, doShow] = React.useState({
    sectionOne: false,
    sectionTwo: false,
    sectionThree: false,
    sectionFour: false,
  });
  const scrollRefOne = React.useRef<HTMLDivElement | null>(null);
  const scrollRefTwo = React.useRef<HTMLDivElement | null>(null);
  const scrollRefThree = React.useRef<HTMLDivElement | null>(null);
  const scrollRefFour = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const topPosition = (elementRef: React.MutableRefObject<HTMLDivElement | null>) =>
      elementRef.current ? elementRef.current.getBoundingClientRect().top : 0;

    const sectionOnePosition = topPosition(scrollRefOne);
    const sectionTwoPosition = topPosition(scrollRefTwo);
    const sectionThreePosition = topPosition(scrollRefThree);
    const sectionFourPosition = topPosition(scrollRefFour);
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
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

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    /* 
      remove the event listener in the cleanup function 
      to prevent memory leaks
    */
  }, []);

  return (
    <Page className="app">
      <Header />
      <div className="appInner">
        <Welcome featureText="Welcome!" />
        <Biography animate={show.sectionOne} ref={scrollRefOne} />
        <CaseStudies animate={show.sectionTwo} ref={scrollRefTwo} />
        <Experiments animate={show.sectionThree} ref={scrollRefThree} />
        <Contact animate={show.sectionFour} ref={scrollRefFour} />
      </div>
    </Page>
  );
}

export default App;
