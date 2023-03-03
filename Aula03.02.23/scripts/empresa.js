//Elementos de dados digitados pelo usuário
const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");

// saber quando o botão foi clicado
const addBtn = document.getElementById("btn-add");

// montar corpo de linhas da tabela
const conteudoTab = document.getElementById("conteudo-tabela");

// Event listener = fofoqueiro = ouvinte
addBtn.addEventListener("click", () => {
    // 1) coletar dos inputs o que foi digitado
    let usuario = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocalidade.value,
        telefone: campoTelefone.value,
    };

    // 2) concatenar na tabela
    conteudoTab.innerHTML += `
    <tr>
        <td>${usuario.email}</td>
        <td>${usuario.cep}</td>
        <td>${usuario.uf}</td>
        <td>${usuario.localidade}</td>
        <td>${usuario.telefone}</td>
    </tr>`

    campoEmail.value = "";
    campoCep.value = "";
    campoUf.value = "";
    campoLocalidade.value = "";
    campoTelefone.value = "";

})