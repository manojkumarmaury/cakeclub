/*  ---------------------------------------------------
    Theme Name: Cake
    Description: Cake e-commerce tamplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Search Switch
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  //Canvas Menu
  $(".canvas__open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*-----------------------
        Hero Slider
    ------------------------*/
  $(".hero__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'><i/>",
      "<i class='fa fa-angle-right'><i/>",
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
  });

  /*--------------------------
        Categories Slider
    ----------------------------*/
  $(".categories__slider").owlCarousel({
    loop: true,
    margin: 22,
    items: 5,
    dots: false,
    nav: true,
    navText: [
      "<span class='arrow_carrot-left'><span/>",
      "<span class='arrow_carrot-right'><span/>",
    ],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  /*-----------------------------
        Testimonial Slider
    -------------------------------*/
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 2,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  /*---------------------------------
        Related Products Slider
    ----------------------------------*/
  $(".related__products__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    dots: false,
    nav: true,
    navText: [
      "<span class='arrow_carrot-left'><span/>",
      "<span class='arrow_carrot-right'><span/>",
    ],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  /*--------------------------
        Select
    ----------------------------*/
  $("select").niceSelect();

  /*------------------
		Magnific
	--------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
        Barfiller
    --------------------*/
  $("#bar1").barfiller({
    barColor: "#111111",
    duration: 2000,
  });
  $("#bar2").barfiller({
    barColor: "#111111",
    duration: 2000,
  });
  $("#bar3").barfiller({
    barColor: "#111111",
    duration: 2000,
  });

  /*------------------
		Single Product
	--------------------*/
  $(".product__details__thumb img").on("click", function () {
    $(".product__details__thumb .pt__item").removeClass("active");
    $(this).addClass("active");
    var imgurl = $(this).data("imgbigurl");
    var bigImg = $(".big_img").attr("src");
    if (imgurl != bigImg) {
      $(".big_img").attr({
        src: imgurl,
      });
    }
  });

  /*-------------------
		Quantity change
	--------------------- */
  var proQty = $(".pro-qty");
  proQty.prepend('<span class="dec qtybtn">-</span>');
  proQty.append('<span class="inc qtybtn">+</span>');
  proQty.on("click", ".qtybtn", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  $(".product__details__thumb").niceScroll({
    cursorborder: "",
    cursorcolor: "rgba(0, 0, 0, 0.5)",
    boxzoom: false,
  });
})(jQuery);

// manoj js

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    let navbar = document.querySelector("#navbarSupportedContent");
    navbar.classList.toggle("show");
  });
document.querySelector(".close-navbar").addEventListener("click", function () {
  document.querySelector("#navbarSupportedContent").classList.remove("show");
});

// hero section

function adjustHeroMargin() {
  const navbar = document.querySelector(".header");
  const heroSection = document.querySelector(".hero");

  if (navbar && heroSection) {
    let navHeight = navbar.offsetHeight;
    heroSection.style.marginTop = navHeight + "px";
  }
}

// Run on page load and window resize
window.addEventListener("load", adjustHeroMargin);
window.addEventListener("resize", adjustHeroMargin);

// Our Brand
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

swiper.el.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

swiper.el.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});

// product details js


function adjustSubHeaderMargin() {
  const navbar = document.querySelector(".header");
  const subheader = document.querySelector(".sub-header");

  if (navbar && subheader) {
    let navHeight = navbar.offsetHeight;
    subheader.style.marginTop = navHeight + "px";
  }
}

window.addEventListener("load", adjustSubHeaderMargin);
window.addEventListener("resize", adjustSubHeaderMargin);


// function adjustSubHeaderMargin() {
//   const navbar = document.querySelector(".header");
//   const subheader = document.querySelector(".sub-header");

//   if (navbar && subheader) {
//     let navHeight = navbar.offsetHeight;

//     // For responsive design based on screen size
//     if (window.innerWidth < 576) {
//       // Small screens (phones)
//       subheader.style.marginTop = navHeight + "px";
//     } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
//       // Medium screens (small tablets)
//       subheader.style.marginTop = navHeight + "px";
//     } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
//       // Large screens (tablets)
//       subheader.style.marginTop = navHeight + "px";
//     } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
//       // Extra Large screens (laptops)
//       subheader.style.marginTop = navHeight + "px";
//     } else {
//       // Very Large screens (desktop)
//       subheader.style.marginTop = navHeight + "px";
//     }
//   }
// }

window.addEventListener("load", adjustSubHeaderMargin);
window.addEventListener("resize", adjustSubHeaderMargin);


