import React from 'react';
import { NavLink } from 'react-router-dom';

/* ------------ ХЕАДЕР: ПЕРВЫЙ РЯД ---------------- */
const HeaderRowOne = () => {
  return (
    <div className="lg:flex items-center justify-between p-4 border-b-1 border-[rgba(114,114,114,0.2)] lg:px-8 xl:px-14 2xl:px-50 hidden">
      <div className="flex gap-10">
        <p className=" text-[15px] text-[#232323]">
          г. Санкт-Петербург, пр-т Наставников, 40
        </p>
        <p className="text-[15px] text-[#6E6E6E]">Пн-Пт 09:00-18:00</p>
      </div>
      <nav>
        <ul className="flex gap-3 font-[600] text-[#1B9AE9]">
          <li className="p-1 cursor-pointer">
            <NavLink to="about">О компании</NavLink>
          </li>
          <li className="p-1 cursor-pointer">
            <NavLink to="promotions">Акции и скидки</NavLink>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <NavLink to="service">Сервис</NavLink>
            <div>
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
            </div>
          </li>
          <li className="p-1 cursor-pointer">
            <NavLink to="contacts">Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderRowOne;
