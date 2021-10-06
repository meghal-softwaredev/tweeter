$(() => {
  $("#tweet-container").hover(() => {
    $('#tweet-container').css('box-shadow', '5px 5px 0px #6c80c3');
    }, () => {
    $('#tweet-container').css('box-shadow', 'none');
  });

  $('.iHover1').hover(() => {
    $('.iHover1').css({'color': '#C2983B'});
  }, () => {
    $('.iHover1').css({'color': '#4056A1'});
  });

  $('.iHover2').hover(() => {
    $('.iHover2').css({'color': '#C2983B'});
  }, () => {
    $('.iHover2').css({'color': '#4056A1'});
  });

  $('.iHover3').hover(() => {
    $('.iHover3').css({'color': '#C2983B'});
  }, () => {
    $('.iHover3').css({'color': '#4056A1'});
  });
});
