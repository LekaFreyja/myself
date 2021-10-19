jQuery(document).ready(function($) {
  "use strict";
  $("#testimonials-list").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1050: {
        items: 3
      }
    }
  });
});