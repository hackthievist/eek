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

const filterItems = (items, name, category) => {
  let filteredItems;
  if (name) {
    filteredItems = items.filter(item => item['name'].includes(name));
    console.log(filteredItems);
  }
  if (category) {
    filteredItems = filteredItems.filter((item) => {
      return item.category === category;
    })
  }
  return filteredItems;
};

module.exports = {
  filterItems,
  mapCodesToItem,
  mapItems,
};
