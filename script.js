
const handleOnMouseMove = e => {
  const { currentTarget: target } = e;

  console.log(target);

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

  target.style.setProperty("--mouse-x", `${x}px`);
  target.syle.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = e => handleOnMouseMove(e);
}