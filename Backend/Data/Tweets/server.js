const { findRecentTweets, findTweetsByWord, findTweetsById} = require('./repositorio');

async function searchRecentTweets() {
    return await findRecentTweets();
}
async function searchRecentTweetId() {
    return await  findTweetsById();
}

async function searchTweetsByWord(word) {
    return await findTweetsByWord(word);
}

module.exports = {
    searchRecentTweets, searchTweetsByWord,searchRecentTweetId
}
