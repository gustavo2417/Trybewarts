const sla = document.querySelectorAll('input')[0];
const teste = document.querySelectorAll('input')[1];

function mensagem() {
  if (sla.value === 'tryber@teste.com' && teste.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  return mensagem;
}
console.log(mensagem);

function active() {
  let selectorC = document.getElementById('submit-btn');
  selectorC = selectorC.removeAttribute('disabled');
  return selectorC;
}
console.log(active);
