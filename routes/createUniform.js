let express = require('express'),
router      = express.Router(),
db          = require('../models'),
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/createUniform', (req, res) => {

    db.student.findAll().then((results) => {
        let studentId = 0;
        results.forEach(function(e){
            if(req.body.studentName === `${e.firstName} ${e.lastName}`){
                // console.log(e.id);
                studentId = e.id;
            }
        })
        console.log(studentId);
        return(studentId);

    }).then((studentId) => {
        db.uniforms.create(
            {studentId: studentId,
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
        res.redirect('/uniforms');
    })

});

module.exports = router;