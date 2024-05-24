const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.name', { x: '-100%', ease: 'bounce' })
  .from('.name-disc', { y: '100%', ease: 'bounce' });

  $('.nav-dots').on('click', function() {
    const timeline = gsap.timeline({ defaults: { duration: 1 }});
    timeline
        .from('.name', { x: '-100%', ease: 'bounce' })
        .from('.name-disc', { y: '100%', ease: 'bounce' });
  });

  $(document).ready(function() {
    $('.hamburger-btn').click(function() {
      $('.sidebar').toggleClass('sidebar-active');
    });
    var $carousel = $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      nav:true,
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
  // cursor animate
var $cursor = $('.cursor');
function moveCursor(e) {
    $cursor.addClass('is-moving');
    
    TweenLite.to($cursor, 1, {
      left: e.pageX,
      top: e.pageY,
      ease: Power4.easeOut
    });
    
    clearTimeout(timer);
  
    var timer = setTimeout(function() {
      $cursor.removeClass('is-moving');
    }, 3000);
}

$(window).on('mousemove', moveCursor);

$('.next').click(function (){
  $('.next span').addClass('clicked');
  setTimeout(function() {
      $('.slick-next').click();
      $('.nav-dots').click();
  }, 3000);
});
// Navpills
document.querySelectorAll('.nav-link').forEach(function(pill) {
  pill.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active class from all nav links
      document.querySelectorAll('.nav-link').forEach(function(el) {
          el.classList.remove('active');
      });
      // Add active class to the clicked nav link
      this.classList.add('active');

      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(function(section) {
          section.classList.remove('active');
      });
      // Show the targeted content section
      var target = this.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
  });
});