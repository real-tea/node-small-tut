const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin'); // exporting admin routes for the middleware from admin.js
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes); // using the exported routes
app.use(shopRoutes); // using the exported routes from shop.js

app.use((req,res)=>{
  // res.status(404).send('<p>errr..... not found</p>');

  res.status(404).sendFile(path.join(__dirname,'view','error-page.html'));
}); // setting a 404 error status


app.listen(3000);
