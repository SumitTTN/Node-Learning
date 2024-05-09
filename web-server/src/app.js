const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setups handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// steup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "sumit",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about app",
    name: "sumit",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help",
    name: "sumit",
    helpText: "this is new one transition",
  });
});

app.get("/weather", (req, res) => {
  const {address}= req.query;
  if(!address){
    return res.send({error:'pls provide address key'})
  }
  res.send({ loaction: "test", forcast: "one",address:address });
});

app.get("/products",(req,res)=>{
  if(!req.query.search){
    return res.send({error: "must provide search key"})
  }

  res.send({products:['shoes','shorts']})
})

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 ",
    name: "sumit",
    error: "help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "sumit",
    error: "page not found",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
