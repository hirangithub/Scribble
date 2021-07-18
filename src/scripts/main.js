// object literal
var myFeature = { 
    filterSlider: function() {        
        $('.creative-field-options').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
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
        myFeature.filterSlider();
        myFeature.navBarSlideUp();
    }

}


$(function () {    
    //initialize core object
    myFeature.init(); 

});
