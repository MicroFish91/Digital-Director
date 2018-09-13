
let express = require('express'),
router      = express.Router(),
db          = require('../models'),
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));


router.post('/createInstrument', (req, res) => {

    //Querys student database
    db.student.findAll({
        where: {
            teacherId: req.user.id
        }

    }).then((results) => {

        // Matches selected student to studentId
        let studentId = 0;
        results.forEach(function(e){
            if(req.body.studentName1 === `${e.firstName} ${e.lastName}`){
                studentId = e.id;
            }
        })
        console.log(studentId);
        return(studentId);

    }).then((student_Id) => {

        // Creates new entry into database
        db.instruments.create(
            {studentId: student_Id,
            instrument_type: req.body.instrumentType,
            instrument: req.body.instrument,
            brand: req.body.brand,
            model_number: req.body.modelNumber,
            serial_number: req.body.serialNumber,
            year_purchased: req.body.yearPurchased,
            condition: req.body.condition,
            cost: req.body.cost,
            current_est_value: req.body.currentEstValue,
            name: req.body.studentName1,
            teacherId: req.user.id
            },
            {where: {id: req.params.instrumentId}}
        )
    })
    .then(()=> {

        //Refresh page
        res.redirect('/instruments');
    })

});

module.exports = router;