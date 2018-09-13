let express = require('express');
let router = express();


router.get('/layout',function (req, res) {

<<<<<<< HEAD
=======
    // console.log("user" + req.user);
    // if(!req.isAuthenticated) {
    //   res.redirect('/login');
    // }
    
>>>>>>> 02218f28e1aece4785fa16b40a1381204dae7886
    res.render('layout', {
      user: req.user
      });
  });

module.exports = router;