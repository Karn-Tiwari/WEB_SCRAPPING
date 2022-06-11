// const fs = require("fs");
// const path = require("path");
// console.log("Before");
// let data = fs.readFileSync("f1.txt");
// console.log(""+data);
// console.log("After");
// This is the callback function
// maal lete hai f1.txt bht jyada badi file hai aur top to bottom jab scrapp karenge to load ho jayega aur wahi pe ruk jayega agee work nhi hoga 
// iseliye hum call back function ka use karte hai jisme mera read to karega f1.txt lekin execute nhi karega agar file badi hogi to wo agee badh jaeyga aur agee ki cheeze execute karne lagega
const fs = require("fs");
console.log("Before");
fs.readFile("f1.txt",cb);
function cb(err,data){//pehla parameter error aur dusra data rahega 
    
    console.log("data",data);
} 
console.log("After");
console.log("mean while");