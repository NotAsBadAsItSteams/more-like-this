const formatPrice = (priceString) => {
  if (priceString === '0.00') {
    return 'Free to Play';
  }
  return `$${priceString}`;
};

export default formatPrice;
