let express = require('express');
let router = express();


router.get('/layout',function (req, res) {

    res.render('layout', {
      user: req.user
    });
  });

module.exports = router;