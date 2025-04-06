import React from 'react';
import { NavLink } from 'react-router-dom';

import { PiStarBold } from 'react-icons/pi';

import { useSelector, useDispatch } from 'react-redux';

import InfoSection from '../UI/InfoSection';
import ProductCard from '../UI/ProductCard';

import { selectCurrentWhishList } from '../../redux/slices/whishListSlice';

import { ProductCard_Type } from '../UI/ProductCard';

// Избранные покупателем товары:
const WhishList = () => {
  const currentWhishList: ProductCard_Type[] = useSelector(
    selectCurrentWhishList
  );
  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Избранное</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">
        Избранное
      </h2>

      <div className="min-h-[400px] flex flex-col gap-5">
        <PiStarBold className="m-auto text-[150px] md:text-[200px] text-gray-200" />
        <div className="flex flex-col gap-3 font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
          <h3 className="font-[600] text-center">
            Вы пока еще не добавили ни одного товара в "Избранное"!
          </h3>
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
      <div className="flex flex-col items-center gap-5 xl:grid grid-cols-2 xl:gap-10">
        {currentWhishList.map((productDetails) => {
          return (
            <ProductCard
              // необязательные характеристики:
              area={productDetails.area}
              invertor={productDetails.invertor}
              heater={productDetails.heater}
              recup={productDetails.recup}
              color={productDetails.color}
              // -----
              key={productDetails.id}
              isInWhishList={productDetails.isInWhishList}
              isInStock={productDetails.isInStock}
              isPopular={productDetails.isPopular}
              title={productDetails.title}
              maxPower={productDetails.maxPower}
              maxAirFlow={productDetails.maxPower}
              img={productDetails.img}
              price={productDetails.price}
              id={productDetails.id}
            />
          );
        })}
      </div>
    </InfoSection>
  );
};

export default WhishList;
