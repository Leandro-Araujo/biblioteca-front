var novoCliente = document.getElementById('novocliente');
novoCliente.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('data-bs-whatever')
  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
});

enviarCliente = function(){
  let urlc = "http://localhost:8080/cliente/";
  var xhttp = new XMLHttpRequest(); 
  xhttp.open("POST", urlc); 
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      console.log(xhttp.status);
      console.log(xhttp.responseText);
      if(xhttp.status == 201) alert("Parabéns!! Cadastrado com sucesso");
      else alert("Oops, algo deu errado"); 
  }};

  var data = '{"nome":"Eduardo","cpf":"11122233345","rg":"35049560","endereco":"Rua Nova","bairro":"São Jorge","cidade":"Sao Paulo","estado":"SP","celular":"99776559988","dataNascimento":null}';
  newData = JSON.parse(data);
  newData.nome = document.getElementById('recipient-nome').value;
  newData.cpf = document.getElementById('recipient-cpf').value;
  newData.rg = document.getElementById('recipient-rg').value;
  newData.endereco = document.getElementById('recipient-endereco').value;
  newData.bairro = document.getElementById('recipient-bairro').value;
  newData.cidade = document.getElementById('recipient-cidade').value;
  newData.estado = document.getElementById('recipient-estado').value;
  newData.dataNacimento = document.getElementById('recipient-nascimento').value;

  xhttp.send(JSON.stringify(newData));
}