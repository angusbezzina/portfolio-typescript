import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css';

const ScrollToTop = () => {
  const scrollTop = () => {
    console.log('hello');
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.scrollTop} onClick={scrollTop}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      Top
    </button>
  );
};

export default ScrollToTop;