const fs = require('fs');
const bcrypt = require('bcrypt');
const saltRounds = 10;

fs.readFile('./users-pw-plain.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString)
    try {
        users = JSON.parse(jsonString)
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
});
