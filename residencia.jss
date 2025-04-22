emailjs.init("SEU_USER_ID_DO_EMAILJS"); // Substitua pelo seu User ID

function enviarFormulario() {
  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;

  const templateParams = {
    nome,
    email,
    mensagem
  };

  emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
    .then(response => {
      document.getElementById("msg-sucesso").style.display = "block";
    }, error => {
      alert("Erro ao enviar a inscrição. Tente novamente.");
      console.error(error);
    });

  return false;
}

function cadastrarEmpresa() {
  alert("Cadastro da empresa enviado com sucesso!");
  return false;
}
