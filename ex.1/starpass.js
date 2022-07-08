const inputEl = document.querySelector('input');

const passwordEl = document.querySelector('#password');

const resultEl = document.querySelector('#result');

inputEl.addEventListener('keyup', () => {
  const passwordText = Array(inputEl.value.length).fill('*').join('');
  passwordEl.innerHTML = passwordText;
  resultEl.innerHTML = inputEl.value;
})


