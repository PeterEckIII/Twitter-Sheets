# Twitter-Sheets
An integration of the Twitter and Google Sheets APIs to pull tweets from CEOs for use in a friend's dissertation 

### Download the project by cloning the link to your local machine

### Install dependencies
`npm install`

### Set the Google Spreadsheet ID
###### Spreadsheet.js
`const doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID_HERE');`

### Set your user list
###### Users.js
```module.exports = {
    userList: [
        "YOUR VALUE HERE"
    ],
    idList: [
        YOUR_ID_HERE 
    ]
}
```

### Run
`node index.js`

Your Google spreadsheet will begin to fill with information. Consult the Twitter API endpoints to customize what 
fields are pulled and the Google Spreadsheet API to determine where to place them.

