console.log('OK');

// Random Fill

const maxNumRand = 4;

let numRand = Math.floor(Math.random()*maxNumRand);

console.log(numRand);

// Record Label

const recordLabel = document.querySelector('#recordLabel');

console.log(recordLabel);

recordLabel.classList = 'recordLabel' + numRand;

// Record Cover

const recordCover = document.querySelector('#bunnyCover');

console.log(recordCover);

recordCover.classList = 'bunnyCover' + numRand;

// Animation

gsap.to ('#bunnyCover', {
    x: -275,
    delay: 2,
    duration: 2
});

gsap.to ('.ddgLogo', {
    rotation: 360,
    ease: "none",
    duration: 2.5,
    repeat: -1
});

gsap.to ('.recordGrooves', {
    rotation: 360,
    ease: "none",
    duration: 2,
    repeat: -1,
    transformOrigin: "50% 50%"
});

gsap.from ('.recordText', {
    opacity: 0,
    ease: "power1.out",
    duration: 2,
    delay: 3.5
});