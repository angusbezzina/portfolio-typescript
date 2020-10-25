import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { LanguageContext } from "components/LanguageContext";

import styles from './styles.module.css';

const ScrollToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { state } = React.useContext(LanguageContext);
  const language = state.language;

  return (
    <button className={styles.scrollTop} onClick={scrollTop}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      {language === 'english' ? 'Top' : 'Cima'}
    </button>
  );
};

export default ScrollToTop;