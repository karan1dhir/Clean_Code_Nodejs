const express = require("express");
const path = require('path');



const app = express();
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');

// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layout/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
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
        pageTitle: 'Page Not Found'
    });
})

app.listen(3000);