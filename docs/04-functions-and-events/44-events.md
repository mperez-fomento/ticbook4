---
sidebar_label: Eventos
---
# Eventos


## **¿Qué es un evento?**

:::info

Un **evento** es una acción externa al programa, que el programa detecta, pudiendo modificar su comportamiento al detectarla.

:::

Ejemplos de eventos son: cualquier movimiento del ratón, la pulsación de una tecla, etc.

Los eventos permiten que el programa interactúe con el usuario, ya que muchos de los eventos son acciones realizadas por el usuario. Y la capacidad del programa para detectar esas acciones, le permitirá responder a ellas.

Los eventos los captura el navegador, y los transfiere al programa que se está ejecutando para que los maneje como estime oportuno.

Los eventos están asociados a un objeto concreto, en el que se considera que se ha producido el evento. Por ejemplo, si se hace clic con el botón del ratón, ese evento estará asociado al objeto al que estuviera apuntando el cursor en ese momento.


## **¿Qué es un manejador de evento?**

:::info

Un **manejador de evento** es una función que se ejecuta cada vez que se produce cierto tipo de evento asociado a cierto objeto.

:::

Por ejemplo, un objeto de clase `Circle` puede recibir eventos de tipo `click`. Cada vez que se produzca un evento de tipo `click` sobre ese objeto, se ejecutará, si existe, el manejador de eventos tipo `click` del objeto en cuestión.

Es posible asociar varios manejadores para el mismo evento en un mismo objeto. Dichos manejadores se ejecutarán en orden cuando se produzca ese evento sobre dicho objeto.


## **¿Cómo se crea un manejador de evento?**

Los manejadores de eventos son funciones, y, por tanto, se crean como cualquier función, con la palabra clave `function`.

Pero, para que una función se convierta en el manejador de cierto tipo de eventos para cierto objeto, es necesario asociar dicha función a dicho tipo de eventos en ese objeto. Eso se hace mediante el método `addEventListener`, que tienen aquellas clases de objetos capaces de recibir eventos<sup><a id="fnr.1" class="footref" href="#fn.1">1</a></sup>.

La sintaxis del método `addEventListener` es la siguiente:

```js
  objeto.addEventListener("tipo_de_evento", manejador);
```

Por ejemplo, el siguiente código asocia un manejador al evento `click` de un círculo. Dicho manejador dibuja un círculo en una posición aleatoria:

```js
  function circ_aleatorio()
  {
      new Circle({
        radius: 100,
        color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
      }).loc(Math.random()*400, Math.random()*400);
      stage.update();
  }
  let c = new Circle(100, "red").center();
  c.addEventListener("click", circ_aleatorio);
```

En el ejemplo anterior, hemos creado la función manejadora del evento, con el nombre `circ_aleatorio`, y luego hemos asociado dicha función a los eventos de tipo `click` del objeto `c`. Sin embargo, podíamos haber creado la función manejadora del evento directamente al llamar al método `addEventListener`, sin necesidad de ponerle nombre a dicha función manejadora. Como esto es muy frecuente, veremos a continuación un ejemplo:

```js
  let c = new Circle(100, "red").center();
  c.addEventListener("click", function () {
      new Circle({
        radius: 100,
        color: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`,
      }).loc(Math.random()*400, Math.random()*400);
      stage.update();
  });
