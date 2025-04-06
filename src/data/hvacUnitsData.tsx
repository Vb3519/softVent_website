import { v4 as uuidv4 } from 'uuid';

import naveka_img1 from '../assets/images/hvac_units/naveka_1_1.jpg';
import naveka_img2 from '../assets/images/hvac_units/naveka_1_2.jpg';
import naveka_img3 from '../assets/images/hvac_units/naveka_1_3.jpg';
import naveka_img4 from '../assets/images/hvac_units/naveka_1_4.jpg';
import naveka_img5 from '../assets/images/hvac_units/naveka_1_5.jpg';
import naveka_img6 from '../assets/images/hvac_units/naveka_1_6.jpg';
import naveka_img7 from '../assets/images/hvac_units/naveka_1_7.jpg';
import naveka_img8 from '../assets/images/hvac_units/naveka_1_8.jpg';
import naveka_img9 from '../assets/images/hvac_units/naveka_1_9.jpg';
import naveka_img10 from '../assets/images/hvac_units/naveka_1_10.jpg';

const hvacUnitsData = [
  // с рекуператором (от малой мощности к большой):
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 5кВт',
    heater: 'Электрический',
    maxPower: '5',
    maxAirFlow: '1200',
    img: naveka_img1,
    recup: 'Да',
    price: '195 300',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Вентиляционная установка Naveka 7кВт',
    heater: 'Электрический',
    maxPower: '7',
    maxAirFlow: '1500',
    img: naveka_img2,
    recup: 'Да',
    price: '237 450',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Вентиляционная установка Naveka 9кВт',
    heater: 'Водяной',
    maxPower: '9',
    maxAirFlow: '2000',
    img: naveka_img3,
    recup: 'Да',
    price: '249 130',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 16кВт',
    heater: 'Водяной',
    maxPower: '16',
    maxAirFlow: '3000',
    img: naveka_img4,
    recup: 'Да',
    price: '275 000',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 18кВт',
    heater: 'Водяной',
    maxPower: '18',
    maxAirFlow: '3500',
    img: naveka_img5,
    recup: 'Да',
    price: '289 750',
    id: uuidv4(),
  },
  // без рекуператора (от малой мощности к большой):
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 2кВт',
    heater: 'Электрический',
    maxPower: '2',
    maxAirFlow: '500',
    img: naveka_img6,
    recup: 'Нет',
    price: '126 175',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 4кВт',
    heater: 'Электрический',
    maxPower: '4',
    maxAirFlow: '900',
    img: naveka_img7,
    recup: 'Нет',
    price: '142 100',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 8.5кВт',
    heater: 'Электрический',
    maxPower: '8.5',
    maxAirFlow: '900',
    img: naveka_img8,
    recup: 'Нет',
    price: '138 050',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: true,
    title: 'Вентиляционная установка Naveka 12кВт',
    heater: 'Водяной',
    maxPower: '12',
    maxAirFlow: '1000',
    img: naveka_img9,
    recup: 'Нет',
    price: '165 200',
    id: uuidv4(),
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Вентиляционная установка Naveka 15кВт',
    heater: 'Водяной',
    maxPower: '15',
    maxAirFlow: '1200',
    img: naveka_img10,
    recup: 'Нет',
    price: '171 400',
    id: uuidv4(),
  },
];

export default hvacUnitsData;
