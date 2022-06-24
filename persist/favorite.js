const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
    artist: { type: String, default: "" },
    album: { type: String, default: "" },
    song: {type: String, default: "" }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;