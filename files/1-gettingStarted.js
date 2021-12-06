const readline = require("readline"); // node module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your IP ?: ", function(ip) {
    console.log(`You has been hacked lol this is your IP :${ip}, give me 0.1$ if you wan't to be your IP being secret`); // message after answer
    rl.close(); // closing the rl,
});

rl.on("close", function() { // close event if rl closed
    console.log("closed");
    process.exit(0); // exit from node js program
});