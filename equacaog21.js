var i = 0;

window.addEventListener("load", function trocar() {
        var Ar = ['Matemática', 'Física', 'Química', 'Informática'];
        var saida =  document.getElementById("baner");
       
        saida.innerHTML = Ar[i];
        if(i % 2 == 0) { 
            $('#baner').css('color', 'black').css('background', 'yellow').css('border-radius', '0 10px 0 0');
            $('#head').css('background-color', 'black');
        }
        else { 
            $('#baner').css('color', 'yellow').css('background', 'black').css('border-radius', '0 10px 0 0');
            $('#head').css('background-color', 'yellow');
        }
        if(i == Ar.length - 1) i = 0;
        else i++;
        
            setTimeout(trocar, 2000);

        });

        window.addEventListener("load", function sair() {
            document.getElementById("teste").innerHTML = "Testando Eventos";
        });