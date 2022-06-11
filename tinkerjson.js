let fs = require("fs");

// let buffer = fs.readFileSync("./example.json");
// console.log(buffer);
// console.log("----------------------------");
// //Array k form me hai

// let data = JSON.parse(buffer);
let data = require("./example.json");// ye direct require parse wala step hata karke seedha require karta hai 

// console.log(data);
// data.push({
//     "name": "KARN",
//     "last_name": "Jobs",
//     "isAvenger": true,
//     "friends": [
//         "Bill",
//         "Mark",
//         "Steve"
//     ],
//     "age": 56,
//     "address": {
//         "city": "Cupertino",
//         "state": "California"
//     }

// });
// // ye data ko write karne k liye jisse kuch change kar sake

// let stringData = JSON.stringify(data);
// fs.writeFileSync("./example.json", stringData);
