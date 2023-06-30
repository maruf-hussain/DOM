document.getElementById('deposit-button').addEventListener('click', function(){
const deposit = document.getElementById('deposit-amount');
const depositText = deposit.value;
const newDepositText = parseFloat(depositText);

const depositTotal = document.getElementById('deposit');
const depositTotalText = depositTotal.innerText;
const newDepositTotalText = parseFloat(depositTotalText);

const currentDepositTotal = newDepositText + newDepositTotalText;
depositTotal.innerText = currentDepositTotal;



// .............update balance.................//
const balance = document.getElementById('balance');
const balanceTotalString = balance.innerText;
const balanceTotal = parseFloat(balanceTotalString);

const currentBalanceTotal = balanceTotal + newDepositText;
balance.innerText = currentBalanceTotal;

deposit.value = '';


})

// ...............withdraw part....................//

document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdraw
})
