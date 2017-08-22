var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expresshandlebars = require('express-handlebars');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use('/', routes);

app.listen(PORT, function() {
    console.log(`Da Burger App is running on PORT ${PORT}`);
});