```


## **¿Qué eventos se pueden capturar?**

Son muchos los eventos que un programa puede capturar y manejar. Indicamos a continuación los más importantes.

Se llama `cursor` a un icono (normalmente, una flecha), que indica la posición del ratón en la pantalla. Aunque el `cursor` no sea visible, el ratón tiene siempre una posición sobre la pantalla. Las acciones del ratón se refieren siempre al punto en el que se encuentra el `cursor`.

| **Aplicable a** | **Evento**       | **Significado**                                                       |
|-|-|-|
| Obj. Gráficos   | `click`          | Se ha pulsado y soltado el botón izquierdo del ratón sobre el objeto. |
| Obj. Gráficos   | `dblclick`       | Se ha hecho doble click sobre el objeto.                              |
| Obj. Gráficos   | `mouseover`      | El cursor ha entrado en el objeto.                                    |
| Obj. Gráficos   | `mouseout`       | El cursor ha salido del objeto.                                       |
| Obj. Gráficos   | `tick`           | Se produce 30 veces cada segundo (funciona como un reloj).            |
| Stage           | `mouseenter`     | El cursor ha entrado en el `stage`.                                   |
| Stage           | `mouseleave`     | El cursor ha salido del `stage`.                                      |
| Stage           | `stagemousemove` | El cursor se ha movido.                                               |
| Frame           | `keydown`        | Se ha pulsado una tecla.                                              |
| Frame           | `keyup`          | Se ha dejado de pulsar una tecla.                                     |
| Frame           | `wheel`          | Se ha movido la rueda del ratón.                                      |


## **¿Puedo saber en qué posición se ha pulsado el ratón?**

Cuando el navegador detecta un evento en un objeto, realiza las siguientes acciones:

1.  Crea un objeto de tipo `Event` donde almacena información sobre el evento que se acaba de detectar.
2.  Llama por turno a todos los manejadores de eventos registrados para ese tipo de evento en el objeto en que se ha producido el evento, pasándoles como argumento el objeto de tipo `Event` creado en el paso anterior.

Lógicamente, si queremos que nuestro manejador de eventos reciba ese argumento que le pasa el navegador, será necesario incluir un parámetro en la definición del manejador. Podemos poner el nombre que queramos a ese parámetro (como siempre ocurre con los parámetros de las funciones), aunque es típico llamarlo `event`, `ev`, o `e`, ya que contendrá información sobre el evento.

La información sobre el evento está almacenada en diversas propiedades del objeto que se pasa como argumento al manejador.

Cuando se produce un evento de tipo `click`, el objeto pasado como argumento contiene dos propiedades que indican la posición en que estaba el cursor cuando se produjo el evento:

-   `stageX`: coordenada *x* del punto en que se produjo el `click`, relativa al `stage`;
-   `stageY`: coordenada *y* del punto en que se produjo el `click`, relativa al `stage`.

```js
    function donde_clic(event)
    {
        console.log(`Clic en ${event.stageX}, ${event.stageY}`);
    }
    let c = new Circle(100, "red").center();
    c.addEventListener("click", donde_clic);
```


## **¿Cómo saber qué tecla se ha pulsado?**

Como se ha explicado antes, cuando se pulse una tecla, el navegador creará un objeto para almacenar la información relativa al evento, y pasará dicho objeto al manejador de eventos correspondiente como argumento.

La propiedad del objeto del evento en que se almacena la tecla pulsada es `key`.

```js
      function muestra_tecla(event)
      {
          console.log(event.key);
      }
      frame.on("keydown", muestra_tecla);

```


## **¿Puede el manejador de eventos acceder al objeto cuyos eventos maneja?**

Dentro del manejador de eventos se puede utilizar una variable especial, `this` <sup><a id="fnr.2" class="footref" href="#fn.2">2</a></sup>, que se refiere al objeto al que pertenece el manejador de eventos<sup><a id="fnr.3" class="footref" href="#fn.3">3</a></sup>.

De modo que, el manejador de eventos puede acceder al objeto cuyos eventos maneja, usando la variable `this`:

```js
  function cambia_color()
  {
      this.color = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
      stage.update();
  }
  let c = new Circle(100, "red").center();
  c.addEventListener("click", cambia_color);

```

El objeto del evento contiene también una referencia al objeto en el que se produjo el evento. Si llamamos `event` al objeto del evento, entonces dicha referencia es: `event.target`.

## Footnotes

<sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup>

 La librería gráfica que utilizamos (`zimjs`) permite usar el método `on` en lugar de `addEventListener`. Se trata, prácticamente, del mismo método.

<sup><a id="fn.2" class="footnum" href="#fnr.2">2</a></sup>

 En realidad, esta variable especial existe en todo programa. Cuando se usa dentro de un método de un objeto, se refiere, en general, al objeto al que pertenece el método. Cuando se usa fuera de una clase, se refiere, en general, al objeto global (la ventana del navegador).

<sup><a id="fn.3" class="footnum" href="#fnr.3">3</a></sup>

 Aquí no distinguimos entre el objeto que está manejando el evento (aquel al que está asociado el manejador de eventos que se está ejecutando), y el objeto en el que se originó el evento. Vamos a suponer siempre que es el mismo objeto, es decir, que el objeto que maneja el evento es el objeto en que se originó dicho evento. En la realidad, esto no siempre es así. Un objeto puede manejar eventos originados en otro objeto. Esto se consigue mediante un proceso llamado *bubbling*. Hay que tener en cuenta que los objetos del navegador están organizados en una jerarquía, en la que unos objetos contienen a otros. Por ejemplo: todos los objetos están contenidos en un objeto llamado `document`, que representa la página web. Cuando creamos un `Container`, los objetos que le añadimos están, lógicamente, contenidos en él. Pues bien, un objeto en el que se origina un evento puede *pasar* (*bubble*) dicho evento al objeto que lo contiene, y este, al objeto que lo contiene a él, y así, sucesivamente, hasta llegar al objeto `document`. Cada uno de los objetos que reciben el evento, puede manejarlo, si tiene registrado un manejador de eventos para ese tipo de eventos. Cuando el objeto que maneja el evento no es el origen del evento, la variable `this` se refiere al objeto que maneja el evento, no a su origen, mientras que `event.target` se refiere al objeto que originó el evento.
