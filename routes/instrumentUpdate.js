
let express = require('express'),
router      = express.Router(),
db          = require('../models')
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/instrumentUpdate/:instrumentId', (req, res) => {

    db.student.findAll({
        where: {
            teacherId: req.user.id
        }
    }).then((results) => {
        let studentId = 0;
        results.forEach(function(e){
            if(req.body.studentName1 === `${e.firstName} ${e.lastName}`){
                // console.log(e.id);
                studentId = e.id;
            }
        })
        console.log(studentId);
        return(studentId);

    }).then((studentId) => {
        db.instruments.update(
            {studentId: studentId,
            instrument_type: req.body.instrumentType,
            instrument: req.body.instrument,
            brand: req.body.brand,
            model_number: req.body.modelNumber,
            serial_number: req.body.serialNumber,
            year_purchased: req.body.yearPurchased,
            condition: req.body.condition,
            cost: req.body.cost,
            current_est_value: req.body.currentEstValue,
            name: req.body.studentName1
            },
            {where: {id: req.params.instrumentId}}
        )
    })
    .then(()=> {
        res.redirect('/instruments');
    })

});

module.exports = router;