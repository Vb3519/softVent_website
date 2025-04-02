import React from 'react';
import { NavLink } from 'react-router-dom';

import big_screen_img1 from '../../assets/images/big_screen_img1.jpg';

/* О НАС: */
const AboutUs = () => {
  return (
    <section className="flex mb-3 p-3 xs:px-8 xl:px-14 lg:mb-10 2xl:px-[200px] 2xl:my-25">
      <div className="">
        <h3 className="pb-4 text-[22px]">О Нас</h3>
        <div className="flex gap-3">
          <div>
            <p>
              Компания "СофтВент" – надежный партнер в создании комфортных
              условий для жизни и работы в любых помещениях. Мы предлагаем
              высококачественные системы кондиционирования и вентиляции от
              ведущих мировых производителей, обеспечивая нашим клиентам только
              лучшие решения. "СофтВент" выполняет полный спектр услуг: от
              проектирования и монтажа климатических систем до их дальнейшего
              обслуживания и ремонта. Мы гарантируем высокое качество всех
              работ, а также строго соблюдаем оговоренные сроки. Наши
              специалисты всегда готовы предложить индивидуальное решение,
              учитывая все особенности вашего объекта и требования к климату.
            </p>
            <NavLink
              className="mt-4 h-[54px] w-[60%] max-w-[255px] flex items-center justify-center text-[16px] leading-[20px] font-[600] text-[#1B9AE9] border-1 border-blue-300 rounded-2xl"
              to="about"
            >
              Подробнее о нас
            </NavLink>
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
