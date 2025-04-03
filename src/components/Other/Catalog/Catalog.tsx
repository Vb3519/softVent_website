import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineProduct } from 'react-icons/ai';

import InfoSection from '../../UI/InfoSection';

const Catalog = () => {
  return (
    <InfoSection>
      <div className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Каталог</span>
      </div>
      <h2 className="text-left text-[22px] font-[600]">Каталог</h2>
      <div className="min-h-[400px] flex flex-col gap-5">
        <AiOutlineProduct className="m-auto text-[150px] md:text-[200px] text-gray-200" />
        <div className="flex flex-col gap-3 text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
          <h3 className="font-[600] text-center">
            Здесь будет информация о поставляемом нами оборудовании!
          </h3>
          <p>
            Не забудьте посмотреть действующие акции, которые помогут приобрести
            товар с максимальной выгодой.
          </p>
          <p>Удачных покупок!</p>
        </div>
      </div>
    </InfoSection>
  );
};

export default Catalog;
