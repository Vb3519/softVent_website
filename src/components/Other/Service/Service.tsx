import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaTruck } from 'react-icons/fa';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { FaDraftingCompass } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { FaGears } from 'react-icons/fa6';

import InfoSection from '../../UI/InfoSection';

const Service = () => {
  return (
    <InfoSection>
      <div className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Сервис</span>
      </div>
      <h2 className="text-left text-[22px] font-[600]">Сервис</h2>
      <ul className="mt-5 flex flex-col gap-5 md:grid grid-cols-3 grid-rows-2 ms:gap-10">
        <ServiceDetails
          link="delivery"
          icon={FaTruck}
          title="Доставка"
          description="Оперативно доставляем любой заказ по Санкт-Петербургу, а также
              транспортными компаниями в любой город."
        />

        <ServiceDetails
          link="payment"
          icon={BsFillCreditCard2FrontFill}
          title="Оплата"
          description="Работаем с физическими и юридическими лицами. Принимаем оплату по
              карте, QR-коду, наличными, а также безналичный перевод для
              юридических лиц."
        />

        <ServiceDetails
          link="design"
          icon={FaDraftingCompass}
          title="Проектирование"
          description="Наша компания располагает всеми необходимыми разрешениями и
              большим опытом в сфере проектирования, обслуживания и монтажа
              объектов любой сложности, что позволяет разработать проект в
              сжатые сроки."
        />

        <ServiceDetails
          link="installation"
          icon={BsTools}
          title="Монтаж"
          description="Наши сотрудники - мастера с многолетним опытом оперативно
              осуществят монтаж систем вентиляции, кондиционирования."
        />

        <ServiceDetails
          link="guarantee"
          icon={FaGears}
          title="Гарантия"
          description="Вся техника сертифицирована, производится на современном
              оборудовании, проходит дополнительный контроль качества. При
              выполнении монтажа нашими специалистами, либо аккредитованными
              компаниями, готовы предложить расширенный срок гарантии."
        />
      </ul>
    </InfoSection>
  );
};

export default Service;

interface ServiceDetailsType {
  className?: string;
  link: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceDetails: React.FC<ServiceDetailsType> = ({
  className,
  link,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <li className="p-4 rounded-4xl bg-[#eaeaea] transition duration-200 ease-in border-1 border-transparent elem-shadow hover:border-gray-300 group">
      <NavLink to={link} className="flex flex-col gap-3">
        <Icon className="text-[55px] text-gray-400 opacity-30 transition duration-200 ease-in group-hover:opacity-50" />
        <h2 className="text-[17px] font-[600] lg:text-[20px] transition duration-200 ease-in group-hover:text-[#1B9AE9]">
          {title}
        </h2>
        <p className="text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px]">
          {description}
        </p>
      </NavLink>
    </li>
  );
};
