import React from 'react';

import HeaderRowOne from './HeaderRowOne/HeaderRowOne';
import HeaderRowTwo from './HeaderRowTwo/HeaderRowTwo';
import HeaderRowThree from './HeaderRowThree/HeaderRowThree';

const Header = () => {
  return (
    <header className="flex justify-between lg:flex-col 2xl:px-[200px]">
      <HeaderRowOne />
      <HeaderRowTwo />
      <HeaderRowThree />
    </header>
  );
};

export default Header;
