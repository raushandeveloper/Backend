const Favourite = require("../models/favourite");
const Home = require("../models/home");



exports.getIndex = (req,res,next)=>{
    const registeredHomes = Home.find().then(registeredHomes=>{
           res.render('store/index',{ 
               registeredHomes: registeredHomes,
               pageTitle: "airbnb Home",
               currentPage:'index'
    })
    });
};

exports.getHomes = (req,res,next)=>{
   const registeredHomes = Home.find().then(registeredHomes=>{
         res.render('store/home-list',{ registeredHomes: registeredHomes,pageTitle: "Homes List",currentPage:'Home' 
         })
});
};
 
exports.getBookings = (req,res,next)=>{
   res.render('store/bookings',{
    pageTitle: "My Bookings",
    currentPage:'bookings' 
     });
};

exports.getFavouritesList = (req, res, next) => {
     Favourite.find()
     .populate('houseId')
        .then(favourites => {
            const favouriteHomes = favourites.map(fav => fav.houseId);
            res.render('store/favourites', {
                favouriteHomes: favouriteHomes,
                pageTitle: "My Favourites",
                currentPage: 'favourites'
            });
        });
};

exports.postAddToFavourite = (req, res, next) => {
     const homeId = req.body.id;
     Favourite.findOne({ houseId: homeId }).then((Fav) => {
          if (Fav) {
               console.log('Home already in favourites');
          }else{
                fav = new Favourite({ houseId: homeId });
                fav.save().then(result => {
                     console.log('Fav added: ', result);
                });
            }
            res.redirect("/favourites");
        }).catch(err => {
            console.log('Error while adding to Favourite', err);
            res.redirect("/favourites");
    });
};

exports.postRemoveFromFavourite = (req,res,next)=>{
    const homeId = req.params.homeId;
     Favourite.findOneAndDelete({ houseId: homeId })
     .then(result =>{
          console.log('Fav removed: ',result);
     }).catch(err =>{
           console.log('Error while removing from Favourite',err);
     }).finally(()=>{
               res.redirect("/favourites");
     });
};

exports.getHomeDetails = (req,res,next)=>{
     const homeId = req.params.homeId;
     console.log("At home details page",homeId);
     Home.findById(homeId).then (home =>{
          if(!home){
               console.log("Home not found");
               res.redirect("/homes");
          }else{
          res.render("store/home-detail",{
               home:home, 
               pageTitle: "Home Detail",
               currentPage: "Home", 
          })
     }
     })
};