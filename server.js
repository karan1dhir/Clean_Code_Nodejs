const express = require("express");
const path = require('path');
const errorController = require('./controllers/error.js');
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

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoutes);
app.use('/admin', adminRoutes);
app.use(errorController.get404Page);

app.listen(3000);