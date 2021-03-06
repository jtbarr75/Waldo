const timer = ( function() {
  let running = true;
  const start = new Date().getTime();

  // Sets up the timer to change every second
  let timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = now - start;
    const timer = document.getElementById("timer");
    timer.innerText = formatTime(distance);
    timer.dataset.time = distance;

    if (!running) {
      clearInterval(timerInterval);
    }
  }, 1000)

  function stopTimer(){
    running = false;
  }

  // Formats time in milliseconds to mm:ss
  function formatTime(time) {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  return {
    stopTimer,
    formatTime
  }
})();

// Submits the time it took the user to complete the puzzle
function submitScore() {
  event.preventDefault();
  const time = document.getElementById("timer").dataset.time;
  const name = document.getElementById("name").value;
  const body = { name: name, time: time }
  const url = `${window.location.pathname}/scores`;
  const token = document.querySelector('meta[name="csrf-token"]').content;
  fetch(url, {
    method: "POST",
    headers: {
      "X-CSRF-Token": token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response not ok.")
    })
    .then(() => {
      console.log("Score created");
      window.location.href = `${window.location.href}/scores`;
    })
    .catch(error => {console.log(error.message, "Something bad happened")})
}