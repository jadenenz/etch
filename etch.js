document.getElementById("cont").style.gridTemplateColumns = 'repeat(16, 1fr)'
document.getElementById("cont").style.gridTemplateRows = 'repeat(16, 1fr)'


const container = document.getElementById('cont')
const btn = document.getElementById('button')
btn.addEventListener('click', e => {
	reset();
	})
for (let i = 1; i <= 256; i++) {
  let div = document.createElement('div')
  div.classList.add('gridSquare');
  div.setAttribute('id', 'divvy')
  container.appendChild(div);
  div.addEventListener('mouseover', e => {
  div.style.background = 'purple';
});
  

}

function reset() {
 let prompted = prompt('Enter a number for new grid dimensions. I.E. 64 = 64x64. Max 100');
 while (prompted > 100) {
   prompted = prompt('Enter a number for new grid dimensions. I.E. 64 = 64x64. Max 100');
 }
 var change = 'repeat(' + prompted+', 1fr)';
 document.getElementById("cont").style.gridTemplateColumns = change;
 document.getElementById("cont").style.gridTemplateRows = change;
 var all = document.getElementsByClassName('gridSquare');
	while (all[0]) { //while gridSquare exists, delete gridSquares
  	all[0].parentNode.removeChild(all[0]);
    }
  for (let i = 1; i <= (prompted * prompted); i++) {
      let div = document.createElement('div')
      div.classList.add('gridSquare');
      div.setAttribute('id', 'divvy')
      container.appendChild(div);
      div.addEventListener('mouseover', e => {
      div.style.background = 'red';
    })
  }
}