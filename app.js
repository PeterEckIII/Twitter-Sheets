const Twit = require("twit");
const config = require("./config.js");

const t = new Twit(config);

const user_list = [
    "MikeGianoni",
    "langleysteinert",
    "ChuckRobbins",
    "PeterUngaro1",
    "MMorrisonDW",
    "DanDSpringer",
    "drewhouston",
    "stevenhumphreys",
    "satyanadella",
    "rustyfrantz"
]

const id_list = [
    820479524173332500,
    34368648,
    14225267,
    76584268,
    20571756,
    16810559,
    2847960924,
    333684115,
    285092801,
    399471748 
]

function getTweets ( id ) {
    for (let i = 0; i < id.length; i++) {
        // Each id gets its own GET method
        t.get('statuses/user_timeline', {id: id[i], count: 1000}, function(err, data, response) {
            if (err) {
                console.log("API ERROR: Cannot log tweets with error:", err);
            }
            // For each tweet, extract some information and set variables equal to the values of those properties
            for (let i = 0; i < data.length; i++) {
                const date = data[i]['created_at'];
                const formattedDate = new Date(date);
                const month = formattedDate.getMonth();
                const year = formattedDate.getFullYear();
                const day = formattedDate.getDate();
    
                // Looking for tweets in September 2018
                if (month === 8 && year === 2018) {
                    console.log("TWEETED BY:", data[i].user.name)
                    console.log(data[i]['text']);
                    console.log(month + "-" + day + "-" + year);
                }
            }
        });
    }
}

getTweets(id_list);
