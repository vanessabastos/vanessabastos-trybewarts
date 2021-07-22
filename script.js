const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');

btnEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  else {
    alert('Olá, Tryber!');
  }
}
);
