import express from "express"

var app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Do you know who i am?");
    console.log(req.path);
});

app.get("/contact" ,(req, res) => {
    res.send("Phone: +81 111-111-1111");
});

app.get("/about", (req, res) => {
    res.send("<h1>about me</h1>");
});
app.listen(port, () => {
    console.log(`Express is listening port ${port}`)
});