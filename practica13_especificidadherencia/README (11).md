### PRÁCTICA 13 Cascada, especificidad, herencia

Dado el html del ejercicio haz lo siguiente:



1. Pon el link de color rojo mediante el 'ID'.
    - Funciona

2. Pon el link verde mediante la clase padre por descendencia y por el abuelo por descendencia.
    - No funciona porque ID tiene más especificidad que cualquier otro medio de acceso salvo inline.

3. Comenta el acceso por ID al link (color rojo) para que por herencia del padre se ponga verde.
    - No se pone verde porque el link lleva un color azul por pseudoelemento a:link puesto por el navegador que sobreescribe a la herencia.
    (.p__padre) < (a:link)

4. Accede al link por descendencia desde el padre y mantén el color verde.
    - funciona porque descendencia (.p__padre a) tiene mayor especificidad que pseudo-clase (a:link).
    - (.p__padre a) > (a:link)

5. Accede al link por su atributo 'class' y ponlo amarillo.
    - Se ve verde porque descendencia cuando uno de los familiares tiene clase, tiene más especificidad que clase simple.
    - (.p__padre a) > (.link-class)
    - (.div__abuelo a) > (.link-class)
    - (p .link-class) > (.link-class)
    - (div .link-class) > (.link-class)

6. Accede al link por por descendencia desde el abuelo (.div__abuelo a).
    - Sí funciona porque está más abajo en la hoja CSS y tiene la misma especificidad.

7. Sube la regla que accede por descendencia del abuelo más arriba que la regla que accede por descendencia del padre.
    - No funciona porque está más arriba en la hoja CSS y tiene la misma especificidad.

8. Cambia el acceso al link por por descendencia desde el abuelo (la primera regla de la hoja) a acceso por clase, no por etiqueta (.div__abuelo .link-class).
    - Se ve verde porque clase tiene más especificidad que etiqueta (aunque esté más arrriba en el CSS prevalece).
    - (.div__abuelo .link-class) > (.div__abuelo a)
    - (.div__abuelo .link-class) > (.div__padre a)
    - (.div__padre .link-class) > (.div__abuelo a)
    - (.div__padre .link-class) > (.div__padre a)

   
9. Añade otra clase al link y define color rosa por selector compuesto (.link-class.link-class2) al final de la hoja css.
    - Se ve rosa porque selector compuesto simple (2 clases) tiene mayor especificidad que descendencia simple (padre - hijo / abuelo - nieto).
    - (.link-class.linkclass2) > (div .link-class)
    - (.link-class.linkclass2) > (.div__abuelo .link-class)

     **nota: la distancia entre familiares NO IMPORTA. Da igual si es abuelo hijo o padre hijo o tatarabuelo**

9. Añade el padre a la descendencia (.div__abuelo .p__hijo .link-class) en la regla que ya está definida al principio de la hoja css.
    - Se ve verde porque selector compuesto simple (2 clases) tiene menor especificidad que descendencia doble (abuelo - padre- hijo).
    - (.div__abuelo .p__padre .link-class) > (.link-class.linkclass2)

9. Quita el comentario de acceso por ID al link (color rojo).
    - Se vuelve a ver rojo. Definir estilos por ID sólo se debe hacer en circunstancias especiales.
    - (#linkId) > (.div__abuelo .p__padre .link-class) > (.link-class.linkclass2) > (.div__abuelo .link-class) > (div .link-class) > (.link-class) > a:link > a 

10. Añade etiqueta style= "color: transparent".
    - Style prevalece sobre ID y cualquier combinación de clases
    - 

10. Añade !important.
    - !important se lo cepilla todo :D 
    - Pero preserva la especificidad si le añado !important a todo.
    - Es NEFASTO para el rendimiento de la página porque tiene que leer todo el CSS.


### NOTAS

- Cosas que hay que tener en cuenta:

    1. 



### REFERENCIAS

- CSS Tricks Especificidad - https://css-tricks.com/specifics-on-css-specificity/