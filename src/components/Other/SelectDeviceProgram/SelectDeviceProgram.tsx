import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcCalculator } from 'react-icons/fc';

import InfoSection from '../../UI/InfoSection';

const SelectDeviceProgram = () => {
  return (
    <InfoSection>
      <div className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Подбор оборудования</span>
      </div>
      <h2 className="text-left text-[22px] font-[600]">Подбор оборудования</h2>
      <div className="min-h-[400px] flex flex-col gap-5">
        <FcCalculator className="m-auto text-[150px] md:text-[200px] text-gray-200" />
        <div className="flex flex-col gap-3 text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
          <h3 className="font-[600] text-center">
            Здесь будет программа подбора оборудования по Вашим параметрам!
          </h3>
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
      </div>
    </InfoSection>
  );
};

export default SelectDeviceProgram;
<p className="text-center">
  Пользователь, предварительно выбрав тип оборудования (кондиционер, вентилятор
  и т.д.), подбирает по заданным параметрам оборудование.
</p>;
