(function($) {
  var $navBar = $('header.nav');

  function collapseNavbar() {
    $navBar.toggleClass('collapse', $navBar.offset().top > $navBar.height());
  }

  $(window).on('scroll', collapseNavbar);
  collapseNavbar();

  $('.projects article').each(function(index, $item) {
    var $full = $('.screenshot img', $item);
    var $previews = $('.previews a', $item);
    $previews.on('click', function(event) {
      event.preventDefault();
      $('img', $previews).removeClass('active');
      $('img', this).addClass('active');
      $full.attr('src', this.href);
    });
  });
})(jQuery);
