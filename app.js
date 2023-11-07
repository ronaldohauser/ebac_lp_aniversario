// Confirmação de presença em tempo real
document.getElementById('confirmation-form').addEventListener('submit', function (event) {
	event.preventDefault();
	const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
  
	const confirmacao = document.createElement('p');
	confirmacao.textContent = `Confirmado: ${nome} (${email})`;
	document.getElementById('confirmacoes').appendChild(confirmacao);
	document.getElementById('nome').value = '';
	document.getElementById('email').value = '';
  });
  
  // Contador regressivo dinâmico
  const dataAniversario = new Date('2024-01-23 20:00:00').getTime();
  const contadorElement = document.getElementById('contador');
  
  const atualizarContador = () => {
	const agora = new Date().getTime();
	const diferenca = dataAniversario - agora;
  
	const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
	const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
	const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
	contadorElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  };
  
  atualizarContador();
  setInterval(atualizarContador, 1000);
  
  // Animação do lego brindando
  const animacaoFogos = document.getElementById('animacao-fogos');
  
  document.getElementById('confirmar-presenca').addEventListener('click', function () {
	animacaoFogos.style.display = 'block';
  });
  