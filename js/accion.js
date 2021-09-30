var resultado;
var GTabla = []; 
var mensaje;

function carcular() {
let nu1 = document.getElementById('num1').value; 
let nu2 = document.getElementById('num2').value; 
let operacion = document.getElementById('operacion').value;

num1 = parseInt(nu1); 
num2 = parseInt(nu2);


switch (operacion) { 
case "Sumar":
resultado = num1 + num2; 
mensaje = "El resultado de "+operacion+" "+num1+" + "+num2+" es igual a "+resultado+"";
resp.value = mensaje; 
break;
case "Restar":
resultado = num1 - num2; 
mensaje = "El resultado de "+operacion+" "+num1+" - "+num2+" es igual a "+resultado+"";
resp.value = mensaje; 
break;
case "Multiplicar":
resultado = num1 * num2; 
mensaje = "El resultado de "+operacion+" "+num1+" * "+num2+" es igual a "+resultado+"";
resp.value = mensaje; 
break;
case "Dividir":
resultado = num1 / num2; 
mensaje = "El resultado de "+operacion+" "+num1+" / "+num2+" es igual a "+resultado+"";
resp.value = mensaje; 
break;

 default:
     break;
    }
    guardar();
}
function guardar(){
    calc= {};
    calculo = document.getElementsByName('calcular');

    for (i in calculo){
        cl = calculo[i];
        calc[cl.id] = cl.value;
    }
    GTabla.push(calc);
    localStorage.setItem('intro', JSON.stringify(GTabla));
    ver();
}
function ver(){
    document.getElementsById('calculo').innerHTML = '';
    for (i = 0; i < GTabla.length; i++) {
        fila = GTabla[i];

        tr = document.createElement('tr');
        vln = document.getElementsById('cal').value;
        vln = vln.replace('{operacion}', fila.operacion);
        vln = vln.replace('{Resultado}', fila.resp);
        tr.innerHTML = vln;
        document.getElementsById('calculo').appendChild(tr);
        
    }

}
Window.onload = function(){
    vln = localStorage.getItem('intro');
    if(vln != null){
        GTabla = JSON.parse(vln);
        ver();
    }
}
function borrar(){
    calc = [];
    calculo = document.getElementsByName('calcular');
    document.getElementsById('calculo').innerHTML='';
    for (i = 0; i < GTabla.length; i++) {
        if(i != calculo){
            calculado.push(GTabla[i]);

        }
    }
    GTabla = calc;
    localStorage.clear(GTabla);
}
function confireETodo(){
    comf = confirm("estas seguro de esto?");
    if(comf == true){
        borrar();
    }
}