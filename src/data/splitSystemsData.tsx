import { v4 as uuidv4 } from 'uuid';

import ballu_img1 from '../assets/images/split_systems/ballu/ballu_1_1.jpg';
import ballu_img2 from '../assets/images/split_systems/ballu/ballu_2_1.jpg';
import ballu_img3 from '../assets/images/split_systems/ballu/ballu_3_1.jpg';

import elx_img1 from '../assets/images/split_systems/elx/elx_1_1.jpg';
import elx_img2 from '../assets/images/split_systems/elx/elx_2_1.png';
import elx_img3 from '../assets/images/split_systems/elx/elx_3_1.jpg';

import zanussi_img1 from '../assets/images/split_systems/zanussi/zanussi_1_1.jpg';
import zanussi_img2 from '../assets/images/split_systems/zanussi/zanussi_2_1.jpg';
import zanussi_img3 from '../assets/images/split_systems/zanussi/zanussi_3_1.jpg';
import zanussi_img4 from '../assets/images/split_systems/zanussi/zanussi_4_1.jpg';

const splitSystemsData = [
  {
    /* --- Ballu: ---*/
    /* --- Ballu: ---*/
    /* --- Ballu: ---*/
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Сплит-система Ballu 1 кВт',
    invertor: false,
    maxPower: '1',
    maxAirFlow: '500',
    img: ballu_img1,
    color: 'Белый',
    price: '25 000',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Сплит-система Ballu 1.5 кВт',
    invertor: false,
    maxPower: '1.5',
    maxAirFlow: '800',
    img: ballu_img2,
    color: 'Белый',
    price: '30 000',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Сплит-система Ballu 2 кВт',
    invertor: true,
    maxPower: '2',
    maxAirFlow: '1000',
    img: ballu_img3,
    color: 'Черный',
    price: '35 000',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  /* --- Electrolux: ---*/
  /* --- Electrolux: ---*/
  /* --- Electrolux: ---*/
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Сплит-система Electrolux 0.5 кВт',
    invertor: false,
    maxPower: '0.5',
    maxAirFlow: '600',
    img: elx_img1,
    color: 'Белый',
    price: '24 500',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Сплит-система Electrolux 1 кВт',
    invertor: false,
    maxPower: '1',
    maxAirFlow: '700',
    img: elx_img2,
    color: 'Белый',
    price: '26 300',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Сплит-система Electrolux 2.5 кВт',
    invertor: true,
    maxPower: '2.5',
    maxAirFlow: '1000',
    img: elx_img3,
    color: 'Черный',
    price: '30 300',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  /* --- Zanussi: ---*/
  /* --- Zanussi: ---*/
  /* --- Zanussi: ---*/
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: true,
    title: 'Сплит-система Zanussi 2 кВт',
    invertor: true,
    maxPower: '2',
    maxAirFlow: '800',
    img: zanussi_img1,
    color: 'Черный',
    price: '34 200',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: true,
    isPopular: false,
    title: 'Сплит-система Zanussi 1.5 кВт',
    invertor: false,
    maxPower: '1.5',
    maxAirFlow: '500',
    img: zanussi_img2,
    color: 'Белый',
    price: '28 200',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Сплит-система Zanussi 3 кВт',
    invertor: false,
    maxPower: '3',
    maxAirFlow: '500',
    img: zanussi_img3,
    color: 'Белый',
    price: '24 200',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
  {
    isInWhishList: false,
    isInStock: false,
    isPopular: false,
    title: 'Сплит-система Zanussi 2 кВт',
    invertor: true,
    maxPower: '2',
    maxAirFlow: '1000',
    img: zanussi_img4,
    color: 'Белый',
    price: '35 800',
    id: uuidv4(),
    category: 'splitSystemsData',
  },
];

export default splitSystemsData;
