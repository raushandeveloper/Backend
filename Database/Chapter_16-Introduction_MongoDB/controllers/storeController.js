const Favourite = require("../models/favourite");
const Home = require("../models/home");



exports.getIndex = (req,res,next)=>{
    const registeredHomes = Home.fetchAll().then(registeredHomes=>{
           res.render('store/index',{ 
               registeredHomes: registeredHomes,
               pageTitle: "airbnb Home",
               currentPage:'index'
    })
    });
};

exports.getHomes = (req,res,next)=>{
   const registeredHomes = Home.fetchAll().then(registeredHomes=>{
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
    Favourite.getFavourites().then(favourites => {
     favourites = favourites.map(fav => fav.houseId); // Extract houseIds from favourites
       Home.fetchAll().then(registeredHomes =>{
            // ✅ Filter FIRST, assign to variable
            console.log(favourites,registeredHomes);
            const favouriteHomes = registeredHomes.filter(home => {
                return favourites.includes(home._id.toString()); // ✅ Use the fetched favourites here
            });

            // ✅ Render AFTER filter is complete, outside the filter callback
            res.render('store/favourite-list', {
                favouriteHomes: favouriteHomes,
                pageTitle: "My Favourites",
                currentPage: 'favourites'
            });
        });
    });
};

exports.postAddToFavourite = (req,res,next)=>{
     const homeId = req.body.id;
     const fav = new Favourite(homeId);
     fav.save().then(result =>{
          console.log('Fav added: ',result);
     }).catch(err =>{
           console.log('Error while adding to Favourite',err);
     }).finally(()=>{
               res.redirect("/favourites");
     })
};

exports.postRemoveFromFavourite = (req,res,next)=>{
    const homeId = req.params.homeId;
     Favourite.deleteById(homeId).then(result =>{
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