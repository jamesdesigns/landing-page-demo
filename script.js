// Toggle OFF/ON the Request Demo Form when user clicks the CTA 'Request Demo' button
function toggleDropDown() {
  document.getElementById('form-section').classList.toggle('hidden');
}

const words = ["Start ResidentPortal.", "When is my payment due?", "When is my next appointment?", "Turn on the lights."]

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