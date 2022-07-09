var fs = require('fs');

class ReadFile {
    
    constructor(myFile) {
        this.myFile = myFile;
    }

    myData() {
        try {
            var data = fs.readFileSync(this.myFile, 'utf8');
            console.log(data);
            return data;
        } catch (e) {
            console.log('Error:', e.stack);
        }


    }
}

module.exports = ReadFile;