---
sidebar_label: Control de flujo
---
# Control de flujo


## Flujo de ejecución

Dijimos que un programa es una secuencia de sentencias que el ordenador debe ejecutar.

:::info

El orden en que el ordenador ejecuta las sentencias de un programa se llama *flujo de ejecución*.

:::

Normalmente, las sentencias se ejecutan en el orden en que están escritas.

:::info

Las sentencias que permiten alterar ese orden de ejecución, determinando quė sentencias se ejecutan en cada momento, se llaman *sentencias de control de flujo*.

:::

Las sentencias condicionales son sentencias de control de flujo, porque determinan que ciertas sentencias se ejecuten o no.

Las sentencias condicionales establecen una bifurcación en el flujo de ejecución, porque definen dos posibles caminos entre los que se elegirá dependiendo de cierta condición.


## Diagramas de flujo

:::info

El flujo de ejecución de un programa puede representarse gráficamente mediante un *diagrama de flujo*.

En un diagrama de flujo, las sentencias se representan mediante rectángulos, y el flujo de ejecución mediante flechas que unen dichos rectángulos indicando el orden en que se ejecutan.

En una sentencia condicional, la comprobación de la condición se representa con un rombo.

:::

Por ejemplo, un programa para calcular las soluciones de una ecuación de segundo grado podría tener el siguiente diagrama de flujo:

![img](../../static/img/conditional-flow.drawio.png)


## Ejercicios

1.  📝 Dibuja el diagrama de flujo correspondiente al proceso para determinar si un alumno aprueba o no la prueba de acceso a la Universidad, teniendo su nota media de Bachillerato (BAC), y su nota media del Bloque Obligatorio de la EvAU (BO):
    -   Si suspende alguna asignatura en Bachillerato, no se presenta a la EvAU.
    -   Si aprueba todas:
        -   Calcular la nota media de BAC: BAC
        -   Se presenta a la EvAU.
        -   Calcular la nota media del bloque obligatorio: BO.
        -   Si su nota media del bloque obligatorio (BO) es menor que 4, no aprueba.
        -   Si no:
            -   Calcular su nota de acceso: 0.6 x BAC + 0.4 x BO
            -   Si la nota de acceso es menor que 5, no aprueba.
            -   Si no, aprueba.
