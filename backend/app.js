const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// sportFekriDB c la data base name de ce projet , creation automatique de la data base 
mongoose.connect('mongodb://127.0.0.1:27017/restoDB');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Plat = require("./models/plat");
const Chef = require("./models/chef");
const User = require("./models/user");
const { log } = require("console");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// busniess Logic of addPlat 
app.post("/plats", (req, res) => {
    console.log("here bl :add match");
    let plat = new Plat({
        Name: req.body.Name,
        description: req.body.description,
        price: req.body.price,
    })

    plat.save();
    res.json({ message: "all the oject added with success" })


})


// Business Logic : get all the plats 
app.get("/plats", (req, res) => {
    console.log("here the BL of get all plats ");
    Plat.find().then((data) => {
        res.json({ plats: data, message: "ok" });
    })
})

// business Logic: get plat by id 
app.get("/plats/:id", (req, res) => {
    console.log(req.params.id);
    let idPlat = req.params.id;
    console.log("here the BL of get plat by id  ");
    Plat.findOne({ _id: idPlat }).then((data) => {
        res.json({ plat: data });
    })
})
// business Logic of edit Plat by Id
app.put("/plats", (req, res) => {
    let newPlat = req.body;
    console.log("newPlat", newPlat);
    Plat.updateOne({ _id: newPlat._id }, newPlat).then((editResponse) => {
        if (editResponse.nModified == 1) {
            res.json({ message: "all is modified" });
        }
    });
})

// Business Logic of delete plat by id 
app.delete("/plats/:id", (req, res) => {
    console.log(req.params.id);
    let platID = req.params.id;
    Plat.deleteOne({ _id: platID }).then((deleteResponse) => {
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "the object was deleted with success" });
        }
    })
})

// business Logic add Chef
app.post("/chefs", (req, res) => {
    console.log("here the BL of get Chef ");
    let chef = new Chef({
        Name: req.body.Name,
        Experience: req.body.Experience,
        Speciality: req.body.Speciality,
    })
    chef.save();
    res.json({ message: "all is added with success" });
})

// business Logic of get all chefs 
app.get("/chefs", (req, res) => {
    console.log(req.body);
    Chef.find().then((data) => {
        res.json({ chefs: data })
    });
})

// business Logic of signup 
app.post("/User/subscription", (req, res) => {
    console.log("here objct",req.body);
    bcrypt.hash(req.body.pwd, 8).then(
        (cryptedPassword) => {
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber:req.body.phoneNumber,
                pwd: cryptedPassword,
                role: req.body.role,
    
            });
            //save methode prédefinie mongoose
            user.save()
            .then((doc) => {
              console.log(doc);
              res.json({ message: "added successfully" });
            })
            .catch((error) => {
              console.log(error);
              res.json({ message: "ERROR" });
            });
        }
    )
});
// business Logic: login users
// 0 => Check Email 
// 1 => Check PWD 
// 2 => Welcome 
// business logic of login 
app.post("/User/signin", (req, res) => {
    console.log("here BL :Login users");
    let findedUser;
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("here the searched object by email", doc);
        findedUser = doc;
        if (!doc) {
            res.json({ message: "0" });
            // RES.JSON une chose bloquante elle bloque tous ce qui est trouvé au dessous 
        }
        return bcrypt.compare(req.body.pwd, doc.pwd);

    }).then((pwdResult) => {
        console.log("here pwdResult", pwdResult);
        if (!pwdResult) {
            res.json({ message: "1" });
        } else {
            const token = jwt.sign(
                {
                    email: findedUser.email,
                    userId: findedUser._id,
                    userRole: findedUser.role,
                },
                // la chaine de hashage c tres importnt , on peut la modifier c kelmt sir 
                "Testing",
                // c le temps que la session expire 
                { expiresIn: "30min" }
            );
            let userToSend = {
                id: findedUser._id,
                firstName: findedUser.firstName,
                lastName: findedUser.lastName,
                role: findedUser.role,
                jwt: token,
                expiresIn: 900,
            }
            res.json({ message: "2", user: userToSend });
        }
    })
});
module.exports = app;