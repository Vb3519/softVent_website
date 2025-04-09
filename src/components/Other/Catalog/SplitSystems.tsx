import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import formatPriceValue from '../../../utils/formatPriceValue';

// UI:
import InfoSection from '../../UI/InfoSection';
import ProductCard from '../../UI/ProductCard';

// СЛАЙСЫ:
import {
  selectSplitSystems,
  setCurrentCategory,
} from '../../../redux/slices/allProductsSlice';

import {
  // Действия:
  setDeveloper,
  setMinPrice,
  setMaxPrice,
  setStatus,
  setInvertor,
  setColor,
  setOnlyFavourite,
  resetFilters,
  // Селекторы:
  selectSplitSystemsFilter,
  selectDevelopers,
  selectPrices,
  selectProductStatus,
  selectInvertorControl,
  selectColors,
  selectOnlyFavouriteOption,
} from '../../../redux/slices/splitSystemsFilterSlice';

// ТИПЫ:
import { ProductCard_Type } from '../../UI/ProductCard';

const SplitSystems = () => {
  const dispatch = useDispatch();

  const currentLocation = useLocation();

  const currentSplitSystemsData: ProductCard_Type[] =
    useSelector(selectSplitSystems);

  // Выбор категории оборудования (при монтировании компонента):
  useEffect(() => {
    if (currentLocation.pathname.includes('split-systems')) {
      dispatch(setCurrentCategory('splitSystemsData'));
    }
  }, []);

  //---------------------------------------
  // ФИЛЬТРЫ:
  //---------------------------------------
  const currentSplitSystemsFilter = useSelector(selectSplitSystemsFilter); // весь фильтр для сплит-систем
  const currentDevelopersFilterList = useSelector(selectDevelopers); // Производители
  const currentMinAndMaxPriceValue = useSelector(selectPrices);
  const currentProductStatus = useSelector(selectProductStatus); // Оборудование в наличии / под заказ
  const currentInvertorControlStatus = useSelector(selectInvertorControl); // Инверторное управление
  const currentColor = useSelector(selectColors); // цвет корпуса
  const currentOnlyFavouriteOption = useSelector(selectOnlyFavouriteOption); // опция только "избранное"

  // Выбор производителя:
  const handleDeveloperChange = (developer: string) => {
    const devPayload = {
      developer: developer,
    };
    dispatch(setDeveloper(devPayload));
    // dispatch(setDeveloper({ developer })); // сокращенное создание объекта
  };

  // Задать значение минимальной цены:
  const handleSetMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = event.target.value;
    const minPrice = 'minPrice';

    const minPricePayload = {
      priceValue: priceValue,
      minPrice: minPrice,
    };
    dispatch(setMinPrice(minPricePayload));
  };

  // Задать значение максимальной цены:
  const handleSetMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxPricePayload = {
      maxPrice: 'maxPrice',
      priceValue: event.target.value,
    };
    dispatch(setMaxPrice(maxPricePayload));
  };

  // Выбор оборудования в наличии / нет:
  const handleStatusChange = () => {
    dispatch(setStatus());
  };

  // Выбор "инверторное управление":
  const handleInvertorControlStatusChange = () => {
    dispatch(setInvertor());
  };

  // Выбор цвета:
  const handleColorSelect = (color: string) => {
    const colorPayload = {
      color: color,
    };
    dispatch(setColor(colorPayload));
  };

  // Установка опции только "избранное":
  const handleSelectOnlyFavourite = () => {
    dispatch(setOnlyFavourite());
  };

  // Ресет всех фильтров:
  const handleResetAllFilters = () => {
    dispatch(resetFilters());
  };

  // Фильтр всех сплит-систем (для рендера):
  const filteredSplitSystems: ProductCard_Type[] =
    currentSplitSystemsData.filter((splitSystem) => {
      // Производители:
      // -----------------
      const userSelectedDevelopers: string[] = [];
      if (currentSplitSystemsFilter.developers.ballu) {
        userSelectedDevelopers.push('ballu');
      }

      if (currentSplitSystemsFilter.developers.electrolux) {
        userSelectedDevelopers.push('electrolux');
      }

      if (currentSplitSystemsFilter.developers.zanussi) {
        userSelectedDevelopers.push('zanussi');
      }

      const matchesSelectedDevelopers: boolean = userSelectedDevelopers.length
        ? userSelectedDevelopers.some((developer: string) => {
            return splitSystem.title.toLowerCase().includes(developer);
          })
        : true;

      // Цена:
      // -----------------
      const matchesMinPrice =
        Number(splitSystem.price.replace(' ', '')) >=
        currentSplitSystemsFilter.price.minPrice;

      const matchesMaxPrice =
        Number(splitSystem.price.replace(' ', '')) <=
        currentSplitSystemsFilter.price.maxPrice;

      // Наличие:
      // -----------------
      const matchesIsInStock = currentSplitSystemsFilter.isInStock
        ? splitSystem.isInStock
        : true;

      // Инвертор:
      // -----------------
      const matchesInvertorControl = currentSplitSystemsFilter.invertor
        ? splitSystem.invertor
        : true;

      // Цвет:
      // -----------------
      const userSelectedColors: string[] = [];
      if (currentSplitSystemsFilter.color.black) {
        userSelectedColors.push('черный');
      }

      if (currentSplitSystemsFilter.color.white) {
        userSelectedColors.push('белый');
      }

      const matchesSelectedColor = userSelectedColors.length
        ? userSelectedColors.some((color: string) => {
            return splitSystem.color?.toLowerCase().includes(color);
          })
        : true;

      // Только "избранное":
      // -----------------
      const matchesOnlyFavourite = currentSplitSystemsFilter.onlyFavourite
        ? splitSystem.isInWhishList
        : true;

      return (
        matchesSelectedDevelopers &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesIsInStock &&
        matchesInvertorControl &&
        matchesSelectedColor &&
        matchesOnlyFavourite
      );
    });

  // Добавление пробела в цену на оборудование (чтобы отделить разряд):
  const minPrice: string = formatPriceValue(
    currentSplitSystemsFilter.price.minPrice,
    2
  );

  const maxPrice: string = formatPriceValue(
    currentSplitSystemsFilter.price.maxPrice,
    2
  );

  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <NavLink to="/catalog" className="text-[#1B9AE9]">
          <span className="text-[#232323]">/</span> Каталог{' '}
        </NavLink>
        <span>/ Кондиционеры</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Кондиционеры
      </h2>
      <div className="flex flex-col gap-5 items-center">
        <form className="w-full max-w-[780px] font-[inter] grid grid-cols-2 p-3 text-[14px] leading-[20px] bg-[#F5F5F5] rounded-2xl xs:p-6 md:grid-cols-3 sm:text-[16px] lg:text-[18px] lg:leading-[25px] xl:mb-6">
          <div className="pb-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Производитель:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentDevelopersFilterList.ballu}
                  onChange={() => {
                    handleDeveloperChange('ballu');
                  }}
                />
                <label>Ballu</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentDevelopersFilterList.electrolux}
                  onChange={() => {
                    handleDeveloperChange('electrolux');
                  }}
                />
                <label>Electrolux</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentDevelopersFilterList.zanussi}
                  onChange={() => {
                    handleDeveloperChange('zanussi');
                  }}
                />
                <label>Zanussi</label>
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col items-start pb-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Цена:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 items-center">
                <div>
                  <label>От</label> <span>{minPrice} Руб.</span>
                </div>
                <input
                  type="range"
                  className="mt-[2px]"
                  value={currentMinAndMaxPriceValue.minPrice}
                  step={100}
                  min={24200}
                  max={35800}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleSetMinPrice(event);
                  }}
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div>
                  <label>До</label> <span>{maxPrice} Руб.</span>
                </div>
                <input
                  type="range"
                  className="mt-[2px]"
                  value={currentMinAndMaxPriceValue.maxPrice}
                  step={100}
                  min={24200}
                  max={35800}
                  onChange={(event) => {
                    handleSetMaxPrice(event);
                  }}
                />
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Статус:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentProductStatus}
                  onChange={() => {
                    handleStatusChange();
                  }}
                />
                <label>В наличии</label>
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center md:border-0">
            <h3 className="font-[500] mb-1">Инвертор:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentInvertorControlStatus}
                  onChange={() => {
                    handleInvertorControlStatusChange();
                  }}
                />
                <label>Да</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Цвет корпуса:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentColor.white}
                  onChange={() => {
                    handleColorSelect('white');
                  }}
                />
                <label>Белый</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentColor.black}
                  onChange={() => {
                    handleColorSelect('black');
                  }}
                />
                <label>Черный</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Только "избранное":</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <label>Да</label>
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentOnlyFavouriteOption}
                  onChange={() => {
                    handleSelectOnlyFavourite();
                  }}
                />
              </div>
            </fieldset>
          </div>
          <button
            type="button"
            className="p-2 mt-3 col-span-2 mx-auto w-[150px] text-[14px] text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] transition duration-200 ease-in hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] sm:text-[18px] cursor-pointer sm:w-[200px] xs:mt-6 md:col-span-3"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              handleResetAllFilters();
            }}
          >
            Сбросить фильтры
          </button>
        </form>

        <div className="flex flex-col items-center gap-5 xl:grid grid-cols-2 xl:gap-10">
          {filteredSplitSystems.map((splitSystemInfo) => {
            return (
              <ProductCard
                // необязательные характеристики:
                area={splitSystemInfo.area}
                invertor={splitSystemInfo.invertor}
                heater={splitSystemInfo.heater}
                recup={splitSystemInfo.recup}
                color={splitSystemInfo.color}
                // -----
                category={splitSystemInfo.category}
                key={splitSystemInfo.id}
                isInWhishList={splitSystemInfo.isInWhishList}
                isInStock={splitSystemInfo.isInStock}
                isPopular={splitSystemInfo.isPopular}
                title={splitSystemInfo.title}
                maxPower={splitSystemInfo.maxPower}
                maxAirFlow={splitSystemInfo.maxAirFlow}
                img={splitSystemInfo.img}
                price={splitSystemInfo.price}
                id={splitSystemInfo.id}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <p>
          Также с предлагаемым нами оборудованием, Вы можете ознакомиться в{' '}
          <NavLink to="/catalog" className="font-[600] text-[#1b9ae9]">
            каталоге
          </NavLink>
          . И не забудьте посмотреть действующие акции, которые помогут
          приобрести товар с максимальной выгодой.
        </p>
        <p>Удачных покупок!</p>
      </div>
    </InfoSection>
  );
};

export default SplitSystems;
