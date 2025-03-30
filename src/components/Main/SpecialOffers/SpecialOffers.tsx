import React from 'react';
import { CiStar } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

import split_sys1 from '../../../assets/images/split_sys_1.png';

import bg1 from '../../../assets/images/bg_1.jpg';
import bg2 from '../../../assets/images/bg_2.jpg';

/* СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ (КАРТОЧКА ТОВАРА): */
const SpecialOffers = () => {
  return (
    <section className="pt-4 mb-3 px-3 xs:px-8 sm:mb-5 xl:px-14 lg:mb-10 2xl:px-[320px]">
      <div>
        <h2 className="text-center pb-4  text-[22px]">
          Специальные предложения
        </h2>

        {/* КАРТОЧКА ТОВАРА: */}
        <div className="p-4 border-1 border-gray-300 rounded-2xl xs:flex">
          <div className="xs:pr-1 xs:border-r-1 xs:border-r-gray-300">
            <div className="flex align-center justify-between gap-1">
              <p className=" text-[18px] font-[600]">Товар месяца!</p>
              <CiStar className="text-[26px] text-[#6E6E6E] cursor-pointer" />
            </div>
            <div className="flex gap-2 pt-2">
              <p className="h-6 flex items-center rounded-sm border-1 border-[#3BBA00] text-[11px] leading-1 text-[#3BBA00] px-1">
                В наличии
              </p>
              <p className="uppercase flex items-center rounded-sm text-[11px] leading-1 px-2 bg-[#FF6341] text-[white]">
                Хит
              </p>
            </div>
            <div className="xs:w-fit">
              <img className="max-h-[500px]" src={split_sys1}></img>
            </div>
          </div>
          <div className="flex flex-col xs:items-end xs:justify-between xs:pl-4 sm:justify-center lg:pr-4 lg:justify-start lg:gap-5 lg:items-start">
            <h4 className="font-[600] text-center mt-2 mb-2 xs:leading-[20px] xs:mt-0 sm:text-[18px]">
              Сплит-система LESSAR COOL+ LS-H07KFE2/LU-H07KFE2
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-6">
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                Тип внутреннего блока{' '}
                <span className="text-[#6E6E6E] font-[700]">(Настенный)</span>
              </li>
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                Производительность{' '}
                <span className="text-[#6E6E6E] font-[700]">
                  (2,1 кВт / до 21м2)
                </span>
              </li>
              <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                Инверторная технология{' '}
                <span className="text-[#6E6E6E] font-[700]">(Нет)</span>
              </li>
            </ul>
            <div className="text-[20px] font-[600] mt-2 mb-2 sm:text-[24px] lg:text-[35px]">
              30 500 ₽
            </div>
            <button className="flex items-center justify-center gap-2 p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] cursor-pointer lg:w-[100%] lg:p-3 lg:text-[18px]">
              В корзину <CiShoppingCart className="text-[25px]" />
            </button>
          </div>
          <div className="border-l-1 border-gray-300 flex-col justify-center gap-5 pl-4 hidden lg:flex">
            <div
              className="h-[100px] w-[160px] flex items-center justify-center rounded-2xl font-[600]"
              style={{ backgroundImage: `url(${bg1})` }}
            >
              Фреон R32
            </div>
            <div
              className="h-[100px] w-[160px] flex items-center justify-center rounded-2xl font-[600]"
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
