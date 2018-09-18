
let express = require('express'),
router      = express.Router(),
db          = require('../models'),
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/createUniform', (req, res) => {

    //Querys student database
    db.student.findAll().then((results) => {

        // Matches selected student to studentId
        let studentId = 0;
        results.forEach(function(e){
            if(req.body.studentName === `${e.firstName} ${e.lastName}`){
                studentId = e.id;
            }
        })
        console.log(studentId);
        return(studentId);

    }).then((student_Id) => {

        // Creates new entry into database
        db.uniforms.create(
            {studentId: student_Id,
            type: req.body.uniformType,
            pant_size: req.body.pantSize,
            jacket_size: req.body.jacketSize,
            dress_size: req.body.dressSize,
            name: req.body.studentName,
            teacherId: req.user.id
            },
            {where: {id: req.params.uniformId}}
        )
    })
    .then(()=> {

        //Refresh page
        res.redirect('/uniforms');
    })

});

module.exports = router;