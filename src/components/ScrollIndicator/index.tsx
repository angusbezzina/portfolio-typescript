import React from 'react';

import Flex from 'components/Flex';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { useLanguage } from "components/LanguageContext";

import styles from './styles.module.css';

const ScrollIndicator = () => {
  const languageState = useLanguage();
  const language = languageState.state.language;

  return (
    <Flex className={styles.scrollIndicator}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      {language === "english" ? "Scroll" : "Desplazar"}
    </Flex>
  );
} 

export default ScrollIndicator;