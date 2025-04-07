import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// UI:
import InfoSection from '../../UI/InfoSection';
import ProductCard from '../../UI/ProductCard';

// СЛАЙСЫ:
import {
  setCurrentCategory,
  selectMicroClimate,
} from '../../../redux/slices/allProductsSlice';

// ТИПЫ:
import { ProductCard_Type } from '../../UI/ProductCard';

const HomeMicroClimate = () => {
  const dispatch = useDispatch();
  const currentLocation = useLocation();

  const currentMicroClimateData: ProductCard_Type[] =
    useSelector(selectMicroClimate);

  // Выбор категории оборудования (при монтировании компонента):
  useEffect(() => {
    if (currentLocation.pathname.includes('home-microclimate')) {
      dispatch(setCurrentCategory('microClimateData'));
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
        <span>/ Домашний микроклимат</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Увлажнители воздуха
      </h2>
      <div className="flex flex-col gap-5 items-center">
        <form className="w-full max-w-[780px] font-[inter] grid grid-cols-2 p-3 text-[14px] leading-[20px] bg-[#F5F5F5] rounded-2xl xs:p-6 md:grid-cols-3 sm:text-[16px] lg:text-[18px] lg:leading-[25px] xl:mb-6">
          <div className="pb-3 border-b-1 border-b-gray-300 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Производитель:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Ballu</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Boneco</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Zanussi</label>
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
            <h3 className="font-[500] mb-1">Эффективная площадь:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input
                  type="text"
                  className="mt-[2px] max-w-[100px] border-1 border-transparent bg-white rounded-md p-2 outline-none focus:border-gray-300"
                  maxLength={3}
                  max={100}
                />
                <label>
                  м<sup>2</sup>
                </label>
              </div>
            </fieldset>
          </div>
          <div className="pt-3 xs:flex xs:flex-col xs:items-center">
            <h3 className="font-[500] mb-1">Цвет корпуса:</h3>
            <fieldset className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Белый</label>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="mt-[2px]" />
                <label>Черный</label>
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
          {currentMicroClimateData.map((microClimateUnitInfo) => {
            return (
              <ProductCard
                category={microClimateUnitInfo.category}
                area={microClimateUnitInfo.area}
                color={microClimateUnitInfo.color}
                key={microClimateUnitInfo.id}
                isInWhishList={microClimateUnitInfo.isInWhishList}
                isInStock={microClimateUnitInfo.isInStock}
                isPopular={microClimateUnitInfo.isPopular}
                maxPower={microClimateUnitInfo.maxPower}
                maxAirFlow={microClimateUnitInfo.maxAirFlow}
                title={microClimateUnitInfo.title}
                img={microClimateUnitInfo.img}
                price={microClimateUnitInfo.price}
                id={microClimateUnitInfo.id}
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

export default HomeMicroClimate;
