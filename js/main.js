

function validateForm(){

	function validarNombre(){
		var caractInv = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		var nombre =document.getElementById("name").value;
		if(nombre.length==0){

			var divContenedor=document.getElementsByClassName("name-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}
		if(!caractInv.test(nombre)){

			var divContenedor=document.getElementsByClassName("name-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Debe escribir caracteres validos");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		} 
	}
	validarNombre();


	function validarApellido(){
		var caractInv = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		var apellido=document.getElementById("lastname").value;
		if(apellido.length==0){
			var divContenedor=document.getElementsByClassName("lastname-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}
		if(!caractInv.test(apellido)){

			var divContenedor=document.getElementsByClassName("lastname-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Debe escribir caracteres validos");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}

	}
	validarApellido();

	function validaMayuscula (){
		var nombre =document.getElementById("name").value;
		var apellido=document.getElementById("lastname").value;

		if(nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){

			var divContenedor=document.getElementsByClassName("name-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("La primera letra debe ser mayúscula");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}

		if(apellido.charAt(0) !== apellido.charAt(0).toUpperCase()){

			var divContenedor=document.getElementsByClassName("lastname-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("La primera letra debe ser mayúscula");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}

	}
	validaMayuscula ();


	function validarCorreo(){
		var valideMail= /\w+@\w+\.+[a-z]/; 
		var correo=document.getElementById("input-email").value;
		if(correo.length==0){
			var divContenedor=document.getElementsByClassName("email-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}
		if (!valideMail.test(correo)){

			var divContenedor=document.getElementsByClassName("email-container")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Escriba un formato válido");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}
	}
	validarCorreo();


	function validarContrasena(){
		var contrasena=document.getElementById("input-password").value;
		if(contrasena.length==0){
			var divContenedor=document.getElementsByClassName("form-group")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Este campo no debe quedar vacío");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}if(contrasena==="123456" ||  contrasena==="098754" || contrasena==="password" && contrasena.length<6){

			var divContenedor=document.getElementsByClassName("form-group")[0];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Contraseña muy débil, debe cambiarla por una segura");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}

	}
	validarContrasena();


	function validarSeleccion(){
		var seleccion=document.getElementsByTagName("select")[0].value;
		if(seleccion ==0){
			var divContenedor=document.getElementsByClassName("form-group")[1];
			var elemento= document.createElement("span");
			var nodoTexto=document.createTextNode("Debe elegir una bicicleta");
			elemento.appendChild(nodoTexto);//elemento es padre de nodoTexto;
			divContenedor.appendChild(elemento);

			return false;
		}

	}
	validarSeleccion();


}




















