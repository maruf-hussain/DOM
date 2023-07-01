function getInputValueById(inputId){
  const depositAmount = document.getElementById(inputId);
  const depositAmountString = depositAmount.value;
  const depositAmountStringConvert = parseFloat(depositAmountString);
  depositAmount.value = '';
  return depositAmountStringConvert;
}


function getElementById(elementId){
  const depositElement = document.getElementById(elementId);
  const depositElementString = depositElement.innerText;
  const depositElementStringConvert = parseFloat(depositElementString);
  return depositElementStringConvert;
}

function setTotalDeposit(elementId, newValue){
  const depositElement = document.getElementById(elementId);
  depositElement.innerText = newValue;
}