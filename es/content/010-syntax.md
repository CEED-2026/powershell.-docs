---
title: Estructuras del Lenguaje en PowerShell
---

# Estructuras del Lenguaje en PowerShell

## Comentarios

Se usan para documentar scripts y proporcionar contexto.

### Comentario de una línea

powershell

```
# Este es un comentario
```

### Comentario de varias líneas

powershell

```
<#
Este es un comentario
de varias líneas
#>
```

## Variables

En PowerShell, las variables se representan con el prefijo `$`.

### Declarar e inicializar variables

No es obligatorio declarar previamente las variables en PowerShell; estas se crean automáticamente al asignarles un valor.

#### Diferentes formas de declarar variables:

1. **Declaración implícita sin tipo:**

powershell

```
$variable = "Hola Mundo"
$numero = 42
```

En este caso, PowerShell asigna automáticamente el tipo según el valor proporcionado.

2. **Declaración explícita con tipo:**

powershell

```
[int]$numero = 10
[string]$texto = "Texto Ejemplo"
```

Aquí se especifica el tipo de la variable.

3. **Usando `New-Variable`:**

powershell

```
New-Variable -Name "miVariable" -Value "Hola Mundo" -Option ReadOnly
```

Este enfoque es útil cuando se necesita control adicional sobre la variable, como definirla como de solo lectura o persistente.

Los parámetros permiten declarar y tipar variables en el contexto de una función.

4. **Declaración sin inicialización:**

powershell

```
$sinValor
$sinValor = "Ahora tengo un valor"
```

Aunque no se asigna un valor al principio, se puede asignar posteriormente.

### Tipos de variables

Aunque PowerShell es dinámico, admite tipos explícitos. A continuación, una tabla con ejemplos:

TipoDescripción
`[int]`Números enteros
`[long]`Enteros grandes
`[float]`Números de coma flotante
`[double]`Números de doble precisión
`[decimal]`Números decimales de alta precisión
`[string]`Texto o cadenas de caracteres
`[char]`Carácter único
`[bool]`Valores booleanos (`$true`, `$false`)
`[array]`Conjuntos ordenados de elementos
`[hashtable]`Pares clave-valor
`[datetime]`Representa fecha y hora
`[guid]`Identificador único global
`[xml]`Representación XML
`[scriptblock]`Bloques de código reutilizables
`[psobject]`Objeto genérico
`[null]`Valor nulo

#### Ejemplo:

powershell

```
# Declarar tipos explícitos
[int]$numero = 10
[string]$texto = "Texto Ejemplo"
[array]$lista = @("A", "B", "C")
[datetime]$fecha = Get-Date
```

### Obtener el valor y tipo de una variable

- Para conocer el valor de una variable, simplemente llámala:

powershell

```
Write-Output $miVariable
```

- Para conocer su tipo, utiliza el método `GetType()` y la propiedad `Name`:

powershell

```
$miVariable.GetType().Name
```

#### Ejemplo:

powershell

```
$variable = 123
Write-Output "Tipo: $($variable.GetType().Name)"
```

#### Salida por terminal:

plaintext

```
Tipo: Int32
```

### Convertir un tipo de variable a otro

PowerShell permite convertir tipos de variables fácilmente utilizando castings explícitos.

#### Ejemplo:

powershell

```
# Convertir de string a entero
[string]$texto = "123"
[int]$numero = [int]$texto
Write-Output $numero  # Resultado: 123

# Convertir de entero a string
[int]$numero = 456
[string]$texto = [string]$numero
Write-Output $texto  # Resultado: "456"

# Convertir de array a hashtable
$array = @("clave=valor", "otro=elemento")
$hashtable = @{}
foreach ($item in $array) {
    $clave, $valor = $item -split "="
    $hashtable[$clave] = $valor
}
Write-Output $hashtable
```

## Operadores aritméticos

Los operadores aritméticos en PowerShell permiten realizar operaciones matemáticas básicas y avanzadas con valores numéricos.

### Lista de operadores aritméticos:

OperadorDescripciónEjemploResultado
`+`Suma`5 + 3``8`
`-`Resta`10 - 4``6`
`*`Multiplicación`2 * 3``6`
`/`División`8 / 2``4`
`%`Módulo (resto de división)`10 % 3``1`
`++`Incremento (suma uno)`$a++``a + 1`
`--`Decremento (resta uno)`$a--``a - 1`

### Ejemplo práctico:

powershell

