function updateSmaeButton(){
  const currentPhoneTotal = getTotalElementById('phone-total');
  const currentCaseTotal = getTotalElementById('case-total');
  const subTotal = document.getElementById('sub-total');
  const currentSubTotal = currentCaseTotal + currentPhoneTotal;
  subTotal.innerText = currentSubTotal;

  // update ........tax..............................
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString)
  const taxTotal = document.getElementById('tax-total');
  taxTotal.innerText = taxAmount;


  // update final total .........................................
const finalAmount = currentSubTotal + taxAmount;
const finalTotal = document.getElementById('final-total');
finalTotal.innerText = finalAmount;

}

function getTotalElementById(elementId){
  const phoneTotalElement = document.getElementById(elementId);
  const phoneTotalElementString = phoneTotalElement.innerText;
  const currentPhontTotal = parseInt(phoneTotalElementString);
  
  
  return currentPhontTotal;
  
  
   
  
  }