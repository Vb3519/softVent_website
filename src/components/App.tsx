import React from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { CiStar } from 'react-icons/ci';
import { GrCart } from 'react-icons/gr';
import { GiStack } from 'react-icons/gi';

import hvac_family from '../assets/images/hvac_family.jpg';

const App = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="w-full flex justify-between p-3 border-b-1 border-b-[rgba(114,114,114,0.2)]">
          <div className="flex items-center">
            <span className="text-[25px]">Vent</span>
            <span className="text-[25px] text-[#3b9dca]">Rave</span>
          </div>
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#3b9dca]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="mt-4">
        <section className="flex flex-col gap-4">
          <div className="relative">
            <div className="h-full w-[70%] max-w-[400px] absolute top-0 left-0 rounded-tl-2xl rounded-bl-2xl bg-gray-200 opacity-60 test"></div>
            <div className="w-[50%] max-w-[400px] flex flex-col absolute left-4 top-4">
              <span className="text-[12px] font-[500] text-[#6E6E6E] mb-2">
                Настенные кондиционеры
              </span>
              <p className="text-[18px] text-[#232323] font-[600] leading-6 mb-2">
                Создайте себе комфорт!
              </p>
              <p className="mb-1 text-[12px]">
                Широкий выбор систем кондиционирования с гарантией от
                производителя
              </p>
              <a
                href="#"
                className="w-fit h-full mt-4 p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500]"
              >
                Каталог
              </a>
            </div>
            <div className="rounded-2xl">
              <img
                className="rounded-2xl"
                src={hvac_family}
                alt="семья настраивает кондиционер"
              ></img>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ul className="flex gap-4">
              <li className="flex flex-col gap-2 p-3 bg-blue-100 rounded-2xl">
                <h3 className="text-[14px] font-[500] leading-[14px]">
                  <span>Выезд и замеры от инженера - </span>
                  <span className="text-[#1b9ae9]">Бесплатно</span>
                </h3>
                <p className="text-[12px] leading-[12px]">
                  Произведём замеры, расскажем о ходе работ и договоримся о
                  сроках
                </p>
              </li>
              <li className="flex flex-col gap-2 p-3 bg-blue-200 rounded-2xl">
                <h3 className="text-[14px] font-[500] leading-[12px]">
                  Подготовка проекта и сметы
                </h3>
                <p className="text-[12px] leading-[12px]">
                  Бесплатный подбор и расчет стоимости оборудования, монтажных
                  работ
                </p>
              </li>
            </ul>

            <ul className="flex gap-3">
              <li className="flex flex-col gap-2 p-3 bg-green-100 rounded-2xl">
                <h3 className="text-[14px] font-[500] leading-[12px]">
                  Сервисное обслуживание
                </h3>
                <p className="text-[12px] leading-[12px]">
                  Продлим срок работы вашей технике
                </p>
              </li>
              <div className="flex flex-col gap-2 p-3 bg-green-200 rounded-2xl">
                <h3 className="text-[14px] font-[500] leading-[12px]">
                  Монтаж за 1 день
                </h3>
                <p className="text-[12px] leading-[12px]">
                  Установка и настройка климатического оборудования от 3-х часов
                </p>
              </div>
              <li className="flex flex-col gap-2 p-3 bg-orange-100 rounded-2xl">
                <h3 className="text-[14px] font-[500] leading-[12px]">
                  Ежемесячные скидки
                </h3>
                <p className="text-[12px] leading-[12px]">
                  Большой ассортимент оборудования в наличии на складе
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

{
  /* <div className="flex items-center justify-between p-4 border-b-1 border-[rgba(114,114,114,0.2)]">
        <p>г. Санкт-Петербург, пр-т Наставников, 40</p>
        <p>Пн-Пт 09:00-18:00</p>
        <nav>
          <ul className="flex gap-3">
            <li className="p-1 cursor-pointer">О компании</li>
            <li className="p-1 cursor-pointer">Акции и скидки</li>
            <li className="flex items-center gap-1 cursor-pointer">
              Сервис
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="mt-[3px] size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </li>
            <li className="p-1 cursor-pointer">Контакты</li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 px-5 justify-between">
        <div className="flex items-center">
          <span>Vent</span>
          <span>Rave</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md bg-[#1B9AE9] cursor-pointer">
            <HiOutlineViewGrid className="text-[25px] text-[whitesmoke]" />
          </button>
          <div className="flex items-center relative">
            <input
              className="p-2 pr-8 bg-gray-200 rounded-md outline-none"
              placeholder="Поиск"
            />
            <div className="absolute left-[190px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <p className="text-center">+7 (981) 755-47-56</p>
            <p className="text-center">vb415@bk.ru</p>
          </div>

          <div className="flex flex-col">
            <p className="text-center">+7 (981) 755-47-56</p>
            <a className="text-center" href="#">
              Заказать обратный звонок
            </a>
          </div>
        </div>

        <ul className="flex gap-5">
          <li className="flex flex-col items-center">
            <GiStack className="text-[25px]" />
            Сравнение
          </li>
          <li className="flex flex-col items-center">
            <CiStar className="text-[25px]" />
            Избранное
          </li>
          <li className="flex flex-col items-center">
            <GrCart className="text-[25px]" /> Корзина
          </li>
        </ul>
      </div>
      <div></div> */
}
