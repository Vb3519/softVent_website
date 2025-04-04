import React from 'react';
import { NavLink } from 'react-router-dom';

import { CiShoppingCart } from 'react-icons/ci';
import { CiStar } from 'react-icons/ci';

import InfoSection from '../../UI/InfoSection';

import microClimateData from '../../../data/microClimateData';

const HomeMicroClimate = () => {
  return (
    <InfoSection>
      <div className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Увлажнители воздуха</span>
      </div>
      <h2 className="text-left text-[22px] font-[600]">Увлажнители воздуха</h2>
      <div className="flex flex-col gap-5 items-center">
        <form className="w-full max-w-[780px] font-[inter] grid grid-cols-2 p-3 text-[14px] leading-[20px] bg-[#F5F5F5] rounded-2xl xs:p-6 md:grid-cols-3 sm:text-[16px] lg:text-[18px] lg:leading-[25px] xl:mb-6">
          <div className="pb-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Производитель:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Ballu</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Boneco</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Zanussi</label>
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col items-start pb-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Цена:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 items-center">
                <div>
                  <label>От</label> <span>250 000</span>
                </div>
                <input type="range" className="mt-[2px]" />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div>
                  <label>До</label> <span>250 000</span>
                </div>
                <input type="range" className="mt-[2px]" />
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Статус:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>В наличии</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Под заказ</label>
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center md:border-0">
            <h3 className="font-[500] mb-1">Эффективная площадь:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  className="mt-[2px] max-w-[100px] border-1 border-transparent bg-white rounded-md p-2 outline-none focus:border-gray-300"
                  maxLength={3}
                  max={100}
                />
                <label>м3</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Цвет корпуса:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Белый</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Черный</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Только "избранное":</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <label>Да</label>
                <input type="checkbox" className="mt-[2px]" />
              </div>
            </fieldset>
          </div>
        </form>

        <div className="flex flex-col items-center gap-5 xl:grid grid-cols-2 xl:gap-10">
          {microClimateData.map((microClimateUnitInfo) => {
            return (
              <div className="max-w-[650px] p-4 border-1 border-gray-300 rounded-2xl xs:flex xl:h-[470px]">
                <div className="xs:pr-1 xs:border-r-1 xs:border-r-gray-300">
                  <div className="flex align-center justify-between gap-1">
                    <p
                      className={`text-[18px] font-[600] ${
                        microClimateUnitInfo.isPopular ? '' : 'hidden'
                      }`}
                    >
                      Товар месяца!
                    </p>
                    <CiStar className="ml-auto text-[26px] text-[#6E6E6E] cursor-pointer" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <p
                      className={`h-6 flex items-center rounded-sm border-1 border-[#3BBA00] text-[11px] leading-1 text-[#3BBA00] px-1 ${
                        microClimateUnitInfo.isInStock ? '' : 'hidden'
                      }`}
                    >
                      В наличии
                    </p>
                    <p
                      className={`min-h-[24px] uppercase flex items-center rounded-sm text-[11px] leading-1 px-2 bg-[#FF6341] text-[white] ${
                        microClimateUnitInfo.isPopular ? '' : 'hidden'
                      }`}
                    >
                      Хит
                    </p>
                  </div>
                  <div className="xs:w-fit">
                    <img
                      className="max-h-[500px]"
                      src={microClimateUnitInfo.img}
                    ></img>
                  </div>
                </div>
                <div className="flex flex-col xs:items-end xs:justify-between xs:pl-4 sm:justify-center lg:pr-4 lg:justify-start lg:items-start">
                  <h4 className="font-[600] text-center mt-2 mb-2 xs:leading-[20px] xs:mt-0 sm:text-[18px]">
                    {microClimateUnitInfo.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                      Эффективная площадь:{' '}
                      <span className="text-[#6E6E6E] font-[700]">
                        {microClimateUnitInfo.area} м2
                      </span>
                    </li>
                    <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                      Макс. мощность:{' '}
                      <span className="text-[#6E6E6E] font-[700] text-nowrap">
                        {microClimateUnitInfo.maxPower} Вт
                      </span>
                    </li>
                    <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                      Макс. расход воздуха:{' '}
                      <span className="text-[#6E6E6E] font-[700]">
                        {microClimateUnitInfo.maxAirFlow} м3/ч
                      </span>
                    </li>
                    <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
                      Цвет:{' '}
                      <span className="text-[#6E6E6E] font-[700]">
                        {microClimateUnitInfo.color}
                      </span>
                    </li>
                  </ul>
                  <div className="text-[20px] font-[600] text-nowrap mt-2 mb-2 sm:text-[24px] lg:text-[35px]">
                    {microClimateUnitInfo.price} ₽
                  </div>
                  <button className="min-w-[125px] mt-3 flex items-center justify-center text-nowrap gap-2 p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] cursor-pointer lg:w-[100%] lg:p-3 lg:text-[18px] xl:mt-9">
                    В корзину <CiShoppingCart className="text-[25px]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        <p>
          Также с предлагаемым нами оборудованием, Вы можете ознакомиться в{' '}
          <NavLink to="/catalog" className="font-[600] text-[#1b9ae9]">
            каталоге
          </NavLink>
          . И не забудьте посмотреть действующие акции, которые помогут
          приобрести товар с максимальной выгодой.
        </p>
        <p>Удачных покупок!</p>
      </div>
    </InfoSection>
  );
};

export default HomeMicroClimate;
