---
title: Introduction to PowerShell
---

# Introduction to PowerShell

## Introduction

PowerShell is a task automation and configuration management framework developed by Microsoft, designed to facilitate the administration of operating systems and applications. It combines several key tools into a single environment:

- **Command-Line Interface (CLI)**: Provides an efficient way to interact with the system through direct commands.
- **Advanced scripting language**: Ideal for creating scripts that automate complex and repetitive tasks.
- **Integrated Development Environment (IDE)**: Tools like Visual Studio Code offer extensions and features that make script development more intuitive.

PowerShell is widely used in corporate environments due to its versatility and ability to integrate with other technologies, making it an essential tool for system administrators and developers.

## Key Features

1. **Robust scripting language**:
   - Object-based: Data is managed as .NET objects, allowing greater control and manipulation.
   - Intuitive and easy-to-learn syntax, similar to other popular languages.
2. **Cmdlets (command-lets)**:
   - Lightweight, specific commands that perform common tasks such as managing files, processes, and services.
   - Can be combined and chained to create more complex workflows.
3. **.NET Framework integration**:
   - Enables the use of .NET libraries in scripts, significantly extending PowerShell's capabilities.
   - Supports the creation of advanced solutions with custom components.
4. **Cross-platform compatibility**:
   - Available on Windows, macOS, and Linux.
   - PowerShell Core and PowerShell 7 guarantee consistent behavior across platforms.
5. **Extensibility and customization**:
   - Users can create custom modules, cmdlets, and functions.
   - A wide variety of modules are available in the PowerShell Gallery to extend capabilities.
6. **Built-in security**:
   - Includes execution policies to protect against unauthorized scripts.
   - Allows encryption of credentials and other sensitive data in scripts.
7. **Automation and orchestration**:
   - Ideal for managing configurations in local and cloud environments.
   - Compatible with tools such as Azure, AWS, and VMware.
8. **Debugging and testing support**:
   - Enables unit testing with frameworks like Pester.
   - Includes tools for debugging and troubleshooting scripts.

## Versions

PowerShell comes in different versions designed to cover different needs:

1. **Windows PowerShell (5.1)**:
   - Based on .NET Framework.
   - Included by default in Windows versions such as Windows Server 2022.
   - Designed primarily for Windows environments.
2. **PowerShell Core (6.x)**:
   - The first cross-platform version.
   - Based on .NET Core.
   - Introduced support for Linux and macOS.
3. **PowerShell 7.x**:
   - The modern and current version of PowerShell.
   - Based on .NET 5/6, with performance improvements and new features.
   - Fully cross-platform (Windows, macOS, and Linux).

To check which version of PowerShell is installed on your system, use:

```powershell
$PSVersionTable
```

## Installation

It is recommended to install the most recent version (PowerShell 7) to ensure compatibility and access to the latest features.

### Windows

1. [Official guide to install PowerShell on Windows](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)

### macOS

1. Install Homebrew (if not installed).
2. Run the command:

```bash
brew install --cask powershell
```

### Linux

1. Update the system:

```bash
sudo apt update && sudo apt upgrade
```

2. Add the PowerShell repository:

```bash
sudo apt install -y powershell
```

## Script Creation

PowerShell scripts have the `.ps1` extension. Below is an example of a simple script:

```powershell
# Script to greet the user
echo "Enter your name:"
$name = Read-Host
Write-Output "Hello, $name! Welcome to PowerShell."
```

To run a script:

1. Open PowerShell.
2. Navigate to the directory where the script is located.
3. Run:

```powershell
.\script_name.ps1
```

## Windows PowerShell ISE

Windows PowerShell ISE (Integrated Scripting Environment) is an integrated graphical environment for writing, debugging, and running PowerShell scripts. Although it has been largely replaced by modern editors like Visual Studio Code, it remains a useful tool for quick tasks in Windows Server environments.

### Key Features:

1. **Integrated editor**: Allows writing and editing scripts with features like syntax highlighting and autocompletion.
2. **Step-by-step debugging**: Provides tools to debug scripts by setting breakpoints and viewing variable states.
3. **Interactive window**: Combines a script editor with a console to run commands directly.
4. **Customization**: Includes options to adjust colors, fonts, and window layouts.

### Accessing PowerShell ISE

