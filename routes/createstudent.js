let express = require('express'),
router      = express.Router(),
db          = require('../models'),
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.post('/createstudent', (req, res) => {
    
    let name = req.body.name.split(' ');
    db.student.create(
        {firstName: name[0],
        lastName: name[1],
        phoneNumber: req.body.phone.replace(/[^\d]/g, ""),
        email: req.body.email,
        instrument: req.body.instrument,
        parentname1: req.body.parentname1,
        parentname2: req.body.parentname2,
        parentPhoneNumber: req.body.parentPhone.replace(/[^\d]/g, ""),
        parentEmail: req.body.parentEmail,
        address: req.body.address,
        teacherId: req.user.id
        },
    )
    .then(()=> {
        res.redirect('/home');
    })

});

module.exports = router;