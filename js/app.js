function closeDropdownMenu() {
  $('.btn-secondary').dropdown('toggle');
}

$('#sidebar_collapse').click(function () {

  if ($('.sidebar_menu').hasClass('open')) {
    $('.sidebar_menu').removeClass('open');
    $('#logo img').attr('src', '../images/logo.png');
    $('#logo').attr('class', 'logo');
  } else {
    $('.sidebar_menu').addClass('open');
    $('#logo img').attr('src', '../images/logo-big.jpeg');
    $('#logo').attr('class', 'logo_big');
  }
}) 