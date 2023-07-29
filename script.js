var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
const card = document.querySelector(".card")

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x  + 6 + "px",
  crsr.style.top = dets.y  + 6 + "px",
  blur.style.left = dets.x - 150 + "px",
  blur.style.top = dets.y -150 + "px"
})

var h4all = document.querySelectorAll("#nav-item-holder");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.scale = 3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave", function() {
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})
// document.addEventListener("mousemove", function(dets) {
//   const x = dets.x;
//   const y = dets.y;

//   // console.log(x , y);
//   const middleX = window.innerWidth / 2;
//   const middleY = window.innerHeight / 2;

//   const offsetX = ((x - middleX) / middleX) * 10;
//   const offsetY = ((y - middleY) / middleY) * 10;

//   // console.log(offsetX, offsetY);

//   card.style.setProperty("--rotateX", -1 * offsetY + "deg");
//   card.style.setProperty("--rotateY", offsetX + "deg");
// })

gsap.to("#nav", {
  backgroundColor : "#000",
  duration:0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2
  }
})

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }
})

gsap.from("#about-us img, #about-us-in", {
  y:50, 
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 2
  }
})

gsap.from(".card", {
  scale: 0.8, 
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 90%",
    end: "top 65%",
    scrub: 1
  }
})

gsap.from("#colon1", {
  y:-60,
  x:-60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 3
  }
})


gsap.from("#colon2", {
  y: 60,
  x: 60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})

gsap.from("#page4 h1", {
  y:50,
  scrollTrigger: {
   trigger: "#page4 h1",
   scroller: "body",
   // markers: true,
   start: "top 75%",
   end: "top 70%",
   scrub: 2
  }
})

const scrollButton = document.querySelector("#arrow1");

scrollButton.addEventListener('click', () => {
  const targetPosition = window.scrollY + (window.innerHeight * 0.9);

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
})
