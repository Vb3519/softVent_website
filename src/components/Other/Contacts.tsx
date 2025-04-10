import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// UI:
import InfoSection from '../UI/InfoSection';
import ServicesList from '../Main/ServicesMain/ServicesList';
import ContactForm from '../UI/ContactForm';

import manager_img from '../../assets/images/manager.jpg';

const Contacts = () => {
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
        <span>/ Контакты</span>
      </div>
      <h2 className="font-[inter] text-center text-[22px] font-[600]">
        Наши контакты
      </h2>
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:mt-3 2xl:gap-40 2xl:mt-10">
        <div>
          {/* --- ТЕЛ. / РЕЖИМ РАБОТЫ / АДРЕС / ЭЛ. ПОЧТА: --- */}
          <ul className="flex flex-col gap-3 py-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            <li className="flex flex-col gap-1">
              <p className="flex gap-1 text-center text-[#6E6E6E]">
                Телефоны для связи:{' '}
              </p>
              <p className="text-[17px] font-[500] text-[#1B9AE9]">
                +7 (981) 755-47-56
              </p>
            </li>
            <li>
              <p className="text-[#6E6E6E]">Режим работы:</p>
              <p className="font-[500]">Пн-Пт 10:00-19:00</p>
            </li>
            <li>
              <p className="text-[#6E6E6E]">Наш адрес:</p>
              <p className="font-[500]">
                г. Санкт-Петербург, пр-т Наставников, 40
              </p>
            </li>
            <li>
              <p className="text-[#6E6E6E]">Или напишите нам:</p>
              <p className="font-[500]">Vb415@bk.ru</p>
            </li>
          </ul>

          {/* --- СОЦ. СЕТИ: --- */}
          <ul className="flex gap-3 pt-4 border-t-1 border-t-gray-200">
            <li className="w-[35px] h-[35px] p-2 flex items-center justify-center bg-[#1B9AE9] rounded-[50%] cursor-pointer transition duration-200 ease-in hover:bg-[#1b9ae9e0] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
              <svg
                width="27"
                height="16"
                viewBox="0 0 27 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2447 15.7716H14.8145C14.8145 15.7716 15.2887 15.7196 15.5307 15.4586C15.7536 15.219 15.7464 14.7691 15.7464 14.7691C15.7464 14.7691 15.7158 12.6628 16.6934 12.3526C17.657 12.0471 18.8945 14.3883 20.2061 15.2885C21.198 15.9699 21.9517 15.8205 21.9517 15.8205L25.4587 15.7716C25.4587 15.7716 27.2934 15.6586 26.4235 14.2161C26.3522 14.0981 25.9169 13.1491 23.8159 11.1989C21.6169 9.15784 21.9114 9.48798 24.5603 5.95737C26.1736 3.80721 26.8185 2.4945 26.6171 1.93227C26.4249 1.39678 25.2384 1.53832 25.2384 1.53832L21.2896 1.56292C21.2896 1.56292 20.9969 1.52299 20.7798 1.65276C20.5676 1.78004 20.4311 2.07666 20.4311 2.07666C20.4311 2.07666 19.8061 3.74054 18.9726 5.15556C17.2142 8.14141 16.5112 8.29899 16.2238 8.1136C15.5553 7.6815 15.7222 6.37771 15.7222 5.45147C15.7222 2.55797 16.1611 1.35151 14.8676 1.03919C14.4384 0.935448 14.1225 0.866996 13.0248 0.855944C11.6158 0.841327 10.4233 0.860222 9.74801 1.19107C9.2988 1.41104 8.95226 1.90126 9.16332 1.92942C9.42429 1.96436 10.0154 2.08879 10.3288 2.51554C10.7334 3.066 10.7192 4.30241 10.7192 4.30241C10.7192 4.30241 10.9516 7.70859 10.1762 8.13178C9.64391 8.42199 8.91376 7.82945 7.34614 5.12062C6.54291 3.73305 5.93647 2.19931 5.93647 2.19931C5.93647 2.19931 5.81953 1.91267 5.61097 1.75936C5.35784 1.57362 5.00417 1.51443 5.00417 1.51443L1.25181 1.53903C1.25181 1.53903 0.688508 1.55472 0.481727 1.79965C0.297764 2.01748 0.46711 2.46812 0.46711 2.46812C0.46711 2.46812 3.40483 9.34109 6.73115 12.8047C9.78117 15.9802 13.2447 15.7716 13.2447 15.7716Z"
                  fill="white"
                ></path>
              </svg>
            </li>
            <li className="w-[35px] h-[35px] p-2 flex items-center justify-center bg-[#39a150] rounded-[50%] cursor-pointer transition duration-200 ease-in hover:bg-[#39a14fe1] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7886 13.0073L15.7808 13.0725C13.8686 12.1195 13.6686 11.9925 13.4217 12.3629C13.2504 12.6194 12.7513 13.2012 12.6008 13.3733C12.4487 13.5429 12.2974 13.5559 12.0391 13.4386C11.7782 13.3081 10.9409 13.0342 9.94958 12.1473C9.17742 11.456 8.65917 10.6082 8.50613 10.3473C8.25135 9.90732 8.78438 9.84472 9.26959 8.92648C9.35655 8.74387 9.3122 8.60039 9.24785 8.47083C9.18264 8.3404 8.66352 7.06216 8.44613 6.55261C8.23744 6.04479 8.02266 6.10914 7.86179 6.10914C7.36094 6.06566 6.99486 6.07262 6.67225 6.40826C5.2688 7.95084 5.62271 9.54211 6.82355 11.2343C9.18351 14.3229 10.4409 14.8916 12.74 15.6811C13.3608 15.8785 13.9269 15.8507 14.3747 15.7863C14.8738 15.7072 15.9112 15.1594 16.1277 14.5464C16.3494 13.9333 16.3494 13.4246 16.2842 13.3073C16.2199 13.1899 16.0495 13.1247 15.7886 13.0073Z"
                  fill="white"
                ></path>
                <path
                  d="M18.4085 3.56487C11.7226 -2.89847 0.657602 1.78926 0.653254 10.9073C0.653254 12.7299 1.13064 14.5073 2.04018 16.0768L0.56543 21.4349L6.07401 19.9985C12.9478 23.7114 21.4311 18.7811 21.4346 10.9126C21.4346 8.15087 20.3563 5.55179 18.3955 3.59879L18.4085 3.56487ZM19.6972 10.8839C19.692 17.5211 12.4061 21.6662 6.64357 18.2785L6.33053 18.0924L3.06973 18.9402L3.94362 15.7707L3.7358 15.4446C0.149786 9.73605 4.2697 2.27534 11.0626 2.27534C13.3704 2.27534 15.5364 3.17532 17.1677 4.80572C18.7981 6.42221 19.6972 8.58825 19.6972 10.8839Z"
                  fill="white"
                ></path>
              </svg>
            </li>
            <li className="w-[35px] h-[35px] p-2 flex items-center justify-center bg-[#1B9AE9] rounded-[50%] cursor-pointer transition duration-200 ease-in hover:bg-[#1b9ae9e0] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.06442 9.60754L5.87319 11.4972L7.73448 17.7993C7.85358 18.2029 8.32238 18.3521 8.63354 18.0843L11.314 15.7836C11.595 15.5426 11.9952 15.5306 12.2889 15.755L17.1235 19.4505C17.4564 19.7052 17.928 19.5132 18.0114 19.0897L21.5531 1.15375C21.6442 0.691166 21.2125 0.305261 20.7941 0.475619L1.05878 8.49114C0.571758 8.68889 0.576001 9.41485 1.06442 9.60754ZM7.43452 10.4913L16.8326 4.39714C17.0016 4.28794 17.1753 4.52839 17.0303 4.67003L9.2741 12.2607C9.00147 12.5279 8.82561 12.8854 8.7758 13.2735L8.51159 15.335C8.4766 15.6102 8.10937 15.6375 8.03723 15.3711L7.02109 11.6121C6.90471 11.1833 7.07431 10.7253 7.43452 10.4913Z"
                  fill="white"
                ></path>
              </svg>
            </li>
          </ul>
        </div>

        <div className="flex justify-center relative overflow-hidden sm:rounded-2xl">
          <a
            href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_nastavnikov_40k1/Z0kYcg9gTU0DQFtjfXV0dH5kZw==/?ll=30.480484%2C59.955273&utm_medium=mapframe&utm_source=maps&z=16"
            className="text-[#eee] text-[12px] absolute top-[14px]"
          >
            Проспект Наставников, 40к1 — Яндекс Карты
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.480484%2C59.955273&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQyMzQ1NBJb0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0L_RgNC-0YHQv9C10LrRgiDQndCw0YHRgtCw0LLQvdC40LrQvtCyLCA0MNC6MSIKDQrY80EVM9JvQg%2C%2C&z=16"
            width="800"
            height="400"
            className="relative sm:rounded-2xl"
          ></iframe>
        </div>
      </div>
      <ServicesList className="lg:px-0" />

      <div
        className="p-2 flex items-center justify-center gap-12 overflow-x-hidden"
        ref={ref}
      >
        <ContactForm
          className="basis-[100%] xl:basis-[50%]"
          title={'Закажите бесплатную консультацию'}
        />
        <div
          className={`max-h-[390px] justify-center basis-[50%] hidden xl:flex relative opacity-0 translate-x-[100vw] ${
            inView ? 'contact-form-img-animation' : ''
          }`}
        >
          <img
            className="max-h-[390px] min-h-[390px] min-w-[585px] rounded-2xl shadow-[0px_0px_10px_rgba(0,0,0,0.15)]"
            src={manager_img}
          ></img>
        </div>
      </div>
    </InfoSection>
  );
};

export default Contacts;
