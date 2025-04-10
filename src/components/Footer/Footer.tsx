import React from 'react';
import { NavLink } from 'react-router-dom';

import visa_img from '../../assets/images/visa_img.png';
import mir_img from '../../assets/images/mir_img.png';
import mastercard from '../../assets/images/mastercard_img.png';

import { Socials } from '../Main/SelectionHelpContacts/SelectionHelpContacts';

const Footer = () => {
  return (
    <footer className="mt-4 pb-4 flex flex-col gap-3 px-3 bg-[#F5F5F5] xs:px-8 xl:px-14">
      <div className="font-[inter] flex flex-col gap-1 justify-center pt-5 lg:flex-row lg:gap-5 lg:pb-2 xl:gap-10">
        <div>
          <div className="flex justify-between items-center">
            <NavLink
              to="/catalog"
              className="lg:hidden text-[16px] text-[#232323] font-[500] transition duration-200 ease-in hover:text-[#1B9AE9]"
            >
              Каталог
            </NavLink>
            <p className="hidden lg:block text-[16px] text-[#232323] font-[500]">
              Каталог
            </p>
          </div>
          <ul className="hidden lg:flex flex-col gap-3 pt-5">
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="catalog/split-systems"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Кондиционеры
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="catalog/ventilation-units"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Вентиляция
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="catalog/home-microclimate"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Домашний микроклимат
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="lg:pl-5 lg:border-l-1 border-gray-200">
          <div className="flex justify-between items-center">
            <NavLink
              to="/about"
              className="lg:hidden text-[16px] text-[#232323] font-[500] transition duration-200 ease-in hover:text-[#1B9AE9]"
            >
              О компании
            </NavLink>
            <p className="hidden lg:block text-[16px] text-[#232323] font-[500]">
              Покупателям
            </p>
          </div>
          <ul className="hidden lg:flex flex-col gap-3 pt-5">
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="promotions"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Акции и скидки
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="about"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                О компании
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="lg:pl-5 lg:border-l-1 border-gray-200">
          <div className="flex justify-between items-center">
            <NavLink
              to="/service"
              className="lg:hidden text-[16px] text-[#232323] font-[500] transition duration-200 ease-in hover:text-[#1B9AE9]"
            >
              Сервис
            </NavLink>
            <p className="hidden lg:block text-[16px] text-[#232323] font-[500]">
              Сервис
            </p>
          </div>
          <ul className="hidden lg:flex flex-col gap-3 pt-5">
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="service/delivery"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Доставка
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="service/payment"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Оплата
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="service/design"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Проектирование
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="service/installation"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Монтаж
              </NavLink>
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px]">
              <NavLink
                to="service/guarantee"
                className="hover:text-[#1B9AE9] transition duration-200 ease-in"
              >
                Гарантия
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="lg:pl-5 lg:border-l-1 border-gray-200">
          <div className="flex justify-between items-center">
            <p className="hidden lg:block text-[16px] text-[#232323] font-[500]">
              Связаться с нами
            </p>
          </div>
          <ul className="hidden lg:flex flex-col pt-5 text-nowrap">
            <li className="text-[15px] text-[#232323] font-[500]">
              +7 (981) 755-47-56
            </li>
            <li className="text-[15px] text-[#6E6E6E] font-[500]">
              vb415@bk.ru
            </li>
            <li className="my-3 text-[15px] text-[#232323]">
              г. Санкт-Петербург,
              <span className="block">пр-т. Наставников, 40</span>{' '}
              <span className="text-[14px] text-[#6E6E6E]">
                (Пн-Пт 09:00-18:00)
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-[400px] hidden flex-col pl-5 border-l-1 border-gray-200 xl:flex">
          <p className="text-[16px] text-[#232323] font-[500]">
            Мы в соц. сетях
          </p>
          <Socials />
          <p className="font-[inter] pt-3 text-[#6E6E6E] text-[12px] leading-[12px] xs:text-[14px] lg:leading-[18px]">
            "СофтВент" — проектно-монтажная организация, поставщик
            отечественного вентиляционного оборудования и систем
            кондиционирования. Будем рады сотрудничеству со всеми
            заинтересованными лицами.
          </p>
        </div>
      </div>

      <div className="font-[inter] pt-3 pb-16 flex flex-col gap-3 border-t-1 border-t-[rgba(114,114,114,0.2)] text-[12px] leading-[14px] text-[#232323] sm:text-[14px] lg:pb-0 lg:flex-row lg:items-center">
        <p>
          2025 © Интернет-магазин систем кондиционирования, вентиляции и
          отопления. Все права защищены.
        </p>
        <div className="flex items-center gap-3">
          <img className="max-w-[64px]" src={visa_img}></img>
          <img className="max-w-[64px]" src={mir_img}></img>
          <img className="max-w-[64px]" src={mastercard}></img>
        </div>

        <div className="flex gap-1 text-nowrap lg:px-5 lg:ml-auto">
          Разработка сайта -
          <span className="text-[#1b9ae9] font-[500]">Бордюгов Виктор</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
