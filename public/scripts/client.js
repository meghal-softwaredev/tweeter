//when page is loaded
$(() => {

//create single dynamic tweet using jQuery
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

//display all tweets
const renderTweets = (tweets) => {
  //Empty tweet container
  const $tweetContainer = $("#tweet-container").empty();

  //repopulate tweet container
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $tweetContainer.prepend($tweet);
  }
};

$("#new-tweet-form").on("submit", (event) => {
    event.preventDefault();
    const serializedData = $("#new-tweet-form").serialize();

    $.post("/tweets/", serializedData, (response) => {
      console.log(response);
      renderTweets(data);
    })
  })

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

});
