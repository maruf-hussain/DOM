function updateCaseNumber(isIncrease){
  const caseInput = document.getElementById('input-case-plus');
  const caseInputString = caseInput.value;
  const caseInputStringConvert = parseInt(caseInputString);

  let newCaseNumber;

  if(isIncrease === true){
     newCaseNumber = caseInputStringConvert + 1;
  }
  else{
newCaseNumber = caseInputStringConvert - 1;
  }
  
  caseInput.value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
  const casePrice = newCaseNumber * 59;
  const caseElement = document.getElementById('case-total');
  caseElement.innerText = casePrice;
 
}

document.getElementById('case-plus-button').addEventListener('click', function(){
  const newCaseNumber = updateCaseNumber(true)
  updateCaseTotalPrice(newCaseNumber);

  updateSmaeButton()
  
})

document.getElementById('case-minus-button').addEventListener('click', function(){
  const newCaseNumber = updateCaseNumber(false)
  updateCaseTotalPrice(newCaseNumber);
  
  updateSmaeButton()
  
})





