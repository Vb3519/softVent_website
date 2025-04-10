import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import manager_img_2 from '../../../assets/images/manager_2.png';
import payment_img from '../../../assets/images/payment.png';

// UI:
import InfoSection from '../../UI/InfoSection';
import ContactForm from '../../UI/ContactForm';

const Payment = () => {
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

      <div
        className="p-2 flex items-center justify-center gap-12 overflow-x-hidden lg:mt-8"
        ref={ref}
      >
        <ContactForm
          className="basis-[100%] xl:basis-[50%]"
          title={'Интересуют индивидуальные условия оплаты?'}
        />
        <div
          className={`max-h-[390px] justify-center basis-[50%] hidden xl:flex relative opacity-0 translate-x-[100vw] ${
            inView ? 'contact-form-img-animation' : ''
          }`}
        >
          <img
            className="max-h-[390px] min-h-[390px] min-w-[585px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)]"
            src={manager_img_2}
          ></img>
        </div>
      </div>
    </InfoSection>
  );
};

export default Payment;