```
# Declarar variables
$a = 10
$b = 3

# Operaciones
$suma = $a + $b
$resta = $a - $b
$producto = $a * $b
$division = $a / $b
$modulo = $a % $b

# Mostrar resultados
Write-Output "Suma: $suma"        # Suma: 13
Write-Output "Resta: $resta"      # Resta: 7
Write-Output "Producto: $producto" # Producto: 30
Write-Output "División: $division" # División: 3.3333
Write-Output "Módulo: $modulo"    # Módulo: 1
```

Estos operadores son esenciales para realizar cálculos en scripts automatizados y procesos de análisis de datos.

## Operadores de comparación, igualdad y pertenencia

Los operadores de comparación, igualdad y pertenencia se utilizan para evaluar condiciones lógicas en PowerShell.

### Operadores de comparación:

OperadorDescripciónEjemploResultado
`-eq`Igualdad`5 -eq 5``$true`
`-ne`No es igual`5 -ne 3``$true`
`-lt`Menor que`3 -lt 5``$true`
`-le`Menor o igual que`5 -le 5``$true`
`-gt`Mayor que`7 -gt 5``$true`
`-ge`Mayor o igual que`5 -ge 5``$true`

### Operadores de igualdad y pertenencia:

OperadorDescripciónEjemploResultado
`-like`Coincide con un patrón (comodines)`"hello" -like "h*"``$true`
`-notlike`No coincide con un patrón`"world" -notlike "a*"``$true`
`-match`Coincide con una expresión regular`"PowerShell" -match "Shell"``$true`
`-notmatch`No coincide con una expresión regular`"PowerShell" -notmatch "Java"``$true`
`-contains`Comprueba si un elemento pertenece a una colección`@(1, 2, 3) -contains 2``$true`
`-notcontains`Comprueba si un elemento no pertenece`@(1, 2, 3) -notcontains 5``$true`
`-in`El elemento está en la colección`2 -in @(1, 2, 3)``$true`
`-notin`El elemento no está en la colección`5 -notin @(1, 2, 3)``$true`

### Ejemplo práctico:

powershell

```
# Comparaciones básicas
$a = 5
$b = 10
Write-Output ($a -lt $b)        # True
Write-Output ($a -eq $b)        # False

# Igualdad con patrones
$string = "hello world"
Write-Output ($string -like "h*")   # True
Write-Output ($string -notlike "a*") # True

# Pertenencia
$array = @("apple", "banana", "cherry")
Write-Output ($array -contains "banana") # True
Write-Output ("banana" -in $array)      # True
Write-Output ("grape" -notin $array)   # True
```

## Operadores lógicos

Los operadores lógicos en PowerShell permiten realizar evaluaciones complejas combinando varias condiciones lógicas. Estos operadores devuelven `$true` o `$false` según el resultado de las condiciones.

### Lista de operadores lógicos:

OperadorDescripciónEjemploResultado
`-and`Lógico Y`($a -gt 5 -and $b -lt 10)``$true`
`-or`Lógico O`($a -lt 5 -or $b -lt 10)``$true`
`-not`Negación lógica`-not($a -gt 5)``$false`
`-xor`O exclusivo`($a -gt 5 -xor $b -lt 10)``$true`
`!`Negación corta`!($a -gt 5)``$false`

### Ejemplo práctico:

powershell

```
# Declarar variables
$a = 7
$b = 3

# Operadores lógicos
Write-Output ($a -gt 5 -and $b -lt 10)   # True
Write-Output ($a -lt 5 -or $b -lt 10)    # True
Write-Output (-not($a -gt 5))            # False
Write-Output ($a -gt 5 -xor $b -lt 10)   # True
Write-Output (!($a -gt 5))               # False
```

## Operadores binarios

Los operadores binarios permiten manipular números a nivel de bits en PowerShell. Estos son útiles en operaciones como enmascaramiento y desplazamiento de bits.

### Lista de operadores binarios:

OperadorDescripciónEjemploResultado
`-band`AND bit a bit`5 -band 3``1`
`-bor`OR bit a bit`5 -bor 3``7`
`-bxor`XOR bit a bit`5 -bxor 3``6`
`-bnot`NOT bit a bit (complemento)`-bnot 5``-6`
`-shl`Desplazamiento a la izquierda`5 -shl 1``10`
`-shr`Desplazamiento a la derecha`5 -shr 1``2`

### Ejemplo práctico:

powershell

```
# Operaciones binarias
Write-Output (5 -band 3)    # 1
Write-Output (5 -bor 3)     # 7
Write-Output (5 -bxor 3)    # 6
Write-Output (-bnot 5)      # -6
Write-Output (5 -shl 1)     # 10
Write-Output (5 -shr 1)     # 2
```

## Operadores de asignación

Los operadores de asignación se usan para almacenar valores en variables. Además del operador básico `=` existen operadores combinados que incluyen operaciones matemáticas y asignación simultánea.

