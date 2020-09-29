import React from 'react';

import Flex from 'components/Flex';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css';

const ScrollIndicator = () => {
  return (
    <Flex className={styles.scrollIndicator}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      Scroll
    </Flex>
  );
} 

export default ScrollIndicator;