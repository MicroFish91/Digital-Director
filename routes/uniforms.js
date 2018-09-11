

uniformTypeArray = ['Marching uniform', 'Dress', 'Tuxedo'];
pantSizeArray = ['Pant Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];
jacketSizeArray = ['Jacket Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];
dressSizeArray = ['Size','XS', 'S', 'M', 'L', 'XL', 'XXL'];


let express = require('express');
let router = express.Router();
var db = require('../models');


//create new uniform
router.get('/uniforms', (req, res) => {

    //Define empty arrays to send to uniforms.ejs
    var studentListArray = [];
    var uniformInfoArray = [];

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

        //Querys uniform database
        db.uniforms.findAll({
        where: {
            teacherId: req.user.id
        },
        attributes: ['id','studentId','type', 'pant_size', 'jacket_size', 'dress_size', 'name'],
        order:['type']
    })
    .then((results) => {
        
        //Pushes uniform info from database into array
        for (let i = 0; i < results.length; i++) {
            uniformInfoArray.push(results[i].dataValues);
        }
    }).then(function(results){
        console.log(uniformInfoArray);
        res.render('uniforms',{

            //info sent to uniforms.ejs
            pageTitle: "Uniforms",
            pageID: 'Uniforms',
            uniformTypeArray: uniformTypeArray,
            studentListArray: studentListArray,
            uniformInfoArray: uniformInfoArray,
            pantSizeArray: pantSizeArray,
            jacketSizeArray: jacketSizeArray,
            dressSizeArray: dressSizeArray,
            page: "uniforms",
            user: req.user
        })
    })
})


module.exports = router;


