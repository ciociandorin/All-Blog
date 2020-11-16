gsap.to("#first", {
    height: "100%",
    top: "0%",
    ease: "power4.inOut",
    duration: 1
});

gsap.to("#second", {
    height: "100%",
    ease: "power4.inOut",
    duration: 1
});

gsap.to("#third", {
    top: "0%",
    height: "100%",
    ease: "power4.inOut",
    duration: 1
});

gsap.to("#registerWrapper", {
    opacity: 1,
    ease: "power4.inOut",
    duration: 1,
    delay: 0.8
});

$(document).ready(function() {

    $("#frgtPassWrapper").mouseenter(function() {

        gsap.to("#pass1", {
            top: "-21px",
            ease: "power4.inOut",
            duration: 0.28
        });

        gsap.to("#pass2", {
            top: "0px",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#frgtPassWrapper").mouseleave(function() {

        gsap.to("#pass1", {
            top: "0px",
            ease: "power4.inOut",
            duration: 0.28
        });

        gsap.to("#pass2", {
            top: "18px",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#loginBtn").mouseenter(function() {

        gsap.to("#loginBtn", {
            backgroundColor: "#3470be",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#loginBtn").mouseleave(function() {

        gsap.to("#loginBtn", {
            backgroundColor: "#438ef1",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

});