async function converter() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const resultado = document.getElementById('resultado');

  if (!amount) {
    resultado.textContent = 'Por favor, insira um valor.';
    return;
  }

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/f649210f0b3d72aae09658d1/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    if (data.result === 'success') {
      const convertido = data.conversion_result.toFixed(2);
      resultado.textContent = `${amount} ${from} = ${convertido} ${to}`;
    } else {
      resultado.textContent = 'Erro ao obter a taxa de câmbio.';
    }
  } catch (error) {
    resultado.textContent = 'Erro ao converter moeda. Verifique sua conexão.';
    console.error(error);
  }
}
