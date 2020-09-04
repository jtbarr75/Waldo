( function() {
  let foundChars = 0;
  let win = false;
  let puzzle;

  document.onclick = selectBox;
  getPuzzleInfo();

  // Fetches number of characters in the puzzle, and their names, ids
  function getPuzzleInfo() {
    fetch(`${window.location.pathname}.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response not ok");
    })
    .then((data) => { puzzle = data });
  }

  // Checks where the user clicked and gets its coordinates in the image
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
  
  // Checks if the user has found all the characters
  function checkWin() {
    foundChars += 1;
      if (foundChars === puzzle.numCharacters) {
        endGame();
      }
  }

  // Stops the timer and displays the win popup
  function endGame() {
    timer.stopTimer();
    win = true;
    const time = document.getElementById("timer").dataset.time;
    document.getElementById("win-message").innerText = `You won in ${timer.formatTime(time)}`
    document.getElementById("win-popup").style.display = "block";
  }

  // Checks the location the user clicked against the location in data
  function checkLocation(data){
    const { xpos, ypos } = document.getElementById("select").dataset;
    if (Math.abs(data.location.xpos - xpos) < 20 && Math.abs(data.location.ypos - ypos) < 25) {
      markAsFound(data);
    }
    clearSelector();
  }

  // Marks the character in data as found in the image and top bar
  function markAsFound(data) {
    const container = selectContainer(data.location.xpos, data.location.ypos, "green");
    document.querySelector(".image-wrapper").appendChild(container);
    document.getElementById(data.name).classList.add("found");
    checkWin();
  }

  // Clears the selection box
  function clearSelector() {
    const select = document.getElementById("select");
    if (select){
      select.parentElement.removeChild(select);
    }
  }

  // Fetches the character name, id, location in current puzzle
  function getCharacterInfo(e) {
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
      .catch((e) => console.log(e.message))
  }

  // Creates a character selection button for the user to choose what character they found
  function characterSelector(name, id) {
    let char = document.createElement("li");
    char.innerText = name;
    char.dataset.id = id;
    char.onclick = getCharacterInfo;
    return char;
  }

  // Places a rectangle centered at the given coordinates in the image
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

  // Creates a rectangle of given color
  function createBox(color) {
    let box = document.createElement("div");
    box.classList.add("select-box", color);
    return box
  }

  // Creates a selection box around the mouseclick with button for each character in the puzzle
  function createSelector(x, y){
    let container = selectContainer(x, y);
    container.id = "select";
    let selectChar = document.createElement("ul");
    puzzle.characters.forEach(character => {
      let char = characterSelector(character.name, character.id);
      selectChar.appendChild(char);
    })

    container.appendChild(selectChar);
    document.querySelector(".image-wrapper").appendChild(container);
  }
})();