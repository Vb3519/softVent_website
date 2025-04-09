const formatPriceValue = (price: number, counter: number) => {
  const priceStr: string = price.toString();
  return priceStr.slice(0, counter) + ' ' + priceStr.slice(counter);
};

export default formatPriceValue;
