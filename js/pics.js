$(document).ready(function() {

  $("#pictures > div:gt(0)").hide();

  setInterval(function() {
    $('#pictures > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#pictures');
  },  3000);

});
