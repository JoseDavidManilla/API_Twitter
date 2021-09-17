const Tweets = require('../../Data/Tweets/server');
const express = require('express');
const router = express.Router();

router.get('/recent', async(req, res) => {
    try {
        const data = await Tweets.searchRecentTweets();
        return res.status(200).json(data);
    }
   catch(e) {
       console.log(e);
        return res.status(500).json(e.message);
    }
});
router.get('/Tw', async(req, res) => {
    try {
        const data = await Tweets.searchRecentTweetId();
        return res.status(200).json(data);
    }
    catch(e) {
        console.log(e);
        return res.status(500).json(e.message);
    }
});
router.get('/search/:word', async(req, res) => {
    try {
        const data = await Tweets.searchTweetsByWord(req.params.word);
        return res.status(200).json(data);
    }
    catch(e) {
        console.log(e);
        return res.status(500).json(e.message);
    }
});

module.exports = router;
