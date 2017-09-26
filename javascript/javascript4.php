
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Ejercicio 11 - DOM b�sico</title>

<script type="text/javascript">
window.onload = function() {
	// Numero de enlaces de la pagina
     var enlaces = document.getElementsByTagName("a");
     var enla=enlaces.length;
     console.log("numero de enlaces "+enla);
     console.log("<br>");
     for (var i = 0; i < enla; i++) {
     	console.log("numero de enlaces "+i+")"+enlaces[i]);
     }
        console.log("<br>");

	// Direccion del penultimo enlace
	var penultimo= enlaces[enla-2].href;
	console.log("Direccion del penultimo enlace "+penultimo);
     
	// Numero de enlaces que apuntan a http://prueba
	var contador =0;
	for (var i = 0; i < enla; i++) {
		if(enlaces[i].href== "http://prueba/"){
			contador++;

		}
     	
     }
     console.log("Numero de enlaces que apuntan a http://prueba: "+contador);

	// Numero de enlaces del tercer p�rrafo
	var parrafos= document.getElementsByTagName("p")
	var numeroParrafos=parrafos.length;
	var res=parrafos[2].getElementsByTagName("a").length;
     	console.log("Numero de enlaces del tercer p�rrafo: "+res);

}
</script>
</head>

<body>
<p>Lorem ipsum dolor sit amet, <a href="http://prueba">consectetuer adipiscing elit</a>. Sed mattis enim vitae orci. Phasellus libero. Maecenas nisl arcu, consequat congue, commodo nec, commodo ultricies, turpis. Quisque sapien nunc, posuere vitae, rutrum et, luctus at, pede. Pellentesque massa ante, ornare id, aliquam vitae, ultrices porttitor, pede. Nullam sit amet nisl elementum elit convallis malesuada. Phasellus magna sem, semper quis, faucibus ut, rhoncus non, mi. <a href="http://prueba2">Fusce porta</a>. Duis pellentesque, felis eu adipiscing ullamcorper, odio urna consequat arcu, at posuere ante quam non dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis scelerisque. Donec lacus neque, vehicula in, eleifend vitae, venenatis ac, felis. Donec arcu. Nam sed tortor nec ipsum aliquam ullamcorper. Duis accumsan metus eu urna. Aenean vitae enim. Integer lacus. Vestibulum venenatis erat eu odio. Praesent id metus.</p>

<p>Aenean at nisl. Maecenas egestas dapibus odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin consequat auctor diam. <a href="http://prueba">Ut bibendum blandit est</a>. Curabitur vestibulum. Nunc malesuada porttitor sapien. Aenean a lacus et metus venenatis porta. Suspendisse cursus, sem non dapibus tincidunt, lorem magna porttitor felis, id sodales dolor dolor sed urna. Sed rutrum nulla vitae tellus. Sed quis eros nec lectus tempor lacinia. Aliquam nec lectus nec neque aliquet dictum. Etiam <a href="http://prueba3">consequat sem quis massa</a>. Donec aliquam euismod diam. In magna massa, mattis id, pellentesque sit amet, porta sit amet, lectus. Curabitur posuere. Aliquam in elit. Fusce condimentum, arcu in scelerisque lobortis, ante arcu scelerisque mi, at cursus mi risus sed tellus.</p>

<p>Donec sagittis, nibh nec ullamcorper tristique, pede velit feugiat massa, at sollicitudin justo tellus vitae justo. Vestibulum aliquet, nulla sit amet imperdiet suscipit, nunc erat laoreet est, a <a href="http://prueba">aliquam leo odio sed sem</a>. Quisque eget eros vehicula diam euismod tristique. Ut dui. Donec in metus sed risus laoreet sollicitudin. Proin et nisi non arcu sodales hendrerit. In sem. Cras id augue eu lorem dictum interdum. Donec pretium. Proin <a href="http://prueba4">egestas</a> adipiscing ligula. Duis iaculis laoreet turpis. Mauris mollis est sit amet diam. Curabitur hendrerit, eros quis malesuada tristique, ipsum odio euismod tortor, a vestibulum nisl mi at odio. <a href="http://prueba5">Sed non lectus non est pellentesque</a> auctor.</p>
</body>
</html>
