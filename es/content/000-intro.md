---
title: Introducción a PowerShell
---

# Introducción a PowerShell

## Introducción

PowerShell es una plataforma de automatización de tareas y gestión de configuraciones desarrollada por Microsoft, diseñada para facilitar la administración de sistemas operativos y aplicaciones. Combina varias herramientas clave en un único entorno:

- **Interfaz de línea de comandos (CLI)**: Proporciona una manera eficiente de interactuar con el sistema mediante comandos directos.
- **Lenguaje de scripting avanzado**: Ideal para crear scripts que permitan automatizar tareas complejas y repetitivas.
- **Entorno de desarrollo integrado (IDE)**: Herramientas como Visual Studio Code ofrecen extensiones y funcionalidades que hacen que el desarrollo de scripts sea más intuitivo.

PowerShell es ampliamente utilizado en entornos corporativos debido a su versatilidad y capacidad de integrarse con otras tecnologías, lo que lo convierte en una herramienta esencial para administradores de sistemas y desarrolladores.

## Características principales

1. **Lenguaje de scripting robusto**:
   - Basado en objetos: Los datos se gestionan como objetos de .NET, lo que permite un mayor control y manipulación.
   - Sintaxis intuitiva y fácil de aprender, similar a otros lenguajes populares.
2. **Cmdlets (command-lets)**:
   - Comandos ligeros y específicos que ejecutan tareas comunes como gestionar archivos, procesos y servicios.
   - Se pueden combinar y encadenar para crear flujos de trabajo más complejos.
3. **Integración con .NET Framework**:
   - Permite el uso de bibliotecas .NET en scripts, extendiendo significativamente las capacidades de PowerShell.
   - Soporta la creación de soluciones avanzadas con componentes personalizados.
4. **Compatibilidad multiplataforma**:
   - Disponible en Windows, macOS y Linux.
   - PowerShell Core y PowerShell 7 garantizan un comportamiento consistente entre plataformas.
5. **Extensibilidad y personalización**:
   - Los usuarios pueden crear módulos, cmdlets y funciones personalizadas.
   - Gran variedad de módulos disponibles en PowerShell Gallery para extender sus capacidades.
6. **Seguridad integrada**:
   - Incluye políticas de ejecución para proteger el sistema de scripts no autorizados.
   - Permite el cifrado de credenciales y otros datos sensibles en scripts.
7. **Automatización y orquestación**:
   - Ideal para la gestión de configuraciones en entornos locales y en la nube.
   - Compatible con herramientas como Azure, AWS y VMware.
8. **Soporte para depuración y pruebas**:
   - Permite realizar pruebas unitarias con frameworks como Pester.
   - Incluye herramientas para depurar y solucionar problemas en scripts.

## Versiones

PowerShell cuenta con diferentes versiones, diseñadas para cubrir distintas necesidades:

1. **Windows PowerShell (5.1)**:
   - Basada en .NET Framework.
   - Incluida por defecto en versiones de Windows como Windows Server 2022.
   - Diseñada principalmente para entornos Windows.
2. **PowerShell Core (6.x)**:
   - Primera versión multiplataforma.
   - Basada en .NET Core.
   - Introdujo soporte para Linux y macOS.
3. **PowerShell 7.x**:
   - La versión moderna y actual de PowerShell.
   - Basada en .NET 5/6, con mejoras de rendimiento y nuevas funcionalidades.
   - Totalmente multiplataforma (Windows, macOS y Linux).

Para comprobar qué versión de PowerShell está instalada en tu sistema, usa el comando:

```powershell
$PSVersionTable
```

## Instalación

Se recomienda instalar la versión más reciente (PowerShell 7) para garantizar compatibilidad y acceso a las últimas funcionalidades.

### Windows

