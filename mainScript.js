
console.log('mainscript is working');


function typedjs()
{
    var typed = new Typed('#designations', {
        strings: ['Python Developer','Web  Developer ','Blogger ','Youtuber', 'Passionate Learner' , " Machine Learning Engineer"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
        // shuffle: true,
        cursorChar: '✒️',
        bindInputFocusEvents: true, 
        contentType: 'null',
      });
}


function crousals()
{
  var swiper = new Swiper(".mySwiper", {
    effect: "flip", // Add the fade effect: creative  coverflow tile flip cards
    // grabCursor: true,
    speed: 300,
    loop: true,
    autoplay: {
    delay: 2500, // 2.5 seconds
    disableOnInteraction: true,
    preloadImages:true,
    
    // reverseDirection: true
  },
  keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", //bulletes progressbar
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


function main()
{
  typedjs();
  AOS.init();
  crousals();
}

