let express = require('express'),
    router = express.Router(),
    db = require('../models'),
    bodyParser = require('body-parser');

// List all students associated with the teacher ID. Order by last name.
router.get('/home', (req, res) => {
    let students = [];
    db.student.findAll({
            include: [{all: true}],
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email', 'instrument', 'parentname1', 'parentname2', 'parentPhoneNumber', 'parentEmail', 'address'],
            where: {
                teacherId: req.user.id
            },
            order: ['lastName']
        }).then((results) => {
            for (let i = 0; i < results.length; i++) {
                students.push(results[i].dataValues);
            }
        }).then(function (results) {

            res.render('home', {
                students: students,
                page: 'home'
            });
        });
});

module.exports = router;