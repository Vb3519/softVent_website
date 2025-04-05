import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineProduct } from 'react-icons/ai';

import { TbAirConditioning } from 'react-icons/tb';
import { MdOutlineHvac } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';

import InfoSection from '../../UI/InfoSection';

const Catalog = () => {
  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Каталог</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">Каталог</h2>
      <ul className="mt-5 flex flex-col gap-5 md:grid grid-cols-3 ms:gap-10">
        <CatalogElem
          link="split-systems"
          icon={TbAirConditioning}
          title="Кондиционеры"
          description="Мы работаем с большим количеством производителей и рады предложить Вам широкую линейку оборудования для кондиционирования."
        />

        <CatalogElem
          link="ventilation-units"
          icon={MdOutlineHvac}
          title="Вентиляционные установки"
          description="Вентиляционное оборудование бытового, коммерческого и промышленного назначения, сотрудничаем напрямую с заводом-производителем."
        />

        <CatalogElem
          link="home-microclimate"
          icon={MdOutlineWbSunny}
          title="Домашний микроклимат"
          description="Увлажнители воздуха для дома и офиса. Оборудование в наличии на нашем складе. Отгрузка заказа в день оплаты."
        />
      </ul>
      <div className="mt-5 flex flex-col gap-5 lg:mt-10">
        <AiOutlineProduct className="m-auto text-[150px] md:text-[200px] text-gray-200" />
        <div className="flex flex-col gap-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
          <h3 className="mb-3 font-[600] text-center">
            Мы неустанно расширяем ассортимент нашего оборудования!
          </h3>
          <p>В ближайшее время в каталог будут добавлены:</p>
          <ul className="flex flex-col gap-2 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px] list-disc pl-5">
            <li>Бытовые водогрейные котлы (природный газ)</li>
            <li>Радиаторы отопления</li>
            <li>Конвекторы и системы "тепый пол"</li>
          </ul>
          <p>
            Также не забудьте посмотреть действующие акции, которые помогут
            приобрести товар с максимальной выгодой.
          </p>
          <p>Удачных покупок!</p>
        </div>
      </div>
    </InfoSection>
  );
};

export default Catalog;

interface CatalogElemType {
  className?: string;
  link: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const CatalogElem: React.FC<CatalogElemType> = ({
  className,
  link,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <li className="font-[inter] p-4 rounded-4xl bg-[#eaeaea] transition duration-200 ease-in border-1 border-transparent elem-shadow hover:border-gray-300 group">
      <NavLink to={link} className="flex flex-col gap-3">
        <Icon className="text-[55px] text-gray-400 opacity-30 transition duration-200 ease-in group-hover:text-[#1B9AE9] group-hover:opacity-60" />
        <h2 className="text-[16px] font-[600] lg:text-[20px] transition duration-200 ease-in group-hover:text-[#1B9AE9]">
          {title}
        </h2>
        <p className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
          {description}
        </p>
      </NavLink>
    </li>
  );
};
