
/**
 * Smooth scroll to a specific part of the page
 * @param id the element to smooth scroll to
 * @param fromTopNav boolean - whether or not scrolling from collapse nav
 */
module.exports.scrollToId = (id, fromTopNav) => {
  var extraOffset = 0;
  
  if (fromTopNav) {
    extraOffset += 30;
  }

  //scroll to the element with jquery
  $('html, body').animate({
    scrollTop: $("#" + id).offset().top - extraOffset
  }, 2000);

  // close navbar-more if scroll from top nav
  if (fromTopNav) {
    $(".collapse-navbar-more").hide();
  }
};
