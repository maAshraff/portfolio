const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.header', { y: '-100%', ease: 'bounce' });

  $(document).ready(function() {
    $('.hamburger-btn').click(function() {
      $('.sidebar').toggleClass('sidebar-active');
    });
    var $carousel = $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    // Update navigation dots text
    $('.carousel').on('afterChange', function(event, slick, currentSlide) {
      $('.nav-dots span').removeClass('active');
      $('.nav-dots span').eq(currentSlide).addClass('active');
    });
  
    // Handle click on navigation dots
    $('.nav-dots span').click(function() {
      var index = $(this).index();
      $carousel.slick('slickGoTo', index);
    });
  });
  