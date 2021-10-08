//when page is loaded
$(() => {
  $('#error').hide();
  //create single dynamic tweet using jQuery
  const createTweetElement = (tweet) => {

  // create tags dynamically and insert pulled data from backend
  const $avatars = $(`<img src=${tweet.user.avatars} alt="Image" width="50px" height="50px" />`);
  const $name = $('<h2>').text(tweet.user.name);
  const $headerContainer = $('<div>').addClass('header-container');

  //append tags to div container
  $headerContainer.append($avatars, $name);
  const $handle = $('<h2>').text(tweet.user.handle);
  const $header = $('<header>').append($headerContainer, $handle);

  //add class to p tag
  const $content = $('<p>').addClass('content');
  $content.text(tweet.content.text);
  const $hr = $('<hr>');

  //use timeago js to format date
  const $createdAt = $('<p>').text(timeago.format(tweet['created_at']));
  const $fontAwesome = $('<span>').addClass('font-awesome');
  const $faFlag = $('<i>').addClass("fa fa-flag");
  const $faRetweet = $('<i>').addClass("fa fa-retweet");
  const $faHeart = $('<i>').addClass("fa fa-heart");
  $fontAwesome.append($faFlag, $faRetweet, $faHeart);
  const $footer = $('<footer>').append($createdAt, $fontAwesome);
  const $tweet = $('<article>').addClass('tweet');
  
  //add header, content, hr and footer to tweet article
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

//make a get request to load tweets
const loadtweets = () => {
  $.get('/tweets/', (tweets) => {
    renderTweets(tweets);
  });
}

loadtweets();

//form toggle 
$('.nav-item').on('click',() => {
  $('.new-tweet').slideToggle()
  $('#tweet-text').focus()
});

//When form is submitted, serialized the data and make a post request to create tweet and then load tweets
$("#new-tweet-form").on("submit", (event) => {
    event.preventDefault();
    const input = $('#tweet-text');
    //checks for validation when input is empty, length >140
    if (!input.val()) {
      $('.error-container').show().slideDown('slow', () => {
        $('.error-message').text('Error: Input is empty!');
      });
    } else if (input.val().length > 140) {
      $('.error-container').show().slideDown('slow', () => {
        $('.error-message').text('Error: Exceeded character Limit');
      });
    } else { 
      $('.error-container').slideUp();
      const serializedData = $("#new-tweet-form").serialize();
      //make a post request to create tweet
      $.post("/tweets/", serializedData, () => {
      loadtweets();
      });
      $('#tweet-text').val('');
      $('#counter').val(140);
    }
  });
});
