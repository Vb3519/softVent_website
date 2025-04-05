import React from 'react';
import { NavLink } from 'react-router-dom';

import { TbAirConditioning } from 'react-icons/tb';
import { MdOutlineHvac } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';

/* ------------ ХЕАДЕР: ТРЕТИЙ РЯД ---------------- */
const HeaderRowThree = () => {
  return (
    <nav className="font-[inter]">
      <ul className="p-3 lg:flex items-center gap-15 justify-center hidden">
        <li className="text-[#232323]">
          <NavLink
            to="catalog/split-systems"
            className="flex items-center gap-1 hover:text-[#1B9AE9] transition duration-200 ease-in cursor-pointer"
          >
            <TbAirConditioning className="text-[#1B9AE9] mt-1 text-[25px] opacity-50" />
            Кондиционеры
          </NavLink>
        </li>
        <li className="text-[#232323]">
          <NavLink
            to="catalog/ventilation-units"
            className="flex items-center gap-1 hover:text-[#1B9AE9] transition duration-200 ease-in cursor-pointer"
          >
            <MdOutlineHvac className="text-[#1B9AE9] mt-0.5 text-[25px] opacity-50" />
            Вентиляция
          </NavLink>
        </li>
        <li className="text-[#232323]">
          <NavLink
            to="catalog/home-microclimate"
            className="flex items-center gap-1 hover:text-[#1B9AE9] transition duration-200 ease-in cursor-pointer"
          >
            <MdOutlineWbSunny className="text-[#1B9AE9] mt-1 text-[25px] opacity-50" />
            Домашний микроклимат
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderRowThree;
