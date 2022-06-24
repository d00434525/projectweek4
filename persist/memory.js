const favorite_db = {};

function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };
    return result;
};

const addFavorite = function (favorite) {
    id = makeid(8);
    favorite.id = id;
    favorite_db[id] = favorite;
    console.log(favorite_db);
    return favorite;
};

const getFavorite = function (id) {
    return favorite_db[id];
};

const getFavorites = function (id) {
    return favorite_db;
};

const setFavorite = function (id, favorite) {
    favorite_db[id] = favorite;
    return favorite;
};

// patchFavorite = update a favorite
const patchFavorite = function (id, favoriteData) {
    // loop over the data and set each individual item
    for (const key in favoriteData) {
        favorite_db[id][key] = favoriteData[key];
    };

    // pull the new data
    const favorite = favorite_db[id];
    return favorite;
};

const deleteFavorite = function (id) {
    const favorite = favorite_db[id];
    delete favorite_db[id];
    return favorite;
};

module.exports = {
    addFavorite: addFavorite,
    getFavorite: getFavorite,
    getFavorites: getFavorites,
    setFavorite: setFavorite,
    patchFavorite: patchFavorite,
    deleteFavorite: deleteFavorite,
};