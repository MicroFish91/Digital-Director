
let express = require('express'),
router      = express.Router(),
db          = require('../models')

router.post('/deleteInstrument/:instrumentId', (req, res) => {
    db.instruments.destroy({
        where: {
            id: req.params.instrumentId
        }
    })
    .then(()=> {
        res.redirect('/instruments');
    })

});

module.exports = router;