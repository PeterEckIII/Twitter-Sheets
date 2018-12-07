const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./client_secret.json');

const doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID_HERE');

const writeToSheets = ( twitterObj ) => {
    doc.useServiceAccountAuth(creds, function (err) {
        doc.addRow(1, {
            author: twitterObj.author,
            text: twitterObj.text,
            month: twitterObj.month,
            day: twitterObj.day,
            year: twitterObj.year
        }, function (err) {
            console.log(err);
        });
    });
    
}

module.exports = {
    writeToSheets
}
