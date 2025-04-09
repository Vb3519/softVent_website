import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CiShoppingCart } from 'react-icons/ci';
import { CiStar } from 'react-icons/ci';

import formatPriceValue from '../../../utils/formatPriceValue';

// UI:
import InfoSection from '../../UI/InfoSection';
import ProductCard from '../../UI/ProductCard';

// СЛАЙСЫ:
import {
  selectHvacUnits,
  setCurrentCategory,
} from '../../../redux/slices/allProductsSlice';

import {
  // Селектор:
  selectVentilationUnitsFilter,
  // Действия:
  setDeveloper,
  setPrice,
  setIsInStock,
  setHeater,
  setRecup,
  setOnlyFavourite,
  resetFilters,
} from '../../../redux/slices/ventilationUnitsFilterSlice';

// ТИПЫ:
import { ProductCard_Type } from '../../UI/ProductCard';

const VentilationUnits = () => {
  const dispatch = useDispatch();

  const currentLocation = useLocation();

  const currentHvacUnitsData: ProductCard_Type[] = useSelector(selectHvacUnits);

  // Выбор категории оборудования (при монтировании компонента):
  useEffect(() => {
    if (currentLocation.pathname.includes('ventilation-units')) {
      dispatch(setCurrentCategory('hvacUnitsData'));
    }
  }, []);

  //---------------------------------------
  // ФИЛЬТРЫ:
  //---------------------------------------
  const currentVentiltaionUnitsFilter = useSelector(
    selectVentilationUnitsFilter
  );

  // Выбор производителя:
  const handleSetDeveloper = () => {
    dispatch(setDeveloper());
  };

  // Задать значение мин. / макс. цены:
  const handleSetPrice = (
    event: React.ChangeEvent<HTMLInputElement>,
    priceType: string
  ) => {
    const priceValue: string = event.target.value;

    const pricePayload = {
      priceType: priceType,
      priceValue: priceValue,
    };
    dispatch(setPrice(pricePayload));
  };

  // Выбор оборудования в наличии / нет:
  const handleSetIsInStock = () => {
    dispatch(setIsInStock());
  };

  // Выбор типа нагревателя (эл-во / вода):
  const handleSetHeater = (heaterType: string) => {
    dispatch(setHeater(heaterType));
  };

  // Выбор с рекуператором / без:
  const handleSetRecup = () => {
    dispatch(setRecup());
  };

  // Установка опции только "избранное":
  const handleSetOnlyFavourite = () => {
    dispatch(setOnlyFavourite());
  };

  // Ресет всех фильтров:
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  // Фильтр всех вент-систем (для рендера):
  const filteredHvacUnits: ProductCard_Type[] = currentHvacUnitsData.filter(
    (ventilationUnit) => {
      // Производитель:
      const matchesDeveloper: boolean = currentVentiltaionUnitsFilter.developer
        ? ventilationUnit.title.toLowerCase().includes('naveka')
        : true;

      // Цена:
      const matchesMinPrice: boolean =
        // .replace(' ', '') убирает пробел в цене
        Number(ventilationUnit.price.replace(' ', '')) >=
        currentVentiltaionUnitsFilter.price.minPrice;

      const matchesMaxPrice: boolean =
        Number(ventilationUnit.price.replace(' ', '')) <=
        currentVentiltaionUnitsFilter.price.maxPrice;

      // Наличие на складе:
      const matchesIsInStock: boolean = currentVentiltaionUnitsFilter.isInStock
        ? ventilationUnit.isInStock
        : true;

      // Тип нагревателя:
      const selectedHeaterTypes: string[] = [];
      if (currentVentiltaionUnitsFilter.heater.water) {
        selectedHeaterTypes.push('водяной');
      }

      if (currentVentiltaionUnitsFilter.heater.electric) {
        selectedHeaterTypes.push('электрический');
      }

      const matchesHeaterType: boolean = selectedHeaterTypes.length
        ? selectedHeaterTypes.some((heater: string) => {
            return ventilationUnit.heater?.toLowerCase().includes(heater);
          })
        : true;

      // Наличие рекуператора:
      const matchesRecup: boolean | undefined =
        currentVentiltaionUnitsFilter.recup ? ventilationUnit.recup : true;

      // Только "избранное":
      const matchesOnlyFavourite: boolean =
        currentVentiltaionUnitsFilter.onlyFavourite
          ? ventilationUnit.isInWhishList
          : true;

      return (
        matchesDeveloper &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesIsInStock &&
        matchesHeaterType &&
        matchesRecup &&
        matchesOnlyFavourite
      );
    }
  );

  // Добавление пробела в цену на оборудование (чтобы отделить разряд):
  const maxPrice: string = formatPriceValue(
    currentVentiltaionUnitsFilter.price.maxPrice,
    3
  );

  const minPrice: string = formatPriceValue(
    currentVentiltaionUnitsFilter.price.minPrice,
    3
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
        <span>/ Вентиляция</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Вентиляционные установки
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
                  checked={currentVentiltaionUnitsFilter.developer}
                  onChange={handleSetDeveloper}
                />
                <label>Naveka</label>
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
                  value={currentVentiltaionUnitsFilter.price.minPrice}
                  min={126175}
                  max={289750}
                  step={100}
                  onChange={(e) => {
                    handleSetPrice(e, 'minPrice');
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
                  value={currentVentiltaionUnitsFilter.price.maxPrice}
                  min={126175}
                  max={289750}
                  step={100}
                  onChange={(e) => {
                    handleSetPrice(e, 'maxPrice');
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
                  checked={currentVentiltaionUnitsFilter.isInStock}
                  onChange={handleSetIsInStock}
                />
                <label>В наличии</label>
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center md:border-0">
            <h3 className="font-[500] mb-1">Нагреватель:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentVentiltaionUnitsFilter.heater.water}
                  onChange={() => {
                    handleSetHeater('water');
                  }}
                />
                <label>Вода</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentVentiltaionUnitsFilter.heater.electric}
                  onChange={() => {
                    handleSetHeater('electric');
                  }}
                />
                <label>Электричество</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Рекуператор:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="mt-[2px]"
                  checked={currentVentiltaionUnitsFilter.recup}
                  onChange={handleSetRecup}
                />
                <label>Да</label>
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
                  checked={currentVentiltaionUnitsFilter.onlyFavourite}
                  onChange={handleSetOnlyFavourite}
                />
              </div>
            </fieldset>
          </div>
          <button
            className="p-2 mt-3 col-span-2 mx-auto w-[150px] text-[14px] text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] transition duration-200 ease-in hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] sm:text-[18px] cursor-pointer sm:w-[200px] xs:mt-6 md:col-span-3"
            onClick={handleResetFilters}
          >
            Сбросить фильтры
          </button>
        </form>

        <div className="flex flex-col items-center gap-5 xl:grid grid-cols-2 xl:gap-10">
          {filteredHvacUnits.map((hvacUnitInfo) => {
            return (
              <ProductCard
                category={hvacUnitInfo.category}
                key={hvacUnitInfo.id}
                heater={hvacUnitInfo.heater}
                recup={hvacUnitInfo.recup}
                isInWhishList={hvacUnitInfo.isInWhishList}
                isInStock={hvacUnitInfo.isInStock}
                isPopular={hvacUnitInfo.isPopular}
                title={hvacUnitInfo.title}
                maxPower={hvacUnitInfo.maxPower}
                maxAirFlow={hvacUnitInfo.maxAirFlow}
                img={hvacUnitInfo.img}
                price={hvacUnitInfo.price}
                id={hvacUnitInfo.id}
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

export default VentilationUnits;