PowerShell ISE (Integrated Scripting Environment) is a graphical tool integrated into Windows Server 2022 that allows users to efficiently write, test, and debug PowerShell scripts. To access PowerShell ISE in Windows Server 2022, there are several ways:

1. **From the Start Menu:**
   - Click the Start button and type "PowerShell ISE" in the search bar.
   - Select "Windows PowerShell ISE" from the results.
2. **Using the "Run" command:**
   - Press `Win + R` to open the Run window.
   - Type `powershell_ise` and press `Enter`.
3. **From File Explorer:**
   - Navigate to the folder `C:\Windows\System32\WindowsPowerShell\v1.0`.
   - Double-click on `powershell_ise.exe`.

### Usage Example:

1. **Open PowerShell ISE**:
   - You can use any of the options listed above.
2. **Create a script**:
   - Type the following code in the editor:

```powershell
Write-Output "Hello from PowerShell ISE"
```

   - Save the file with the `.ps1` extension.
3. **Run the script**:
   - Click the "Run" button (green icon) or press `F5`.

## Cmdlets

### Introduction to Cmdlets

A cmdlet is a lightweight, specialized command that performs a specific task. Cmdlets form the foundation of PowerShell and are named using a standard format composed of a verb and a noun, separated by a hyphen (`-`). For example:

- `Get-Process`: Retrieves information about running processes.
- `Set-Location`: Changes the current directory.

In addition to cmdlets, PowerShell also supports **functions** and **aliases**:

- **Functions**: Custom sets of instructions that can behave like cmdlets.
- **Aliases**: Short or alternative names for cmdlets and functions (e.g., `ls` as an alias for `Get-ChildItem`).

### Basic Cmdlets

#### File System Navigation

- `Get-ChildItem` (alias `ls`): Lists files and directories.
- `Set-Location` (alias `cd`): Changes the current directory.
- `Copy-Item` (alias `cp`): Copies files or directories.
- `Move-Item` (alias `mv`): Moves files or directories.
- `Remove-Item` (alias `rm`): Removes files or directories.

#### System Administration

- `Get-Process`: Displays running processes.
- `Stop-Process`: Stops processes.
- `Get-Service`: Lists system services.
- `Start-Service` and `Stop-Service`: Starts or stops services.
- `Get-EventLog`: Retrieves system log events.

### Using `Get-Help`

The `Get-Help` cmdlet provides documentation and usage examples for any cmdlet, function, or command available in PowerShell. This facilitates learning and understanding of new features.

#### Examples:

1. Get basic information about a cmdlet:

```powershell
Get-Help Get-Process
```

**Output:**

```
NAME
    Get-Process
SYNOPSIS
    Gets the processes that are running on the local computer or a remote computer.
```

2. View practical examples:

```powershell
Get-Help Get-Process -Examples
```

**Output:**

```
NAME
    Get-Process

EXAMPLES
    -------------------------- EXAMPLE 1 --------------------------
    Get-Process

    This command gets a list of all processes running on the local computer.
```

3. Get detailed information:

```powershell
Get-Help Get-Process -Detailed
```

**Output:**

```
NAME
    Get-Process
SYNOPSIS
    Gets the processes that are running on the local computer or a remote computer.

SYNTAX
    Get-Process [[-Name] <String[]>] [-Module] [<CommonParameters>]
```

4. Open complete documentation with technical descriptions:

```powershell
Get-Help Get-Process -Full
```

**Output:**

```
NAME
    Get-Process
SYNOPSIS
    Gets the processes on a local or remote computer.

DETAILED DESCRIPTION
    The Get-Process cmdlet gets the processes on a local or remote computer.
    Without parameters, this cmdlet gets all of the processes on the local computer.
```

5. Update local help files:

```powershell
Update-Help
```

### Using `Get-Command`

The `Get-Command` cmdlet lists all cmdlets, functions, aliases, and scripts available in the PowerShell environment. It is useful for exploring commands and verifying their availability.

#### Examples:

1. Get a list of all available cmdlets:

```powershell
Get-Command
```

**Output:**

```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Add-Content                                        7.0.0.0   Microsoft.PowerShell.Management
Cmdlet          Clear-Content                                      7.0.0.0   Microsoft.PowerShell.Management
...
```

2. Filter specific commands by type:

