$(function(){
  $('#start').mouseover(function(){
    // Initial setup;
    let isLose = false;
    $('.boundary').removeClass('youlose');
    $('#status').text('Click the "S" to begin.');
    // Beginning of the game;
    $('.boundary').mouseover(function(){
      isLose = lose();
    });
    $('#maze').mouseleave(function(){
      isLose = lose();
    });

    $('#end').mouseover(function(){
      if (!isLose)
        $('#status').text('You won!');
    });
  });

  function lose() {
    $('.boundary').addClass('youlose');
    $('#status').text('You lose!');
    return true;
  }
});