(function($) {
  var $navBar = $('header.nav');
  function collapseNavbar() {
    $navBar.toggleClass('collapse', $navBar.offset().top > $navBar.height());
  }

  $(window).on('scroll', collapseNavbar);
  collapseNavbar();
})(jQuery);
