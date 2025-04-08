import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// React-Icons:
import { FiShoppingCart } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';

// UI:
import InfoSection from '../UI/InfoSection';

import {
  selectCurrentShoppingCart,
  removeProductFromShoppingCart,
} from '../../redux/slices/shoppingCartSlice';

const ShoppingCart = () => {
  const currentShoppingCart = useSelector(selectCurrentShoppingCart);

  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Корзина</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">Корзина</h2>

      {currentShoppingCart.length ? (
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col items-center gap-5 xl:grid grid-cols-2 xl:gap-10">
            {currentShoppingCart.map((productInfo) => {
              return (
                <ShoppingCartProductCard
                  // необязательные характеристики:
                  area={productInfo.area}
                  invertor={productInfo.invertor}
                  heater={productInfo.heater}
                  recup={productInfo.recup}
                  color={productInfo.color}
                  // -----
                  key={productInfo.id}
                  isInStock={productInfo.isInStock}
                  isPopular={productInfo.isPopular}
                  title={productInfo.title}
                  maxPower={productInfo.maxPower}
                  maxAirFlow={productInfo.maxAirFlow}
                  img={productInfo.img}
                  price={productInfo.price}
                  id={productInfo.id}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            <p>
              С предлагаемым нами оборудованием, Вы можете ознакомиться в{' '}
              <NavLink to="/catalog" className="font-[600] text-[#1b9ae9]">
                каталоге
              </NavLink>
              . И не забудьте посмотреть действующие акции, которые помогут
              приобрести товар с максимальной выгодой.
            </p>
            <p>Удачных покупок!</p>
          </div>
        </div>
      ) : (
        <div className="min-h-[400px] flex flex-col gap-5">
          <FiShoppingCart className="m-auto text-[150px] md:text-[200px] text-gray-200" />
          <div className="flex flex-col gap-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
            <h3 className="font-[600] text-center">
              В Вашей корзине пока еще пусто!
            </h3>
            <p>
              Чтобы найти нужный товар, воспользуйтесь{' '}
              <NavLink to="/catalog" className="font-[600] text-[#1b9ae9]">
                каталогом
              </NavLink>{' '}
              нашей продукции. И не забудьте просмотреть действующие акции,
              которые помогут приобрести товар с максимальной выгодой.
            </p>
            <p>Удачных покупок!</p>
          </div>
        </div>
      )}
    </InfoSection>
  );
};

export default ShoppingCart;

interface ShoppingCartProductCard_Type {
  area?: string;
  invertor?: string;
  heater?: string;
  recup?: string;
  color?: string;

  isInStock: boolean;
  isPopular: boolean;
  title: string;
  maxPower: string;
  maxAirFlow: string;
  img: string;
  price: string;
  id: string;
}

const ShoppingCartProductCard: React.FC<ShoppingCartProductCard_Type> = (
  productInfo
) => {
  const dispatch = useDispatch();
  const currentShoppingCart = useSelector(selectCurrentShoppingCart);

  const isInCart: boolean = currentShoppingCart.some(
    (cartItem) => cartItem.id === productInfo.id
  );

  return (
    <div
      className="font-[inter] max-w-[650px] p-4 border-1 border-gray-300 rounded-2xl xs:flex xl:h-[470px]"
      key={productInfo.id}
    >
      <div className="xs:pr-1 xs:border-r-1 xs:border-r-gray-300">
        <div className="flex align-center justify-between gap-1">
          <p
            className={`text-[18px] font-[600] ${
              productInfo.isPopular ? '' : 'hidden'
            }`}
          >
            Товар месяца!
          </p>
        </div>
        <div className="flex gap-2 pt-2">
          <p
            className={`h-6 flex items-center rounded-sm border-1 border-[#3BBA00] text-[11px] leading-1 text-[#3BBA00] px-1 ${
              productInfo.isInStock ? '' : 'hidden'
            }`}
          >
            В наличии
          </p>
          <p
            className={`min-h-[24px] uppercase flex items-center rounded-sm text-[11px] leading-1 px-2 bg-[#FF6341] text-[white] ${
              productInfo.isPopular ? '' : 'hidden'
            }`}
          >
            Хит
          </p>
        </div>
        <div className="xs:w-fit">
          <img className="max-h-[500px] w-full" src={productInfo.img}></img>
        </div>
      </div>
      <div className="flex flex-col xs:items-end xs:justify-between xs:pl-4 sm:justify-center lg:pr-4 lg:justify-start lg:items-start">
        <h4 className="font-[600] text-center mt-2 mb-2 xs:leading-[20px] xs:mt-0 sm:text-[18px]">
          {productInfo.title}
        </h4>
        <ul className="flex flex-col gap-2">
          {productInfo.invertor ? (
            <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
              Инверторная технология:{' '}
              <span className="text-[#6E6E6E] font-[700]">
                ({productInfo.invertor})
              </span>
            </li>
          ) : (
            ''
          )}

          {productInfo.area ? (
            <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
              Эффективная площадь:{' '}
              <span className="text-[#6E6E6E] font-[700]">
                {productInfo.area} м2
              </span>
            </li>
          ) : (
            ''
          )}

          {productInfo.heater ? (
            <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
              Тип нагревателя:{' '}
              <span className="text-[#6E6E6E] font-[700]">
                {productInfo.heater}
              </span>
            </li>
          ) : (
            ''
          )}

          <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
            Макс. мощность:{' '}
            <span className="text-[#6E6E6E] font-[700] text-nowrap">
              {productInfo.maxPower} {productInfo.area ? 'Вт' : 'кВт'}
            </span>
          </li>
          <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
            Макс. расход воздуха:{' '}
            <span className="text-[#6E6E6E] font-[700] text-nowrap">
              {productInfo.maxAirFlow} м3/ч
            </span>
          </li>
          {productInfo.color ? (
            <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
              Цвет:{' '}
              <span className="text-[#6E6E6E] font-[700]">
                {productInfo.color}
              </span>
            </li>
          ) : (
            ''
          )}

          {productInfo.recup ? (
            <li className="text-[12px] leading-[15px] text-[#6E6E6E] xs:text-[14px] sm:text-[16px] sm:leading-[20px]">
              Рекуператор:{' '}
              <span className="text-[#6E6E6E] font-[700]">
                {productInfo.recup}
              </span>
            </li>
          ) : (
            ''
          )}
        </ul>
        <div className="text-[20px] font-[600] text-nowrap mt-2 mb-2 sm:text-[24px] lg:text-[35px]">
          {productInfo.price} ₽
        </div>
        <button
          className={`min-w-[125px] mt-3 text-[14px] flex items-center justify-center text-nowrap gap-2 p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] cursor-pointer transition duration-200 ease-in lg:w-[100%] lg:p-3 lg:text-[18px] xl:mt-9 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)] ${
            isInCart ? 'bg-gradient-to-r from-gray-400 to-gray-500' : ''
          }`}
          onClick={() => {
            dispatch(removeProductFromShoppingCart(productInfo.id));
          }}
        >
          Убрать из корзины
          <FaTrashAlt className="text-[14px] lg:text-[18px]" />
        </button>
      </div>
    </div>
  );
};
