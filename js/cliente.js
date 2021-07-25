var url = "http://localhost:8080/cliente";
var xhttp = new XMLHttpRequest(); 

xhttp.open("GET", url, true); 

xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        var respota = JSON.parse(xhttp.responseText)
        for(var i = 0; i < respota.length; i++){
        	console.log(respota[i]);

        	let cliente = document.createElement("tr");

            let nomeCliente = document.createElement("td");
        	let cpfCliente = document.createElement("td");
        	let rgCliente = document.createElement("td");
        	let celularCliente = document.createElement("td");
        	let dataNascimento = document.createElement("td");

        	let imgTd = document.createElement("td");
        	let imgEdit = document.createElement("img");
        	imgEdit.src = "./img/edit1.png";
        	let imgLink = document.createElement("a");
        	imgLink.href = "#";

        	imgLink.appendChild(imgEdit);
        	imgTd.appendChild(imgLink);

        	let tablelixeira = document.createElement("td");
        	let imglixeira = document.createElement("img");
        	imglixeira.src = "./img/lixeira1.png";
        	let linklixeira = document.createElement("a");
        	linklixeira.href = "#";
        	linklixeira.id = respota[i].codigo;
        	linklixeira.onclick = apagarCliente;

        	linklixeira.appendChild(imglixeira);
        	tablelixeira.appendChild(linklixeira);



        	
            //cliente.classList.add("conta");

            //let strongName = document.createElement("strong");
            //strongName.classList.add('nome');

            //titularConta.appendChild(strongName);

            cliente.appendChild(nomeCliente);
        	cliente.appendChild(cpfCliente);
        	cliente.appendChild(rgCliente);
        	cliente.appendChild(celularCliente);
        	cliente.appendChild(dataNascimento);  

        	cliente.appendChild(imgTd);   
        	cliente.appendChild(tablelixeira);   	

            //strongName.textContent = respota[i].titular.nome;
        	nomeCliente.textContent = respota[i].nome;
        	cpfCliente.textContent = respota[i].cpf;
        	rgCliente.textContent = respota[i].rg;
        	celularCliente.textContent = respota[i].celular;
        	dataNascimento.textContent = respota[i].dataNascimento;

            //Conta.onclick = mostrarConta;
            //Conta.setAttribute("id", respota[i].numero);

        	document.getElementById('tablecad').appendChild(cliente);
        }
    }
}

xhttp.send();
/*
function mostrarConta(){
    //alert(this.id);
    document.getElementById("conta").style.display = "inline-block";
    let url = "http://localhost:8080/contas/" +this.id;

    var xhttp = new XMLHttpRequest(); 

    xhttp.open("GET", url, true); 

    xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        var respota = JSON.parse(xhttp.responseText);        
        document.getElementById('contausuario').innerText = respota.numero;
        document.getElementById('tipoconta').innerText = tipoCt[respota.tipo];
        document.getElementById('agencia').innerText = respota.agencia;
        document.getElementById('saldo').innerText = respota.saldo;
        }
    }
    xhttp.send();
}*/

function apagarCliente(){
	alert(this.id);
}