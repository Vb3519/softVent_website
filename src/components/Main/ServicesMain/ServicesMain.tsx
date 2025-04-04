import React from 'react';
import { NavLink } from 'react-router-dom';

import hvac_family from '../../../assets/images/family_hvac.png';

const ServicesMain = () => {
  return (
    <section className="flex flex-col mb-3 gap-4 px-3 xs:px-8 lg:mb-10 lg:flex-row xl:px-14 2xl:px-50 2xl:elem-display">
      {/* ----- СОЗДАЙТЕ СЕБЕ КОМФОРТ: ---- */}
      {/* ----- СОЗДАЙТЕ СЕБЕ КОМФОРТ: ---- */}
      {/* ----- СОЗДАЙТЕ СЕБЕ КОМФОРТ: ---- */}
      <div className="relative lg:min-w-[500px]">
        <div className="h-full w-[70%] max-w-[400px] absolute top-0 left-0 rounded-tl-2xl rounded-bl-2xl bg-gray-200 opacity-60 services-layer md:max-w-[450px]"></div>
        <div className="w-[50%] max-w-[400px] flex flex-col absolute left-4 top-4">
          <span className="text-[12px] font-[500] text-[#6E6E6E] mb-2 xs:text-[14px] sm:text-[18px]">
            Настенные кондиционеры
          </span>
          <p className="text-[18px] text-[#232323] font-[600] leading-6 mb-2 sm:text-[22px]">
            Создайте себе комфорт!
          </p>
          <p className="mb-1 text-[12px] xs:text-[14px] sm:text-[18px]">
            Широкий выбор систем кондиционирования с гарантией от производителя
          </p>
          <NavLink
            to="catalog"
            className="w-fit h-full mt-2 p-2 text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] xs:mt-6 sm:mt-8 sm:text-[18px] md:min-w-[110px] lg:min-w-[140px]"
          >
            Каталог
          </NavLink>
        </div>
        <div className="rounded-2xl elem-shadow xl:max-w-[900px] xl:min-h-[485px]">
          <img
            className="rounded-2xl w-[100%] lg:min-h-[460px] xl:min-h-[485px] 2xl:max-h-[1075px]"
            src={hvac_family}
            alt="семья настраивает кондиционер"
          ></img>
        </div>
      </div>

      {/* ----- ВЫЕЗД, ПРОЕКТ и СМЕТА: ---- */}
      {/* ----- ВЫЕЗД, ПРОЕКТ и СМЕТА: ---- */}
      {/* ----- ВЫЕЗД, ПРОЕКТ и СМЕТА: ---- */}
      <div className="flex flex-col gap-2 lg:justify-between">
        <ul className="flex gap-2 xl:flex-col">
          <li className="min-h-[105px] relative flex flex-col gap-2 p-3 bg-gray-200 rounded-2xl elem-shadow xl:min-h-[80px]">
            <h3 className="text-[14px] font-[500] leading-[14px] z-5 lg:leading-[18px] xl:text-[18px]">
              <span>Выезд инженера на объект - </span>
              <span className="text-[#1b9ae9]">Бесплатно</span>
            </h3>
            <p className="text-[12px] leading-[12px] z-5 xs:text-[14px] lg:leading-[18px] xl:text-[16px]">
              Осуществим замеры, обсудим сроки и расскажем о ходе работ
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-26 text-gray-300 absolute top-0 left-2 z-0 opacity-70 lg:size-17"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </li>
          <li className="min-h-[105px] relative flex flex-col gap-2 p-3 bg-blue-200 rounded-2xl elem-shadow xl:min-h-[80px]">
            <h3 className="text-[14px] font-[500] leading-[12px] z-5 lg:leading-[18px] xl:text-[18px]">
              Подготовка проекта и сметы
            </h3>
            <p className="text-[12px] leading-[12px] z-5 xs:text-[14px] lg:leading-[18px] xl:text-[16px]">
              Бесплатный подбор и расчет стоимости оборудования, монтажных работ
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-22 text-blue-300 absolute top-2 left-0 z-0 opacity-50 lg:size-17"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
              />
            </svg>
          </li>
        </ul>

        {/* ----- СЕРВИС, МОНТАЖ СКИДКИ: ---- */}
        {/* ----- СЕРВИС, МОНТАЖ СКИДКИ: ---- */}
        {/* ----- СЕРВИС, МОНТАЖ СКИДКИ: ---- */}
        <ul className="flex flex-col gap-2 justify-between xs:flex-row lg:flex-col lg:justify-end">
          <li className="min-w-[115px] min-h-[105px] flex flex-col relative gap-2 p-3 bg-gray-100 rounded-2xl sm:min-w-[145px] lg:min-h-0 2xl:min-h-[70px] elem-shadow">
            <h3 className="text-[14px] font-[500] leading-[12px] z-5 lg:leading-[18px] xl:text-[18px]">
              Сервисное обслуживание
            </h3>

            <p className="text-[12px] leading-[12px] z-5 xs:text-[14px] lg:leading-[18px] xl:text-[16px]">
              Продлим срок работы вашего оборудования
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-26 text-gray-200 absolute top-0 left-1 z-0 opacity-70 lg:size-17"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </li>
          <li className="min-w-[115px] min-h-[105px] flex flex-col relative gap-2 p-3 bg-blue-200 rounded-2xl lg:min-h-0 2xl:min-h-[70px] elem-shadow">
            <h3 className="text-[14px] font-[500] leading-[12px] z-5 lg:leading-[18px] xl:text-[18px]">
              Монтаж за 1 день
            </h3>
            <p className="text-[12px] leading-[12px] z-5 xs:text-[14px] lg:leading-[18px] xl:text-[16px]">
              Установка и настройка климатической техники от 3-х часов
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-26 text-blue-300 absolute top-0 left-1 z-0 opacity-30 lg:size-17"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
          </li>
          <li className="min-w-[115px] min-h-[105px] flex flex-col relative gap-2 p-3 bg-orange-100 rounded-2xl lg:min-h-0 2xl:min-h-[70px] elem-shadow">
            <h3 className="text-[14px] font-[500] leading-[12px] z-5 lg:leading-[18px] xl:text-[18px]">
              Ежемесячные скидки
            </h3>
            <p className="text-[12px] leading-[12px] z-5 xs:text-[14px] lg:leading-[18px] xl:text-[16px]">
              Большой ассортимент оборудования в наличии на складе
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-26 absolute text-orange-200 top-0 left-1 z-0 opacity-40 lg:size-17"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesMain;
