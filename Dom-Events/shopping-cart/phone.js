function updatePhoneNumber(isIncrease){
  const phoneNumber = document.getElementById('input-phone');
  const phoneNumberString = phoneNumber.value;
  const phoneNumberStringConvert = parseInt(phoneNumberString);

  let newPhoneNumber;

  if(isIncrease === true){
     newPhoneNumber = phoneNumberStringConvert + 1;
  }
  else{
     newPhoneNumber = phoneNumberStringConvert - 1;
  }
  
   phoneNumber.value = newPhoneNumber;

   return newPhoneNumber;
}

function phoneTotalUpdate(newPhoneNumber){
  const phonePriceTotal = newPhoneNumber * 1219;
 const phoneElement = document.getElementById('phone-total');
 phoneElement.innerText = phonePriceTotal;
}





document.getElementById('phone-plus-button').addEventListener('click', function(){
 const newPhoneNumber = updatePhoneNumber(true);
phoneTotalUpdate(newPhoneNumber);

updateSmaeButton()




})

document.getElementById('phone-minus-button').addEventListener('click', function(){
  const newPhoneNumber = updatePhoneNumber(false);
  phoneTotalUpdate(newPhoneNumber);

 updateSmaeButton()

 

 })