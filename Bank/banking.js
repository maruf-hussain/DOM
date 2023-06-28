document.getElementById('deposit-button').addEventListener('click', function(){
const deposit = document.getElementById('deposit-amount');
const depositText = deposit.value;
const newDepositText = parseFloat(depositText);

const depositTotal = document.getElementById('deposit');
const depositTotalText = depositTotal.innerText;
const newDepositTotalText = parseFloat(depositTotalText);

const currentDepositTotal = newDepositText + newDepositTotalText;
depositTotal.innerText = currentDepositTotal;

deposit.value = '';


})

// .............update balance.................//


    


// ...............withdraw part....................//


