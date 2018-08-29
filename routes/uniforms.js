inventoryArray = ['Wind Instruments', 'Percussion', 'Piano/Guitars', 'String Instruments', 'Electronic Equipment', 'Furniture', 'Marching Band Equipment', 'Computer Hardware', 'Miscellaneous Inventory', 'Tuners/Metronomes'];

uniformTypeArray = ['Marching uniform', 'Dress', 'Tuxedo'];


let express = require('express');
let router = express.Router();
var db = require('../models');

var studentListArray = [];

db.student.findAll().then((results) => {
    // console.log(results);
    results.forEach(function(e){
        
        r = (`${e.firstName} ${e.lastName}`);
        studentListArray.push(r);
    })
  });

router.get('/uniforms', (req, res) => {

    res.render('uniforms',{
        pageTitle: "Uniforms",
        pageID: 'Uniforms',
        uniformTypeArray: uniformTypeArray,
        studentListArray: studentListArray

    })
})

router.post('/uniforms', (req, res) => {

    db.student.findAll().then((results) => {
        let v = 0;
        results.forEach(function(e){
            if(req.body.studentName === `${e.firstName} ${e.lastName}`){
                // console.log(e.id);
                studentId = e.id;
            }
        })
        return(studentId);
    }).then((studentId) => {
        db.uniforms.create({student_id: studentId, type:req.body.uniformType, pant_size:req.body.pantSize, jacket_size:req.body.jacketSize, dress_size:req.body.dressSize});
    })
});


module.exports = router;

// models.pokemon.create

