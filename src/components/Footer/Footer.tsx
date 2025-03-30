import React from 'react';

import visa_img from '../../assets/images/visa_img.png';
import mir_img from '../../assets/images/mir_img.png';
import mastercard from '../../assets/images/mastercard_img.png';

import { Socials } from '../Main/SelectionHelpContacts/SelectionHelpContacts';

const Footer = () => {
  return (
    <footer className="mt-4 pb-4 flex flex-col gap-3 px-3 bg-[#F5F5F5] xs:px-8 xl:px-14">
      <div className="flex flex-col gap-1 justify-center pt-5 lg:flex-row lg:gap-5 lg:pb-2 xl:gap-10">
        <div className="hidden items-center mb-auto mr-5 lg:flex">
          <span className="text-[25px]">Soft</span>
          <span className="text-[25px] text-[#3b9dca]">Vent</span>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="pt-2 text-[18px] text-[#232323] font-[600]">
              Каталог
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="hidden lg:flex flex-col gap-3 pt-5">
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Кондиционеры
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Вентиляция
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Домашний микроклимат
            </li>
          </ul>
        </div>

        <div className="lg:pl-5 lg:border-l-1 border-gray-200">
          <div className="flex justify-between">
            <p className="pt-2 text-[18px] text-[#232323] font-[600]">
              Покупателям
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="hidden lg:flex flex-col gap-3 pt-5">
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Акции и скидки
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              О компании
            </li>
          </ul>
        </div>

        <div className="lg:pl-5 lg:border-l-1 border-gray-200">
          <div className="flex justify-between">
            <p className="pt-2 text-[18px] text-[#232323] font-[600]">Сервис</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="hidden lg:flex flex-col gap-3 pt-5">
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Доставка
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Оплата
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Проектирование
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Монтаж
            </li>
            <li className="text-[17px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Гарантия
            </li>
          </ul>
        </div>

        <div className="lg:pl-5 lg:border-l-1 border-gray-200">
          <div className="flex justify-between">
            <p className="pt-2 text-[18px] text-[#232323] font-[600]">
              Связаться с нами
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="hidden lg:flex flex-col pt-5 text-nowrap">
            <li className="text-[17px] text-[#1b9ae9] font-[600] hover:cursor-pointer hover:underline">
              +7 (981) 755-47-56
            </li>
            <li className="text-[17px] text-[#1b9ae9] font-[600] hover:cursor-pointer hover:underline">
              vb415@bk.ru
            </li>
            <li className="my-3 text-[17px] text-[#232323]">
              г. Санкт-Петербург,
              <span className="block">пр-т. Наставников, 40</span>{' '}
              <span className="text-[15px] text-[#6E6E6E]">
                (Пн-Пт 09:00-18:00)
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-[400px] hidden flex-col pl-5 border-l-1 border-gray-200 xl:flex">
          <p className="pt-2 text-[18px] text-[#232323] font-[600]">
            Мы в соц. сетях
          </p>
          <Socials />
          <p className="pt-3 text-[15px] text-[#6E6E6E] leading-[20px]">
            "СофтВент" — проектно-монтажная организация, поставщик
            отечественного вентиляционного оборудования и систем
            кондиционирования. Будем рады сотрудничеству со всеми
            заинтересованными лицами.
          </p>
        </div>
      </div>

      <div className="pt-3 flex flex-col gap-3 border-t-1 border-t-[rgba(114,114,114,0.2)] text-[12px] leading-[138%] text-[#232323] xs:text-[14px] sm:text-[16px] lg:flex-row lg:items-center">
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
          <span className="text-[#1b9ae9]">Бордюгов Виктор</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
