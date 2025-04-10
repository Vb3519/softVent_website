import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsQuote } from 'react-icons/bs';

import InfoSection from '../UI/InfoSection';

const AboutCompany = () => {
  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ О компании</span>
      </div>
      <h1 className="font-[inter] text-left text-[22px] font-[600]">
        О компании
      </h1>
      <div className="flex flex-col gap-5">
        <DescriptionText>
          Компания "СофтВент" – работает в сфере климатических систем с 2012
          года развиваясь, получая опыт и укрепляя собственное положение на
          рынке. Мы успели зарекомендовать себя как команда профессионалов,
          которая может справиться с задачей любой сложности. Весь
          производственный процесс мы выполняем самостоятельно, включая этапы
          расчета и конструирования и вплоть до получения готового продукта.
          Таким образом, мы полностью контролируем качество наших изделий и
          конечные показатели их рабочих характеристик. Также, благодаря
          собственному производству, мы можем предоставить возможность
          разработки индивидуальных решений систем вентиляции для нетипичных
          случаев.
        </DescriptionText>

        <DescriptionText>
          Наша компания осуществляет работы "под ключ", начиная от
          проектирования и монтажа климатических систем и заканчивая их
          обслуживанием. Мы гарантируем высокое качество всех выполняемых работ
          и строго соблюдаем установленные сроки.
        </DescriptionText>

        <DescriptionText>
          В нашем ассортименте представлена широкая линейка моделей
          вентиляционного оборудования с различными функциями и техническими
          характеристиками, что позволяет подобрать оптимальное решение для
          каждого конкретного случая.
        </DescriptionText>

        <DescriptionText>
          Cвоим клиентам мы готовы предложить профессиональную консультацию и
          бесплатный подбор оборудования для создания комфортного микроклимата в
          помещениях различного назначения.
        </DescriptionText>

        <div className="font-[inter] flex flex-col relative gap-1 p-3 my-5 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 elem-shadow">
          <h2 className="mb-3 text-left text-[22px] font-[500]">Наша миссия</h2>
          <BsQuote className="text-[30px] absolute top-[55px] left-[3px] text-[gray] opacity-20 z-0" />
          <p className="pl-5 text-[15px] leading-[20px] italic sm:text-[16px] lg:text-[17px] lg:leading-[25px]">
            Вентиляционное оборудование — это не просто техническая
            необходимость, а ключ к созданию здоровой и комфортной среды.
            Правильная вентиляция способствует не только физическому
            благополучию, но и улучшению общего самочувствия, повышая
            продуктивность и качество жизни.
          </p>

          <p className="mt-3 text-[16px] font-[500] leading-[20px] sm:text-[18px] lg:text-[20px] lg:leading-[25px]">
            Генеральный Директор
          </p>
          <p className="mt-1 text-[16px] font-[500] text-[#1B9AE9] sm:text-[18px] lg:text-[20px] lg:leading-[25px]">
            ООО "СофтВент"
          </p>
        </div>

        <DescriptionText>
          Специалисты компании обладают большим опытом работы и постоянно следят
          за новыми тенденциями в области климатической техники. Наше
          оборудование исправно работает на многих объектах в России, Беларуси и
          Казахстане.
        </DescriptionText>

        <DescriptionText>
          Для клиентов, непосредственно использующих наше оборудование на своих
          объектах, есть программа расширенной гарантии до 5 лет, при условии
          сервисного обслуживания компанией, сотрудники которой прошли у нас
          обучение по программе - эксплуатация и сервис оборудования Naveka и
          Lindab, и получившей у нас соответствующий сертификат.
        </DescriptionText>

        <DescriptionText>
          Наши специалисты помогут подобрать вентиляционное оборудование
          индивидуально для Вас. Мы доступны по телефонам каждый рабочий день
          (пн-пт) с 09:00 до 18:00. В выходные дни в чате или почте можно
          оставить свои контакты и мы вам обязательно перезвоним.
        </DescriptionText>
      </div>
    </InfoSection>
  );
};

export default AboutCompany;

interface CompanyDetails {
  children: React.ReactNode;
}

const DescriptionText: React.FC<CompanyDetails> = ({ children }) => {
  return (
    <p className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
      {children}
    </p>
  );
};
