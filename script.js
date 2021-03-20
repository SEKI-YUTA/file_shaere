const serviceWrapper = document.querySelector('.bl_services_wrapper');
const services = serviceWrapper.querySelectorAll('.el_service');
const animBg = serviceWrapper.querySelector('.bl_animBg')
console.log(animBg);
services.forEach((service) => {
  service.addEventListener('mouseover', () => {
    let path = service.getAttribute("data-path");
    console.log(path);
    animBg.querySelector('img').setAttribute("src", path)
  })
})