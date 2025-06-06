import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// UI:
import InfoSection from '../../UI/InfoSection';
import ContactForm from '../../UI/ContactForm';

import project_img from '../../../assets/images/project.png';
import engineer_2 from '../../../assets/images/engineer_2.png';

const Design = () => {
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
        <span>/ Проектирование</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Проектирование
      </h2>
      <div className="p-4 flex flex-col gap-5 justify-center items-center bg-[#F5FCFF] elem-shadow lg:flex-row lg:items-start">
        <div className="flex flex-col gap-5">
          <p className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Проектирование систем вентиляции и кондиционирования - это
            комплексная процедура, связанная с подготовкой документации по
            формированию и монтажу сетей соответствующего назначения. Услуга
            востребована при строительстве производственных предприятий,
            муниципальных и частных объектов.
          </p>
          <h3 className="font-[600] font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Проектные материалы содержат следующую информацию:
          </h3>
          <ul className="flex flex-col gap-2 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px] list-disc pl-5 ">
            <li>
              Спецификация материалов для прокладки систем вентиляции и
              кондиционирования;
            </li>
            <li>Правила проведения монтажных работ;</li>
            <li>
              Общая протяженность приточных и вытяжных воздуховодов и
              конфигурация систем дымоудаления;
            </li>
            <li>
              Параметры вспомогательного оборудования, обеспечивающего
              корректную работу системы вентиляции и кондиционирования;
            </li>
          </ul>
          <p className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Проект системы вентиляции включает исчерпывающие сведения касаемо
            цен. В нем прописана стоимость оборудования и материалов, обозначены
            расходы на монтажные, демонтажные и пуско-наладочные работы.
          </p>
        </div>
        <div className="max-w-[500px] rounded-bl-[40%] rounded-tr-[40%] opacity-[90%] xl:max-w-[650px]">
          <img
            className="rounded-bl-[40%] rounded-tr-[40%]"
            alt="Листы проекта"
            src={project_img}
          ></img>
        </div>
      </div>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <h3 className="mb-5 font-[600]">Задачи проектирования:</h3>
        <p className="mb-2">
          Разработка проекта вентиляции и кондиционирования способствует решению
          следующих задач.
        </p>
        <ul className="flex flex-col gap-2 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px] list-disc pl-5">
          <li>
            Расчет объема подачи и удаления воздуха в жилую или техническую
            зону;
          </li>
          <li>
            Адаптация системы дымоудаления и вентиляции под нужды объекта;
          </li>
          <li>Проведение аэродинамических расчетов;</li>
          <li>
            Подбор оборудования с учетом его эксплуатационных и технических
            особенностей;
          </li>
          <li>
            Составление сметы на реализацию проекта вентиляции и
            кондиционирования;
          </li>
        </ul>
      </div>

      <div
        className="p-2 flex items-center justify-center gap-12 overflow-x-hidden lg:mt-8"
        ref={ref}
      >
        <ContactForm
          className="basis-[100%] xl:basis-[50%]"
          title={'Закажите бесплатный выезд специалиста!'}
        />
        <div
          className={`max-h-[390px] justify-center basis-[50%] hidden xl:flex relative opacity-0 translate-x-[100vw] ${
            inView ? 'contact-form-img-animation' : ''
          }`}
        >
          <img
            className="max-h-[390px] min-h-[390px] min-w-[585px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)]"
            src={engineer_2}
          ></img>
        </div>
      </div>
    </InfoSection>
  );
};

export default Design;
