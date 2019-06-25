var router = require("express").Router();
var db = require("../models");

router.get('/seed', (req,res,err) => {
    var seeds = require('../charSeeds.json');

    Promise.all(
        seeds.map(character => db.Character.create(character))
    )

        .then(characters => res.json(characters));
})

module.exports = router;