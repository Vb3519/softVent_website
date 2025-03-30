import React from 'react';

import big_screen_img1 from '../../assets/images/big_screen_img1.jpg';

/* О НАС: */
const AboutUs = () => {
  return (
    <section className="flex mb-3 p-3 xs:px-8 xl:px-14 lg:mb-10">
      <div className="">
        <h3 className="pb-4 text-[22px]">О Нас</h3>
        <div className="flex gap-3">
          <div>
            <p>
              Климатическая компания "СофтВент" – это надежный партнер для тех,
              кто стремится создать комфортные условия для жизни и работы в
              любых помещениях. Наша компания предлагает высококачественные
              системы кондиционирования, вентиляции от ведущих мировых
              производителей. Компания "СофтВент" осуществляет полный комплекс
              услуг, начиная от проектирования и монтажа климатических систем и
              заканчивая их обслуживанием. Мы гарантируем высокое качество всех
              выполняемых работ и строго соблюдаем установленные сроки.
            </p>
            <a
              className="mt-4 h-[54px] w-[60%] max-w-[255px] flex items-center justify-center text-[16px] leading-[20px] font-[600] text-[#1B9AE9] border-1 border-blue-300 rounded-2xl"
              href="#"
            >
              Подробнее о нас
            </a>
          </div>
          <div className="lg:flex items-start hidden">
            <img className="rounded-2xl" src={big_screen_img1}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
