// Toggle OFF/ON the Request Demo Form when user clicks the CTA 'Request Demo' button
function toggleDropDown() {
  document.getElementById('form-section').classList.toggle('hidden');
}

const words = ["Turn on the lights.", "Start ResidentPortal.", "When is my payment due?", "How much is my rent next month?"]

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