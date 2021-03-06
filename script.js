// Toggle OFF/ON the Request Demo Form when user clicks the CTA 'Request Demo' button
function toggleDropDown() {
  let content = document.getElementById('form-section').classList.toggle('hidden');
}

const words = ["Turn on the lights.", "Start ResidentPortal.", "When is my next payment due?", "How much is my rent next month?"]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: 1 })

let boxTl = gsap.timeline()
boxTl.to('.box', {duration: 1.8, width: "17vw", delay: 0.5, ease: "power4.inOut" })
  .from('.text', {duration: 1.8, y:"7vw", ease:"power3.out"})
  .to('.box', {duration: 1.8, height:"7vw", ease:"elastic.out" })

  let masterTl = gsap.timeline({repeat: -1})

  words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true})
    tl.to('.text', {duration: 1.8, text: word})
    masterTl.add(tl)
  })


  let btn = document.getElementsByClassName("btn");
  let slide = document.getElementById("slide");

  btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for(i=0;i<4;i++) {
      btn[i].classList.remove("active");
    }
    this.classList.add("active");
  }
  btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)";
    for(i=0;i<4;i++) {
      btn[i].classList.remove("active");
    }
    this.classList.add("active");
  }
  btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)";
    for(i=0;i<4;i++) {
      btn[i].classList.remove("active");
    }
    this.classList.add("active");
  }
  btn[3].onclick = function() {
    slide.style.transform = "translateX(-2400px)";
    for(i=0;i<4;i++) {
      btn[i].classList.remove("active");
    }
    this.classList.add("active");
  }


  // This Section displays the Landing Page Rules to follow
  let landingPageRules = document.querySelector("#rules");

  landingPageRules.addEventListener('click', function() {
    const headerSection = document.getElementById("showRulesA");
    const benefitsSection = document.getElementById("showRulesB");
    const appSection = document.getElementById("showRulesC");
    const videoSection = document.getElementById("showRulesD");
    const testimonialSection = document.getElementById("showRulesE");
    const btmFormSection = document.getElementById("showRulesF");


    if(headerSection.style.display === "none") {
      headerSection.style.display = "block";
    } else {
      headerSection.style.display = "none";
    }

    if(benefitsSection.style.display === "none") {
      benefitsSection.style.display = "block";
    } else {
      benefitsSection.style.display = "none";
    }

    if(appSection.style.display === "none") {
      appSection.style.display = "block";
    } else {
      appSection.style.display = "none";
    }

    if(videoSection.style.display === "none") {
      videoSection.style.display = "block";
    } else {
      videoSection.style.display = "none";
    }

    if(testimonialSection.style.display === "none") {
      testimonialSection.style.display = "block";
    } else {
      testimonialSection.style.display = "none";
    }

    if(btmFormSection.style.display === "none") {
      btmFormSection.style.display = "block";
    } else {
      btmFormSection.style.display = "none";
    }



  })


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      start: "center bottom",
      end: "center bottom",
      scrub: 1,
    }
  });

  tl.from(".boxscroll", {xPercent: -300, duration: .1})
  // tl.from(".boxscroll2", {xPercent: 300, duration: 1})
  // tl.from(".boxscroll3", {xPercent: 300, duration: 1})


  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger2",
      start: "center bottom",
      end: "center bottom",
      scrub: 1,
    }
  });

  tl2.from(".boxscroll2", {xPercent: 300, duration: .1})



  const phone = gsap.timeline({
    scrollTrigger: {
      trigger: "section.iphone",
      start: "center center",
      end: "bottom top",
      scrub: true,
      markers: false,
      pin: true
    }
  })
  phone.from(".box1", {x : innerWidth * -1})
  phone.from(".box2", {opacity: 0})
  // phone.from(".box3", {x : innerWidth * 1})
  // phone.from(".box4", {x : innerWidth * 1})
  // phone.from(".box5", {x : innerWidth * 1})
  // phone.from(".box6", {x : innerWidth * 1})
  phone.from(".box3", {opacity: 0})
  phone.from(".box4", {opacity: 0})
  phone.from(".box5", {opacity: 0})
  phone.from(".box6", {opacity: 0})



  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger3",
      start: "center bottom",
      end: "center bottom",
      scrub: 1,
    }
  });

  tl3.from(".boxscroll3", {xPercent: -300, duration: .1})

 