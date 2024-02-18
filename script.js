function loader() {
  const tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
}

// loader();

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

const elem = document.querySelectorAll(".elem");
const page2 = document.querySelector("#page2");
elem.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    console.log(el);
    console.log(el.getAttribute("data-image"));
    console.log(page2);
    page2.style.backgroundImage = `url(${el.getAttribute("data-img")})`;
  });
});

document.querySelector("#footer svg").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document.querySelector("#option-1").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document.querySelector("#option-2").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page2"));
});
document.querySelector("#option-3").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page3"));
});
document.querySelector("#page1-down-arrow").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page2"));
})
document.querySelector("#page2-down-arrow").addEventListener("click", () => {
  scroll.scrollTo(document.querySelector("#page3"));
})
const navLinks = document.querySelectorAll("#nav-links ul li");
const plusButton = document.getElementById("plus-button");
const navLinksContainer = document.getElementById("nav-links");
const navContainer = document.getElementsByTagName("nav");
let buttonFlag = false;
console.log(plusButton);
plusButton.addEventListener("click", () => {
  buttonFlag = !buttonFlag;
  plusButton.style.transform = buttonFlag ? "rotate(-45deg)" : "rotate(0)";
  console.log(navLinksContainer);
  navLinksContainer.style.display = buttonFlag ? "block" : "none";
  navLinksContainer.style.animation = buttonFlag
    ? "expand 2s forwards"
    : "shrink 1.3s forwards";
});
