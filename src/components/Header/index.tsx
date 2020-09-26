import React from 'react';
import classnames from 'classnames';

import Flex from 'components/Flex';
import Logo from 'assets/logo';

import styles from './styles.module.css';

const Header = () => {  
  return (
    <header className={classnames('appHeader', styles.appHeader)}>
      <Flex className={styles.appHeaderInner}>
        <Logo />
      </Flex>
    </header>
  );
}

export default Header;