const path = require('path');
const express = require('express');

const router = express.Router(); //Router is a predefined express middleware 

router.get('/add-product', (req, res, next) =>
 {
   res.sendFile(path.join(__dirname,'../','view','add-product.html'));
});
  
router.post('/product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
  });
  
module.exports = router;  // expprting routes middleware to app.js