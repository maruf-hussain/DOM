

document.getElementById('deposit-button').addEventListener('click', function(){
  const depositTotal = getInputValueById('deposit-amount');
  const justDeposit = getElementById('deposit');
  const newDepositTotal = depositTotal + justDeposit;
 setTotalDeposit('deposit',newDepositTotal);
 const balanceTotal = getElementById('balance');
 const newBalanceTotal = depositTotal + balanceTotal;
 setTotalDeposit('balance',newBalanceTotal);

 
})