### Lista de operadores de asignación:

OperadorDescripciónEjemploResultado
`=`Asignación básica`$a = 5``$a = 5`
`+=`Suma y asignación`$a += 3``$a = 8`
`-=`Resta y asignación`$a -= 2``$a = 6`
`*=`Multiplicación y asignación`$a *= 2``$a = 12`
`/=`División y asignación`$a /= 3``$a = 4`
`%=`Módulo y asignación`$a %= 2``$a = 0`
`++`Incremento en uno`$a++`Incrementa en 1
`--`Decremento en uno`$a--`Decrementa en 1

### Ejemplo práctico:

powershell

```
# Asignación básica
$a = 5

# Operaciones combinadas
$a += 3   # Incrementa en 3, $a es 8
$a -= 2   # Decrementa en 2, $a es 6
$a *= 2   # Multiplica por 2, $a es 12
$a /= 3   # Divide por 3, $a es 4
$a %= 2   # Calcula módulo 2, $a es 0

# Incremento y decremento
$a++      # Incrementa en 1, $a es 1
$a--      # Decrementa en 1, $a es 0

Write-Output $a
```

## Estructuras Condicionales

Las estructuras condicionales permiten ejecutar diferentes bloques de código según el cumplimiento de ciertas condiciones. En PowerShell, las principales estructuras condicionales son:

### `if`

El bloque `if` se utiliza para evaluar una sola condición y ejecutar un bloque de código si esta se cumple.

```
if ($variable -eq 10) {
    Write-Output "La variable es igual a 10"
}
```

#### Ejemplo:

```
$numero = 10
if ($numero -eq 10) {
    Write-Output "El número es igual a 10"
}
```

**Salida esperada:**

```
El número es igual a 10
```

### `if` y `else`

El bloque `else` se utiliza junto con `if` para ejecutar un bloque alternativo si la condición del `if` no se cumple.

```
if ($variable -eq 10) {
    Write-Output "La variable es igual a 10"
} else {
    Write-Output "La variable no es igual a 10"
}
```

#### Ejemplo:

```
$edad = 20
if ($edad -lt 18) {
    Write-Output "Eres menor de edad"
} else {
    Write-Output "Eres mayor de edad"
}
```

**Salida esperada:**

```
Eres mayor de edad
```

### `if`, `elseif`, y `else`

El bloque `elseif` permite evaluar condiciones adicionales si la primera condición no se cumple. El bloque `else` actúa como alternativa final.

```
if ($variable -eq 10) {
    Write-Output "La variable es igual a 10"
} elseif ($variable -lt 10) {
    Write-Output "La variable es menor que 10"
} else {
    Write-Output "La variable es mayor que 10"
}
```

#### Ejemplo:

```
$temperatura = 25
if ($temperatura -lt 0) {
    Write-Output "Hace mucho frío"
} elseif ($temperatura -ge 0 -and $temperatura -le 30) {
    Write-Output "La temperatura es agradable"
} else {
    Write-Output "Hace mucho calor"
}
```

**Salida esperada:**

```
La temperatura es agradable
```

### `Switch`

El bloque `Switch` evalúa una variable o expresión y ejecuta el bloque de código correspondiente al caso coincidente.

#### Ejemplo:

```
$estado = "Aprobado"
Switch ($estado) {
    "Aprobado" { Write-Output "¡Felicidades, has aprobado!" }
    "Suspendido" { Write-Output "Lo siento, necesitas mejorar." }
    Default { Write-Output "Estado desconocido." }
}
```

**Salida esperada:**

```
¡Felicidades, has aprobado!
```

## Estructuras de Repetición

Las estructuras de repetición permiten ejecutar un bloque de código múltiples veces, dependiendo de una condición o iterando sobre una colección de elementos.

### `For`

El bucle `For` se utiliza para iterar un número determinado de veces, generalmente controlado por un contador.

```
For ($i = 0; $i -lt 5; $i++) {
    Write-Output "Iteración $i"
}
```

#### Ejemplo:

```
For ($i = 1; $i -le 3; $i++) {
    Write-Output "Tabla del $i"
    For ($j = 1; $j -le 3; $j++) {
        Write-Output "$i x $j = $(($i * $j))"
    }
}
```

**Salida esperada:**

```
Tabla del 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
Tabla del 2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
Tabla del 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
```

### `Foreach`

El bucle `Foreach` recorre todos los elementos de una colección o conjunto de datos.

#### Ejemplo:

```
$colores = @("Rojo", "Verde", "Azul")
foreach ($color in $colores) {
    Write-Output "Color: $color"
}
```

