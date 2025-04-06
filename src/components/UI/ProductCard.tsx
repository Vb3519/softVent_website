import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// React-Icons:
import { CiShoppingCart } from 'react-icons/ci';
import { PiStarBold } from 'react-icons/pi';
import { PiStarFill } from 'react-icons/pi';

import {
  turnOnWhishListLabel,
  turnOffWhishListLabel,
} from '../../redux/slices/splitSystemsSlice';
import {
  addProductCardToWhishList,
  removeProductCardFromWhishList,
  selectCurrentWhishList,
} from '../../redux/slices/whishListSlice';

export interface ProductCard_Type {
  // ИНДИВИДУАЛЬНЫЕ ХАРАКТЕРИСТИКИ (в зависимости от типа изделия):
  area?: string; // увлажнители воздуха
  invertor?: string; // сплит-системы
  heater?: string; // вент-установки
  recup?: string; // вент-установки
  color?: string; // увлажнители воздуха и сплит-системы
  // -----

  isInWhishList: boolean;
  isInStock: boolean;
  isPopular: boolean;
  title: string;
  maxPower: string;
  maxAirFlow: string;
  img: string;
  price: string;
  id: string;
}

const ProductCard: React.FC<ProductCard_Type> = (
  productInfo: ProductCard_Type
) => {
  const dispatch = useDispatch();

  const currentWhishList = useSelector(selectCurrentWhishList);

  // подсветка баджа "избранное" карточки товара:
  // --------------
  const handleTurnOnWhishListLabel = (id: string) => {
    dispatch(turnOnWhishListLabel(id));
  };

  const handleTurnOffWhishListLabel = (id: string) => {
    dispatch(turnOffWhishListLabel(id));
  };

  // добавление карточки товара в список избранных товаров:
  // --------------
  const handleAddProductCardToWhishList = (
    productCardInfo: ProductCard_Type
  ) => {
    dispatch(addProductCardToWhishList(productCardInfo));
  };

  const handleRemoveProductCardFromWhishList = (id: string) => {
    dispatch(removeProductCardFromWhishList(id));
  };

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
          <span
            className="ml-auto"
            onClick={() => {
              if (currentWhishList.length < 4 && !productInfo.isInWhishList) {
                handleTurnOnWhishListLabel(productInfo.id);
                handleAddProductCardToWhishList({
                  ...productInfo,
                  isInWhishList: true,
                });
              } else {
                const isAlrdyInWishList: boolean = currentWhishList.some(
                  (item) => item.id === productInfo.id
                );
                if (isAlrdyInWishList) {
                  handleTurnOffWhishListLabel(productInfo.id);
                  handleRemoveProductCardFromWhishList(productInfo.id);
                }
              }
            }}
          >
            {productInfo.isInWhishList ? (
              <PiStarFill
                className={`text-[30px] text-[#1B9AE9] cursor-pointer opacity-60`}
                title="Убрать из избранного"
              />
            ) : (
              <PiStarBold
                className={`text-[30px] text-[#6E6E6E] cursor-pointer opacity-60 transition duration-200 ease-in hover:text-[#1B9AE9]`}
                title="Добавить в избранное"
              />
            )}
          </span>
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
              {productInfo.maxPower} кВт
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
        <button className="min-w-[125px] mt-3 flex items-center justify-center text-nowrap gap-2 p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] cursor-pointer transition duration-200 ease-in lg:w-[100%] lg:p-3 lg:text-[18px] xl:mt-9 hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
          В корзину <CiShoppingCart className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
