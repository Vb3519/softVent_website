import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

import ballu_img1_1 from '../../../assets/images/split_systems/ballu/ballu_1_1.jpg';

import bg1 from '../../../assets/images/bg_1.jpg';
import bg2 from '../../../assets/images/bg_2.jpg';

/* СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ (КАРТОЧКА ТОВАРА): */
const SpecialOffers = () => {
  return (
    <section className="pt-4 mb-3 px-3 xs:px-8 sm:mb-5 xl:px-31 lg:mb-10 2xl:px-[320px]">
      <div className="font-[inter]">
        <h2 className="text-center pb-4 font-[600] text-[22px]">
          Специальные предложения
        </h2>

        {/* КАРТОЧКА ТОВАРА: */}
        <div className="p-4 border-1 border-gray-300 rounded-2xl xs:flex">
          <div className="xs:pr-1 xs:border-r-1 xs:border-r-gray-300">
            <div className="flex align-center justify-between gap-1">
              <p className=" text-[18px] font-[500]">Товар месяца!</p>
            </div>
            <div className="flex gap-2 pt-2">
              <p className="h-6 flex items-center rounded-sm border-1 border-[#3BBA00] text-[11px] leading-1 text-[#3BBA00] px-1">
                В наличии
              </p>
              <p className="uppercase flex items-center rounded-sm text-[11px] leading-1 px-2 bg-[#FF6341] text-[white]">
                Хит
              </p>
            </div>
            <div className="xs:w-fit xs:mt-12 md:mt-0">
              <img className="max-h-[500px]" src={ballu_img1_1}></img>
            </div>
          </div>
          <div className="flex flex-col xs:items-end xs:justify-between xs:pl-4 sm:justify-center md:gap-3 lg:pr-4 lg:justify-start lg:gap-5 lg:items-start">
            <h4 className="font-[500] text-center mt-2 mb-2 xs:leading-[20px] xs:mt-0 sm:text-[18px]">
              Сплит-система Ballu 1 кВт c наружным блоком в комплекте
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-6 md:mx-auto lg:mx-[0]">
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] xs:leading-[17px] sm:text-[16px] sm:leading-[20px]">
                Инверторная технология:{' '}
                <span className="text-[#6E6E6E] font-[700]">Нет</span>
              </li>
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] xs:leading-[17px] sm:text-[16px] sm:leading-[20px]">
                Макс. мощность:{' '}
                <span className="text-[#6E6E6E] font-[700] text-nowrap">
                  1 кВт
                </span>
              </li>
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] xs:leading-[17px] sm:text-[16px] sm:leading-[20px]">
                Макс. расход воздуха:{' '}
                <span className="text-[#6E6E6E] font-[700] text-nowrap">
                  500 м3/ч
                </span>
              </li>
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] xs:leading-[17px] sm:text-[16px] sm:leading-[20px]">
                Цвет: <span className="text-[#6E6E6E] font-[700]">Белый</span>
              </li>
            </ul>
            <div className="text-[28px] text-[#1B9AE9] font-[500] mt-2 sm:text-[34px] lg:text-[40px]">
              25 000 ₽
            </div>
            <div className="text-[18px] line-through font-[400] mb-2 sm:text-[24px]">
              30 500 ₽
            </div>
            <NavLink
              className="mt-4 px-2 text-center m-auto h-[54px] w-[70%] max-w-[355px] flex items-center justify-center text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] font-[600] text-[#1B9AE9] border-1 border-blue-300 rounded-2xl transition duration-200 ease-in hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] hover:bg-[#1B9AE9] hover:text-[white] hover:border-transparent"
              to="/catalog/split-systems"
            >
              Перейти в каталог
            </NavLink>
          </div>
          <div className="border-l-1 border-gray-300 flex-col justify-center gap-5 pl-4 hidden lg:flex">
            <div
              className="h-[100px] w-[160px] flex items-center justify-center rounded-2xl font-[500]"
              style={{ backgroundImage: `url(${bg1})` }}
            >
              Фреон R32
            </div>
            <div
              className="h-[100px] w-[160px] flex items-center justify-center rounded-2xl font-[500]"
              style={{ backgroundImage: `url(${bg2})` }}
            >
              Гарантия 10 лет
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
