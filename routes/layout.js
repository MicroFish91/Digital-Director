let express = require('express');
let router = express();


router.get('/layout',function (req, res) {

    // console.log("user" + req.user);
    // if(!req.isAuthenticated) {
    //   res.redirect('/login');
    // }
    
    res.render('layout', {
      user: req.user
      });
  });

module.exports = router;