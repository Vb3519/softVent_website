import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import manager_3 from '../../../assets/images/manager_3.jpg';
import delivery_img from '../../../assets/images/delivery.jpg';

// UI:
import InfoSection from '../../UI/InfoSection';
import ContactForm from '../../UI/ContactForm';

const Delivery = () => {
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
        <span>/ Доставка</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Доставка
      </h2>
      <div className="p-4 flex flex-col gap-5 justify-center items-center bg-[#F5FCFF] elem-shadow lg:flex-row lg:items-start">
        <ul className="flex flex-col gap-5">
          <li className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Осуществляется по согласованию сторон, в течение трёх рабочих дней,
            после готовности заказа и оплаты. В согласованный день, доставка
            производится с 9:00 до 17:00.
          </li>
          <li className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            <h3 className="font-[600] mb-2">
              Нами предусмотрено несколько способов доставки:
            </h3>
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>Самовывоз</li>
              <li>Доставка курьером по Санкт-Петербургу</li>
              <li>Междугородние перевозки - транспортной компанией</li>
            </ul>
          </li>
          <li className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Оформленный и собранный заказ, Вы можете забрать самостоятельно в
            нашем офисе, по адресу: г. Санкт-Петербург, пр. Наставников, 40 с
            10:00 до 19:00
          </li>
          <li className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            Доставка товара из наличия на складе, оформленного до 15:00 текущего
            дня, осуществляется на следующий день, после подтверждения заказа
            (предварительно Вам позвонит наш менеджер).
          </li>
        </ul>
        <div className="max-w-[500px] rounded-bl-[40%] rounded-tr-[40%] opacity-[90%]">
          <img
            className="rounded-bl-[40%] rounded-tr-[40%]"
            src={delivery_img}
            alt="Погрузка оборудования"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <h3 className="font-[600] mb-2">По Санкт-Петербургу</h3>
        <ul className="flex flex-col gap-2">
          <li>
            Осуществляется по согласованию сторон, в течение трёх рабочих дней,
            после готовности заказа и оплаты. В согласованный день, доставка
            производится в течение дня с 9:00 до 17:00.
          </li>
          <li>
            Бесплатно - при сумме Заказа свыше 30 000 руб. и высотой
            оборудования до 1.7м.
          </li>
          <li>
            Самовывоз - (по согласованию с менеджером) - центральный склад,
            пн-пт: с 9:00 до 17:00 Иное по согласованию. На оформление
            документов и разгрузочные работы отводится не более 15 мин.
          </li>
        </ul>
      </div>

      <div
        className="p-2 flex items-center justify-center gap-12 overflow-x-hidden lg:mt-8"
        ref={ref}
      >
        <ContactForm
          className="basis-[100%] xl:basis-[50%]"
          title={'Остались вопросы? Мы Вам перезвоним!'}
        />
        <div
          className={`max-h-[390px] justify-center basis-[50%] hidden xl:flex relative opacity-0 translate-x-[100vw] ${
            inView ? 'contact-form-img-animation' : ''
          }`}
        >
          <img
            className="max-h-[390px] min-h-[390px] min-w-[585px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.15)]"
            src={manager_3}
          ></img>
        </div>
      </div>
    </InfoSection>
  );
};

export default Delivery;
