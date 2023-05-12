require('../config/connection');

module.exports = {
    books: require('./Books'),
    HouseholdProducts: require('./HouseholdProducts'),
    music: require('./Music'),
    sportsEquipment: require('./SportsEquipment'),
    specials: require('./Specials'),
    User: require('./Users')
}