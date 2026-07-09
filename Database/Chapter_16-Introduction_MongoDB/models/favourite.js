const {getDB} = require("../utils/databaseUtil");

module.exports = class Favourite {
   constructor(houseId) {
    this.houseId = houseId;
  }

  save(){
    const db = getDB();
    return db.collection('favourites').findOne({ houseId: this.houseId }).then(existingFav => {
      if (!existingFav) {
         return db.collection('favourite').insertOne(this);
      }
      return Promise.resolve(); // Return the existing favourite if it already exists
    });
  }

  static getFavourites(callback) {
    const db = getDB();
    return db.collection('favourite').find().toArray();
  }

  static deleteById(delHomeId, callback) {
    const db = getDB();
    return db.collection('favourite').deleteOne({ houseId: delHomeId });
  }
};