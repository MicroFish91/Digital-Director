let express = require('express'),
router      = express.Router(),
db          = require('../models')

router.post('/deleteUniform/:uniformId', (req, res) => {
    db.uniforms.destroy({
        where: {
            id: req.params.uniformId
        }
    })
    .then(()=> {
        res.redirect('/uniforms');
    })

});

module.exports = router;