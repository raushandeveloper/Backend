const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
    Home.fetchAll().then(([homes]) => {
        res.render("host/homes", {
            pageTitle: "My Homes",
            currentPage: 'homes',
            homes: homes
        });
    });
};

exports.getAddHome = (req, res, next) => {
    res.render("host/edit-home", {
        pageTitle: "Add Home to airbnb",
        currentPage: 'addHome',
        editing: false,
    });
};

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true';

    Home.findById(homeId).then(([homes]) => {
        const home = homes[0];
        if (!home) {
            console.log("Home not found for editing.");
            return res.redirect("/host/host-home-list");
        }
        res.render("host/edit-home", {
            home: home,
            pageTitle: "Edit your Home",
            currentPage: 'host-homes',
            editing: editing,
        });
    });
};

exports.getHostHomes = (req, res, next) => {
    Home.fetchAll().then(([registeredHomes]) => {
        res.render('host/host-home-list', {
            registeredHomes: registeredHomes,
            pageTitle: "Host Homes List",
            currentPage: 'host-homes'
        });
    });
};

exports.postAddHome = (req, res, next) => {
    const { houseName, price, location, rating, photoUrl, description } = req.body;
    const home = new Home(houseName, price, location, rating, photoUrl, description);
    home.save().then(() => {
       console.log('Home Saved Successfully');
       res.redirect('/host/host-home-list');
    });
};

exports.postEditHome = (req, res, next) => {
    const { id, houseName, price, location, rating, photoUrl, description } = req.body;
    
    const updatedHome = new Home(
        houseName, 
        price, 
        location, 
        parseFloat(rating) || 0,  // ← ye line add karo
        photoUrl, 
        description, 
        id
    );
    updatedHome.save().then(() => {
        res.redirect('/host/host-home-list');
    }).catch(err => console.log(err));
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.homeId;
    Home.deleteById(homeId).then(() => {
        res.redirect("/host/host-home-list");
    }).catch(error => {
        console.log('Error while deleting', error);
    });
};