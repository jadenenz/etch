//document.getElementById('cont').style.gridTemplateColumns = '1fr 1fr 1fr 1fr';

//var div = document.createElement('div')

const container = document.getElementById('cont')
//container.style.background = "blue";
//container.style.gridTemplateColumns = "1fr 1fr 1fr";


for (let i = 1; i <= 256; i++) {
  let div = document.createElement('div')
  //div.innerHTML = 'x';
  div.classList.add('gridSquare');
  container.appendChild(div);
  div.addEventListener('mouseover', e => {
  div.style.background = 'red';
});
}

