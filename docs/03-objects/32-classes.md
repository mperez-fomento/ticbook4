# Clases

## **¿Qué es una clase?**

:::info

Una **clase** define un tipo de objetos especificando qué propiedades y
qué métodos deben tener los objetos de dicha clase.

:::

Las clases se identifican con un nombre, que suele escribirse con la
**primera letra mayúscula**.

Para crear un objeto de cierta clase, se utiliza la palabra clave `new`.
Por ejemplo, la sentencia siguiente crea un nuevo objeto de clase
`Circle`. A continuación del nombre de la clase, tenemos que escribir,
entre paréntesis, una lista de los parámetros que se necesitan para
crear un objeto de esa clase.

``` javascript
new Circle(100, "red");
```

## **¿Qué es un constructor?**

:::info

Un **constructor** es el método que se utiliza para construir objetos de
cierta clase.

:::

El constructor tiene el nombre de la clase, y los parámetros son los
necesarios para dar valor a las propiedades del objeto que se quiere
crear. Los constructores especifican qué parámetros son necesarios, y en
qué orden hay que escribirlos.

Por ejemplo,

``` javascript
new Circle(100, "red");
```

La sentencia para crear un nuevo objeto de la clase `Circle`, utiliza el
constructor de dicha clase, que especifica los parámetros que se pueden
proporcionar, y el orden en que se debe hacer, para construir un objeto
de la clase `Circle`: `Circle(radius, color)`.

Algunos argumentos del constructor pueden ser opcionales. En ese caso,
el constructor especificará un valor por defecto para los parámetros
opcionales para el caso de que no se proporcionen.

Por ejemplo, todos los argumentos del constructor de la clase `Circle`
son opcionales, de modo que podríamos escribir la siguiente sentencia,
que crearía un círculo con un radio predeterminado (50 píxeles) y un
color predeterminado (negro).

``` javascript
new Circle();
```

Como es difícil recordar qué parámetros usa el constructor, y en qué
orden se escriben, algunas clases dan la posibilidad de especificar el
nombre y valor de las propiedades que queremos que tenga el objeto que
construimos. En este caso, podemos usar cualquier orden. La lista de
propiedades se escribe entre llaves, dentro de los paréntesis del
constructor. Para cada propiedad se escribe el nombre y el valor,
separados por *dos puntos* (`:`). Las propiedades se separan con una
coma. Por ejemplo:

``` javascript
new Circle({radius: 100, color: "red"});
```

Para mayor claridad, suele escribirse así:

``` javascript
new Circle({
    radius: 100,
    color: "red"
});
```
