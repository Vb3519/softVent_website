import React from 'react';

import project_img from '../../assets/images/project.png';

import daikin_img from '../../assets/images/daikin_label.png';
import lessar_img from '../../assets/images/lessar_label.png';
import lg_img from '../../assets/images/lg_label.png';
import royalcli_img from '../../assets/images/royal_clima_label.png';

/* ИНДИВИДУАЛЬНЫЕ УСЛОВИЯ (ДЛЯ ПРОЕКТИРОВЩИКОВ И ДИЗАЙНЕРОВ): */
const OurPartners = () => {
  return (
    <section className="flex flex-col gap-5 p-3 xs:px-8 xl:px-14 lg:flex-row lg:mb-10">
      <div
        className="flex items-start justify-start gap-10 p-3 bg-cover bg-center rounded-2xl lg:p-10 lg:min-h-[400px] lg:gap-20"
        style={{ backgroundImage: `url(${project_img})` }}
      >
        <div className="w-[80%] flex flex-col justify-center p-3 bg-gray-200 opacity-90 rounded-2xl xs:w-[65%] lg:gap-5">
          <h2 className="text-left pb-2 text-[22px] leading-[27px] lg:text-center">
            Индивидуальные условия для проектировщиков и дизайнеров
          </h2>
          <p className="text-left text-[14px] leading-[130%] xs:text-[16px] sm:text-[18px] lg:text-center">
            Наша совместная работа может помочь в создании более эффективных и
            удобных климатических решений в любых помещениях.
          </p>
          <div className="text-[#1b9ae9] font-[600] lg:text-center">
            +7 (981) 755-47-56
          </div>
        </div>

        <div className="p-3 gap-3 bg-gray-200 opacity-90 rounded-2xl hidden xl:flex">
          <div className="flex flex-col justify-center gap-4">
            <button className="">Проектировщикам</button>
            <button className="">Монтажникам</button>
            <button className="">Маркетплейсам</button>
            <button className="">Клиентам</button>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="">Оборудование от производителя.</li>
              <li className="">Специальные условия.</li>
              <li className="">Оборудование в наличии на складе.</li>
              <li className="">Соблюдение сроков.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* НАШИ ПАРТНЕРЫ: */}
      <div className="min-w-[300px] flex flex-col items-center justify-start">
        <h2 className="text-center pb-4 text-[22px]">Наши Партнеры</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-4 justify-center items-center lg:flex-col">
            <img className="h-[34px]" src={daikin_img}></img>
            <img className="h-[34px]" src={lessar_img}></img>
          </li>
          <li className="flex gap-4 justify-center items-center lg:flex-col">
            <img className="h-[34px]" src={lg_img}></img>
            <img className="h-[34px]" src={royalcli_img}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurPartners;
