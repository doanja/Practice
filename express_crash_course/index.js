const express = require("express"); // bring in express
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./members");

const app = express();

// init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body parser middleware (used to parse body for POST request)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// homepage route
app.get('/', (req,res) => res.render('index', {
    title: 'Member App',
    members
}));

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// set static folder this instead of the above
app.use(express.static(path.join(__dirname, "public"))); // .use is for middleware | path.join sets up the directory to the static folder

// members api routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // used to listen to a port
