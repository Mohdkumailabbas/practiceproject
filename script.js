//import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function cursor() {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}
cursor();
