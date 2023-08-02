import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

function isweekend(){
    const thisday = new Date();
    const day = thisday.getDay();
    if(0 < day && day < 6){
        return "Weekday. It's time to work hard!";
    }else{
        return "Weekend. It's time to have fun!";
    }
}

app.get("/", (req, res) => {
    res.render("index.ejs", 
    {
        weekdayorweekend : isweekend(),
    });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});