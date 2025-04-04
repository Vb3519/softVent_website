import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import Main from './Main/Main';
import AboutCompany from './Other/AboutCompany';
import PromotionsAndDiscounts from './Other/PromotionsAndDiscounts';

import Service from './Other/Service/Service';
import Delivery from './Other/Service/Delivery';
import Payment from './Other/Service/Payment';
import Design from './Other/Service/Design';
import Installation from './Other/Service/Installation';
import Guarantee from './Other/Service/Guarantee';

import Contacts from './Other/Contacts';

import Catalog from './Other/Catalog/Catalog';
import SplitSystems from './Other/Catalog/SplitSystems';
import VentilationUnits from './Other/Catalog/VentilationUnits';
import HomeMicroClimate from './Other/Catalog/HomeMicroClimate';

import WhishList from './Other/WhishList';
import ShoppingCart from './Other/ShoppingCart';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Main />} />
          <Route path="about" element={<AboutCompany />} />
          <Route path="promotions" element={<PromotionsAndDiscounts />} />

          {/* УСЛУГИ КОМПАНИИ: */}
          <Route path="service" element={<Service />} />
          <Route path="service/delivery" element={<Delivery />} />
          <Route path="service/payment" element={<Payment />} />
          <Route path="service/design" element={<Design />} />
          <Route path="service/installation" element={<Installation />} />
          <Route path="service/guarantee" element={<Guarantee />} />
          {/* ---------------- */}

          <Route path="contacts" element={<Contacts />} />

          {/* ОБОРУДОВАНИЕ: */}
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/split-systems" element={<SplitSystems />} />
          <Route
            path="catalog/ventilation-units"
            element={<VentilationUnits />}
          />
          <Route
            path="catalog/home-microclimate"
            element={<HomeMicroClimate />}
          />
          {/* ------------ */}

          <Route path="whishlist" element={<WhishList />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
