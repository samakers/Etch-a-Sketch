//Create a 16x16 Grid

function mainFunction() {
  let boxes = 256;

  for (let i = 0; i < boxes; i++) {
    let container = document.getElementById("container");
    let grid = document.createElement("div");
    grid.className = "gridBox";
    grid.addEventListener("mouseover", function() {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      grid.style.backGroundColor = randomColor;
      console.log(randomColor);
    });
    container.appendChild(grid);
  }
}

mainFunction();
