const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');
const btnEnviar = document.getElementById('submit-btn');

btnEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }else {
    alert("Olá, Tryber!")
  }
<<<<<<< HEAD
});
=======
};
>>>>>>> 12bcc7b61a54fff622fb6518548452769ff3a253
