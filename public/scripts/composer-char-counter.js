$(() => {
  $('#tweetText').on('keyup', () => {
    let tweetLength = $('#tweetText').val().length;
    let leftSpace = 140 - tweetLength;
    if (leftSpace < 0) {
      $('#counter').css({color: 'red'});
    } else {
      $('#counter').css({color: 'black'});
    }
    $('#counter').text(leftSpace);
  });
});