1. [Guía oficial para instalar PowerShell en Windows](https://learn.microsoft.com/es-es/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)

### macOS

1. Instalar Homebrew (si no está instalado).
2. Ejecutar el comando:

```bash
brew install --cask powershell
```

### Linux

1. Actualizar el sistema:

```bash
sudo apt update && sudo apt upgrade
```

2. Agregar el repositorio de PowerShell:

```bash
sudo apt install -y powershell
```

## Creación de Scripts

Los scripts de PowerShell tienen la extensión `.ps1`. A continuación, se muestra un ejemplo de script simple:

```powershell
# Script para saludar al usuario
echo "Ingrese su nombre:"
$nombre = Read-Host
Write-Output "Hola, $nombre! Bienvenido a PowerShell."
```

Para ejecutar un script:

1. Abrir PowerShell.
2. Navegar al directorio donde se encuentra el script.
3. Ejecutar:

```powershell
.\nombre_del_script.ps1
```

## Windows PowerShell ISE

Windows PowerShell ISE (Integrated Scripting Environment) es un entorno gráfico integrado para escribir, depurar y ejecutar scripts de PowerShell. Aunque ha sido reemplazado en gran medida por editores modernos como Visual Studio Code, sigue siendo una herramienta útil para tareas rápidas en entornos Windows Server.

### Características principales:

1. **Editor integrado**: Permite escribir y editar scripts con funcionalidades como resaltado de sintaxis y autocompletado.
2. **Depuración paso a paso**: Ofrece herramientas para depurar scripts estableciendo puntos de interrupción y viendo el estado de las variables.
3. **Ventana interactiva**: Combina un editor de scripts con una consola para ejecutar comandos directamente.
4. **Personalización**: Incluye opciones para ajustar colores, fuentes y el diseño de las ventanas.

### Acceso a PowerShell ISE

PowerShell ISE (Integrated Scripting Environment) es una herramienta gráfica integrada en Windows Server 2022 que permite a los usuarios escribir, probar y depurar scripts de PowerShell de manera eficiente. Para acceder a PowerShell ISE en Windows Server 2022, existen varias formas:

1. **Desde el Menú Inicio:**
   - Haz clic en el botón de Inicio y escribe "PowerShell ISE" en la barra de búsqueda.
   - Selecciona "Windows PowerShell ISE" de los resultados.
2. **Usando el comando "Ejecutar":**
   - Presiona `Win + R` para abrir la ventana de ejecutar.
   - Escribe `powershell_ise` y presiona `Enter`.
3. **Desde el Explorador de Archivos:**
   - Navega a la carpeta `C:\Windows\System32\WindowsPowerShell\v1.0`.
   - Haz doble clic en `powershell_ise.exe`.

### Ejemplo de uso:

1. **Abrir PowerShell ISE**:
   - Puedes utilizar cualquiera de las opciones indicadas anteriormente.
2. **Crear un script**:
   - Escribe el siguiente código en el editor:

```powershell
Write-Output "Hola desde PowerShell ISE"
```

   - Guarda el archivo con la extensión `.ps1`.
3. **Ejecutar el script**:
   - Haz clic en el botón de "Ejecutar" (icono verde) o presiona `F5`.

## Cmdlets

### Introducción a los Cmdlets

Un cmdlet es un comando ligero y especializado que realiza una tarea específica. Los cmdlets forman la base de PowerShell y se nombran utilizando un formato estándar compuesto por un verbo y un sustantivo, separados por un guion (`-`). Por ejemplo:

- `Get-Process`: Recupera información sobre los procesos en ejecución.
- `Set-Location`: Cambia el directorio actual.

Además de los cmdlets, PowerShell también admite **funciones** y **alias**:

- **Funciones**: Conjuntos personalizados de instrucciones que pueden comportarse como cmdlets.
- **Alias**: Nombres cortos o alternativos para cmdlets y funciones (por ejemplo, `ls` como alias de `Get-ChildItem`).

### Cmdlets básicos

#### Navegación en el sistema de archivos

- `Get-ChildItem` (alias `ls`): Lista los archivos y directorios.
- `Set-Location` (alias `cd`): Cambia el directorio actual.
- `Copy-Item` (alias `cp`): Copia archivos o directorios.
- `Move-Item` (alias `mv`): Mueve archivos o directorios.
- `Remove-Item` (alias `rm`): Elimina archivos o directorios.

#### Administración del sistema

- `Get-Process`: Muestra los procesos en ejecución.
- `Stop-Process`: Finaliza procesos.
- `Get-Service`: Lista los servicios del sistema.
- `Start-Service` y `Stop-Service`: Inicia o detiene servicios.
- `Get-EventLog`: Recupera eventos del registro del sistema.

### Uso de `Get-Help`

El cmdlet `Get-Help` proporciona documentación y ejemplos de uso para cualquier cmdlet, función o comando disponible en PowerShell. Esto facilita el aprendizaje y la comprensión de nuevas funcionalidades.

#### Ejemplos:

1. Obtener información básica sobre un cmdlet:

```powershell
Get-Help Get-Process
```

**Salida:**

```
NAME
    Get-Process
SYNOPSIS
    Gets the processes that are running on the local computer or a remote computer.
```

2. Ver ejemplos prácticos:

```powershell
Get-Help Get-Process -Examples
```

**Salida:**

```
NAME
    Get-Process

EXAMPLES
    -------------------------- EXAMPLE 1 --------------------------
    Get-Process

    This command gets a list of all processes running on the local computer.
```

3. Obtener información detallada:

```powershell
Get-Help Get-Process -Detailed
```

**Salida:**

```
NAME
    Get-Process
SYNOPSIS
    Gets the processes that are running on the local computer or a remote computer.

SYNTAX
    Get-Process [[-Name] <String[]>] [-Module] [<CommonParameters>]
```

4. Abrir la documentación completa con descripciones técnicas:

```powershell
Get-Help Get-Process -Full
```

**Salida:**

```
NAME
    Get-Process
SYNOPSIS
    Gets the processes on the local or remote computer.

DETAILED DESCRIPTION
    The Get-Process cmdlet gets the processes on a local or remote computer.
    Without parameters, this cmdlet gets all of the processes on the local computer.
```

5. Actualizar los archivos de ayuda locales:

```powershell
Update-Help
```

### Uso de `Get-Command`

El cmdlet `Get-Command` lista todos los cmdlets, funciones, alias y scripts disponibles en el entorno de PowerShell. Es útil para explorar comandos y verificar su disponibilidad.

#### Ejemplos:

1. Obtener una lista de todos los cmdlets disponibles:

```powershell
Get-Command
```

**Salida:**

```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Add-Content                                        7.0.0.0   Microsoft.PowerShell.Management
Cmdlet          Clear-Content                                      7.0.0.0   Microsoft.PowerShell.Management
...
```

2. Filtrar comandos específicos por tipo:

```powershell
Get-Command -CommandType Cmdlet
```

**Salida:**

```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Get-Process                                        7.0.0.0   Microsoft.PowerShell.Management
Cmdlet          Start-Process                                      7.0.0.0   Microsoft.PowerShell.Management
...
```

3. Buscar un cmdlet específico:

```powershell
Get-Command Get-Process
```

**Salida:**

```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Get-Process                                        7.0.0.0   Microsoft.PowerShell.Management
```

### Uso de `Get-Member`

El cmdlet `Get-Member` muestra las propiedades y métodos de los objetos que se pasan por la línea de comandos. Es especialmente útil para explorar la estructura de datos de los objetos.

#### Ejemplos:

1. Examinar las propiedades y métodos de un objeto:

```powershell
Get-Process | Get-Member
```

**Salida:**

```
Name                      MemberType     Definition
----                      ----------     ----------
Handles                  AliasProperty   Handles = HandleCount
Name                     AliasProperty   Name = ProcessName
...
```

2. Ver solo propiedades de un objeto:

```powershell
Get-Process | Get-Member -MemberType Property
```

**Salida:**

```
Name                      MemberType     Definition
----                      ----------     ----------
CPU                      Property        System.Nullable`1[System.Double] CPU {get;}
Id                       Property        int Id {get;}
...
```

3. Ver solo métodos de un objeto:

```powershell
Get-Process | Get-Member -MemberType Method
```

**Salida:**

```
Name                      MemberType     Definition
----                      ----------     ----------
Close                    Method          void Close()
Kill                     Method          void Kill()
...
```

## Execution Policy

Las políticas de ejecución en PowerShell regulan cómo y cuándo los scripts pueden ejecutarse en el sistema. Esta característica está diseñada para proteger contra la ejecución de scripts no autorizados y garantizar que solo se ejecuten los que provienen de fuentes confiables.

Aunque la política de ejecución no restringe la ejecución interactiva de comandos, entra en vigor al intentar ejecutar scripts guardados. Por lo tanto, es fundamental comprender las configuraciones disponibles para evitar riesgos de seguridad.

### Tipos de políticas de ejecución

1. **Restricted**: Bloquea completamente la ejecución de scripts.
2. **AllSigned**: Permite ejecutar únicamente scripts que hayan sido firmados digitalmente por un editor confiable.
3. **RemoteSigned**: Los scripts que se descarguen de internet deben estar firmados por una entidad confiable, mientras que los locales pueden ejecutarse sin restricciones.
4. **Unrestricted**: Permite la ejecución de cualquier script, pero muestra advertencias si los scripts fueron descargados.
5. **Bypass**: Desactiva todas las restricciones de ejecución sin mostrar advertencias.
6. **Undefined**: Indica que no se ha configurado explícitamente ninguna política.

### Comandos útiles para gestionar políticas

1. Consultar la política actual:

```powershell
Get-ExecutionPolicy
```

2. Cambiar la política de ejecución:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

**Nota:** Este comando requiere permisos administrativos.

3. Ver las políticas aplicadas en diferentes contextos (usuario, máquina, proceso):

```powershell
Get-ExecutionPolicy -List
```

4. Restablecer la configuración de política a su valor más restrictivo:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Restricted
```

**Advertencia:** Cambiar la política de ejecución puede comprometer la seguridad del sistema. Realice modificaciones solo si confía plenamente en los scripts que se ejecutarán.
