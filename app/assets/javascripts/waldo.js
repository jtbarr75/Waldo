( function() {
  let foundChars = 0;
  let win = false;

  document.onclick = selectBox;

  function selectBox(e) {
    if (e.target.tagName !== "LI") {
      clearSelector();
    }
    if (e.target.id !== "image" || win) {
      return;
    }
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX + document.body.scrollLeft - rect.left;
    let y = e.clientY + document.body.scrollTop - rect.top;

    createSelector(x, y);
  }
  
  function checkWin() {
    foundChars += 1;
      if (foundChars === 5) {
        timer.stopTimer();
        win = true;
        const time = document.getElementById("timer").dataset.time;
        document.getElementById("win-message").innerText = `You won in ${timer.formatTime(time)}`
        document.getElementById("win-popup").style.display = "block";
      }
  }

  function checkLocation(data){
    const { xpos, ypos } = document.getElementById("select").dataset;
    if (Math.abs(data.location.xpos - xpos) < 20 && Math.abs(data.location.ypos - ypos) < 25) {
      const container = selectContainer(data.location.xpos, data.location.ypos, "blue");
      document.querySelector(".image-wrapper").appendChild(container);
      document.getElementById(data.name).classList.add("found");
      checkWin();
    }
    else {
      console.log(`That's not ${data.name}`);
    }
    clearSelector();
  }

  function clearSelector() {
    const select = document.getElementById("select");
    if (select){
      select.parentElement.removeChild(select);
    }
  }

  function validate(e) {
    const { id } = e.target.dataset
    const url = `/api/${window.location.pathname}/characters/${id}`;
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

  function selectContainer(x, y, color = "black") {
    let container = document.createElement("div");
    container.classList.add("select-container")
    container.style.top = `${y- 30}px`;
    container.style.left = `${x - 20}px`;
    container.dataset.xpos = x;
    container.dataset.ypos = y;
    container.appendChild(createBox(color));
    return container;
  }

  function createBox(color) {
    let box = document.createElement("div");
    box.classList.add("select-box", color);
    return box
  }

  function createSelector(x, y){
    let container = selectContainer(x, y);
    container.id = "select";

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