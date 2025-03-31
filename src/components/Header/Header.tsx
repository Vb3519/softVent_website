import React from 'react';

import HeaderRowOne from './HeaderRowOne/HeaderRowOne';
import HeaderRowTwo from './HeaderRowTwo/HeaderRowTwo';
import HeaderRowThree from './HeaderRowThree/HeaderRowThree';
import MobileHeaderMenu from './MobileHeaderMenu';

const Header = () => {
  return (
    <header className="flex justify-between lg:flex-col">
      <HeaderRowOne />
      <HeaderRowTwo />
      <HeaderRowThree />
      <MobileHeaderMenu />
    </header>
  );
};

export default Header;
