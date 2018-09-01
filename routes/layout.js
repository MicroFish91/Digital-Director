let express = require('express');
let router = express();


router.get('/layout',function (req, res) {

    console.log("user" + req.user);
    if(!req.isAuthenticated)
    res.redirect('/login');
    
    
    // db.teacher.create({id: req.user.id, name: req.user.displayName, email: req.user.email});
    res.render('layout', {
      user: req.user
    });
  });

module.exports = router;