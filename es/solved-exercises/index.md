---
title: Ejercicios Prácticos de PowerShell
---

# Ejercicios Prácticos de PowerShell

Estos ejercicios están diseñados para mejorar tus habilidades en PowerShell utilizando un entorno de Windows Server 2022.

## Ejercicio 1: Comprobar versión de PowerShell instalada

1. Verificar qué versión de PowerShell está instalada actualmente.
2. Instalar PowerShell Core si no está presente.
3. Confirmar que PowerShell Core se ha instalado correctamente.

**Solución:**

```powershell
# Verificar versión instalada
$PSVersionTable

# Descargar e instalar PowerShell Core (si no está instalado)
winget install --id Microsoft.Powershell --source winget

# Confirmar la instalación
pwsh -v
```

## Ejercicio 2: Uso de Get-Help

1. Utilizar `Get-Help` para obtener información sobre el cmdlet `Get-Process`.
2. Visualizar ejemplos prácticos del uso de `Get-Process`.
3. Consultar la documentación completa de `Get-Process`.

**Solución:**

```powershell
# Obtener información general
Get-Help Get-Process

# Ver ejemplos prácticos
Get-Help Get-Process -Examples

# Consultar documentación completa
Get-Help Get-Process -Full
```

## Ejercicio 3: Uso de Get-Command

1. Listar todos los cmdlets disponibles en el sistema.
2. Filtrar los cmdlets cuyo nombre contenga "Service".
3. Obtener información detallada sobre el cmdlet `Get-Service`.

**Solución:**

```powershell
# Listar todos los cmdlets
Get-Command

# Filtrar cmdlets por nombre
Get-Command -Name *Service*

# Obtener información de un cmdlet específico
Get-Command Get-Service
```

## Ejercicio 4: Uso de Get-Member

1. Utilizar `Get-Process` para obtener una lista de procesos en ejecución.
2. Pasar la salida de `Get-Process` a `Get-Member` para explorar las propiedades y métodos disponibles.
3. Crear una tabla personalizada que muestre el nombre del proceso y su ID.

**Solución:**

```powershell
# Listar procesos y explorar propiedades/métodos
Get-Process | Get-Member

# Crear una tabla personalizada
Get-Process | Select-Object -Property Name, Id
```

## Ejercicio 5: Uso de Export-Csv

1. Listar todos los servicios disponibles en el sistema.
2. Filtrar los servicios en estado "Running".
3. Exportar la lista de servicios en ejecución a un archivo CSV llamado `ServiciosEnEjecucion.csv`.

**Solución:**

```powershell
# Listar servicios y filtrar por estado
Get-Service | Where-Object { $_.Status -eq 'Running' } | Export-Csv -Path C:\Reports\ServiciosEnEjecucion.csv -NoTypeInformation
```

## Ejercicio 6: Uso de Select-Object

1. Obtener una lista de procesos en ejecución.
2. Mostrar solo el nombre, el ID y la cantidad de memoria utilizada por cada proceso.

**Solución:**

```powershell
Get-Process | Select-Object -Property Name, Id, WorkingSet
```

## Ejercicio 7: Gestión de Execution Policy

1. Consultar la política de ejecución actual.
2. Cambiar la política de ejecución a "Restricted" para bloquear scripts.
3. Crear un script de prueba y comprobar que está bloqueado.
4. Restaurar la política de ejecución a "RemoteSigned".

**Solución:**

```powershell
# Cambiar política de ejecución a Restricted
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser

# Crear un script bloqueado
echo "Write-Output 'Este script debería estar bloqueado por la política de ejecución.'" > .\ScriptRestringido.ps1

# Intentar ejecutar el script
.\ScriptRestringido.ps1

# Mensaje esperado: ScriptRestringido.ps1 cannot be loaded because running scripts is disabled on this system.

# Restaurar la política de ejecución a RemoteSigned
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
