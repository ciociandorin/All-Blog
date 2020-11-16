gsap.to("#siteName", {
    left: 0,
    ease: "power4.inOut",
    duration: 1
});

gsap.from(".navBarEl", {
    opacity: 0,
    ease: "power4.inOut",
    duration: 0.7,
    delay: 0.5,
    stagger: 0.2
});

gsap.to("#firstWrapper", {
    width: "100%",
    ease: "power4.inOut",
    duration: 1
});

gsap.to("#secondWrapper", {
    width: "100%",
    ease: "power4.inOut",
    duration: 1,
    delay: 0.1
});

gsap.to("#thirdWrapper", {
    width: "100%",
    ease: "power4.inOut",
    duration: 1,
    delay: 0.2
});

$(document).ready(function() {

    $("#recWrapper").mouseenter(function() {

        gsap.to("#rec1", {
            top: "-17px",
            ease: "power4.inOut",
            duration: 0.28
        });

        gsap.to("#rec2", {
            top: "0px",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#recWrapper").mouseleave(function() {

        gsap.to("#rec1", {
            top: "0px",
            ease: "power4.inOut",
            duration: 0.28
        });

        gsap.to("#rec2", {
            top: "17px",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#subWrapper").mouseenter(function() {

        gsap.to("#sub1", {
            top: "-17px",
            ease: "power4.inOut",
            duration: 0.28
        });

        gsap.to("#sub2", {
            top: "0px",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#subWrapper").mouseleave(function() {

        gsap.to("#sub1", {
            top: "0px",
            ease: "power4.inOut",
            duration: 0.28
        });

        gsap.to("#sub2", {
            top: "17px",
            ease: "power4.inOut",
            duration: 0.28
        });

    });

    $("#firstWrapper").mouseenter(function() {

        gsap.to("#firstWrapper", {
            height: "300px",
            ease: "power4.out"
        });

        gsap.to("#secondShadow", {
            opacity: 0.7
        });

        gsap.to("#thirdShadow", {
            opacity: 0.7
        });

    });

    $("#firstWrapper").mouseleave(function() {
        
        gsap.to("#firstWrapper", {
            height: "250px",
            ease: "power4.out"
        });

        gsap.to("#secondShadow", {
            opacity: 0
        });

        gsap.to("#thirdShadow", {
            opacity: 0
        });

    });

    $("#secondWrapper").mouseenter(function() {

        gsap.to("#secondWrapper", {
            height: "300px",
            ease: "power4.out"
        });

        gsap.to("#firstShadow", {
            opacity: 0.7
        });

        gsap.to("#thirdShadow", {
            opacity: 0.7
        });

    });

    $("#secondWrapper").mouseleave(function() {
        
        gsap.to("#secondWrapper", {
            height: "250px",
            ease: "power4.out"
        });

        gsap.to("#firstShadow", {
            opacity: 0
        });

        gsap.to("#thirdShadow", {
            opacity: 0
        });

    });

    $("#thirdWrapper").mouseenter(function() {

        gsap.to("#thirdWrapper", {
            height: "300px",
            ease: "power4.out"
        });

        gsap.to("#firstShadow", {
            opacity: 0.7
        });

        gsap.to("#secondShadow", {
            opacity: 0.7
        });

    });

    $("#thirdWrapper").mouseleave(function() {
        
        gsap.to("#thirdWrapper", {
            height: "250px",
            ease: "power4.out"
        });

        gsap.to("#firstShadow", {
            opacity: 0
        });

        gsap.to("#secondShadow", {
            opacity: 0
        });

    });

});