//import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpage() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
    });
     tl.to("#elem",{
        y:0,
        duration:0.5,
        ease: "expo.out"
     })
     tl.to("#hey",{
        y:0,
        duration:0.5,
        ease: "expo.out"
     })
     tl.to("#avail",{
        y:0,
        duration:0.5,
        ease: "expo.out"
     })
     .from("#fotter1", {
        y: '-10',
        opacity: 0,
        duration: 0.5,
        ease: "expo.out",
        delay:0.5
    });
}

function cursor() {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}
cursor();
firstpage();