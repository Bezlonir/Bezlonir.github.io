

$(document).ready(function(){
  // on click, set the clicked link to active styling
  $('.navbar li').click(function(){
    var currentActive = $('.active').get(0);
    var thisClick = $(this).get(0);
    if (currentActive != thisClick) {
      currentActive.setAttribute('class', ' ');
      thisClick.setAttribute('class', 'active');
    };
  });

  sizePreview();


  $(window).resize(function () {
    sizePreview();
  });
});

function sizePreview() {
  var sitePreviews = [];
  $sitePreviews = $('.site-preview');

  $sitePreviews.each(function() {
    var sitePreviewWidth = $(this).width();
    var sitePreviewHeight;
    if ($(window).width() < 768) {
      sitePreviewHeight = sitePreviewWidth * 0.9;
    } else {
      if ($(this).hasClass("alliance-preview")){
        sitePreviewHeight = sitePreviewWidth * 0.7;
      } else {
        sitePreviewHeight = sitePreviewWidth * 1;
      };
    };
    $(this).css('height', sitePreviewHeight);
  });

};
