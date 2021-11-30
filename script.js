// Toggle OFF/ON the Request Demo Form when user clicks the CTA 'Request Demo' button
function toggleDropDown() {
  document.getElementById('form-section').classList.toggle('hidden');
}

const words = ["Jesse.", "A Father.", "A Husband.", "A Developer."]

let cursor = gsap.to('.cursor', {opacity: 0, ease: "power2.inOut", repeat: -1 })