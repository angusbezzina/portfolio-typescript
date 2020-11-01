import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Flex from "components/Flex";
import  SpanishLanguageButton from 'components/SpanishLanguageButton';
import  EnglishLanguageButton from 'components/EnglishLanguageButton';

import styles from "./styles.module.css";
import "styles/common.css";

type HeaderProps = {
  headerActive?: boolean,
}

const Header = (props:HeaderProps) => {
  const headerActive = props.headerActive;
  
  return (
    <header className={classnames("appHeader", styles.appHeader, {[styles.appHeaderActive]: headerActive})}>
      <Flex className={styles.appHeaderInner} justify="end">
        <Link to="/" className="incognitoLink logoLink">
          Angus Bezzina<span className="redText">.</span>
        </Link>
        <Flex className={styles.appHeaderButtons}>
          <SpanishLanguageButton />
          |
          <EnglishLanguageButton />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
