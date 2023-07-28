import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended: true}));

function bandnamemaker(req, res, next){
  console.log(req.body);
  bandname = req.body.street.charAt(0).toUpperCase() + req.body.street.slice(1) + req.body.pet.charAt(0).toUpperCase() + req.body.pet.slice(1);
  next();
}

app.use(bandnamemaker);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is : </h1> <p>${bandname}</p>`) 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
