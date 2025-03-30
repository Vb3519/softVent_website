import React from 'react';

import ServicesMain from '../Main/ServicesMain/ServicesMain';
import ServicesList from './ServicesMain/ServicesList';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import SelectionHelpContacts from './SelectionHelpContacts/SelectionHelpContacts';
import AboutUs from './AboutUs';
import OurPartners from './OurPartners';

const Main = () => {
  return (
    <main className="mt-4">
      <ServicesMain />
      <ServicesList />
      <SpecialOffers />
      <SelectionHelpContacts />
      <AboutUs />
      <OurPartners />
    </main>
  );
};

export default Main;
