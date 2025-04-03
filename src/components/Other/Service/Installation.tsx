import React from 'react';
import { NavLink } from 'react-router-dom';

import InfoSection from '../../UI/InfoSection';
import installation_img from '../../../assets/images/hvac_installation.png';

const Installation = () => {
  return (
    <InfoSection>
      <div className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <NavLink to="/service" className="text-[#1B9AE9]">
          <span className="text-[#232323]">/</span> Сервис{' '}
        </NavLink>
        <span>/ Монтаж</span>
      </div>
      <h2 className="text-left text-[22px] font-[600]">Монтаж</h2>
      <div className="p-4 flex flex-col gap-5 justify-center items-center bg-[#F5FCFF] elem-shadow lg:flex-row lg:items-start">
        <div className="flex flex-col gap-5">
          <p className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
            Монтаж систем кондиционирования и вентиляции - включает в себя
            комплекс работ, связанных с подготовкой объекта и установкой
            профильного оборудования. Работы выполняются компетентными
            специалистами и подразумевают наличие проекта.
          </p>
          <h3 className="font-[600] text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
            Монтаж кондиционирования и вентиляции позволяет получить следующие
            преимущества:
          </h3>
          <ul className="flex flex-col gap-2 text-[14px] leading-[20px] list-disc pl-5 sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
            <li>
              <span className="font-[600]">
                Создание комфортного микроклимата.
              </span>{' '}
              Кондиционеры поддерживают комфортную температуру в помещении. Они
              сохраняют прохладу летом и тепло осенью. Системы кондиционирования
              востребованы в квартирах и частных домах, коммерческих и
              производственных помещениях;
            </li>
            <li>
              <span className="font-[600]">Удаление загрязнений. </span>
              Многие климатические и вентиляционные установки комплектуются
              фильтрами. Они задерживают взвешенные частицы, находящиеся в
              воздушной среде, поддерживают чистоту в помещении. Блоки с
              фильтрами актуальны в квартирах, расположенных вблизи оживленных
              трасс;
            </li>
            <li>
              <span className="font-[600]">
                Осушение и увлажнение воздуха.{' '}
              </span>
              Современная техника способна регулировать влажность воздуха за
              счет соответствующих функций. Это гарантирует комфортный
              микроклимат в помещении в любое время года;
            </li>
          </ul>
        </div>
        <div className="max-w-[500px] rounded-bl-[40%] rounded-tr-[40%] opacity-[90%] xl:max-w-[650px]">
          <img
            className="rounded-bl-[40%] rounded-tr-[40%]"
            alt="Монтаж вентиляционного оборудования"
            src={installation_img}
          ></img>
        </div>
      </div>
      <p className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        При работе с объектами особой конфигурации проводятся дополнительные
        работы, связанные с изготовлением переходников, настенных и напольных
        держателей воздуховодов. Вентиляционное оборудование и кондиционеры
        способствуют поступлению свежего воздуха и отводу углекислого газа.
        Работают в автоматическом режиме, требуют минимального обслуживания и
        настройки. Монтаж и демонтаж сисем бытового назначения не вызывает
        сложностей.
      </p>
    </InfoSection>
  );
};

export default Installation;
