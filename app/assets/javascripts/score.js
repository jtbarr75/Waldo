( function() {
  const start = new Date().getTime();

  let x = setInterval(function() {
    const now = new Date().getTime();
    const distance = now - start;
    const minutes = Math.floor(distance / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timer = document.getElementById("timer");
    timer.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    timer.dataset.time = distance;
  }, 1000)
})();

function submitScore() {
  event.preventDefault();
  const time = document.getElementById("timer").dataset.time;
  const name = document.getElementById("name").value;
  const body = { name: name, time: time }
  const url = "/api/scores";
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
    .then(console.log("Score created"))
    .catch(error => {console.log(error.message, "Something bad happened")})
}