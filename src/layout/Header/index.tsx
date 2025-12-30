import type React from 'react';

import s from './header.module.scss';
import InfoTop from './InfoTop';
import Main from './Main';
import Menu from './Menu';

function Header(): React.ReactElement {
  return (
    <header className={s.header}>
      <InfoTop />
      <Main />
      <Menu />
    </header>
  );
}

export default Header;
