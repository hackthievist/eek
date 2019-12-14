const ItemService = require('../services/ItemService');
const getItems = (req, res) => {
    const { filterBy, filterValue } = req.params;
    let ecoFriendlyItems = ItemService.mapItems();
    if (filterBy && filterValue) {
        ecoFriendlyItems = ItemService.filterItems(ecoFriendlyItems, filterBy, filterValue);
    }
    return res.status(200).send(ecoFriendlyItems);
}

module.exports = {
    getItems,
}