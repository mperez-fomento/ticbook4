# Estructura básica de un programa en JavaScript

Como hemos dicho, la manera más habitual de ejecutar un programa en JavaScript es visitando una página web en la que dicho programa esté incrustado. El navegador de Internet ejecutará el programa al tiempo que muestra la página web en la ventana. El programa utilizará dicha página web como vehículo de comunicación con el usuario.

Un programa en JavaScript requerirá, por tanto, dos archivos:

-   la página web donde lo incrustemos;
-   el archivo donde esté el código fuente.

Supongamos que la página web se llama *index.html*, y el archivo fuente del programa se llama *script.js* <sup><a id="fnr.1" class="footref" href="#fn.1">1</a></sup>. Este podría ser el contenido de ambos archivos:

**index.html**

```html
<!doctype html>
<html>

<head>
        <meta charset="utf-8" />
        <title>Mi programa</title>
        <script src="createjs.js"></script>
        <script src="zim.js"></script>
        <script src="script.js"></script>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
</head>

<body></body>

</html>

```

La línea de la página web en la que incrustamos nuestro código fuente es esta:

```html
<script src="script.js"></script>
```

**script.js**

```js
document.write("Hello, World!");
```

Este programa tiene una única sentencia, que escribe un saludo en la página web.

## Footnotes

<sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup> 

Se llama **extensión** de un archivo a unas letras añadidas al final de su nombre, separadas con un `.`, que algunos sistemas operativos (p. ej. Windows) utilizan para distinguir el tipo de contenido de los archivos. Algunos sistemas operativos (Windows, por ejemplo) utilizan la extensión como criterio para saber con qué programa abrir un archivo cuando se hace doble clic en su icono. También hay aplicaciones que utilizan la extensión para reconocer qué archivos pueden abrir y cuáles no. En general, es conveniente respetar las extensiones *estándar* o especificadas por las distintas aplicaciones. En algunos sistemas, si se quita o cambia la extensión de un archivo el sistema no será capaz de averiguar con qué aplicación abrir el archivo (el usuario tendrá que recordar qué tipo de contenido tenía el archivo para abrirlo con la aplicación adecuada). Por ese motivo, Windows tiene la opción de ocultar las extensiones cuando muestra los archivos en el Escritorio o en el explorador de archivos. De esta manera, evita la modificación accidental de la extensión (que es fácil se produzca al cambiar el nombre de un archivo). Dicha opción está activada por defecto. Puede modificarse en las opciones de configuración del *explorador de archivos* (accesibles en cualquier ventana de dicho programa).
