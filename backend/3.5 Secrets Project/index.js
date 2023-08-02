import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(req.body.password === "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.redirect("http://localhost:3000");
    }
})

app.listen(port, () => {
    console.log("start listening on port " + port);
});
