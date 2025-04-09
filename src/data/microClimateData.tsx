import { v4 as uuidv4 } from 'uuid';

import ballu_img1 from '../assets/images/air_washers/ballu/ballu_1_1.jpg';
import ballu_img2 from '../assets/images/air_washers/ballu/ballu_2_1.jpg';
import ballu_img3 from '../assets/images/air_washers/ballu/ballu_3_1.jpg';

import boneco_img1 from '../assets/images/air_washers/boneco/boneco_1_1.jpg';
import boneco_img2 from '../assets/images/air_washers/boneco/boneco_2_1.jpg';
import boneco_img3 from '../assets/images/air_washers/boneco/boneco_3_1.png';

import zanussi_img1 from '../assets/images/air_washers/zanussi/zanussi_1_1.png';
import zanussi_img2 from '../assets/images/air_washers/zanussi/zanussi_2_1.jpg';
import zanussi_img3 from '../assets/images/air_washers/zanussi/zanussi_3_1.jpg';
import zanussi_img4 from '../assets/images/air_washers/zanussi/zanussi_4_1.jpg';

const microClimateData = [
  {
    /* --- Ballu: ---*/
    /* --- Ballu: ---*/
    /* --- Ballu: ---*/
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Увлажнитель воздуха Ballu 50 Вт',
    area: '60',
    maxPower: '50',
    maxAirFlow: '400',
    img: ballu_img1,
    color: 'Белый',
    price: '12 100',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Увлажнитель воздуха Ballu 70 Вт',
    area: '100',
    maxPower: '70',
    maxAirFlow: '550',
    img: ballu_img2,
    color: 'Белый',
    price: '14 070',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: true,
    title: 'Увлажнитель воздуха Ballu 60 Вт',
    area: '50',
    maxPower: '60',
    maxAirFlow: '450',
    img: ballu_img3,
    color: 'Белый',
    price: '13 400',
    id: uuidv4(),
    category: 'microClimateData',
  },
  /* --- Boneco: ---*/
  /* --- Boneco: ---*/
  /* --- Boneco: ---*/
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: true,
    title: 'Увлажнитель воздуха Boneco 65 Вт',
    area: '55',
    maxPower: '65',
    maxAirFlow: '650',
    img: boneco_img1,
    color: 'Белый',
    price: '17 150',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Увлажнитель воздуха Boneco 45 Вт',
    area: '40',
    maxPower: '45',
    maxAirFlow: '350',
    img: boneco_img2,
    color: 'Белый',
    price: '11 230',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: true,
    title: 'Увлажнитель воздуха Boneco 25 Вт',
    area: '20',
    maxPower: '25',
    maxAirFlow: '150',
    img: boneco_img3,
    color: 'Черный',
    price: '10 250',
    id: uuidv4(),
    category: 'microClimateData',
  },
  /* --- Zanussi: ---*/
  /* --- Zanussi: ---*/
  /* --- Zanussi: ---*/
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Увлажнитель воздуха Zanussi 45 Вт',
    area: '40',
    maxPower: '45',
    maxAirFlow: '250',
    img: zanussi_img1,
    color: 'Белый',
    price: '11 450',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Увлажнитель воздуха Zanussi 65 Вт',
    area: '80',
    maxPower: '65',
    maxAirFlow: '450',
    img: zanussi_img2,
    color: 'Черный',
    price: '16 720',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Увлажнитель воздуха Zanussi 75 Вт',
    area: '90',
    maxPower: '75',
    maxAirFlow: '650',
    img: zanussi_img3,
    color: 'Черный',
    price: '22 130',
    id: uuidv4(),
    category: 'microClimateData',
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Увлажнитель воздуха Zanussi 45 Вт',
    area: '30',
    maxPower: '45',
    maxAirFlow: '350',
    img: zanussi_img4,
    color: 'Белый',
    price: '14 800',
    id: uuidv4(),
    category: 'microClimateData',
  },
];

export default microClimateData;
