/* const HID = require('node-hid');

try {
    const devices = HID.devices();
    if (devices.length === 0) {
        console.log("No HID devices found.");
    } else {
        console.log(devices);
    }
} catch (error) {
    console.error("Error accessing HID devices:", error);
}
 */

/* let name1;
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your name? \n`, name => {
    name1 = name
  rl.close();
});
console.log(name1) */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const name = await askQuestion("What's your name? \n");
  console.log(`Your name is ${name}`);
  rl.close();
}

main();