/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // Sticky Menu
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // venobox popup
  $('.venobox').venobox();

  // dropdown menu
  var mobileWidth = 992;
  var navcollapse = $('.navbar .dropdown');
  $(window).on('resize', function () {
    navcollapse.children('.dropdown-menu').hide();
  });
  navcollapse.hover(function () {
    if ($(window).innerWidth() >= mobileWidth) {
      $(this).children('.dropdown-menu').stop(true, false, true).slideToggle(250);
    }
  });

  // Progress Bar
  $(window).on('load', function () {
    $('.progress-bar').each(function () {
      var width = $(this).data('percent');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.count').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
      });
    });
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // video iframe load
  $('.play-icon i').on('click', function () {
    var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });


  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // testimonial slider
  var containerEl2 = document.querySelector('#slider');
  if (containerEl2) {
    window.slider = $('#slider').cardSlider({
      slideClass: 'slide',
      delay: 300,
      transition: 'ease'
    });
  }


})(jQuery);


// ==========================
// Header & Footer dinámicos
// ==========================

function getMainHeaderHtml() {
  return `
<header class="navigation fixed-top">
<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand d-flex align-items-center" href="index.html">
    <img src="images/logo.png" alt="Fiestas & Dulces" class="logo-img">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
    aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse text-center" id="navigation">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Inicio</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="serviciosDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Servicios
        </a>
        <div class="dropdown-menu" aria-labelledby="serviciosDropdown">
          <a class="dropdown-item" href="servicio-canto.html">Canto en vivo</a>
          <a class="dropdown-item" href="servicio-postres.html">Postres y repostería</a>
          <a class="dropdown-item" href="servicio-mesas-dulces.html">Mesas de dulces</a>
          <a class="dropdown-item" href="servicio-snacks.html">Mesa de snacks</a>
          <a class="dropdown-item" href="servicio-pinta-caritas.html">Pinta caritas</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">Nosotros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
</header>
  `;
}

function getMainFooterHtml() {
  return `
<section class="section">
  <div class="container section-sm overlay-secondary-half bg-cover" data-background="images/backgrounds/cta-bg.jpg" style="background-image: url(&quot;images/backgrounds/cta-bg.jpg&quot;);">
    <div class="row">
      <div class="col-lg-8 offset-lg-1">
        <h2 class="text-gradient-primary">¿Planeamos tu próxima fiesta?</h2>
        <p class="h4 font-weight-bold text-white mb-4">
          Escríbeme por WhatsApp al <span class="text-gradient-primary">222 676 3338</span> y armamos tu paquete ideal.
        </p>
        <a href="https://wa.me/522226763338" target="_blank" class="btn btn-lg btn-primary">
          Enviar WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
<footer class="bg-secondary">
&nbsp;
</footer>
  `;
}

// Insertar header y footer cuando el DOM esté listo
$(function () {
  var headerContainer = document.getElementById('site-header');
  if (headerContainer) {
    headerContainer.innerHTML = getMainHeaderHtml();
  }

  var footerContainer = document.getElementById('site-footer');
  if (footerContainer) {
    footerContainer.innerHTML = getMainFooterHtml();
  }
});
