document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // BOTÕES DE CURTIDA ❤️ 👍
    // ==============================

    const botoes = document.querySelectorAll("article button");

    botoes.forEach(function (botao) {

        let curtiu = false;

        botao.addEventListener("click", function () {

            const contador = botao.querySelector("span");

            if (contador) {

                if (curtiu === false) {
                    contador.textContent = Number(contador.textContent) + 1;
                    curtiu = true;
                } else {
                    contador.textContent = Number(contador.textContent) - 1;
                    curtiu = false;
                }

            }

        });

    });


    // ==============================
    // BOTÃO DO TEMA 🌓
    // ==============================

    const botaoTema = document.querySelector(".btn-tema-escuro");

    if (botaoTema) {

        botaoTema.addEventListener("click", function () {

            document.body.classList.toggle("tema-escuro");

        });

    }

});