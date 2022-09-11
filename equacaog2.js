function eq2() {
    $('.cx').css('width', '20px');
    document.getElementById("calc").onclick = function() {
        var A = parseFloat(a.value);
        var B = parseFloat(b.value);
        var C = parseFloat(c.value);
        var delta = B**2 - 4 * A * C;
        var solucao = (-B - Math.sqrt(delta))/(2 * A);
        var solucao2 = (-B + Math.sqrt(delta))/(2 * A);
        
        if(delta < 0) {
            document.getElementById("x1").innerHTML = "Não está definido em R";
            document.getElementById("x2").innerHTML = "Não está definido em R";
            document.getElementById("solution").innerHTML = "S = { }";
        }
        
        else if(solucao <= solucao2) {
            document.getElementById("x1").innerHTML = solucao;
            document.getElementById("x2").innerHTML = solucao2;
            document.getElementById("solution").innerHTML = "S = { " + solucao + " ; " + solucao2 + " }";
        }
        else  {
            document.getElementById("x2").innerHTML = solucao;
            document.getElementById("x1").innerHTML = solucao2;
            document.getElementById("solution").innerHTML = "S = { " + solucao2 + " ; " + solucao1 + " }";
    }
}
}

window.onload = eq2;










        
        
       
       
            
           
        
    
