// This is where it all goes :)
$( document ).ready(function() {
  $('#menu').click(function() {
    $('.nav-bar').toggleClass('expand');
    $('.nav-items li').toggleClass('show');
  })
  $('.expand-details').click(function() {
    $(this).prev()
      .find('.details')
      .slideToggle();
  })
});
