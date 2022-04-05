var testimonialThumbs = new Swiper(".testimonial-thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  freeMode: true,
  autoplay: true,
  loop: true,
  speed: 3000
});
var testimonialContent = new Swiper(".testimonial-comment", {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 3000,
  thumbs: {
    swiper: testimonialThumbs
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

$('.owl-carousel1').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    800: {
      items: 6
    }
  }
})


var mybutton = document.getElementById("myBtn");
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTo > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

window.onscroll = function () { scrollFunction() };

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

alert("Em lam het kha nang thoi a T-T");