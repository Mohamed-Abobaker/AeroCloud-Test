const filterFunc = (hotels, chosenFacils) => {
  const result = hotels.filter(hotel => {
    let func = element => {
      return hotel.facilities.includes(element);
    };
    return chosenFacils.every(func);
  });
  return result;
};

module.exports = { filterFunc };
