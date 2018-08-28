inventoryArray = ['Wind Instruments', 'Percussion', 'Piano/Guitars', 'String Instruments', 'Electronic Equipment', 'Furniture', 'Marching Band Equipment', 'Computer Hardware', 'Miscellaneous Inventory', 'Tuners/Metronomes'];

uniformArray = ['Marching Uniform', 'Dress', 'Tuxedo']


let express = require('express');
let router = express.Router();

router.get('/uniforms', (req, res) => {


    res.render('uniforms',{
        pageTitle: "Uniforms",
        pageID: 'Uniforms',
        uniformArray: uniformArray

    })
})

// function uniformSelect(){
//     $.get()
// }

module.exports = router;

