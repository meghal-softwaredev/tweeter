/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
const createTweetElement = (tweet) => {
  const $avatars = $(`<img src=${tweet.user.avatars} alt="Image" width="50px" height="50px" />`);
  const $name = $('<h2>').text(tweet.user.name);
  const $headerContainer = $('<div>').addClass('header-container');
  $headerContainer.append($avatars, $name);
  
  const $handle = $('<h2>').text(tweet.user.handle);
  const $header = $('<header>').append($headerContainer, $handle);
  
  const $content = $('<p>').addClass('content');
  $content.text(tweet.content.text);

  const $hr = $('<hr>');
  
  const $createdAt = $('<p>').text(timeago.format(tweet['created_at']));
  const $fontAwesome = $(`<span>
  <i class="fa fa-flag iHover1" aria-hidden="true"></i>
  <i class="fa fa-retweet iHover2" aria-hidden="true"></i>
  <i class="fa fa-heart iHover3" aria-hidden="true"></i>
  </span>`);
  const $footer = $('<footer>').append($createdAt, $fontAwesome);
  
  const $tweet = $('<article>').addClass('tweet');
  return $tweet.append($header, $content, $hr, $footer);
};

const renderTweets = (tweets) => {
  const $tweetContainer = $("#tweet-container").empty();

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetContainer.prepend($tweet);
    }
};

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

renderTweets(data);
});
