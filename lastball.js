const request = require('request');
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
console.log("Before");
request(url,cb);
function cb(err,response,html){
    if(err) console.log("error");
    else{
        console.log("html");
    }
}
console.log("After");