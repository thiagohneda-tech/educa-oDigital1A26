document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // BOTÕES DE CURTIDA
    // =========================

    const botoesCurtida = document.querySelectorAll("article button");

    botoesCurtida.forEach(function (botao) {

        let curtiu = false;

        botao.addEventListener("click", function () {

            const texto = botao.querySelector("span");

            if (!texto) {
                return;
            }

            if (curtiu === false) {

                texto.textContent = Number(texto.textContent) + 1;
                curtiu = true;

            } else {

                texto.textContent = Number(texto.textContent) - 1;
                curtiu = false;

            }

        });

    });


    // =========================
    // BOTÃO DO TEMA ESCURO
    // =========================

    const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

    if (btnTemaEscuro) {

        btnTemaEscuro.addEventListener("click", function () {

            document.body.classList.toggle("tema-escuro");

        });

    }

});