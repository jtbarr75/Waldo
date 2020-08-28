( function() {
  // document.onmousemove = updateMouseLocation;
  document.onclick = selectBox;

  function updateMouseLocation(e) {
    let x = e.clientX;
    let y = e.clientY;

    let mousePos =document.getElementById("mousePos");
    mousePos.innerText = `${x} ${y}`;
  }

  function selectBox(e) {
    if (e.target.id !== "image") {
      return;
    }
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX + document.body.scrollLeft - rect.left;
    let y = e.clientY + document.body.scrollTop - rect.top;

    createSelectBox(x, y);

    let mousePos = document.getElementById("mousePos");
    mousePos.innerText += `, x: ${x} y: ${y}`;
  }

  function createSelectBox(x, y){
    let box = document.createElement("div");
    box.classList.add("select-box");
    box.style.top = `${y- 30}px`;
    box.style.left = `${x - 20}px`;
    document.querySelector(".image-wrapper").appendChild(box);
  }
})();