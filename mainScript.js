
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

function crousals2()
{
  var swiper = new Swiper(".mySwiper2", {
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
      el: ".swiper-pagination2",
      type: "fraction", //bulletes progressbar
      
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });
}

function display(t) {
  console.log(t);

  // Step 1: Add class 'd-none' to elements with class "resume-btn" if not exists
  var resumeButtons = document.querySelectorAll(".section3-item");
  for (var i = 0; i < resumeButtons.length; i++) {
    if (!resumeButtons[i].classList.contains("d-none")) {
      resumeButtons[i].classList.add("d-none");
    }
  }

  // Step 2: Check the value of t and remove "d-none" from the appropriate element
  if (t.getAttribute("value") === "experience") {
    var experienceElement = document.querySelector("#experience");
    if (experienceElement) {
      experienceElement.classList.remove("d-none");
    }
  } else if (t.getAttribute("value") === "education") {
    var educationElement = document.querySelector("#education");
    if (educationElement) {
      educationElement.classList.remove("d-none");
    }
  }
}


function main()
{
  typedjs();
  AOS.init();
  crousals();
  crousals2()
  display(t)
}

