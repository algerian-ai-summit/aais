(function ($) {

  "use strict";

  $(window).on('load', function () {

    /*Page Loader active
      ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    // Ayoub
    window.addEventListener("scroll", function () {
      var logo2 = document.getElementById("logo1");
      var logo1 = document.getElementById("logo2");
    
      // Vérifier la position de l'élément par rapport à la fenêtre
      var Position = window.scrollY || document.documentElement.scrollTop;
    
      // Si la position est inférieure à 200px et screen size is mobile (or tablet), afficher logo2 et masquer logo1
      if (window.innerWidth <= 768) {
        logo1.style.display = "block";
        logo2.style.display = "none";
      } else if (Position < 200) {
        logo1.style.display = "none";
        logo2.style.display = "block";
      } else {
        // Sinon, afficher logo1 et masquer logo2
        logo1.style.display = "block";
        logo2.style.display = "none";
      }
    });

    // Claude
    // window.addEventListener('scroll', function () {
    //   const logo1 = document.getElementById('logo1');
    //   const logo2 = document.getElementById('logo2');
    
    //   if (window.pageYOffset > 200) {
    //     logo1.style.display = 'none';
    //     logo2.style.display = 'block';
    //   } else {
    //     logo1.style.display = 'block';
    //     logo2.style.display = 'none';
    //   }
    // });
    // Claude


    /* ==========================================================================
       countdown timer
       ========================================================================== */
    jQuery('#clock').countdown('2024-05-25 09:00:00', function (event) {
      var $this = jQuery(this).html(event.strftime(''
      + '<div class="time-entry days"><span>%-D</span> <b>:</b> Days</div> '
      + '<div class="time-entry hours"><span>%H</span> <b>:</b> Hours</div> '
      + '<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> '
      + '<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
      if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
          $('.navbar-collapse').collapse('hide');
        });
      }
      else {
        $('.navbar .navbar-inverse a').off('click');
      }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
  ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
      delay: 10,
      time: 1500
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });

}(jQuery));