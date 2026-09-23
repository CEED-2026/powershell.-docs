---
title: PowerShell Practical Exercises
---

# PowerShell Practical Exercises

These exercises are designed to improve your PowerShell skills using a Windows Server 2022 environment.

## Exercise 1: Check Installed PowerShell Version

1. Verify which version of PowerShell is currently installed.
2. Install PowerShell Core if it is not present.
3. Confirm that PowerShell Core has been installed correctly.

**Solution:**

```powershell
# Check installed version
$PSVersionTable

# Download and install PowerShell Core (if not installed)
winget install --id Microsoft.Powershell --source winget

# Confirm the installation
pwsh -v
```

## Exercise 2: Using Get-Help

1. Use `Get-Help` to get information about the `Get-Process` cmdlet.
2. View practical examples of `Get-Process` usage.
3. Consult the complete documentation for `Get-Process`.

**Solution:**

```powershell
# Get general information
Get-Help Get-Process

# View practical examples
Get-Help Get-Process -Examples

# Consult complete documentation
Get-Help Get-Process -Full
```

## Exercise 3: Using Get-Command

1. List all available cmdlets on the system.
2. Filter cmdlets whose name contains "Service".
3. Get detailed information about the `Get-Service` cmdlet.

**Solution:**

```powershell
# List all cmdlets
Get-Command

# Filter cmdlets by name
Get-Command -Name *Service*

# Get information about a specific cmdlet
Get-Command Get-Service
```

## Exercise 4: Using Get-Member

1. Use `Get-Process` to get a list of running processes.
2. Pipe the output of `Get-Process` to `Get-Member` to explore available properties and methods.
3. Create a custom table showing the process name and its ID.

**Solution:**

```powershell
# List processes and explore properties/methods
Get-Process | Get-Member

# Create a custom table
Get-Process | Select-Object -Property Name, Id
```

## Exercise 5: Using Export-Csv

1. List all available services on the system.
2. Filter services in "Running" status.
3. Export the list of running services to a CSV file called `RunningServices.csv`.

**Solution:**

```powershell
# List services and filter by status
Get-Service | Where-Object { $_.Status -eq 'Running' } | Export-Csv -Path C:\Reports\RunningServices.csv -NoTypeInformation
```

## Exercise 6: Using Select-Object

1. Get a list of running processes.
2. Show only the name, ID, and amount of memory used by each process.

**Solution:**

```powershell
Get-Process | Select-Object -Property Name, Id, WorkingSet
```

## Exercise 7: Managing Execution Policy

1. Check the current execution policy.
2. Change the execution policy to "Restricted" to block scripts.
3. Create a test script and verify it is blocked.
4. Restore the execution policy to "RemoteSigned".

**Solution:**

```powershell
# Change execution policy to Restricted
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser

# Create a blocked script
echo "Write-Output 'This script should be blocked by the execution policy.'" > .\RestrictedScript.ps1

# Attempt to run the script
.\RestrictedScript.ps1

# Expected message: RestrictedScript.ps1 cannot be loaded because running scripts is disabled on this system.

# Restore execution policy to RemoteSigned
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
