import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import empty_cart from '../../assets/images/empty_shopping_cart.png';
import InfoSection from '../UI/InfoSection';

const ShoppingCart = () => {
  return (
    <InfoSection>
      <div className="font-[inter] text-[14px] leading-[20px] xs:text-[16px] xl:text-[17px] xl:leading-[25px]">
        <NavLink to="/" className="text-[#1B9AE9]">
          Главная{' '}
        </NavLink>
        <span>/ Корзина</span>
      </div>
      <h2 className="font-[inter] text-left text-[22px] font-[600]">Корзина</h2>
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
    </InfoSection>
  );
};

export default ShoppingCart;
