document.getElementByClassName("btn").onclick = validateForm(); //al presionar el boton registrar se ejecutará  la funcion validateForm

var 




function validateForm(){ //esta funcion tiene dentro a todas estas funciones que hacen validaciones
	vacios();			//esta funcion valida que no hallan campos vacíos
	caractValido();	//Esta es para que el usuario no ponga un caracter que no sea una letra
	letraMayuscula();// esta es para validar que la rpimera letra del nombre y del apellido vayan en mayuscula
	verifCorreo();	//esta para verificar de que sea un correo valido
	verifContrasen();//la contraseña no puede ser igual a "password" ó "123456" ó "098754"
	seleccion(); //para que el individuo elija una de las opciones de bicicletas 
	agregarspan();
}

function vacios(){
	var arrageId = ["name", "lastname", "input-email", "input-password"];
	var cont1 = 0;
	for(i=0; i < arrageId.length; i++){
		var valor = document.getElementById(arrageId[i]).value;
		var nombre=document.getElementById("name").value;

		if(  valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			cont1++;
		}
	}

	if (cont1>0){
		alert("Estos campos son obligatorios.\nHay "+cont1+" campos vacios.\n");
	}
}

//Esta funcion  declara un arreglo con los campos a llenar y un contador que se inicializa en cero
//que contará si hay campos vacíos, de haberlos saldrá la alerta de que hay x campos vacios
//el contador al ser mayor a cero quiere decir que encontro campos vacios y saldra la alerta

function caractValido(){
	var arrageId = ["name", "lastname"];
	var cont2 = 0;
	for(i=0; i < arrageId.length; i++){//se recorre el arreglo 
		var valor = document.getElementById(arrageId[i]).value;//segun la posicion da el valor ingresado x el usuario
		if (/^[a-zA-Z]*$/.test(valor) == false){//verifica que lo ingresado sea un caracter valido y no simbolos raros
			cont2++;
		}
	}
	if (cont2>0){
		alert("Ingrese caracteres validos para el campo nombre y apellido.");
	}
}
//Esta funcion tiene un arreglo con dos campos, y un contador que al contar un caracter no valido
//saldra la alerta

function letraMayuscula(){
	var arrageId = ["name", "lastname"];
	var cont3 = 0;
	for(i=0; i < arrageId.length; i++){
		var valor = document.getElementById(arrageId[i]).value;//valor trae lo ingresado segun la posicion del areglo sea nombre o apellido
		if(valor.charAt(0).toLowerCase() == valor.charAt(0)){ //toma el caracter en la posicion cero de valor y lo pasa a minuscula y si esto es igual 
			cont3++;											//al caracter q esta en la posicion cero de la variable valor entonces el cont suma 1
		}
	}
	if (cont3>0){ //si el cont3 es mayor a cero lanza esta advertencia
		alert("Ingrese nombre y apellido con la primera letra en mayuscula.");
	}
}

function verifCorreo(){
	var arrageId = ["input-email"];//este arreglo solo toma 1 posicion que es el campo correo
	var cont4 = 0;
	var valor = document.getElementById(arrageId[0]).value;//
	if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor) != true){
		cont4++;
	}
	if (cont4>0){
		alert("Debe ingresar un correo con el formato correcto.");
	}
}

function verifContrasen(){
	var arrageId = ["input-password"];
	var cont5 = 0;
	var cadena = "";
	var valor = document.getElementById(arrageId[0]).value;//es el unico dato, se llama con cero pq el array tiene solo un dato dentro y los arrays parten siempre en cero. 
	if (valor.length < 6){//mide el largo de lo ingresado y si es menor a 6 va agregando caracteres hasta que le escriba 6 caracteres
		cadena += "La contraseña debe tener al menos 6 caracteres."
		cont5++;
	}
	if(valor == "123456" || valor == "098754"){//Aqui se valida que el usuario no coloque estos caracteres, pq sera super adivinable su clave
		cadena += "Contraseña muy debil.\n(Evite colocar 123456 o 098754 como su clave)."
		cont5++;
	}
	if (cont5>0){//si el cont5 es mayor a cero sale la alerta con la cadena
		alert(cadena);
	}
}

function seleccion(){// esta funcion se asegura de que el usuario elija un tipo de bici
	var valor = document.querySelector('select').selectedIndex;//este se ocupa cuando hay varias opciones y se debe seleccionar una de la lista
	if( valor == null || valor == 0 ){//si no elije nada saldra la alerta
  		alert("Debe seleccionar un tipo de bicicleta.");
	}
}

function span(){
	var agregar =document.getElementByTagClass("input-box");
	var elementoSpan= document.createElement("span");
	var nodoTexto=document.createTextNode("p");
	
	elementoSpan.appendChild(nodoTexto);
	agregar.appendChild(elementoSpan);

}

	span();
