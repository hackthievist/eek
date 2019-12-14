const ItemService = require('../services/ItemService');

const getItems = (req, res) => {
  const { name, category } = req.query;
  let ecoFriendlyItems = ItemService.mapItems();
  if (name || category) {
    ecoFriendlyItems = ItemService.filterItems(ecoFriendlyItems, name, category);
  }
  return res.status(200).send(ecoFriendlyItems);
};

module.exports = {
  getItems,
};
