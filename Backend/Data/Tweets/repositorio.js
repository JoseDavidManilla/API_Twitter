
const Twitter = require('twit');
const axios = require('axios');
const credentials = require('../../config/config').twitterCredentials;
const apiClient = new Twitter(credentials);

async function findRecentTweets() {
    const params = { tweet_mode: 'extended', count: 10 };
    const data = await apiClient.get(`statuses/home_timeline`, params);
    return data;
}

async function findTweetsByWord(word) {
    if (!word) throw new Error('Se requiere una palabra para realizar la búsqueda');
    const params = { tweet_mode: 'extended', count: 10, q: word, result_type: 'recent', lang: 'es' };
    const data = await apiClient.get(`search/tweets`, params);
    return data;
}

async function findTweetsById(){
    // await apiClient.axios({
    //url: 'https://api.twitter.com/2/tweets',
    //method: 'get',
    //fields: ['ids',
    //'expansions{attachments.poll_ids, attachments.media_keys, author_id, entities.mentions.username, geo.place_id, in_reply_to_user_id, referenced_tweets.id, referenced_tweets.id.author_id}',
    //'media.fields{duration_ms, height, media_key, preview_image_url, type, url, width, public_metrics, non_public_metrics, organic_metrics, promoted_metrics, alt_text}',
    //'place.fields{contained_within, country, country_code, full_name, geo, id, name, place_type}',
    //'poll.fields{duration_minutes, end_datetime, id, options, voting_status}',
    //'tweet.fields{attachments, author_id, context_annotations, conversation_id, created_at, entities, geo, id, in_reply_to_user_id, lang, non_public_metrics, public_metrics, organic_metrics, promoted_metrics, possibly_sensitive, referenced_tweets, reply_settings, source, text, withheld}',
    //'user.fields{created_at, description, entities, id, location, name, pinned_tweet_id, profile_image_url, protected, public_metrics, url, username, verified, withheld}']
    //})
}

module.exports = {
    findRecentTweets, findTweetsByWord,
    findTweetsById
};
