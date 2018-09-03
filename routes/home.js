let express = require('express'),
    router = express.Router(),
    db = require('../models'),
    bodyParser = require('body-parser');

router.get('/home', (req, res) => {
    console.log('ID IS:' + req.user.id);
    
    // let students = [];
    // db.student.findAll({
    //         // include: [{all: true}],
    //         attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email', 'instrument', 'parentname1', 'parentname2', 'parentPhoneNumber', 'parentEmail', 'address'],
    //         // where: {
    //         //     teacherId: req.user.id
    //         // },
    //         order: ['lastName']
        // }).then((results) => {
        //     for (let i = 0; i < results.length; i++) {
        //         // students.push(results[i].dataValues);
        //     }
        // }).then(function (results) {
            // console.log("rendering" + students);
            res.render('home', {
                // students: students,
                page: 'home'
            });
        });
// });

module.exports = router;