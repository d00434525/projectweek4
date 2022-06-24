setupFavorite = function (favoriteData) {

    return {
        artist: favoriteData.artist || "",
        song: favoriteData.song || "",
        album: favoriteData.album || "",
    };
};

module.exports = {
    setupFavorite,
};