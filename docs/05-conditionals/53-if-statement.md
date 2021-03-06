---
sidebar_label: Sentencia if
---
# Sentencia if

:::info

La sentencia `if` es una sentencia condicional mediante la que le decimos la ordenador que compruebe cierta condición y ejecute un bloque de sentencias en el caso de que dicha condición se cumpla.

:::


## Sintaxis

La sintaxis de la sentencia `if` es la siguiente:

```javascript
if (condición) {
    ejecutar_si_se_cumple;
}
```

Observa que:

-   la condición se escribe entre **paréntesis**;
-   las sentencias se escriben entre **llaves**.

Más adelante veremos qué condiciones se pueden comprobar.


## Ejemplo

```javascript
let num = prompt('Escriba el numerador');
let den = prompt('Escriba el denominador');
if (den == 0) {
    alert('No has escrito denominador, o has escrito 0. Usaremos 1.');
    den = 1;
}
alert('División: ' + num/den);
```

El diagrama de flujo correspondiente sería el siguiente:

![img](../../static/img/if-sentence-example-1.drawio.png)


## Ejercicios

1.  📝 💻 Dadas las siguientes funciones:
    
    ```javascript
          // La función 'next_even' devuelve el número par siguiente
          function next_even(num)
          {
              return 2*Math.floor(num/2) + 2;
          }
    
          // La función 'next_odd' devuelve el número impar siguiente
          function next_odd(num)
          {
              return 2*Math.floor((num+1)/2) + 1;
          }
    ```
    
    Nota: `Math.floor(x)`, donde `x` es un número, devuelve la parte entera de `x`. Por ejemplo, `Math.floor(3.6)` devuelve `3`.
    
    Escribe los valores de las expresiones siguientes (debes escribir todos los pasos intermedios, indicando las sustituciones una a una):
    
    -   `next_even(5)`
    -   `next_odd(5)`
    -   `next_even(next_odd(5))`
    -   `next_odd(next_even(5))`
    -   `next_even(next_odd(next_even(5)))`
    -   `next_even(1 + next_odd(5)) - next_even(6)`

2.  📝 💻 A continuación se muestran las definiciones de un objeto y una función:
    
    ```javascript
    let c = new Circle(100, "red");
    
    function changeColor()
    {
        if (c.color == "red") {
            c.color = "blue";
        }
        else {
            c.color = "red";
        }
    }
    ```
    
    Queremos que la función `changeColor` se ejecute cada vez que hagamos clic encima del círculo `c`. ¿Qué sentencia tendríamos que escribir para eso?

3.  📝 Dibuja el diagrama de flujo correspondiente al siguiente fragmento de código:
    
    ```javascript
    let x = 5;
    if (x < 0) {
      document.write("Negativo");
    }
    ```

4.  📝 Dibuja el diagrama de flujo correspondiente al siguiente fragmento de código:
    
    ```javascript
    let x = prompt("Escriba un número");
    if (x < 0) {
      x = -x;
    }
    document.write(x);
    ```

5.  📝 💻 Escribe el código correspondiente al siguiente diagrama de flujo:
    
    ![img](../../static/img/ticbook4-ej5.3.3.drawio.png)

6.  📝 💻 Escribe el código correspondiente al siguiente diagrama de flujo:
    
    ![img](../../static/img/ticbook4-ej5.3.4.drawio.png)

7.  📝 Dibuja el diagrama de flujo correspondiente al siguiente fragmento de código:
    
    ```javascript
    let x = prompt("Su número");
    if (x < 0) {
      document.write("Negativo");
    }
    if (Math.abs(x) > 100) {
      document.write("Tres cifras");
    }
    ```

8.  📝 Dibuja el diagrama de flujo correspondiente al siguiente fragmento de código:
    
    ```javascript
    let x = prompt("Su número");
    if (x < 1) {
      document.write("Pequeño");
      if (x > -1) {
        document.write("Valor absoluto menor que 1");
      }
    }
    ```

9.  📝 Dibuja el diagrama de flujo correspondiente al siguiente fragmento de código:
    
    ```javascript
    let x = 5;
    if (x < 0) {
      document.write("Negativo");
    }
    ```

10. 📝 💻 ¿Qué número aparecerá en la consola al ejecutar el siguiente código?
    
    ```javascript
    let x = 3;
    if (x < 5) {
      x = x + 1;
      if (x > 10) {
        x = 2*x;
      }
      x = x - 1;
    }
    console.log(x);
    ```

11. 📝 💻 ¿Qué número aparecerá en la consola al ejecutar el siguiente código?
    
    ```javascript
    let x = 3;
    if (x < 5) {
      x = 5*x;
    }
    if (x > 10) {
      x = x - 1;
    }
    console.log(x);
    ```