```powershell
Get-Command -CommandType Cmdlet
```

**Output:**

```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Get-Process                                        7.0.0.0   Microsoft.PowerShell.Management
Cmdlet          Start-Process                                      7.0.0.0   Microsoft.PowerShell.Management
...
```

3. Search for a specific cmdlet:

```powershell
Get-Command Get-Process
```

**Output:**

```
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Cmdlet          Get-Process                                        7.0.0.0   Microsoft.PowerShell.Management
```

### Using `Get-Member`

The `Get-Member` cmdlet displays the properties and methods of objects passed via the command line. It is especially useful for exploring the data structure of objects.

#### Examples:

1. Examine the properties and methods of an object:

```powershell
Get-Process | Get-Member
```

**Output:**

```
Name                      MemberType     Definition
----                      ----------     ----------
Handles                  AliasProperty   Handles = HandleCount
Name                     AliasProperty   Name = ProcessName
...
```

2. View only object properties:

```powershell
Get-Process | Get-Member -MemberType Property
```

**Output:**

```
Name                      MemberType     Definition
----                      ----------     ----------
CPU                      Property        System.Nullable`1[System.Double] CPU {get;}
Id                       Property        int Id {get;}
...
```

3. View only object methods:

```powershell
Get-Process | Get-Member -MemberType Method
```

**Output:**

```
Name                      MemberType     Definition
----                      ----------     ----------
Close                    Method          void Close()
Kill                     Method          void Kill()
...
```

## Execution Policy

Execution policies in PowerShell regulate how and when scripts can be executed on the system. This feature is designed to protect against the execution of unauthorized scripts and ensure that only those from trusted sources are run.

Although the execution policy does not restrict interactive command execution, it comes into effect when attempting to run saved scripts. Therefore, it is essential to understand the available configurations to avoid security risks.

### Types of execution policies

1. **Restricted**: Completely blocks script execution.
2. **AllSigned**: Allows execution of only digitally signed scripts by a trusted publisher.
3. **RemoteSigned**: Scripts downloaded from the internet must be signed by a trusted entity, while local scripts can run without restrictions.
4. **Unrestricted**: Allows execution of any script, but displays warnings if scripts were downloaded.
5. **Bypass**: Disables all execution restrictions without displaying warnings.
6. **Undefined**: Indicates that no policy has been explicitly configured.

### Useful commands for managing policies

1. Check the current policy:

```powershell
Get-ExecutionPolicy
```

2. Change the execution policy:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

**Note:** This command requires administrative permissions.

3. View policies applied in different contexts (user, machine, process):

```powershell
Get-ExecutionPolicy -List
```

4. Reset policy to its most restrictive value:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Restricted
```

**Warning:** Changing the execution policy can compromise system security. Only make modifications if you fully trust the scripts being run.

## Exercises

These exercises are designed to improve your PowerShell skills using a Windows Server 2022 environment.

### Exercise 1: Check Installed PowerShell Version

1. Verify which version of PowerShell is currently installed.
2. Install PowerShell Core if it is not present.
3. Confirm that PowerShell Core has been installed correctly.

### Exercise 2: Using Get-Help

1. Use `Get-Help` to get information about the `Get-Process` cmdlet.
2. View practical examples of `Get-Process` usage.
3. Consult the complete documentation for `Get-Process`.

### Exercise 3: Using Get-Command

1. List all available cmdlets on the system.
2. Filter cmdlets whose name contains "Service".
3. Get detailed information about the `Get-Service` cmdlet.

### Exercise 4: Using Get-Member

1. Use `Get-Process` to get a list of running processes.
2. Pipe the output of `Get-Process` to `Get-Member` to explore available properties and methods.
3. Create a custom table showing the process name and its ID.

### Exercise 5: Using Export-Csv

1. List all available services on the system.
2. Filter services in "Running" status.
3. Export the list of running services to a CSV file called `RunningServices.csv`.

### Exercise 6: Using Select-Object

1. Get a list of running processes.
2. Show only the name, ID, and amount of memory used by each process.

### Exercise 7: Managing Execution Policy

1. Check the current execution policy.
2. Change the execution policy to "Restricted" to block scripts.
3. Create a test script and verify it is blocked.
4. Restore the execution policy to "RemoteSigned".
