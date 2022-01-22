---
sidebar_label: Condiciones
---
# Condiciones


## ¿Qué condiciones se pueden comprobar?

Las condiciones que podemos comprobar en una sentencia condicional son expresiones que pueden tener dos posibles valores:

-   `true`: la condición se cumple (es verdadera);
-   `false`: la condición no se cumple (es falsa).

:::info

Una *expresión booleana* es una expresión que puede tener solo uno de estos dos valores: `true`, `false`.

:::

:::info

Las expresiones booleanas están formadas por los siguientes elementos:

-   Comparaciones (>, <, etc.)
-   Conectores lógicos (and, or, etc.)
-   Valores booleanos (`true`, `false`)

:::

:::info

Las condiciones que comprueban las sentencias condicionales han de ser expresiones booleanas.

:::

Las sentencias condicionales evalúan la condición, y ejecutan el bloque correspondiente según el valor de la condición sea `true` o `false`.


## Comparaciones

Una comparación está formada por dos valores que se comparan y *operador de comparación* que especifica qué comparación queremos hacer.

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
-   `"alejandro" < "Beatriz"` vale `false`<sup><a id="fnr.1" class="footref" href="#fn.1" role="doc-backlink">1</a></sup>


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

:::info

Los operadores lógicos y los de comparación tienen un orden de evaluación (similar a los aritméticos). De mayor a menor precedencia (los primeros se evalúan antes):

1.  Not (`!`)
2.  And (`&&`)
3.  Comparaciones (`>,<,==,...`)
4.  Or (`||`)

Se pueden usar **paréntesis** para modificar el orden de evaluación (la expresión entre paréntesis siempre se evalúa antes).

:::

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

Un objeto de tipo `Boolean` es un objeto cuyo valor es un valor booleano (`true` o `false`).

Una función puede devolver un valor booleano.

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


# Ejercicios

1.  📝 💻 Indica el valor booleano (`true`, `false`) de cada una de las siguientes comparaciones:
    -   `"Susana" > "Paco"`
    -   `"susana" > "Paco"`
    -   `3 > "1"`
    -   `3 == "3"`
    -   `3 === "3"`
    -   `"" == 0`
    -   `"" === 0`

2.  📝 💻 Indica el valor booleano de cada una de las siguientes expresiones:
    -   `3 > 1 && 1 > 2`
    -   `1 > 2 && 3 > 1`
    -   `2 > 1 && 3 > 1`
    -   `3 > 1 || 1 > 2`
    -   `1 > 2 || 3 > 1`
    -   `1 > 2 || 1 > 3`
    -   `!(3 > 1)`

3.  📝 💻 Indica el valor booleano de cada una de las siguientes expresiones:
    -   `3 > 1 || 2 > 1 && 1 > 4`
    -   `(3 > 1 || 2 > 1) && 1 > 4`
    -   `3 > 1 || 1 > 2 && 1 > 3 || 1 > 4`
    -   `(3 > 1 || 1 > 2) && (1 > 3 || 1 > 4)`
    -   `(3 > 1 || 1 > 2) && 1 > 3 || 1 > 4`

4.  📝 💻 Indica el valor booleano de cada una de las siguientes expresiones:
    -   `! 1 > 3`
    -   `!(1 > 3)`
    -   `!("2" == 2)`
    -   `"2" != 2`
    -   `!("2" === 2)`
    -   `"2" !== 2`

5.  📝 💻 Indica el valor booleano de cada una de las siguientes expresiones:
    -   `!(1 > 3 && 1 > 2)`
    -   `!(1 > 3) && !(1 > 2)`
    -   `!(1 > 3) || !(1 > 2)`
    -   `!(1 > 3 || 1 > 2)`
    -   `!(1 > 3) || !("x" < "A" && !(1 == "1"))`

6.  📝 💻 Dadas las siguientes definiciones:
    
    ```javascript
    let a = true;
    let b = 1 > 2;
    ```
    
    Indica el valor booleano de las siguientes expresiones:
    
    -   `a && b`
    -   `a || b`
    -   `!a && !b`
    -   `!(a && !b)`
    -   `a || !b || a && b`

7.  📝 💻 Escribe una función llamada `esPar` que devuelva un valor booleano que indique si un número dado es par.

8.  📝 💻 Escribe una función llamada `esDivisiblePor3` que devuelva un valor booleano que indique si un número es divisible por 3. Recuerda que el operador `%`, sirve para calcular el resto de una división. Por ejemplo, `17%3===2`, y que un número es divisible por otro si el resto de la división es `0`.

9.  📝 💻 Escribe una función llamada `esDivisiblePor6` que devuelva un valor booleano que indique si un número es divisible por `6`, pero utilizando exclusivamente las funciones `esPar` y `esDivisiblePor3` que has definido en ejercicios anteriores.

10. 📝 💻 Escribe una función llamada `esMinuscula` que devuelva un valor booleano que indique si un carácter es una letra minúscula.

11. 📝 💻 Escribe una función llamada `esMayuscula` que devuelva un valor booleano que indique si un carácter es una letra mayúscula.

12. 📝 💻 Escribe una función llamada `esLetra` que devuelva un valor booleano que indique si un carácter es una letra, pero utilizando exclusivamente las dos funciones `esMinuscula` y `esMayuscula` definidas en ejercicios anteriores.

13. 📝 💻 Escribe una función llamada `esVocal` que devuelva un valor booleano que indique si un carácter es una vocal.

14. 📝 💻 Escribe una función llamada `esConsonante` que devuelva un valor booleano que indique si un carácter es un carácter es una consonante, pero utilizando exclusivamente las funciones `esLetra` y `esVocal` definidas en ejercicios anteriores.

## Footnotes

<sup><a id="fn.1" class="footnum" href="#fnr.1">1</a></sup>

 Las comparaciones entre textos distinguen entre mayúsculas y minúsculas. En realidad, se comparan los códigos ASCII de las letras. Por eso, las letras mayúsculas se consideran *menores* que las minúsculas, porque su código ASCII es menor.
