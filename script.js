const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');

btnEntrar.addEventListener('click', function (event){
  event.preventDefault();
  let email = inputEmail.value;
  let senha=inputSenha.value;
  if(email !=='tryber@teste.com' || senha!=='123456'){
    alert("Login ou senha inválidos");
  }
  else{
    alert( "Olá, Tryber!")
  }
   
  }
)