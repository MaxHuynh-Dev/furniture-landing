import React from 'react';

import CartDrawer from './CartDrawer';
import s from './header.module.scss';
import InfoTop from './InfoTop';
import Main from './Main';
import Menu from './Menu';

function Header(): React.ReactElement {
  return (
    <React.Fragment>
      <header className={s.header}>
        <InfoTop />
        <Main />
        <Menu />
      </header>
      <CartDrawer />
    </React.Fragment>
  );
}

export default Header;
