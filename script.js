
const handleOnMouseMove = e => {
  const { currentTarget: target } = e;

  console.log(target);

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

  target.style.
}

for (const card of document.querySelectorAll(".card")) {
  card.onmouseover = e => handleOnMouseMove(e);

}