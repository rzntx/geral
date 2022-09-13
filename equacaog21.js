var i = 0;

window.addEventListener("load", function trocar() {
        var Ar = ['Matemática', 'Física', 'Química', 'Informática'];
        var saida =  document.getElementById("baner");
        
        saida.innerHTML = Ar[i];
        if(i % 2 == 0) { 
            $('#baner').css('color', '#BFB2A3').css('background', '#2E2E2E').css('border-radius', '0 10px 0 0');
            $('#head').css('background-color', '#BFB2AE');
        }
        else { 
            $('#baner').css('color', '#2E2E2E').css('background', '#BFB2A3').css('border-radius', '0 10px 0 0');
            $('#head').css('background-color', '#2E2E2E');
        }
        if(i == Ar.length - 1) i = 0;
        else i++;
        
            setTimeout(trocar, 5000);

        });

      
    