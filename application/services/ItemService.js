const data = require('../data/index.json');
const mapCodesToItem = (codeArray) => {
    const items = Object.values(data['eco-friendly-items']);
    const foundItems = codeArray.reduce((acc, cur) => {
        const foundItem = items.find((item) => item.code === cur);
        if (foundItem) acc.push(foundItem);
        return acc;
    }, []);
    return foundItems;
};

const mapItems = () => {
    const nonEcoFriendlyItems = Object.values(data['non-eco-friendly-items']);
    const result = nonEcoFriendlyItems.map(codeArray => {
        return { ...codeArray, alternatives: mapCodesToItem(codeArray.alternatives) };
    })
    return result;
}

const filterItems = (data, condition, value) => {
    const items = data.filter((item) => {
        return item[condition] === value;
    });
    return items;
}
 
module.exports = {
    filterItems,
    mapCodesToItem,
    mapItems,
}