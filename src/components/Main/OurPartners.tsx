import React from 'react';
import { FaDraftingCompass } from 'react-icons/fa';

import project_img from '../../assets/images/project.png';

import daikin_img from '../../assets/images/daikin_label.png';
import lessar_img from '../../assets/images/lessar_label.png';
import lg_img from '../../assets/images/lg_label.png';
import royalcli_img from '../../assets/images/royal_clima_label.png';
import me_label from '../../assets/images/m_elec_label.png';
import ballu_label from '../../assets/images/ballu_label.png';

/* ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ (ДЛЯ ПРОЕКТИРОВЩИКОВ И ДИЗАЙНЕРОВ): */
const OurPartners = () => {
  return (
    <section className="flex flex-col gap-5 p-3 xs:px-8 xl:px-14 lg:flex-row lg:mb-10 2xl:px-[200px]">
      <div
        className="font-[inter] flex items-start justify-start gap-10 p-3 bg-cover bg-center rounded-2xl lg:p-10 lg:min-h-[400px] lg:gap-20"
        style={{ backgroundImage: `url(${project_img})` }}
      >
        <div className="w-[80%] flex flex-col justify-center p-3 bg-gray-200 opacity-90 rounded-2xl xs:w-[65%] lg:gap-5">
          <h2 className="text-left pb-2 font-[500] text-[18px] leading-[27px] lg:text-center xl:text-[20px]">
            Индивидуальные условия для проектировщиков и дизайнеров
          </h2>
          <p className="text-left text-[14px] leading-[130%] xs:text-[16px] xl:text-[17px] lg:text-center">
            Наша совместная работа может помочь в создании более эффективных и
            удобных климатических решений в любых помещениях.
          </p>
          <div className="py-3 text-[#1b9ae9] font-[500] lg:text-center">
            +7 (981) 755-47-56
          </div>
        </div>
      </div>

      {/* НАШИ ПАРТНЕРЫ: */}
      <div className="min-w-[300px] flex flex-col items-center justify-start">
        <h2 className="font-[inter] font-[600] text-center pb-4 text-[22px]">
          Наши Партнеры
        </h2>
        <ul className="flex flex-col gap-3 lg:gap-6">
          <li className="flex gap-6 justify-center items-center lg:flex-col">
            <img
              className="h-[34px] transition duration-200 ease-in filter grayscale hover:grayscale-0 cursor-pointer"
              src={daikin_img}
            ></img>
            <img
              className="h-[34px] transition duration-200 ease-in filter grayscale hover:grayscale-0 cursor-pointer"
              src={lessar_img}
            ></img>
          </li>
          <li className="flex gap-6 justify-center items-center lg:flex-col">
            <img
              className="h-[34px] transition duration-200 ease-in filter grayscale hover:grayscale-0 cursor-pointer"
              src={lg_img}
            ></img>
            <img
              className="h-[34px] transition duration-200 ease-in filter grayscale hover:grayscale-0 cursor-pointer"
              src={royalcli_img}
            ></img>
          </li>
          <li className="flex gap-6 justify-center items-center lg:flex-col">
            <img
              className="h-[34px] transition duration-200 ease-in filter grayscale hover:grayscale-0 cursor-pointer"
              src={me_label}
            ></img>
            <img
              className="h-[34px] transition duration-200 ease-in filter grayscale hover:grayscale-0 cursor-pointer"
              src={ballu_label}
            ></img>
          </li>
        </ul>
      </div>

      <div className="font-[inter] min-w-[350px] p-3 gap-3 rounded-bl-3xl rounded-tr-3xl opacity-90 hidden xl:flex">
        <div className="flex flex-col justify-center gap-4 relative">
          <FaDraftingCompass className="text-[150px] text-gray-500 absolute top-25 left-23 opacity-20" />
          <button className="text-[20px] font-[600]">Проектировщикам</button>
          <button className="text-[20px] font-[600]">Монтажникам</button>
          <button className="text-[20px] font-[600]">Маркетплейсам</button>
          <button className="text-[20px] font-[600]">Клиентам</button>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="flex flex-col gap-3 text-[15px] text-center leading-[20px]">
            <li className="">- Оборудование от производителя</li>
            <li className="">- Специальные условия</li>
            <li className="">- Оборудование в наличии на складе</li>
            <li className="">- Соблюдение сроков</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
