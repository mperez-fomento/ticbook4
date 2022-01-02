---
sidebar_label: Condiciones
---
# Condiciones


## ¿Qué condiciones se pueden comprobar?

Las condiciones que podemos comprobar en una sentencia condicional son expresiones que pueden tener dos posibles valores:

-   `true`: la condición se cumple (es verdadera);
-   `false`: la condición no se cumple (es falsa).

Una expresión que puede tener solo uno de esos dos valores se llama *expresión booleana*.

Las expresiones booleanas están formadas por los siguientes elementos:

-   Comparaciones (>, <, etc.)
-   Conectores lógicos (and, or, etc.)
-   Valores booleanos (`true`, `false`)

Las sentencias condicionales evalúan la condición, y ejecutan el bloque correspondiente según el valor de la condición sea `true` o `false`.


## Comparaciones

Una comparación está formada por dos valores que se comparan y operador de comparación que especifica qué comparación queremos hacer.

Los operadores de comparación que podemos usar son los siguientes:

| operador | significado                |
|-------- |-------------------------- |
| `>`      | Mayor que                  |
| `<`      | Menor que                  |
| `>=`     | Mayor o igual que          |
| `<=`     | Menor o igual que          |
| `==`     | Igual a                    |
| `===`    | Estrictamente igual        |
| `!=`     | Distinto que               |
| `!==`    | Estrictamente distinto que |

La diferencia entre los dos operadores de igualdad (`==`, `===`) es que el primero compara solo los valores, mientras que el segundo compara también los tipos. Dos datos son iguales (`==`) si sus valores son iguales. Dos datos son estrictamente iguales (`===`) si son del mismo tipo y tienen el mismo valor.

Por ejemplo,

-   es verdad que `5 == "5"`, porque el valor es el mismo;
-   pero no es verdad que `5 === "5"`, porque, aunque el valor es el mismo, no son del mismo tipo (el primer es de tipo `Number` y el segundo es de tipo `String`).

Una comparación es una expresión booleana.

Por ejemplo,

-   `5 > 3` vale `true`
-   `1 == 0` vale `false`
-   `"Alejandro" < "Beatriz"` vale `true`
-   `"alejandro" < "Beatriz"` vale `false`<sup><a id="fnr.1" class="footref" href="#fn.1">1</a></sup>


## Conectores

Los conectores lógicos (también llamados operadores lógicos) conectan expresiones booleanas para formar expresiones booleanas más complejas.

Los conectores lógicos son los siguientes:

| conector         | significado                   |
|---------------- |----------------------------- |
| p && q           | and: se cumplen p y q         |
| p &vert;&vert; q | or: se cumple p o q (o ambos) |
| !p               | not: no se cumple p           |

Ejemplos:

```javascript
let x = 3;
let y = 5;
x > 0 && y > x; // true
x > 5 || y > x; // true
!(x > y); // true
```

Los operadores lógicos y los de comparación tienen un orden de evaluación (similar a los aritméticos). De mayor a menor precedencia (los primeros se evalúan antes):

1.  Not (`!`)
2.  And (`&&`)
3.  Comparaciones (`>,<,==,...`)
4.  Or (`||`)

Se pueden usar **paréntesis** para modificar el orden de evaluación (la expresión entre paréntesis siempre se evalúa antes).

Ejemplos:

```javascript
5 > 1 || 1 > 2 && 2 > 3; // true
(5 > 1 || 1 > 2) && 2 > 3; // false
! 1 > 5; // false
!(1 > 5); // true
!(5 > 1) || !(1 > 3 && !(2 > 7)); // true
```


## Valores booleanos

Los valores booleanos son `true` y `false`.

Las comparaciones se evalúan a un valor booleano.

Los operadores lógicos operan con valores booleanos y dan como resultado un valor booleano.

Es posible crear objetos de tipo `Boolean` para almacenar un valor `true` o `false` obtenido mediante una expresión booleana.

Una función puede devolver también un valor booleano.

```javascript
let b = new Boolean(true);
let c = true;
let d = 5 < 1; // d vale false
let e = c && d; // e vale false
```

```javascript
let vivo = true;
if (vivo) {
    console.log("Estoy vivo");
}
```

```javascript
function esPar(num)
{
    return num % 2 == 0;
}

let x = prompt("Escriba un número");

if (esPar(x)) {
    alert("El número es par");
}

if (!esPar(x) && x != 0) {
    alert("El número es impar");
}
```

## Footnotes

<sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup>

 Las comparaciones entre textos distinguen entre mayúsculas y minúsculas. En realidad, se comparan los códigos ASCII de las letras. Por eso, las letras mayúsculas se consideran *menores* que las minúsculas, porque su código ASCII es menor.