document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawAmount = getInputValueById('withdraw-amount');
  const withdrawTotal = getElementById('withdraw');
  const newWithdrawTotal = withdrawAmount + withdrawTotal;
  setTotalDeposit('withdraw', newWithdrawTotal);
  const balanceTotal = getElementById('balance');
  const balanceAfterWithdraw = balanceTotal - withdrawAmount;
  setTotalDeposit('balance', balanceAfterWithdraw);

})