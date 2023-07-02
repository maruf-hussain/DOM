document.getElementById('case-plus-button').addEventListener('click', function(){
  const caseInput = document.getElementById('input-case-plus');
  const caseInputString = caseInput.value;
  const caseInputStringConvert = parseInt(caseInputString);

  const newPlus = caseInputStringConvert + 1;
  caseInput.value = newPlus;
})

document.getElementById('case-minus-button').addEventListener('click', function(){
  const caseInput = document.getElementById('input-case-plus');
  const caseInputString = caseInput.value;
  const caseInputStringConvert = parseInt(caseInputString);

  const newPlus = caseInputStringConvert - 1;
  caseInput.value = newPlus;
})


document.getElementById('phone-plus-button').addEventListener('click', function(){
  const caseInput = document.getElementById('input-phone');
  const caseInputString = caseInput.value;
  const caseInputStringConvert = parseInt(caseInputString);

  const newPlus = caseInputStringConvert + 1;
  caseInput.value = newPlus;
})

document.getElementById('phone-minus-button').addEventListener('click', function(){
  const caseInput = document.getElementById('input-phone');
  const caseInputString = caseInput.value;
  const caseInputStringConvert = parseInt(caseInputString);

  const newPlus = caseInputStringConvert - 1;
  caseInput.value = newPlus;
})