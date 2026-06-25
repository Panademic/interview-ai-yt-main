const mongoose = require("mongoose")



// async function connectToDB() {

//     try {
//         await mongoose.connect(process.env.MONGO_URI)
//         console.log("Connected to Database")
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log('DNS Servers:', dns.getServers());

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to Database");
    } catch (err) {
        console.log("❌ Connection Failed:", err);
    }
}

module.exports = connectToDB;

