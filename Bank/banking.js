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
  const withdraw = document.getElementById('withdraw-amount');
  const withdrawString = withdraw.value;
  const withdrawTotalAmount = parseFloat(withdrawString);
 
  const withdrawTotal = document.getElementById('withdraw');
  const withdrawTotalText = withdrawTotal.innerText;
  const withdrawTotalString = parseFloat(withdrawTotalText);
  const currentWithdraw = withdrawTotalString + withdrawTotalAmount;
  withdrawTotal.innerText = currentWithdraw;


  // .............update balance afete withdraw.................//
const withdrawBalance = document.getElementById('balance');
const withdrawTotalStringBalance = withdrawBalance.innerText;
const withdrawTotalBalance = parseFloat(withdrawTotalStringBalance);
const currentWithdrawBalance =  withdrawTotalBalance - withdrawTotalAmount;
withdrawBalance.innerText = currentWithdrawBalance; 
if(currentWithdrawBalance < currentBalanceTotal){
  alert('balance emty');
}

withdraw.value = '';


})
