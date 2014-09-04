// ya que el codigo esta sepaardo(en otro fichero fuera del HTML)
// lo voy a serparar todo
// y voy a poner los eventos desde aquí
function testAjax(){
	ajax = new XMLHttpRequest();
	// ABRO LA CONEXION
	ajax.open("POST", "http://localhost:8080/web-ejemplo/rest/adios/Oliver", true);
    // tengo que preparar la respuesta
	ajax.onreadystatechange = responder;
	// TENGO QUE HACER LA PETICIÓN
	ajax.send();
}

function responder(){
	if (ajax.readyState == 4 && ajax.status == 200) {
		var resultado = ajax.responseText;
		alert(resultado);
	}
}
//me invento una función main
function main() {
	// aqui voy a enlazar todos los eventos
	var boton1 = document.getElementById("probarAJAX");
	boton1.onclick = testAjax;
}
// La función main se va a ejecutar cuando se cargue la pagina
//document.onreadystatechange = main;
  window.onload = main;