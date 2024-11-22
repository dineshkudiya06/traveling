$("#owl-carousel-one").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("#owl-carousel-two").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// $(document).ready(function () {
//   $("#slick-carousel-two").slick({
//     infinite: true, // Enable infinite scrolling
//     slidesToShow: 3, // Display 4 slides at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     arrows: true, // Enable navigation arrows
//     dots: false, // Disable dots
//     prevArrow:
//       '<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
//     nextArrow:
//       '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
//     responsive: [
//       {
//         breakpoint: 1000, // For screens <= 1000px
//         settings: {
//           slidesToShow: 3, // Show 3 slides
//         },
//       },
//       {
//         breakpoint: 600, // For screens <= 600px
//         settings: {
//           slidesToShow: 2, // Show 2 slides
//         },
//       },
//       {
//         breakpoint: 480, // For screens <= 480px
//         settings: {
//           slidesToShow: 1, // Show 1 slide
//         },
//       },
//     ],
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active classes
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to clicked button and corresponding panel
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
});

$(window).on("scroll", function () {
  const header = $("header");
  if ($(this).scrollTop() > 50) {
    header.addClass("header-background");
  } else {
    header.removeClass("header-background");
  }
});

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".mobile-menu").toggleClass("mobile-menu-back");
  });
});
