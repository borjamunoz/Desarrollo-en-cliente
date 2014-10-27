var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("li");
  x.click(presionItem);
}

function presionItem()
{
  var x;
  x=$(this);
  x.hide();
}