import React from 'react';

import { HiOutlineViewGrid } from 'react-icons/hi';
import { GiStack } from 'react-icons/gi';
import { PiStarBold } from 'react-icons/pi';
import { FiShoppingCart } from 'react-icons/fi';

/* ------------ ХЕАДЕР: ВТОРОЙ РЯД ---------------- */
const HeaderRowTwo = () => {
  return (
    <div className="w-full flex justify-between gap-5 p-3 border-b-1 border-b-[rgba(114,114,114,0.2)] lg:px-8 xl:px-14">
      <div className="flex items-center">
        <span className="text-[25px]">Soft</span>
        <span className="text-[25px] text-[#3b9dca]">Vent</span>
      </div>
      <button className="lg:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-[#3b9dca]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>

      <div className="w-[100%] gap-4 justify-between lg:flex hidden">
        <div className="w-[30%] flex items-center gap-3">
          <button className="p-2 rounded-md bg-[#1B9AE9] cursor-pointer">
            <HiOutlineViewGrid className="text-[25px] text-[whitesmoke]" />
          </button>
          <div className="w-[100%] max-w-[365px] flex items-center bg-gray-200 rounded-md pr-2">
            <input className="w-[100%] p-2 outline-none" placeholder="Поиск" />
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-5 items-end">
          <div className="flex flex-col gap-1 items-center text-nowrap">
            <p className="text-center text-[14px] font-[600] leading-[16px]">
              +7 (981) 755-47-56
            </p>
            <p className="text-center text-[14px] leading-[16px] text-[#6E6E6E]">
              vb415@bk.ru
            </p>
          </div>

          <div className="flex flex-col gap-1 items-center text-nowrap">
            <p className="text-center text-[14px] font-[600] leading-[16px]">
              +7 (981) 755-47-56
            </p>
            <button className="flex items-center gap-2 text-[14px] leading-[16px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-[#6E6E6E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="text-left underline decoration-dotted text-[#6E6E6E]">
                Заказать обратный звонок
              </span>
            </button>
          </div>
        </div>

        <ul className="flex gap-3">
          <li className="flex flex-col items-center">
            <a className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px]">
              <GiStack className="text-[26px]" />
              Сравнение
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px]">
              <PiStarBold className="text-[26px]" />
              <span>Избранное</span>
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a className="flex flex-col items-center text-[12px] text-[#6E6E6E] xs:text-[14px]">
              <FiShoppingCart className="text-[26px]" />
              <span>Корзина</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderRowTwo;
