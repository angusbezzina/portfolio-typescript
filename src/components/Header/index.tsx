import React from 'react';
import classnames from 'classnames';
import Logo from 'assets/logo';

import * as styles from './styles.css';

const Header = () => {  
  return (
    <header className="appHeader">
      <Logo />
    </header>
  );
}

export default Header;