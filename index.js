
function revealspan(){
    document.querySelectorAll(".reveal")
.forEach((elem) => {
    let parent = document.createElement("span");
    let child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
});
}

function loaderanimation(){
    const tl = gsap.timeline();
tl.from(".child span", {
    x: 100,
    // duration: 1,
    stagger: .2,
    // delay: 1,
    // delay: 1,
    ease: Circ.easeInOut
})
tl.to(".parent .child", {
    y: "-100%",
    // duration: 1,
    // delay: 1,
    ease: Circ.easeInOut
})
tl.to("#fs", {
    height: 0,
    duration: 1,
    ease: Expo.easeInOut
})
.to("#elem", {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})
.to("#white", {
    height: "100%",
    duration: 2,
    delay: -1.8,
    ease: Expo.easeInOut
});
// tl.to("#home", {
//     height: "100%",
//     duration: 2,
//     delay: -1.8,
//     ease: Expo.easeInOut
// });


}
function animateSvg() {
    // Loop through each group element
    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.querySelector("path");
        
        // If path exists and has a getTotalLength function
        if (character && typeof character.getTotalLength === "function") {
            var length = character.getTotalLength();
            console.log(`Length of path: ${length}`); // Debugging log for length
            
            character.style.strokeDasharray = length + 'px';
            character.style.strokeDashoffset = length + 'px';
        }
    });

    // GSAP animation
    gsap.to("#Visual>g>g>path", {
        strokeDashoffset: 0,
        duration: 2,
        delay:1.5,
        ease: Expo.easeInOut
    });
}
const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});


// Call the animateSvg function
revealspan();
loaderanimation();
animateSvg();








