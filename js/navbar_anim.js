const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const gradients = [
  "linear-gradient(to right top, royalblue, tomato)",
  "linear-gradient(to right, #a8c0ff, #3f2b96)",
  "linear-gradient(to right, #c2e59c, #64b3f4)",
  "linear-gradient(to right, #fd746c, #ff9068)",
  "linear-gradient(to right, #000000, #434343)"
];

const options = {
  threshold: 0.7, // Activate when scroll is at 70%
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const idName = entry.target.id;
    // console.log(idName);
    const activeAnchor = document.querySelector(`[data-page = ${idName}]`);
    // console.log(activeAnchor);
    const gradientIndex = entry.target.getAttribute("data-index");
    // console.log(gradientIndex);
    const coords = activeAnchor.getBoundingClientRect();

    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };

    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section); // Asking the intersection observer to be aware of scroll
});
