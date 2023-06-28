document.getElementById('btn-submit').addEventListener('click', function(){
  const emailField = document.getElementById('email');
  const userEmail = emailField.value;
 
  const passwordField = document.getElementById('password');
  const userPassword = passwordField.value;
  
 
  if(userEmail === 'sobuj@gmail.com' && userPassword === 'maruf') {
      window.location.href = 'banking.html';
  }
  else{
    alert('invalid user')
  }

  })
  