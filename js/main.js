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

function adjustProductDetailsMargin() {
  const navbar = document.querySelector(".header");
  const subheader = document.querySelector(".sub-header");
  const productDiv = document.querySelector(".product-details");
  if (navbar && subheader && productDiv) {
    let nHeight = navbar.offsetHeight;
    let sHeight = subheader.offsetHeight;

    let tHeight = nHeight + sHeight;

    productDiv.style.marginTop = tHeight + "px";
  }
}

window.addEventListener("load", adjustProductDetailsMargin);
window.addEventListener("resize", adjustProductDetailsMargin);

// scroll top show div

window.addEventListener("scroll", function () {
  const element = document.getElementById("header_short_details");
  const element1 = document.getElementById("product_feature_nav");

  // Use requestAnimationFrame for smoother scroll handling
  requestAnimationFrame(function () {
    if (window.scrollY > 50) {
      element.classList.add("show");
      element1.classList.add("hide");
    } else {
      element.classList.remove("show");
      element1.classList.remove("hide");
    }
  });
});

// Our Product Home Page

function adjustProductHomeMargin() {
  const navbar = document.querySelector(".header");
  const ourProductHome_Hero_Section = document.querySelector(".Our_Product_Hero_Section");

  if (navbar && ourProductHome_Hero_Section) {
    let navHeight = navbar.offsetHeight;
    ourProductHome_Hero_Section.style.marginTop = navHeight + "px";
  }
}

window.addEventListener("load", adjustProductHomeMargin);
window.addEventListener("resize", adjustProductHomeMargin);



// hero section ourproducthome
 var swiper = new Swiper(".myOurProductSlider", {
   slidesPerView: 1,
   spaceBetween: 10,
   centeredSlides: true,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   loop: true,
 });

//  Our Journey

 var swiper = new Swiper(".myOurJourney", {
   slidesPerView: 2,
   spaceBetween: 0,
   loop: true,
   centeredSlides: false,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
  
 });

