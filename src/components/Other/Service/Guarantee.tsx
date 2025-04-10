import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// UI:
import InfoSection from '../../UI/InfoSection';
import ContactForm from '../../UI/ContactForm';

import guarantee_img from '../../../assets/images/guarantee_img.jpg';
import engineer_3 from '../../../assets/images/engineer_3.jpg';

const Guarantee = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <NavLink to="/service" className="text-[#1B9AE9]">
          <span className="text-[#232323]">/</span> Сервис{' '}
        </NavLink>
        <span>/ Гарантия</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Гарантия
      </h2>
      <div className="p-4 flex flex-col gap-5 justify-center items-center bg-[#F5FCFF] elem-shadow lg:flex-row lg:items-start">
        <div className="flex flex-col gap-5">
          <p className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Компания "СофтВент" осуществляет сервисное обслуживание систем
            вентиляции, кондиционирования и дымоудаления. В нашем штате работают
            компетентные специалисты с многолетним опытом, сервисные работы
            подразумевают применение профильной техники и расходных материалов.
          </p>
          <h3 className="font-[600] font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            При организации сервисных мероприятий учитываются следующие факторы:
          </h3>
          <ul className="flex flex-col gap-2 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px] list-disc pl-5">
            <li>Конструктивные особенности системы;</li>
            <li>Параметры использования оборудования;</li>
            <li>
              Требования отраслевых нормативов в части пожарной, экологической и
              эксплуатационной безопасности;
            </li>
            <li>
              Потребность в отключении смежной техники на время выполнения
              работ;
            </li>
            <li>Рекомендации заказчика;</li>
          </ul>
        </div>
        <div className="max-w-[500px] rounded-bl-[40%] rounded-tr-[40%] opacity-[90%] xl:max-w-[550px]">
          <img
            className="rounded-bl-[40%] rounded-tr-[40%]"
            alt="Сервисное обслуживание вентиляционного оборудования"
            src={guarantee_img}
          ></img>
        </div>
      </div>
      <h3 className="font-[600] font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        Кто может заказать обслуживание?
      </h3>
      <p className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        Воспользоваться предложением компании могут следующие категории
        клиентов:
      </p>
      <ul className="flex flex-col gap-2 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px] list-disc pl-5">
        <li>
          <span className="font-[600]">Частные лица.</span> В рамках работы с
          частными лицами обслуживаются инженерные системы коттеджей и квартир.
          Они отличаются простотой и малыми размерами, что положительно
          сказывается на стоимости услуг;
        </li>
        <li>
          <span className="font-[600]">Корпоративные заказчики. </span>Клиенты
          корпоративного сегмента могут заказать профилактику офисных и
          промышленных кондиционеров, обслуживание протяженных вентиляционных
          воздуховодов;
        </li>
        <li>
          <span className="font-[600]">Строительные организации. </span>
          Застройщики нередко заказывают обслуживание коммуникаций построек.
          Наша компания выполняет полный спектр работ в течение гарантийного
          срока, распространяющегося на здание.
        </li>
      </ul>

      <div
        className="p-2 flex items-center justify-center gap-12 overflow-x-hidden lg:mt-8"
        ref={ref}
      >
        <ContactForm
          className="basis-[100%] xl:basis-[50%]"
          title={'Гарантийное обслуживание Вашей техники!'}
        />
        <div
          className={`max-h-[390px] justify-center basis-[50%] hidden xl:flex relative opacity-0 translate-x-[100vw] ${
            inView ? 'contact-form-img-animation' : ''
          }`}
        >
          <img
            className="max-h-[390px] min-h-[390px] min-w-[585px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.4)]"
            src={engineer_3}
          ></img>
        </div>
      </div>
    </InfoSection>
  );
};
export default Guarantee;
