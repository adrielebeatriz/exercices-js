function login() {
    let nomeUsuario = prompt("Digite o nome de usuário:");
    let senha = prompt("Digite a senha:");
  
    for (; senha === nomeUsuario; ) {
      alert("Erro: A senha não pode ser igual ao nome de usuário!");
      senha = prompt("Digite a senha novamente:");
    }
  
    alert("Login bem-sucedido!");
  }
  
  
  login();