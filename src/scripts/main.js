// object literal
var myFeature = { 
    filterSlider: function() {        
      $('#filter-slider').lightSlider({
          item: 3,
          autoWidth: true,
          loop: false,
          auto: false,
          slideMove: 1, 
          adaptiveHeight: true,
          enableTouch:true,
          enableDrag:true,
          freeMove:true,
          swipeThreshold: 40,
          pager: false,
          onSliderLoad: function() {
              $('#autoWidth').removeClass('cS-hidden');
          } 
      });           
    },
    navBarSlideUp: function() {
      var previousScroll = 20; 
      $(window).scroll(function(e) { 
          var scroll = $(window).scrollTop();
          if (scroll >= previousScroll) {
              $('.navbar').addClass("navbar-hide");
              if($('.navbar-collapse').hasClass('show')) {
                  $('.navbar-collapse').removeClass('show');
                  $('.navbar-toggler').addClass('collapsed');
                  $('.navbar-toggler').attr('aria-expanded', 'false');
              }            
          } else if (scroll < previousScroll) {
              $('.navbar').removeClass("navbar-hide").addClass('active');
              if (scroll == 0) {
                  $('.navbar').removeClass("navbar-hide active").addClass('got ya');
              }
          }
          previousScroll = scroll;
          
      });
    },    
    init: function() {          
        myFeature.navBarSlideUp();
        myFeature.filterSlider();
    }

}


$(function () {    
    //initialize core object
    myFeature.init(); 



});
