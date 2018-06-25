const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"));

// Allow our app to create "req.body" for POST form submissions
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");


// Routes 🍌
// ----------------------------------------------------------------------------
app.get("/", (req, res, next) => {
  res.render("home-page.hbs");
});

app.get("/results", (req, res, next) => {
  // const search_query = req.query.search_query;
  const { search_query } = req.query;

  // req.query -> query string
  if (search_query === "grape") {
    res.send("<h1>🍇</h1>");
  }
  else if (search_query === "ananas") {
    res.send("<h1>🍍</h1>");
  }
  else {
    res.send("<h1>🍭</h1>");
  }
});

//  /en/courses/webdev
//  /fr/courses/ux-ui
app.get("/:lang/courses/:course", (req, res, next) => {
  // const lang = req.params.lang;
  const { lang, course } = req.params;

  // req.params -> URL parameters
  if (lang === "fr") {
    res.send("Rejoignez la prochaine génération de créateurs du digital");
  }
  else if (lang === "pt") {
    res.send("Preparando a próxima geração de produtores digitais");
  }
  else {
    res.send("Preparing the next generation of digital creators");
  }
});

app.get("/login", (req, res, next) => {
  res.render("login-form.hbs");
});

app.post("/process-login", (req, res, next) => {
  // const userEmail = req.body.userEmail;
  // const userPassword = req.body.userPassword;
  const { userEmail, userPassword } = req.body;

  // the "body-parser" package creates "req.body"
  if (userEmail === "yoda@master.com" && userPassword === "hmmm") {
    res.render("welcome.hbs");
  }
  else {
    res.render("gtfo.hbs");
  }
});


app.listen(3000, () => {
  console.log("fruit store online 🥝");
});
