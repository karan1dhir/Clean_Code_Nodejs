const express = require("express");
const path = require('path');
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');


const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoutes);
app.use('/admin', adminData.routes);



app.use((req, res, next) => {
    res.status(404).render('PageNotFound', {
        pageTitle: 'PageNotFound'
    });
})

app.listen(3000);