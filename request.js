// const request = require("request");
// // feature -> request
// console.log("Before");
// request("https://www.worldometers.info/coronavirus/",cb);
// console.log("After");
// function cb(err,response,html){
//     console.log("error:",err);//Print the error if one occurred
//     console.log("statusCode:",response&&response.statusCode);//Print the responce status code if a response was

//     console.log("html:",html);//Print the HTML for the Google homepage.
// }

const request = require("request");
const cheerio = require("cheerio");
const chalk= require("chalk");
// feature -> request
console.log("Before");
request("https://www.worldometers.info/coronavirus/",cb);
console.log("After");
function cb(err,response,html){
   if(err) console.log("error:",err);//Print the error if one occurred

   else
    console.log("html:",html);//Print the HTML for the Google homepage.
}

function handlehtml(html){
    let selTool = cheerio.load(html);
    // let his = selTool("h1");
    let contentArr = setTool("#maincounter-wrap span");
    // [i] -> wrap setTool
    for(let i = 0; i < contentArr.length; i++){
    let data = selTool(contentArr[i]).text();
    console.log("data",data);

//console.log(h1s.length);

    }
    
}
