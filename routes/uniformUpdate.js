
let express = require('express'),
router      = express.Router(),
db          = require('../models')
bodyParser  = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/uniformUpdate/:uniformId', (req, res) => {

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
        db.uniforms.update(
            {studentId: studentId,
            type: req.body.uniformType,
            pant_size: req.body.pantSize,
            jacket_size: req.body.jacketSize,
            dress_size: req.body.dressSize,
            name: req.body.studentName,
            },
            {where: {id: req.params.uniformId}}
        )
    })
    .then(()=> {
        res.redirect('/uniforms');
    })

});

module.exports = router;