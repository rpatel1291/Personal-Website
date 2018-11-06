const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const static = express.static(__dirname + '/public');
const configRoutes = require('./routes');

app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", handlebars({ defaultLayout: "main", layoutsDir: __dirname + '/views/layouts' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

configRoutes(app);


app.listen(3000, () => {
    console.log("Your routes will be running on http://localhost:3000");
});

module.exports = app;