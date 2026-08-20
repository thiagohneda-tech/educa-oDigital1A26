alert("JavaScript funcionando!");

const botoesCurtida = document.querySelectorAll(".btn-curtir");

botoesCurtida.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }

    });

})
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");

});