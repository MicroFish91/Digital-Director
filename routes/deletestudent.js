let express = require('express'),
router      = express.Router(),
db          = require('../models')

// delete a student from the database
router.post('/deletestudent/:studentId', (req, res) => {
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