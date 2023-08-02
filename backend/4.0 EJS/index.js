import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

function finddaytype(){
    const today = new Date();
    const day = today.getDay();
    if(0 < day && day < 6){
        return "Weekday";
    }else{
        return "Weekend";
    }
}

function findadvice(){
    const today = new Date();
    const day = today.getDay();
    if(0 < day && day < 6){
        return "It's time to work hard!";
    }else{
        return "It's time to have fun!";
    }
}

app.get("/", (req, res) => {
    res.render("index.ejs", 
    {
        dayType : finddaytype(),
        advice : findadvice(),
    });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});