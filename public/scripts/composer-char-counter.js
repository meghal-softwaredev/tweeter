//keeps track of length of input
$(() => {
  $('#tweet-text').on('keyup', () => {
    const tweetLength = $('#tweet-text').val().length;
    const leftSpace = 140 - tweetLength;
    if (leftSpace < 0) {
      $('#counter').css({color: 'red'});
    } else {
      $('#counter').css({color: '#545149'});
    }
    $('#counter').text(leftSpace);
  });
});