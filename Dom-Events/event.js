console.log('spacial events')

function redButton(){
  document.body.style.backgroundColor = 'red';
}

const greenButton = document.getElementById('green-button');
greenButton.onclick = function (){
  document.body.style.backgroundColor = 'green';
}

const yellowButton = document.getElementById('yellow-button');
yellowButton.addEventListener('click', function(){
  document.body.style.backgroundColor = 'yellow';
})