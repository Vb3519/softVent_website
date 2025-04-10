import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GiFeatheredWing } from 'react-icons/gi';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

import SearchBar from './SearchBar';

import {
  selectMobileMenuState,
  toggleMobileMenu,
} from '../../../redux/slices/mobileMenuSlice';

import { selectCurrentWhishList } from '../../../redux/slices/whishListSlice';

import { selectCurrentShoppingCart } from '../../../redux/slices/shoppingCartSlice';

/* ------------ ХЕАДЕР: ВТОРОЙ РЯД ---------------- */
const HeaderRowTwo = () => {
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isMobileMenuOpened: boolean = useSelector(selectMobileMenuState);
  const currentWhishList = useSelector(selectCurrentWhishList);
  const currentShoppingCart = useSelector(selectCurrentShoppingCart);

  // "Прилипание" меню навигации при скролле:
  const handlePageScoll = () => {
    if (window.scrollY > 65) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMobileMenuAutoClose = () => {
    if (window.innerWidth >= 1024 && isMobileMenuOpened) {
      document.body.classList.remove('mobile-menu-opened');
    }
  };

  window.addEventListener('resize', handleMobileMenuAutoClose);

  useEffect(() => {
    window.addEventListener('scroll', handlePageScoll);

    // Убираем обработчик, когда компонент размонтирован
    return () => {
      window.removeEventListener('scroll', handlePageScoll);
      window.removeEventListener('resize', handleMobileMenuAutoClose);
    };
  }, [isScrolled]);

  // Открытие / закрытие мобильного меню навигации (каталога):
  const handleMobileMenuOpen = () => {
    if (!isMobileMenuOpened) {
      dispatch(toggleMobileMenu());
      document.body.classList.add('mobile-menu-opened');
    } else {
      dispatch(toggleMobileMenu());
      document.body.classList.remove('mobile-menu-opened');
    }
  };

  // Закрытие мобильного меню навигации при клике на эмблему сайта:
  const handleMobileMenuClose = () => {
    if (isMobileMenuOpened) {
      dispatch(toggleMobileMenu());
      document.body.classList.remove('mobile-menu-opened');
    }
  };

  return (
    <div
      className={`font-[inter] w-full flex justify-between gap-5 p-3 border-b-1 border-b-[rgba(114,114,114,0.2)] xs:px-8 lg:px-8 xl:px-14 2xl:px-50 sticky top-0 z-10 bg-[white] ${
        isScrolled ? 'elem-shadow' : ''
      }`}
    >
      <div
        className="flex items-center relative"
        onClick={handleMobileMenuClose}
      >
        <NavLink to="/" className="group">
          <GiFeatheredWing className="absolute top-0 left-[-22px] text-[25px] opacity-[20%] hidden xs:block transition duration-200 ease-in group-hover:text-[#3b9dca] group-hover:opacity-100" />
          <span className="text-[25px] font-[600]">Soft</span>
          <span className="text-[25px] font-[600] text-[#3b9dca]">Vent</span>
        </NavLink>
      </div>
      <button
        className="lg:hidden cursor-pointer"
        onClick={handleMobileMenuOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-[#3b9dca] sm:size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>

      <div className="w-[100%] gap-4 justify-between lg:flex hidden">
        <div className="flex gap-5 items-center 2xl:gap-10">
          <div className="flex flex-col gap-1 items-center text-nowrap">
            <p className="text-center text-[14px] font-[500] leading-[16px] 2xl:text-[15px]">
              +7 (981) 755-47-56
            </p>
            <p className="text-center text-[14px] leading-[16px] text-[#6E6E6E] 2xl:text-[15px]">
              vb415@bk.ru
            </p>
          </div>

          <div className="flex flex-col gap-1 items-center text-nowrap">
            <p className="text-center text-[14px] font-[500] leading-[16px] 2xl:text-[15px]">
              +7 (981) 755-47-56
            </p>
            <button className="flex items-center gap-2 text-[14px] leading-[16px] cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-[#6E6E6E] group-hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="text-left underline decoration-dotted text-[#6E6E6E] group-hover:text-[#1B9AE9] transition duration-200 ease-in">
                Заказать обратный звонок
              </span>
            </button>
          </div>
        </div>

        <SearchBar />

        <ul className="flex gap-3 2xl:gap-8">
          <li className="cursor-pointer">
            <NavLink to="catalog">
              <div className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px] 2xl:text-[15px] hover:text-[#1B9AE9] transition duration-200 ease-in">
                <HiOutlineViewGrid className="text-[26px] opacity-80" />
                <span>Каталог</span>
              </div>
            </NavLink>
          </li>

          <li className="flex flex-col items-center relative">
            <NavLink
              to="whishlist"
              className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px] 2xl:text-[15px] hover:text-[#1B9AE9] transition duration-200 ease-in"
            >
              <PiStarBold className="text-[26px] opacity-80" />
              <span className="font-[inter]">Избранное</span>
            </NavLink>
            <span className="font-[inter] text-[white] pr-[1px] text-[15px] top-[-7px] left-[37px] flex items-center justify-center absolute w-[20px] h-[20px] rounded-[50%] bg-gradient-to-r from-blue-400 to-blue-500">
              {currentWhishList.length}
            </span>
          </li>
          <li className="flex flex-col items-center relative">
            <NavLink
              to="cart"
              className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px] 2xl:text-[15px] hover:text-[#1B9AE9] transition duration-200 ease-in"
            >
              <FiShoppingCart className="text-[26px] opacity-80" />
              <span className="font-[inter]">Корзина</span>
            </NavLink>
            <span className="font-[inter] text-[white] text-[15px] top-[-7px] left-[30px] flex items-center justify-center absolute w-[20px] h-[20px] rounded-[50%] bg-gradient-to-r from-blue-400 to-blue-500">
              {currentShoppingCart.length}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderRowTwo;
