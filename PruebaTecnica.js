function EsPerfecto(n) {
    let sum = 1;

    for (let i = 2; i*i < n; i++){
    if (n%i==0)
    {
    if(i*i!=n)
        sum = sum + i + n/i;
    else
        sum=sum+i;
    }
}

if (sum == n && n != 1)
    return true;
else
    return false;
}


function NumerosPerfectosRango(initialRange, finalRange) {
    let respuesta='';
    for(let i = initialRange;i <= finalRange; i++){ // i es el número que vamos a comprobar

        if (EsPerfecto(i)){
            console.info(i);
            respuesta = respuesta + i+" - ";
        }
    }
    document.getElementById("resultado").innerHTML= respuesta;

}

//console.clear();

//función que va a llamar el botón
function calcular(){

    //traer variables
    let initialRange = document.getElementById("V1").value;
    let finalRange = document.getElementById("V2").value;
    //usar variables
    NumerosPerfectosRango(initialRange, finalRange);

    
}