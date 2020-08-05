

let gridSize = 16;
const container = document.querySelector('.container');
function createBox() {
    const gridBox = document.createElement('div');
    gridBox.classList.add('box');
    container.appendChild(gridBox);
}



function createGrid() {
    for (let i = 0; i < gridSize*gridSize; i++) {
        createBox();
    }
  }
  function deleteGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
  }

  function hover(){
    let boxes=container.getElementsByTagName('div');
  let Grids=Array.from(boxes);
  for(let i=0 ; i <Grids.length;i++){
    Grids[i].addEventListener('mouseover',function(){
      Grids[i].classList.add('hoverBlack');
    })
  }
    }

    function resetBtn(){
      let boxes=container.getElementsByTagName('div');
      let Grids=Array.from(boxes);
      for(let i=0 ; i <Grids.length;i++){
          Grids[i].classList.remove('hoverBlack');
        
      }
    }

  createGrid();


  const changeSize=document.querySelector('#newSize');
changeSize.addEventListener('click',function changeSizeBtn(){
  deleteGrid();

    gridSize=prompt('What do you want your new gridsize to be?');
    container.style.setProperty('grid-template-columns',"repeat(" + gridSize + ", 1fr)");
    container.style.setProperty('grid-template-rows',"repeat(" + gridSize + ", 1fr)");
   
    createGrid();
    hover();

})

  const reset=document.querySelector("#reset");
reset.addEventListener('click', (e) => {
  resetBtn();
});