//vars
var cells = document.querySelectorAll(".gridsquare");
var clearbutton = document.querySelector("#clear");
var remakebutton = document.querySelector('#remake');
var container = document.querySelector("#container");

//creates the grid
function genGrid(num) {
    for (i=0;i< (num * num);i++){
      cell = document.createElement('div');
      cell.className = "gridsquare";
      container.appendChild(cell);
    }    
  }
  

//colours the gridsquares
cells.forEach((square) => {
  square.addEventListener('mouseenter', (e) => {
    console.log(square);
    square.className = "active gridsquare";
  });
});

//clear button
clearbutton.addEventListener('click', (e) => {
cells.forEach((cell) => {
  console.log(cell);
  cell.className="gridsquare";
  }); 
});

//remakes the grid
remakebutton.addEventListener('click', (e) => {
  let gridnum = prompt("Pick a number");
  var removeCells = document.querySelectorAll(".gridsquare");
  removeCells.forEach((cell)=> {
    container.removeChild(cell);
  }); 
  document.documentElement.style.setProperty("--gridNum", gridnum);
  genGrid(gridnum);
  
});

