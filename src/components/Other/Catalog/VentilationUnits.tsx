import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CiShoppingCart } from 'react-icons/ci';
import { CiStar } from 'react-icons/ci';

// UI:
import InfoSection from '../../UI/InfoSection';
import ProductCard from '../../UI/ProductCard';

// СЛАЙСЫ:
import {
  selectHvacUnits,
  setCurrentCategory,
} from '../../../redux/slices/allProductsSlice';

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
                <input type="checkbox" className="mt-[2px]" />
                <label>Naveka</label>
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col items-start pb-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Цена:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 items-center">
                <div>
                  <label>От</label> <span>250 000</span>
                </div>
                <input type="range" className="mt-[2px]" />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div>
                  <label>До</label> <span>250 000</span>
                </div>
                <input type="range" className="mt-[2px]" />
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Статус:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>В наличии</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Под заказ</label>
              </div>
            </fieldset>
          </div>
          <div className="py-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center md:border-0">
            <h3 className="font-[500] mb-1">Нагреватель:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Вода</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Электричество</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Рекуператор:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Да</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Нет</label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Только "избранное":</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <label>Да</label>
                <input type="checkbox" className="mt-[2px]" />
              </div>
            </fieldset>
          </div>
          <button className="p-2 mt-3 col-span-2 mx-auto w-[150px] text-[14px] text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] transition duration-200 ease-in hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] sm:text-[18px] cursor-pointer sm:w-[200px] xs:mt-6 md:col-span-3">
            Сбросить фильтры
          </button>
        </form>

        <div className="flex flex-col items-center gap-5 xl:grid grid-cols-2 xl:gap-10">
          {currentHvacUnitsData.map((hvacUnitInfo) => {
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
