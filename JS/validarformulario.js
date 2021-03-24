function validar(fomulario){

    if(fomulario.nombre.value.length<5){
        alert("Escribe mas de 5 caraacteres en el cmapo nombre");
        formulario.nombre.focus();
        return false;
    }
 /*vamos a crear una opcion para que solo se pueda
 ingresar letras dentro de lcampo nombre
 */ 
var checkOK= "QWERTYUIOPASDFGHJKLÑZXCVBNM"
+ "qwertyuiopasdfghjklñzxcvbnm";


var checkStr = fomulario.nombre.value;

var allvalid = true;

for(var i= 0;i < checkStr.length; i++)
    var ch= checkStr.charAt(i);
    for(var j=0; j< chechOK.length; j++)
    if(ch == chechOK.charAt(j))
        break;
    if(j == chechOK.length){
        allvalid = false;
        break;
    }

}
if(!allvalid){
    alert("Escribe solo letras en el campo nombre")
    fomulario.nombre.focus();
    return false;
}

/*vamos a validar la entrada de numeros */


function validar(fomulario){

    if(fomulario.nombre.value.length<5){
        alert("Escribe mas de 5 caraacteres en el cmapo nombre");
        formulario.nombre.focus();
        return false;
    }
 /*vamos a crear una opcion para que solo se pueda
 ingresar letras dentro de lcampo nombre
 */ 
var checkOK= "1234567890";


var checkStr = fomulario.nombre.value;

var allvalid = true;

for(var i= 0;i < checkStr.length; i++)
    var ch= checkStr.charAt(i);
    for(var j=0; j< chechOK.length; j++)
    if(ch == chechOK.charAt(j))
        break;
    if(j == chechOK.length){
        allvalid = false;
        break;
    }

}
if(!allvalid){
    alert("Escribe solo numeros en el campo Edad")
    fomulario.nombre.focus();
    return false;
}

/*hay que validar la entrada de un correo electronico
algo.algo.algo.algo
.algo.algo.algo
.algo.algo
 teneoms que hacer uso de una expresion regular*/

 var txt= formulario.emial.value;

 var b = /^[@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

 alert("Email"+(b.test(txt)?"":"no")+"valido");

 return b.test(txt);