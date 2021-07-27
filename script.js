const inputEmail = document.querySelector('#email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');
const btnEnviar = document.getElementById('submit-btn');
const inputConcorda = document.getElementById('agreement');

btnEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

btnEnviar.addEventListener('click', () => {
  if (inputConcorda.checked === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

console.log(btnEnviar);
inputConcorda.addEventListener('click', () => {
  btnEnviar.disabled = false;
});
