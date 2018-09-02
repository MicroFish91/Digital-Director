
var instrumentTypeArray = ['Wind Instrument', 'Percussion', 'Pianos/Guitar', 'String Instruments', 'Electronic Equipment', 'Furniture', 'Marching Band Instruments','Computer Hardware', 'Miscellaneous Equipment', 'Tuners/Metronomes']

let express = require('express');
let router = express.Router();
var db = require('../models');
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));


// function compareInstrument(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const compA = a.instrument.toUpperCase();
//     const compB = b.instrument.toUpperCase();

//     let comparison = 0;
//     if (compA > compB) {
//         comparison = 1;
//     } else if (compA < compB) {
//         comparison = -1;
//     }
//     return comparison;
// }



//create new instrument
router.get('/instruments', (req, res) => {

    var instrumentArray = [];
    var studentListArray = [];

    db.student.findAll({
        attributes: ['id','firstName', 'lastName']
    })
    .then((results) => {
        for (let i = 0; i < results.length; i++) {
            studentListArray.push(results[i].dataValues);
        }
    }).then()
    
    db.instruments.findAll({
            attributes: ['id','student_id','instrument_type', 'instrument', 'brand', 'model_number', 'serial_number', 'year_purchased', 'condition', 'cost', 'current_est_value', 'name'],
            order:['instrument']

        })
        .then((results) => {
            
            for (let i = 0; i < results.length; i++) {
                instrumentArray.push(results[i].dataValues);
            }

        }).then(function (results) {
            res.render('instruments', {
                instrumentArray: instrumentArray,
                studentListArray:studentListArray,
                instrumentTypeArray: instrumentTypeArray
            });
        });
});




// router.post('/instruments', (req, res) => {

//     db.student.findAll().then((results) => {
//         let studentId = 0;
//         results.forEach(function(e){
//             if(req.body.studentName === `${e.firstName} ${e.lastName}`){
//                 // console.log(e.id);
//                 studentId = e.id;
//             }
//         })
//         console.log(studentId);
//         return(studentId);
//     }).then((studentId) => {
        
//         db.instruments.create({student_id: studentId, instrument_type:req.body.instrumentType, instrument:req.body.instrument, brand:req.body.brand, model_number:req.body.modelNumber, serial_number:req.body.serialNumber, year_purchased: req.body.yearPurchased, condition:req.body.condition, cost:req.body.cost, current_est_value: req.body.currentEstValue, name:req.body.studentName1});
//     });
// });




module.exports = router;

// function orderInstrumentColumns(instrumentArray){

// function compareType(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const compA = a.instrument_type.toUpperCase();
//     const compB = b.instrument_type.toUpperCase();

//     let comparison = 0;
//     if (compA > compB) {
//         comparison = 1;
//     } else if (compA < compB) {
//         comparison = -1;
//     }
//     return comparison;
// }

// function compareBrand(a, b) {
//     // Use toUpperCase() to ignore character casing
//     const compA = a.brand.toUpperCase();
//     const compB = b.brand.toUpperCase();

//     let comparison = 0;
//     if (compA > compB) {
//         comparison = 1;
//     } else if (compA < compB) {
//         comparison = -1;
//     }
//     return comparison;
// }

