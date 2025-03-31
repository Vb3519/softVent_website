import React from 'react';

const MobileHeaderMenu = () => {
  return (
    <div className="w-[100%] h-[100%] p-3 flex flex-col fixed bg-[white] z-50 lg:hidden hidden">
      {/* --- ПОИСК: --- */}
      {/* --- ПОИСК: --- */}
      {/* --- ПОИСК: --- */}
      <div className="w-[100%] max-w-[365px] flex items-center bg-gray-200 rounded-md pr-2">
        <input className="w-[100%] p-2 outline-none" placeholder="Поиск" />
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      {/* --- КАТАЛОГ / ПОКУПАТЕЛЯМ / СЕРВИС: --- */}

      {/* --- КАТАЛОГ: --- */}
      {/* --- КАТАЛОГ: --- */}
      {/* --- КАТАЛОГ: --- */}
      <div className="flex flex-col gap-1 py-5 border-b-1 border-b-gray-200">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <p className="text-[17px] text-[#232323] font-[600]">Каталог</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <ul className="flex flex-col gap-2 py-3">
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Кондиционеры
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Вентиляция
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Домашний микроклимат
            </li>
          </ul>
        </div>

        {/* --- ПОКУПАТЕЛЯМ: --- */}
        {/* --- ПОКУПАТЕЛЯМ: --- */}
        {/* --- ПОКУПАТЕЛЯМ: --- */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <p className="text-[17px] text-[#232323] font-[600]">Покупателям</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="flex flex-col gap-2 py-3">
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Акции и скидки
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              О компании
            </li>
          </ul>
        </div>

        {/* --- СЕРВИС: --- */}
        {/* --- СЕРВИС: --- */}
        {/* --- СЕРВИС: --- */}

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <p className="text-[17px] text-[#232323] font-[600]">Сервис</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="flex flex-col gap-2 pt-3">
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Доставка
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Оплата
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Проектирование
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Монтаж
            </li>
            <li className="text-[16px] text-[#232323] leading-[20px] hover:cursor-pointer hover:text-[#1b9ae9] hover:underline">
              Гарантия
            </li>
          </ul>
        </div>
      </div>

      {/* --- ТЕЛ. / РЕЖИМ РАБОТЫ / АДРЕС / ЭЛ. ПОЧТА: --- */}
    </div>
  );
};

export default MobileHeaderMenu;