**Salida esperada:**

```
Color: Rojo
Color: Verde
Color: Azul
```

### `While`

El bucle `While` ejecuta un bloque de código mientras una condición sea verdadera.

#### Ejemplo:

```
$contador = 3
while ($contador -gt 0) {
    Write-Output "Cuenta atrás: $contador"
    $contador--
}
```

**Salida esperada:**

```
Cuenta atrás: 3
Cuenta atrás: 2
Cuenta atrás: 1
```

### `Do-While`

El bucle `Do-While` ejecuta el bloque al menos una vez antes de evaluar la condición.

#### Ejemplo:

```
$intentos = 0
Do {
    Write-Output "Intento número: $intentos"
    $intentos++
} While ($intentos -lt 3)
```

**Salida esperada:**

```
Intento número: 0
Intento número: 1
Intento número: 2
```

### `Do-Until`

El bucle `Do-Until` también ejecuta el bloque al menos una vez, pero se detiene cuando la condición se cumple.

#### Ejemplo:

```
$contador = 1
Do {
    Write-Output "Número actual: $contador"
    $contador++
} Until ($contador -gt 3)
```

**Salida esperada:**

```
Número actual: 1
Número actual: 2
Número actual: 3
```

## Funciones

Las funciones en PowerShell permiten encapsular lógica reutilizable en bloques de código. Son fundamentales para estructurar scripts más complejos de manera modular y eficiente.

### Definición de una función básica

Una función básica se define con la palabra clave `function`, seguida del nombre de la función y un bloque de código.

```
function NombreFuncion {
    # Cuerpo de la función
    Write-Output "¡Hola desde la función!"
}
```

#### Ejemplo:

```
function Saludar {
    Write-Output "¡Hola, mundo!"
}

# Llamada a la función
Saludar
```

**Salida esperada:**

```
¡Hola, mundo!
```

### Funciones con parámetros

Las funciones pueden aceptar parámetros para personalizar su comportamiento.

```
function Saludar {
    param (
        [string]$nombre
    )
    Write-Output "Hola, $nombre"
}

# Llamada a la función
Saludar -nombre "Carlos"
```

#### Explicación:

- El parámetro `[string]$nombre` permite pasar un valor a la función.
- El valor del parámetro se utiliza dentro del cuerpo de la función.

**Salida esperada:**

```
Hola, Carlos
```

### Funciones con valores de retorno

Las funciones pueden devolver un valor utilizando `return`.

```
function Sumar {
    param (
        [int]$a,
        [int]$b
    )
    return $a + $b
}

# Llamada a la función
$resultado = Sumar -a 5 -b 3
Write-Output "Resultado: $resultado"
```

#### Explicación:

- La función `Sumar` recibe dos parámetros (`a` y `b`), los suma y devuelve el resultado.
- El valor devuelto se almacena en la variable `$resultado`.

**Salida esperada:**

```
Resultado: 8
```

### Funciones avanzadas con validación de parámetros

PowerShell permite añadir validaciones a los parámetros mediante atributos.

```
function ValidarNumero {
    param (
        [ValidateRange(1, 100)]
        [int]$numero
    )
    Write-Output "Número válido: $numero"
}

# Llamada a la función
ValidarNumero -numero 50
```

#### Explicación:

- `[ValidateRange(1, 100)]` asegura que el valor del parámetro `$numero` esté entre 1 y 100.
- Si se pasa un valor fuera de ese rango, PowerShell genera un error.

**Salida esperada:**

```
Número válido: 50
```

### Funciones con múltiples parámetros y lógica compleja

Las funciones pueden manejar múltiples parámetros y ejecutar lógica más avanzada.

```
function AnalizarNumero {
    param (
        [int]$numero
    )
    if ($numero -lt 0) {
        Write-Output "El número es negativo"
    } elseif ($numero -eq 0) {
        Write-Output "El número es cero"
    } else {
        Write-Output "El número es positivo"
    }
}

# Llamada a la función
AnalizarNumero -numero -5
```

**Salida esperada:**

```
El número es negativo
```

### Funciones que trabajan con colecciones

Las funciones pueden manipular arrays o colecciones como entrada o salida.

#### Ejemplo de función que calcula el promedio:

```
function CalcularPromedio {
    param (
        [int[]]$numeros
    )
    $suma = 0
    foreach ($numero in $numeros) {
        $suma += $numero
    }
    return $suma / $numeros.Length
}

# Llamada a la función
$promedio = CalcularPromedio -numeros @(10, 20, 30)
Write-Output "El promedio es: $promedio"
```

**Salida esperada:**

```
El promedio es: 20
```
