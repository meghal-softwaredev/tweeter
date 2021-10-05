$(() => {
  $('.tweetContainer').on('mouseover', () => {
    $('.tweetContainer').css('box-shadow', '5px 5px 0px #6c80c3');
  });

  $('.iHover1').hover(() => {
    $('.iHover1').css({'color': '#C2983B'});
  });

  $('.iHover2').on('mouseover', () => {
    $('.iHover2').css({'color': '#C2983B'});
  });

  $('.iHover3').on('mouseover', () => {
    $('.iHover3').css({'color': '#C2983B'});
  });
});
