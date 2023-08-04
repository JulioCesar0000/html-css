const form = document.getElementById('customForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Aqui você pode fazer o que quiser com os dados do formulário
  // Por exemplo, exibir uma mensagem de sucesso ou enviar os dados para um servidor

  console.log('Dados do formulário:', formDataObject);
});
