const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({
  houseId: { type: String, required: true },
});

module.exports = mongoose.model('Favourite', favouriteSchema);