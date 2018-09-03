

uniformTypeArray = ['Marching uniform', 'Dress', 'Tuxedo'];
pantSizeArray = ['Pant Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];
jacketSizeArray = ['Jacket Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];
dressSizeArray = ['Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];


let express = require('express');
let router = express.Router();
var db = require('../models');



router.get('/uniforms', (req, res) => {

    var studentListArray = [];
    var uniformInfoArray = [];

    db.student.findAll({
    attributes: ['id','firstName', 'lastName']
    })
    .then((results) => {
        for (let i = 0; i < results.length; i++) {
            studentListArray.push(results[i].dataValues);
        }
    }).then()
        db.uniforms.findAll({
        attributes: ['id','studentId','type', 'pant_size', 'jacket_size', 'dress_size', 'name'],
        order:['type']
    })
    .then((results) => {
        
        for (let i = 0; i < results.length; i++) {
            uniformInfoArray.push(results[i].dataValues);
        }
    }).then(function(results){
        console.log(uniformInfoArray);
        res.render('uniforms',{
            pageTitle: "Uniforms",
            pageID: 'Uniforms',
            uniformTypeArray: uniformTypeArray,
            studentListArray: studentListArray,
            uniformInfoArray: uniformInfoArray,
            pantSizeArray: pantSizeArray,
            jacketSizeArray: jacketSizeArray,
            dressSizeArray: dressSizeArray,
            page: "uniforms"

        })
    })
})

// router.post('/uniforms', (req, res) => {

//     db.student.findAll().then((results) => {
//         let studentId = 0;
//         results.forEach(function(e){
//             if(req.body.studentName === `${e.firstName} ${e.lastName}`){
//                 // console.log(e.id);
//                 studentId = e.id;
//             }
//         })
//         return(studentId);
//     }).then((studentId) => {
//         db.uniforms.create({student_id: studentId, type:req.body.uniformType, pant_size:req.body.pantSize, jacket_size:req.body.jacketSize, dress_size:req.body.dressSize});
//     })
//     .then(()=> {
//         res.redirect('/uniforms');
//     })
// });


module.exports = router;


