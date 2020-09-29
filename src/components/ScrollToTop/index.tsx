import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css';

const ScrollToTop = () => {
  return (
    <button className={styles.scrollTop}>
      <FontAwesomeIcon icon={faLongArrowAltUp} />
      top
    </button>
  );
};

export default ScrollToTop;
;