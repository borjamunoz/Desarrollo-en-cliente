var x;

x=$(document);//le pasamos la referencia del objeto document del DOM

x.ready(inicializarEventos);//cuando el documento cargue pasamos las funcion inicializarEventos 

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(presionBoton)
}

function presionBoton()
{
  alert("Se presionó el botón");
}