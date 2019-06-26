var router = require("express").Router();
var db = require("../models");
var seeds = require('../client/src/pages/ViewAllCharacters/charSeeds.json');

router.route('/characters')
    .get((req,res,err) => {
        //get all characters here
        //res.json(seeds);
        db.Character.find({})
        .sort({_id: -1})
            .then(characters => {console.log("Got Characters: ", characters); return characters;})
            .then(characters => res.json(characters))
            .catch(err => res.json(500, err));
    })
    
router.route('/character/')
    .post((req,res,err) => {
    //get all characters here
    //res.json("");
    var newChar = req.body;
    db.Character.create(newChar)
        .then(character => res.json(character))
        .catch(err => res.json(500, err))
})

router.route('/character/:id')
    .get((req,res,err) => {
        res.json(seeds[0])
    })

    .put((req,res,err) => {
    //get all characters here
        res.json("");
    })

    .delete((req,res,err) => {
    //get all characters here
        res.json("");
})
router.route('/character/mine')
    .get((req,res,err) => {
        res.json(seeds);

    })
module.exports = router;