var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

router.post("/", function(req, res) {
    burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }, function() {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;
    burger.update({ devoured: req.body.devoured }, condition, function() {
        res.redirect('/');
    });
});

router.delete('/:id', function(req, res) {
    var condition = `id = ${req.params.id}`;
    burger.delete(condition, function() {
        res.redirect('/');
    });
});

router.get('/fun', function(req, res) {
    res.render('fun');
});

// export
module.exports = router;