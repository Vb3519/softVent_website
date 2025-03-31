import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import FooterMobileNavMenu from '../Footer/FooterMobileNavMenu';

import HeaderRowOne from '../Header/HeaderRowOne/HeaderRowOne';
import HeaderRowTwo from '../Header/HeaderRowTwo/HeaderRowTwo';
import HeaderRowThree from '../Header/HeaderRowThree/HeaderRowThree';
import MobileHeaderMenu from '../Header/MobileHeaderMenu';

const MainLayout = () => {
  return (
    <>
      <HeaderRowOne />
      <HeaderRowTwo />
      <HeaderRowThree />
      <MobileHeaderMenu />
      <Outlet />
      <Footer />
      <FooterMobileNavMenu />
    </>
  );
};

export default MainLayout;
