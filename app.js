const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");


// Routes 🍌
// ----------------------------------------------------------------------------
app.get("/", (req, res, next) => {
  res.render("home-page.hbs");
});

app.get("/results", (req, res, next) => {
  // req.query -> query string
  if (req.query.search_query === "grape") {
    res.send("<h1>🍇</h1>");
  }
  else if (req.query.search_query === "ananas") {
    res.send("<h1>🍍</h1>");
  }
  else {
    res.send("<h1>🍭</h1>");
  }
});

//  /en/courses/webdev
//  /fr/courses/ux-ui
app.get("/:lang/courses/:course", (req, res, next) => {
  // req.params -> URL parameters
  if (req.params.lang === "fr") {
    res.send("Rejoignez la prochaine génération de créateurs du digital");
  }
  else if (req.params.lang === "pt") {
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
  // Express doesn't create "req.body" automatically! ☹️
  res.send(req.body);
});


app.listen(3000, () => {
  console.log("fruit store online 🥝");
});
