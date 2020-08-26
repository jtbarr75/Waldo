( function() {
  document.onmousemove = updateMouseLocation; 

  function updateMouseLocation(e) {
    let x = e.clientX;
    let y = e.clientY;

    let mousePos =document.getElementById("mousePos");
    mousePos.innerText = `${x} ${y}`;
  }
})();