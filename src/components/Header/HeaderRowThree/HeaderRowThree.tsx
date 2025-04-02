import React from 'react';
import { NavLink } from 'react-router-dom';

import { TbAirConditioning } from 'react-icons/tb';
import { MdOutlineHvac } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';

/* ------------ ХЕАДЕР: ТРЕТИЙ РЯД ---------------- */
const HeaderRowThree = () => {
  return (
    <nav>
      <ul className="p-3 lg:flex items-center gap-15 justify-center hidden">
        <li className="text-[#6E6E6E]">
          <NavLink
            to="catalog/split-systems"
            className="flex items-center gap-1 cursor-pointer"
          >
            <TbAirConditioning className="text-[#1B9AE9] mt-1 text-[25px] opacity-50" />
            Кондиционеры{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mt-[3px] size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </NavLink>
        </li>
        <li className="text-[#6E6E6E]">
          <NavLink
            to="catalog/ventilation-units"
            className="flex items-center gap-1 cursor-pointer"
          >
            <MdOutlineHvac className="text-[#1B9AE9] mt-0.5 text-[25px] opacity-50" />
            Вентиляция{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mt-[3px] size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </NavLink>
        </li>
        <li className="text-[#6E6E6E]">
          <NavLink
            to="catalog/home-microclimate"
            className="flex items-center gap-1 cursor-pointer"
          >
            <MdOutlineWbSunny className="text-[#1B9AE9] mt-1 text-[25px] opacity-50" />
            Домашний микроклимат{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mt-[3px] size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderRowThree;
