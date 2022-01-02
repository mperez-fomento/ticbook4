---
sidebar_label: Tipos primitivos
---
# Tipos primitivos


## **¿Qué son los tipos primitivos?**

Ciertos tipos de datos elementales (números, textos, etc.) están predefinidos en el lenguaje. Se llaman **tipos primitivos**.

Si queremos guardar uno de esos datos de tipos primitivos en una variable, es decir, con un nombre, no es necesario utilizar la palabra clave `new`, ni el nombre de la clase correspondiente.

Aunque dichos tipos no son propiamente clases, podemos manejarlos como si lo fueran. También podemos, por tanto, crear variables de esos tipos primitivos. Para ello, no es necesario utilizar la palabra `new`, porque no es necesario ejecutar ningún constructor. Basta con escribir el valor que queremos guardar en la variable.

Por ejemplo, las siguientes sentencias crean variables de datos primitivos. Se muestra cómo podrían crearse usando un constructor, o directamente escribiendo el valor.

```js
  let x = Number(5);
  let y = 5;

  let nombre = String("Pepe");
  let otro_nombre = "Juan";
```


## **¿Cuáles son los tipos primitivos?**

Los tipos primitivos principales<sup><a id="fnr.1" class="footref" href="#fn.1">1</a></sup> son:

-   `Number`: números.
-   `String`: textos.
-   `Boolean`: verdadero (`true`) o falso (`false`).
-   `undefined`: el tipo de una variable a la que no se ha asignado un valor.
-   `null`: tipo especial que representa un objeto vacío.


## **¿Cómo se escriben los valores de los tipos primitivos?**

:::info

Las expresiones que se usan para representar valores de un tipo de datos determinado se llaman **literales**.

:::

Los números (`Number`) se escriben utilizando los signos convencionales. El separador de las cifras decimales es el punto. Por ejemplo,

```js
  let pi = 3.141592;
```

En el ejemplo anterior, `3.141592` es un *literal*.

Los textos (`String`) se escriben entre comillas<sup><a id="fnr.2" class="footref" href="#fn.2">2</a></sup>. Por ejemplo,

```js
  let name = "John";
```

En el ejemplo anterior, &ldquo;John&rdquo; es un *literal*.


## **¿Se puede cambiar el objeto almacenado en una variable?**

Sí es posible cambiar la información almacenada en una variable. Cuando se trata de un objeto, lo normal es que solo modifiquemos sus propiedades. Pero, cuando la variable almacena un dato de tipo primitivo, es frecuente que queramos cambiar su valor.

Para cambiar el contenido de una variable, utilizamos el *operador de asignación*, que es el signo `=`.

Por ejemplo:

```js
  let x = 5; // Creamos una variable de nombre 'x' y guardamos un '5'
  x = x + 1; // Modificamos el valor almacenado en 'x': ahora es un '6'
```

## Footnotes

<sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup>

 Existen otros, como `BigInt`, `Object`, o `Symbol`.

<sup><a id="fn.2" class="footnum" href="#fnr.2">2</a></sup>

 También pueden utilizarse comillas simples. Pero nosotros usaremos las dobles.
