const data = require('../data/index.json');

const mapCodesToItem = (codeArray) => {
  const items = Object.values(data['eco-friendly-items']);
  const foundItems = codeArray.reduce((acc, cur) => {
    const foundItem = items.find(item => item.code === cur);
    if (foundItem) acc.push(foundItem);
    return acc;
  }, []);
  return foundItems;
};

const mapItems = () => {
  const nonEcoFriendlyItems = Object.values(data['non-eco-friendly-items']);
  const result = nonEcoFriendlyItems.map(codeArray => ({ ...codeArray, alternatives: mapCodesToItem(codeArray.alternatives) }));
  return result;
};

const filterItems = (items, condition, value) => {
  const filteredItems = items.filter(item => item[condition] === value);
  return filteredItems;
};

module.exports = {
  filterItems,
  mapCodesToItem,
  mapItems,
};
