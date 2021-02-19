console.log('OK');

gsap.to ('.bunnyCover', {
    x: -250,
    delay: 2,
    duration: 2
})

gsap.to ('.ddgLogo', {
    rotation: 360,
    ease: "none",
    duration: 2.5,
    repeat: -1
})

gsap.to ('.recordGrooves', {
    rotation: 360,
    ease: "none",
    duration: 2,
    repeat: -1,
    transformOrigin: "50% 50%"
})

gsap.from ('.recordText', {
    opacity: 0,
    ease: "power1.out",
    duration: 2,
    delay: 3.5
})