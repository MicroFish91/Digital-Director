let express = require('express');
let router = express.Router();
let db = require('../models');

router.get('/home/?', (req, res) => {
    let students = [];
    db.student.findAll({
            attributes: ['firstName', 'lastName', 'phoneNumber', 'email', 'instrument', 'parentname1', 'parentname2', 'parentPhoneNumber', 'parentEmail', 'address']
        })
        .then((results) => {
            for (let i = 0; i < results.length; i++) {
                students.push(results[i].dataValues);
            }
        
        }).then(function (results) {
            res.render('home', {
                students: students
            });
        });
});

module.exports = router;