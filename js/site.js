(function($) {
  var $navBar = $('header.nav');

  function collapseNavbar() {
    $navBar.toggleClass('collapse', $navBar.offset().top > $navBar.height());
  }

  $(window).on('scroll', collapseNavbar);
  collapseNavbar();

  $('.projects article').each(function(index, $item) {
    var $fullImage = $('.screenshot img', $item);
    var $fullVideo = $('.screenshot video', $item);
    var $previews = $('.previews a', $item);
    $previews.on('click', function(event) {
      event.preventDefault();
      $previews.removeClass('active');
      var $link = $(this);
      $link.addClass('active');
      if ($link.hasClass('video')) {
        $fullImage.addClass('hidden');

        $fullVideo.find('source').remove();
        $('<source type="video/mp4" src="' + this.href + '"/>').appendTo($fullVideo);
        $('<source type="video/webm" src="' + this.href.replace(/\.mp4$/, '.webm') + '"/>').appendTo($fullVideo);

        $fullVideo.removeClass('hidden');
        $fullVideo[0].currentTime = 0;
        $fullVideo[0].play();
      }
      else {
        if ($fullVideo.length) {
          $fullVideo.addClass('hidden');
          $fullVideo[0].pause();
        }
        $fullImage.removeClass('hidden').attr('src', this.href);
      }
    });
  });

  $.expr[':'].external = function(obj) {
    return !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname);
  };

  $('a:external').attr('target', '_blank');
})(jQuery);
