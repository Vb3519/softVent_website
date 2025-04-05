import React from 'react';
import { NavLink } from 'react-router-dom';

import payment_img from '../../../assets/images/payment.png';
import InfoSection from '../../UI/InfoSection';

const Payment = () => {
  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <NavLink to="/service" className="text-[#1B9AE9]">
          <span className="text-[#232323]">/</span> Сервис{' '}
        </NavLink>
        <span>/ Оплата</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">Оплата</h2>
      <div className="p-4 flex flex-col gap-5 justify-center items-center font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px] bg-[#F5FCFF] elem-shadow lg:flex-row lg:items-start">
        <div className="flex flex-col gap-5">
          <p>
            Мы активно работаем как с юридическими, так и с физическими лицами,
            поэтому у нас предусмотрено несколько способов оплаты для комфорта
            наших клиентов.
          </p>
          <div className="flex flex-col gap-2">
            Для физических лиц предусмотрена оплата:
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>Наличными</li>
              <li>Банковской картой</li>
              <li>По QR-коду</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            Оплата для юридических лиц:
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>
                Мы работаем по счет-договору. Оплата осуществляется путем
                перечисления денежных средств на расчетный счет компании. Готовы
                выставить счет на оплату как с учетом НДС 20%, так и без него.
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[500px] rounded-bl-[40%] rounded-tr-[40%] opacity-[90%] xl:max-w-[650px]">
          <img
            className="rounded-bl-[40%] rounded-tr-[40%]"
            src={payment_img}
            alt="Оплата за оборудование"
          ></img>
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <li className="flex flex-col gap-1">
          <h3 className="font-[600]">Оплата наличными</h3>
          <p>
            Только для физических лиц. Вместе с заказом при оплате Вам будет
            передан кассовый чек.
          </p>
        </li>
        <li className="flex flex-col gap-1">
          <h3 className="font-[600]">
            Оплата банковской картой при получении заказа
          </h3>
          <p>
            Данный способ оплаты предусмотрен только для физических лиц. Курьер
            приедет к вам вместе с терминалом. Оплатить картой вы сможете прямо
            у себя дома.
          </p>
        </li>
        <li className="flex flex-col gap-1">
          <h3 className="font-[600]">Оплата по QR-коду</h3>
          <p>
            Данный способ оплаты предусмотрен только для физических лиц. Курьер
            приедет к вам вместе с терминалом. Оплатить вы сможете с помощью
            перевода СБП.
          </p>
        </li>
      </ul>
    </InfoSection>
  );
};

export default Payment;
