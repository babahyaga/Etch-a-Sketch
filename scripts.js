var container = document.querySelector("#container");
function genGrid(num) {
    for (i=0;i< (num * num);i++){
      cell = document.createElement('div');
    cell.className = "gridsquare";
    container.appendChild(cell);
    }    
  }
  
genGrid(16);

var cells = document.querySelectorAll(".gridsquare")

cells.forEach((cell) => {
  cell.addEventListener('mouseenter', (e) => {
    console.log(cell);
    cell.className = "active gridsquare";
  });
});
