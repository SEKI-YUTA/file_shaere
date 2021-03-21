const serviceWrapper = document.querySelector('.bl_blocks_wrapper');
const services = serviceWrapper.querySelectorAll('.el_animItem');
const animBg = serviceWrapper.querySelector('.bl_animBg')
console.log(animBg);
services.forEach((service) => {
  service.addEventListener('mouseover', () => {
    let path = service.getAttribute("data-path");
    console.log(path);
    animBg.querySelector('img').setAttribute("src", path)
  })
})