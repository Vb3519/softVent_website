import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HiOutlineViewGrid } from 'react-icons/hi';
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

import { selectCurrentWhishList } from '../../redux/slices/whishListSlice';

const FooterMobileNavMenu = () => {
  const currentWhishList = useSelector(selectCurrentWhishList);

  return (
    <nav className="font-[inter] p-3 elem-shadow fixed bottom-0 w-full z-10 bg-[white] xs:px-8 xl:px-14 lg:hidden">
      <ul className="flex gap-1 justify-between md:justify-center md:gap-16">
        <li className="cursor-pointer">
          <NavLink to="catalog">
            <div className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px] hover:text-[#1B9AE9] transition duration-200 ease-in">
              <HiOutlineViewGrid className="text-[26px] opacity-80" />
              <span>Каталог</span>
            </div>
          </NavLink>
        </li>
        <li className="cursor-pointer relative">
          <NavLink
            to="whishlist"
            className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px] hover:text-[#1B9AE9] transition duration-200 ease-in"
          >
            <PiStarBold className="text-[26px] opacity-80" />
            <span>Избранное</span>
          </NavLink>
          <span className="font-[inter] text-[white] text-[15px] top-[-7px] left-[37px] flex items-center justify-center absolute w-[20px] h-[20px] rounded-[50%] bg-gradient-to-r from-blue-400 to-blue-500">
            {currentWhishList.length}
          </span>
        </li>
        <li className="cursor-pointer relative">
          <NavLink
            to="cart"
            className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px] hover:text-[#1B9AE9] transition duration-200 ease-in"
          >
            <FiShoppingCart className="text-[26px] opacity-80" />
            <span>Корзина</span>
            <span className="font-[inter] text-[white] text-[15px] top-[-7px] left-[30px] flex items-center justify-center absolute w-[20px] h-[20px] rounded-[50%] bg-gradient-to-r from-blue-400 to-blue-500">
              0
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterMobileNavMenu;
