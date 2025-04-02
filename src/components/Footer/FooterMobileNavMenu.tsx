import React from 'react';
import { NavLink } from 'react-router-dom';

import { HiOutlineViewGrid } from 'react-icons/hi';
import { PiStarBold } from 'react-icons/pi';
import { IoSearch } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';

const FooterMobileNavMenu = () => {
  return (
    <nav className="p-2 elem-shadow fixed bottom-0 w-full bg-[white] xs:px-8 xl:px-14 lg:hidden">
      <ul className="flex gap-1 justify-between md:justify-center md:gap-16">
        <li className="cursor-pointer">
          <NavLink
            to="search"
            className="flex flex-col gap-1 items-center text-[12px] text-[#6E6E6E] xs:text-[14px]"
          >
            <IoSearch className="text-[26px]" />
            <span>Поиск</span>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink to="catalog">
            <div className="flex flex-col gap-1 items-center text-[12px] text-[#6E6E6E] xs:text-[14px]">
              <HiOutlineViewGrid className="text-[26px]" />
              <span>Каталог</span>
            </div>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="whishlist"
            className="flex flex-col gap-1 items-center text-[12px] text-[#6E6E6E] xs:text-[14px]"
          >
            <PiStarBold className="text-[26px]" />
            <span>Избранное</span>
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="cart"
            className="flex flex-col gap-1 items-center text-[12px] text-[#6E6E6E] xs:text-[14px]"
          >
            <FiShoppingCart className="text-[26px]" />
            <span>Корзина</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterMobileNavMenu;
