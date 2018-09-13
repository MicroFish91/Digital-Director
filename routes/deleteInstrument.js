
let express = require('express'),
router      = express.Router(),
db          = require('../models')

router.post('/deleteInstrument/:instrumentId', (req, res) => {

    //Removes item from database
    db.instruments.destroy({
        where: {
            id: req.params.instrumentId
        }
    })
    .then(()=> {

        //Refresh page
        res.redirect('/instruments');
    })

});

module.exports = router;