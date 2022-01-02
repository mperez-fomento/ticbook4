---
sidebar_label: Sentencia if/else if/else
---
# Sentencia if/else if/else

:::info

La sentencia `if/else if/else` es una sentencia condicional mediante la que le decimos la ordenador que compruebe cierta condición y ejecute un bloque de sentencias en el caso de que dicha condición se cumpla. En caso de que no se cumpla, debe comprobar otra condición, y ejecutar otro bloque de sentencias si esta segunda condición se cumple. Si no, seguirá comprobando condiciones. Al final, si ninguna de las condiciones comprobadas se cumple, se ejecutará el bloque de sentencias especificado para ese caso.

:::


## Sintaxis

La sintaxis de la sentencia `if/else if/else` es la siguiente:

```javascript
if (condición) {
    ejecutar_si_se_cumple_cond1;
}
else if (condición2) {
    ejecutar_si_no_se_cumple_cond1_pero_sí_cond2;
}
else {
    ejecutar_si_no_se_cumple_ninguna_condición;
}
```

Observa que:

-   las condiciones se escriben entre **paréntesis**;
-   las sentencias se escriben entre **llaves**;
-   puede haber tantos bloques `else if` como queramos;
-   después de `else` no hay condición (la condición es que no se haya cumplido ninguna de las anteriores);
-   el bloque `else` del final es opcional.


## Ejemplo

```javascript
let x = prompt('Cuál es su nota?');
if (x < 5) {
    alert('Suspenso');
}
else if (x < 6) {
    alert('Suficiente');
}
else if (x < 7) {
    alert('Bien');
}
else if (x < 9) {
    alert('Notable');
}
else {
    alert('Sobresaliente');
}
```

El diagrama de flujo correspondiente sería el siguiente:

![img](../../static/img/if-else-if-sentence-example.drawio.png)

Es importante entender que cada comprobación `else if` se realiza después de que las anteriores hayan dado resultado negativo (si no, no se realizan). Por lo tanto, el bloque subsiguiente se ejecuta cuando se cumple la condición correspondiente **y no se ha cumplido ninguna de las anteriores**.