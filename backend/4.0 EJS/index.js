import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

function finddaytype(){
    const today = new Date();
    const day = today.getDay();
    if(0 < day && day < 6){
        return {
            daytype:"Weekday",
            advice:"It's time to work hard!"
        }
    }else{
        return {
            daytype:"Weekend",
            advice:"It's time to have fun!"
        }
    }
}

app.get("/", (req, res) => {
    const daytypeandadvice = finddaytype();
    res.render("index.ejs", 
    {
        dayType : daytypeandadvice.daytype,
        advice : daytypeandadvice.advice,
    });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});