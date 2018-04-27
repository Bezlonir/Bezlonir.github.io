

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
  var sitePreviewWidth = $('.site-preview').width();
  var sitePreviewHeight = sitePreviewWidth * 0.6;
  $('.site-preview').css('height', sitePreviewHeight);
};
