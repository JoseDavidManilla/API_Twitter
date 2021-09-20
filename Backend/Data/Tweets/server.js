const { findRecentTweets, findTweetsByWord, findTweetsByuser} = require('./repositorio');

async function searchRecentTweets() {
    return await findRecentTweets();
}
async function searchRecentTweetuser(word) {
    return await  findTweetsByuser(word);
}

async function searchTweetsByWord(word) {
    return await findTweetsByWord(word);
}

module.exports = {
    searchRecentTweets, searchTweetsByWord,searchRecentTweetuser
}
