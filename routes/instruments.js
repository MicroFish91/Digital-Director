
var instrumentTypeArray = ['Wind Instrument', 'Percussion', 'Pianos/Guitar', 'String Instruments', 'Electronic Equipment', 'Furniture', 'Marching Band Instruments','Computer Hardware', 'Miscellaneous Equipment', 'Tuners/Metronomes']

let express = require('express');
let router = express.Router();
var db = require('../models');
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));


//create new instrument
router.get('/instruments', (req, res) => {

    //Define empty arrays to send to instruments.ejs
    var instrumentArray = [];
    var studentListArray = [];


    //Querys student database
    db.student.findAll({
        attributes: ['id','firstName', 'lastName'],
        where: {
            teacherId: req.user.id
        }
    })
    .then((results) => {

        //Pushes students from database into array
        for (let i = 0; i < results.length; i++) {
            studentListArray.push(results[i].dataValues);
        }
    }).then()
    
    //Querys instrument databse
    db.instruments.findAll({
            attributes: ['id','studentId','instrument_type', 'instrument', 'brand', 'model_number', 'serial_number', 'year_purchased', 'condition', 'cost', 'current_est_value', 'name'],
            order:['instrument'],
            where: {
                teacherId: req.user.id
            }
        })
        .then((results) => {
            
            //Pushes instruments/items from database into array
            for (let i = 0; i < results.length; i++) {
                instrumentArray.push(results[i].dataValues);
            }

        }).then(function (results) {
            res.render('instruments', {

                //info sent to instruments.ejs
                instrumentArray: instrumentArray,
                studentListArray:studentListArray,
                instrumentTypeArray: instrumentTypeArray,
                page: "instruments",
                user: req.user
            });
        });
});



module.exports = router;

