const Twit = require("twit");
const users = require('./users');
const twitConfig = require('./config');
const spreadsheet = require('./spreadsheet');

const t = new Twit(twitConfig);


const getTweets = function ( idList, callback ) {
    for (let i = 0; i < idList.length; i++) {
        // Each id gets its own GET method
        t.get('statuses/user_timeline', {id: idList[i], count: 1000}, function(err, data, response) {
            if (err) {
                console.log("API ERROR: Cannot log tweets with error:", err);
            }
            console.log(data)
            // For each tweet, extract some information and set variables equal to the values of those properties
            for (let i = 0; i < data.length; i++) {
                const date = data[i]['created_at'];
                const formattedDate = new Date(date);
                const month = formattedDate.getMonth();
                const year = formattedDate.getFullYear();
                const day = formattedDate.getDate();
                const tweetedBy = data[i].user.name;
                const tweetText = data[i]['text'];
                
                // Looking for tweets in September 2018
                if (year === 2018 && (month == 5 || month == 6 || month == 7 || month == 8)) {
                    // Group each result into a tweetObj to be able to easily parse into the Google Sheet call
                    const tweetObj = {
                        author: tweetedBy,
                        text: tweetText,
                        month: month,
                        day: day,
                        year: year
                    }
                    callback(tweetObj);
                }
            }
        });
    }
}

getTweets(users.idList, spreadsheet.writeToSheets);
