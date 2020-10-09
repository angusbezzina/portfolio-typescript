import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Flex from "components/Flex";
import Logo from "assets/logo";

import styles from "./styles.module.css";
import "styles/common.css";

const Header = () => {
  return (
    <header className={classnames("appHeader", styles.appHeader)}>
      <Flex className={styles.appHeaderInner}>
        <Link to="/" className="incognitoLink">
          <Logo className={styles.appHeaderlogoBackdrop} />
        </Link>
      </Flex>
    </header>
  );
};

export default Header;
