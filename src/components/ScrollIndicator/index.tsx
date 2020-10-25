import React from 'react';

import Flex from 'components/Flex';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { LanguageContext } from "components/LanguageContext";

import styles from './styles.module.css';

const ScrollIndicator = () => {
  const { state } = React.useContext(LanguageContext);
  const language = state.language;

  return (
    <Flex className={styles.scrollIndicator}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      {language === "english" ? "Scroll" : "Desplazar"}
    </Flex>
  );
} 

export default ScrollIndicator;