
const nomeUsuario = prompt("Por favor, digite seu nome:");

window.onload = function () {

    if (nomeUsuario) {
        const paragrafoNome = document.createElement("p");
        paragrafoNome.textContent = `Bem-vindo, ${nomeUsuario}!`;


        const fotoUsuario = document.getElementById("foto-usuario");
        fotoUsuario.insertAdjacentElement("afterend", paragrafoNome);
    }
};
