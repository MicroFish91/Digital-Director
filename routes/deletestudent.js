let express = require('express'),
router      = express.Router(),
db          = require('../models')

router.post('/deletestudent/:studentId', (req, res) => {
    console.log(req.params.studentId);
    db.student.destroy({
        where: {
            id: req.params.studentId
        }
    })
    .then(()=> {
        res.redirect('/home');
    })

});

module.exports = router;