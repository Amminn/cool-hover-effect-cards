const glowFeature = (e) => {
  const card = e.target;
  let { x, y, top, left } = card.getBoundingClientRect();

  console.log(`x:${x} y:${y} top:${top} left:${left}`);
  console.log(`clientY: ${e.clientY}, clientX:${e.clientX}`)
  console.log(`when you use minus`)

  const xPosition = e.clientX - left;
  const yPosition = e.clientY - top;
  console.log(`xPosition: ${xPosition}, yPosition:${yPosition}`)

  card.style.setProperty("--x", `${xPosition}px`);
  card.style.setProperty("--y", `${yPosition}px`);
};

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = (e) => {
    glowFeature(e);
  };
}
