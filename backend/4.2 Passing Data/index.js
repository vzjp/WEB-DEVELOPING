import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
function countLetters(words){
  let numberOfLetters = 0;
  words.forEach(word=> {
    numberOfLetters += word.length;
  });
  return numberOfLetters;
}

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  const lName = req.body.lName;
  const fName = req.body.fName;
  res.render(__dirname + "/views/index.ejs", {
    numberOfLetters : countLetters([fName, lName])
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
