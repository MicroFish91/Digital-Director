let express = require('express'),
router      = express.Router(),
db          = require('../models')

router.post('/deleteUniform/:uniformId', (req, res) => {

    //Removes item from database
    db.uniforms.destroy({
        where: {
            id: req.params.uniformId
        }
    })
    .then(()=> {

        //Refresh page
        res.redirect('/uniforms');
    })

});

module.exports = router;