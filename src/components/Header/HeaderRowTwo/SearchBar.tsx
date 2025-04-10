import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  toggleMobileMenu,
  selectMobileMenuState,
} from '../../../redux/slices/mobileMenuSlice';

interface searchBar_Type {
  className?: string;
}

const SearchBar: React.FC<searchBar_Type> = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [routeQuery, setRouteQuery] = useState('');
  const isMobileMenuOpened: boolean = useSelector(selectMobileMenuState);

  const routes = {
    главная: '/',

    'о компании': '/about',
    компания: '/about',

    'акции и скидки': '/promotions',

    сервис: '/service',
    услуги: '/service',

    доставка: '/service/delivery',
    оплата: '/service/payment',
    проектирование: '/service/design',
    монтаж: '/service/installation',
    гарантия: '/service/guarantee',

    контакты: '/contacts',

    каталог: '/catalog',
    избранное: '/whishlist',
    корзина: '/cart',

    кондиционеры: '/catalog/split-systems',
    вентиляция: '/catalog/ventilation-units',
    'домашний микроклимат': '/catalog/home-microclimate',
    микроклимат: '/home-microclimate',
  };

  const handleNavigateRoute = () => {
    const routesList: string[] = Object.keys(routes);
    const editedRouteQuery: string = routeQuery.trim().toLowerCase();

    if (editedRouteQuery === '' || editedRouteQuery.length <= 3) {
      setRouteQuery('');
      return;
    }

    const matchingRoute: string | undefined = routesList.find(
      (sectionKey: string) => {
        return sectionKey.toLowerCase().includes(editedRouteQuery);
      }
    );

    if (matchingRoute) {
      if (isMobileMenuOpened) dispatch(toggleMobileMenu());
      document.body.classList.remove('mobile-menu-opened');

      navigate(routes[matchingRoute]);
      setRouteQuery('');
    } else {
      alert('К сожалению ничего не нашлось!');
      setRouteQuery('');
    }
  };

  return (
    <form
      className={`w-[100%] max-w-[365px] flex items-center bg-gray-200 rounded-md pr-2 2xl:max-w-[400px] ${className}`}
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        handleNavigateRoute();
      }}
    >
      <input
        className="w-[100%] p-2 outline-none"
        placeholder="Раздел сайта..."
        value={routeQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const currentQuery: string = event.target.value;

          setRouteQuery(currentQuery);
        }}
      />
      <div className="cursor-pointer" onClick={handleNavigateRoute}>
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
    </form>
  );
};

export default SearchBar;
