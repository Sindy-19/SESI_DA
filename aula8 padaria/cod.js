function calcular(){

    var caneta = document.getElementById("caneta").value;
    var caderno = document.getElementById("caderno").value;
    var borracha = document.getElementById("borracha").value;

    var valorCaneta = 2;
    var valorCaderno = 15;
    var valorBorracha = 5;

    
    var total =
        (caneta * valorCaneta) +
        (caderno * valorCaderno) +
        (borracha * valorBorracha);

    document.getElementById("resultado").innerHTML =
        "Total: R$ " + total.toFixed(2);
}
