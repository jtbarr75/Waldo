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

  function checkLocation(data){
    console.log(data)
    const select = document.querySelector(".select");
    if (Math.abs(data.xpos - select.dataset.xpos) < 10 &&
        Math.abs(data.ypos - select.dataset.ypos) < 15) {
      console.log(`You found ${data.name}`);
    }
    else {
      console.log(`That's not ${data.name}`);
    }
    clearSelectBox();
  }

  function clearSelectBox() {
    const select = document.querySelector(".select");
    select.parentElement.removeChild(select);
  }

  function validate(e) {
    const { id } = e.target.dataset
    const url = `/api/characters/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response not ok");
      })
      .then(response => {
        checkLocation(response.data);
      })
      .catch((e) => console.log(e.message, "Something bad happened."))
  }

  function characterSelector(name, id) {
    let char = document.createElement("li");
    char.innerText = name;
    char.dataset.id = id;
    char.onclick = validate;
    return char;
  }

  function selectContainer(x, y) {
    let container = document.createElement("div");
    container.classList.add("select")
    container.style.top = `${y- 30}px`;
    container.style.left = `${x - 20}px`;
    container.dataset.xpos = x;
    container.dataset.ypos = y;
    return container;
  }

  function createSelectBox(x, y){
    let container = selectContainer(x, y);

    let box = document.createElement("div");
    box.classList.add("select-box");
    
    container.appendChild(box);

    let selectChar = document.createElement("ul");
    let waldo = characterSelector("Waldo", 1);
    let wizard = characterSelector("Wizard", 2);
    let wenda = characterSelector("Wenda", 3);
    let odlaw = characterSelector("Odlaw", 4);
    let woof = characterSelector("Woof", 5);

    selectChar.appendChild(waldo);
    selectChar.appendChild(wizard);
    selectChar.appendChild(wenda);
    selectChar.appendChild(odlaw);
    selectChar.appendChild(woof);

    container.appendChild(selectChar);

    document.querySelector(".image-wrapper").appendChild(container);
  }
})();