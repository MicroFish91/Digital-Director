let express = require('express'),
router      = express.Router(),
db          = require('../models'),
bodyParser  = require('body-parser');

router.get('/home', (req, res) => {

    console.log(req.user.id);
    let students = [];
    db.student.findAll({
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email', 'instrument', 'parentname1', 'parentname2', 'parentPhoneNumber', 'parentEmail', 'address'],
            order:['lastName']
        })
        .then((results) => {
            for (let i = 0; i < results.length; i++) {
                students.push(results[i].dataValues);
            }
        
        }).then(function (results) {

            res.render('home', {
                students: students,
                page: 'home'
            });
        });
        // console.log('user object: ' + req.user.id);
        // console.log(user);
});

module.exports = router;