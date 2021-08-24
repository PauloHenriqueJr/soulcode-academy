$(document).ready(function () {

    // Retrona o valor do Primeiro input.
    $('#total_uti').on('input',function (elemento) {
        var input1 = ($(elemento.target).val());

        // Alterando a cor de fundo das tabelas
        if (input1 >= 80) {
            $(".alert_red").css({ backgroundColor: 'rgb(255, 114, 104)' });

            $(".alert_orange").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });


        } else if (input1 < 80 && input1 >= 70) {
            $(".alert_orange").css({ backgroundColor: 'rgb(255, 184, 77)' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });


        } else if (input1 < 70 && input1 > 60) {
            $(".alert_yellow").css({ backgroundColor: '#ffff00' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_orange").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });

        } else if (input1 <= 60 && input1 > 0) {
            $(".alert_green").css({ backgroundColor: 'rgb(204, 255, 45' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_orange").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });

        } else if (input1 == 0) {
            $(".alert_blue").css({ backgroundColor: 'rgb(109, 158, 221)' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_orange").css({ backgroundColor: 'inherit' });
        }
    })

      // Retrona o valor do Segundo input.

      $('#total_enf').on('input',function (elemento) {
        var input2 = ($(elemento.target).val());


        // Alterando a cor de fundo das tabelas
        if (input2 >= 1.5) {
            $(".alert_red").css({ backgroundColor: 'rgb(255, 114, 104)' });

            $(".alert_orange").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });


        } else if (input2< 1.5 && input2 >= 1.0) {
            $(".alert_orange").css({ backgroundColor: 'rgb(255, 184, 77)' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });


        } else if (input2 < 1.0 && input2 > 0.5) {
            $(".alert_yellow").css({ backgroundColor: '#ffff00' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_orange").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });

        } else if (input2 < 0.5) {
            $(".alert_green").css({ backgroundColor: 'rgb(204, 255, 45' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_orange").css({ backgroundColor: 'inherit' });
            $(".alert_blue").css({ backgroundColor: 'inherit' });

        } else if (input2 == 0) {
            $(".alert_blue").css({ backgroundColor: 'rgb(109, 158, 221)' });

            $(".alert_red").css({ backgroundColor: 'inherit' });
            $(".alert_yellow").css({ backgroundColor: 'inherit' });
            $(".alert_green").css({ backgroundColor: 'inherit' });
            $(".alert_orange").css({ backgroundColor: 'inherit' });
        }
    })

    // FOCUS
    $(".input_leitos").focusin(function () {
        $(this).css({ backgroundColor: "#F0F8FF" });
    });

    $(".input_leitos").focusout(function () {
        $(this).css({ backgroundColor: "white" });
    });
})

$("a").fadeIn(3000)//efeito no menu, aplicado display none na unidade respectiva

console.log("yay")