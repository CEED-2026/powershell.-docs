---
title: PowerShell Language Structures
---

# PowerShell Language Structures

## Comments

Used to document scripts and provide context.

### Single-line comment

```powershell
# This is a comment
```

### Multi-line comment

```powershell
<#
This is a
multi-line comment
#>
```

## Variables

In PowerShell, variables are represented with the `$` prefix.

### Declaring and initializing variables

It is not mandatory to declare variables beforehand in PowerShell; they are created automatically when a value is assigned.

### Different ways to declare variables:

1. **Implicit declaration without type:**

```powershell
$variable = "Hello World"
$number = 42
```

In this case, PowerShell automatically assigns the type based on the provided value.

2. **Explicit declaration with type:**

```powershell
[int]$number = 10
[string]$text = "Example Text"
```

Here the variable type is specified.

3. **Using `New-Variable`:**

```powershell
New-Variable -Name "myVariable" -Value "Hello World" -Option ReadOnly
```

This approach is useful when additional control over the variable is needed, such as defining it as read-only or persistent.

Parameters allow declaring and typing variables in the context of a function.

4. **Declaration without initialization:**

```powershell
$noValue
$noValue = "Now I have a value"
```

Although no value is assigned at first, it can be assigned later.

### Variable types

Although PowerShell is dynamic, it supports explicit types. Below is a table with examples:

TypeDescription
`[int]`Integers
`[long]`Large integers
`[float]`Floating point numbers
`[double]`Double precision numbers
`[decimal]`High precision decimal numbers
`[string]`Text or character strings
`[char]`Single character
`[bool]`Boolean values (`$true`, `$false`)
`[array]`Ordered collections of elements
`[hashtable]`Key-value pairs
`[datetime]`Represents date and time
`[guid]`Globally unique identifier
`[xml]`XML representation
`[scriptblock]`Reusable blocks of code
`[psobject]`Generic object
`[null]`Null value

#### Example:

```powershell
# Declare explicit types
[int]$number = 10
[string]$text = "Example Text"
[array]$list = @("A", "B", "C")
[datetime]$date = Get-Date
```

### Get variable value and type

- To know the value of a variable, simply call it:

```powershell
Write-Output $myVariable
```

- To know its type, use the `GetType()` method and `Name` property:

```powershell
$myVariable.GetType().Name
```

#### Example:

```powershell
$variable = 123
Write-Output "Type: $($variable.GetType().Name)"
```

#### Terminal output:

```plaintext
Type: Int32
```

### Convert one variable type to another

PowerShell allows converting variable types easily using explicit casting.

#### Example:

```powershell
# Convert from string to integer
[string]$text = "123"
[int]$number = [int]$text
Write-Output $number  # Result: 123

# Convert from integer to string
[int]$number = 456
[string]$text = [string]$number
Write-Output $text  # Result: "456"

# Convert from array to hashtable
$array = @("key=value", "other=element")
$hashtable = @{}
foreach ($item in $array) {
    $key, $value = $item -split "="
    $hashtable[$key] = $value
}
Write-Output $hashtable
```

## Arithmetic Operators

Arithmetic operators in PowerShell allow performing basic and advanced mathematical operations with numeric values.

### List of arithmetic operators:

OperatorDescriptionExampleResult
`+`Addition`5 + 3``8`
`-`Subtraction`10 - 4``6`
`*`Multiplication`2 * 3``6`
`/`Division`8 / 2``4`
`%`Modulus (remainder)`10 % 3``1`
`++`Increment by one`$a++``a + 1`
`--`Decrement by one`$a--``a - 1`

### Practical example:

```powershell
# Declare variables
$a = 10
$b = 3

# Operations
$sum = $a + $b
$diff = $a - $b
$product = $a * $b
$division = $a / $b
$modulo = $a % $b

# Show results
Write-Output "Sum: $sum"        # Sum: 13
Write-Output "Difference: $diff"      # Difference: 7
Write-Output "Product: $product" # Product: 30
Write-Output "Division: $division" # Division: 3.3333
Write-Output "Modulo: $modulo"    # Modulo: 1
```

These operators are essential for performing calculations in automated scripts and data analysis processes.

## Comparison, Equality, and Membership Operators

Comparison, equality, and membership operators are used to evaluate logical conditions in PowerShell.

### Comparison operators:

OperatorDescriptionExampleResult
`-eq`Equality`5 -eq 5``$true`
`-ne`Not equal`5 -ne 3``$true`
`-lt`Less than`3 -lt 5``$true`
`-le`Less than or equal`5 -le 5``$true`
`-gt`Greater than`7 -gt 5``$true`
`-ge`Greater than or equal`5 -ge 5``$true`

### Equality and membership operators:

OperatorDescriptionExampleResult
`-like`Matches a pattern (wildcards)`"hello" -like "h*"``$true`
`-notlike`Does not match a pattern`"world" -notlike "a*"``$true`
`-match`Matches a regular expression`"PowerShell" -match "Shell"``$true`
`-notmatch`Does not match a regular expression`"PowerShell" -notmatch "Java"``$true`
`-contains`Checks if an element belongs to a collection`@(1, 2, 3) -contains 2``$true`
`-notcontains`Checks if an element does not belong`@(1, 2, 3) -notcontains 5``$true`
`-in`Element is in the collection`2 -in @(1, 2, 3)``$true`
`-notin`Element is not in the collection`5 -notin @(1, 2, 3)``$true`

### Practical example:

```powershell
# Basic comparisons
$a = 5
$b = 10
Write-Output ($a -lt $b)        # True
Write-Output ($a -eq $b)        # False

# Equality with patterns
$string = "hello world"
Write-Output ($string -like "h*")   # True
Write-Output ($string -notlike "a*") # True

# Membership
$array = @("apple", "banana", "cherry")
Write-Output ($array -contains "banana") # True
Write-Output ("banana" -in $array)      # True
Write-Output ("grape" -notin $array)   # True
```

## Logical Operators

Logical operators in PowerShell allow performing complex evaluations by combining multiple logical conditions. These operators return `$true` or `$false` based on the result of the conditions.

### List of logical operators:

OperatorDescriptionExampleResult
`-and`Logical Y`($a -gt 5 -and $b -lt 10)``$true`
`-or`Logical O`($a -lt 5 -or $b -lt 10)``$true`
`-not`Logical negation`-not($a -gt 5)``$false`
`-xor`Exclusive or`($a -gt 5 -xor $b -lt 10)``$true`
`!`Short-circuit negation`!($a -gt 5)``$false`

### Practical example:

```powershell
# Declare variables
$a = 7
$b = 3

# Logical operators
Write-Output ($a -gt 5 -and $b -lt 10)   # True
Write-Output ($a -lt 5 -or $b -lt 10)    # True
Write-Output (-not($a -gt 5))            # False
Write-Output ($a -gt 5 -xor $b -lt 10)   # True
Write-Output (!($a -gt 5))               # False
```

## Bitwise Operators

Bitwise operators allow manipulating numbers at the bit level in PowerShell. These are useful in operations such as masking and bit shifting.

### List of bitwise operators:

OperatorDescriptionExampleResult
`-band`Bitwise AND`5 -band 3``1`
`-bor`Bitwise OR`5 -bor 3``7`
`-bxor`Bitwise XOR`5 -bxor 3``6`
`-bnot`Bitwise NOT (complement)`-bnot 5``-6`
`-shl`Left shift`5 -shl 1``10`
`-shr`Right shift`5 -shr 1``2`

### Practical example:

```powershell
# Bitwise operations
Write-Output (5 -band 3)    # 1
Write-Output (5 -bor 3)     # 7
Write-Output (5 -bxor 3)    # 6
Write-Output (-bnot 5)      # -6
Write-Output (5 -shl 1)     # 10
Write-Output (5 -shr 1)     # 2
```

## Assignment Operators

Assignment operators are used to store values in variables. In addition to the basic `=` operator, there are combined operators that include mathematical operations and simultaneous assignment.

### List of assignment operators:

OperatorDescriptionExampleResult
`=`Basic assignment`$a = 5``$a = 5`
`+=`Add and assign`$a += 3``$a = 8`
`-=`Subtract and assign`$a -= 2``$a = 6`
`*=`Multiply and assign`$a *= 2``$a = 12`
`/=`Divide and assign`$a /= 3``$a = 4`
`%=`Modulo and assign`$a %= 2``$a = 0`
`++`Increment by one`$a++`Increments by 1
`--`Decrement by one`$a--`Decrements by 1

### Practical example:

```powershell
# Basic assignment
$a = 5

# Combined operations
$a += 3   # Increment by 3, $a is 8
$a -= 2   # Decrement by 2, $a is 6
$a *= 2   # Multiply by 2, $a is 12
$a /= 3   # Divide by 3, $a is 4
$a %= 2   # Calculate modulo 2, $a is 0

# Increment and decrement
$a++      # Increment by 1, $a is 1
$a--      # Decrement by 1, $a is 0

Write-Output $a
```

## Conditional Structures

Conditional structures allow executing different blocks of code based on whether certain conditions are met. In PowerShell, the main conditional structures are:

### `if`

The `if` block is used to evaluate a single condition and execute a block of code if it is met.

```
if ($variable -eq 10) {
    Write-Output "The variable is equal to 10"
}
```

#### Example:

```
$number = 10
if ($number -eq 10) {
    Write-Output "The number is equal to 10"
}
```

**Expected output:**

```
The number is equal to 10
```

### `if` and `else`

The `else` block is used together with `if` to execute an alternative block if the `if` condition is not met.

```
if ($variable -eq 10) {
    Write-Output "The variable is equal to 10"
} else {
    Write-Output "The variable is not equal to 10"
}
```

#### Example:

```
$age = 20
if ($age -lt 18) {
    Write-Output "You are underage"
} else {
    Write-Output "You are an adult"
}
```

**Expected output:**

```
You are an adult
```

### `if`, `elseif`, and `else`

The `elseif` block allows evaluating additional conditions if the first condition is not met. The `else` block serves as a final alternative.

```
if ($variable -eq 10) {
    Write-Output "The variable is equal to 10"
} elseif ($variable -lt 10) {
    Write-Output "The variable is less than 10"
} else {
    Write-Output "The variable is greater than 10"
}
```

#### Example:

```
$temperature = 25
if ($temperature -lt 0) {
    Write-Output "It's very cold"
} elseif ($temperature -ge 0 -and $temperature -le 30) {
    Write-Output "The temperature is pleasant"
} else {
    Write-Output "It's very hot"
}
```

**Expected output:**

```
The temperature is pleasant
```

### `Switch`

The `Switch` block evaluates a variable or expression and executes the corresponding code block for the matching case.

#### Example:

```
$state = "Approved"
Switch ($state) {
    "Approved" { Write-Output "Congratulations, you passed!" }
    "Failed" { Write-Output "Sorry, you need to improve." }
    Default { Write-Output "Unknown state." }
}
```

**Expected output:**

```
Congratulations, you passed!
```

## Loop Structures

Loop structures allow executing a block of code multiple times, either based on a condition or by iterating over a collection of elements.

### `For`

The `For` loop is used to iterate a specific number of times, typically controlled by a counter.

```
For ($i = 0; $i -lt 5; $i++) {
    Write-Output "Iteration $i"
}
```

#### Example:

```
For ($i = 1; $i -le 3; $i++) {
    Write-Output "Table of $i"
    For ($j = 1; $j -le 3; $j++) {
        Write-Output "$i x $j = $(($i * $j))"
    }
}
```

**Expected output:**

```
Table of 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
Table of 2
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
Table of 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
```

### `Foreach`

The `Foreach` loop iterates over all elements of a collection or dataset.

#### Example:

```
$colors = @("Red", "Green", "Blue")
foreach ($color in $colors) {
    Write-Output "Color: $color"
}
```

**Expected output:**

```
Color: Red
Color: Green
Color: Blue
```

### `While`

The `While` loop executes a block of code while a condition is true.

#### Example:

```
$counter = 3
while ($counter -gt 0) {
    Write-Output "Countdown: $counter"
    $counter--
}
```

**Expected output:**

```
Countdown: 3
Countdown: 2
Countdown: 1
```

### `Do-While`

The `Do-While` loop executes the block at least once before evaluating the condition.

#### Example:

```
$attempts = 0
Do {
    Write-Output "Attempt number: $attempts"
    $attempts++
} While ($attempts -lt 3)
```

**Expected output:**

```
Attempt number: 0
Attempt number: 1
Attempt number: 2
```

### `Do-Until`

The `Do-Until` loop also executes the block at least once, but stops when the condition is met.

#### Example:

```
$counter = 1
Do {
    Write-Output "Current number: $counter"
    $counter++
} Until ($counter -gt 3)
```

**Expected output:**

```
Current number: 1
Current number: 2
Current number: 3
```

## Functions

Functions in PowerShell allow encapsulating reusable logic in code blocks. They are essential for structuring more complex scripts in a modular and efficient way.

### Basic function definition

A basic function is defined with the `function` keyword, followed by the function name and a code block.

```
function FunctionName {
    # Function body
    Write-Output "Hello from the function!"
}
```

#### Example:

```
function Greet {
    Write-Output "Hello, world!"
}

# Call the function
Greet
```

**Expected output:**

```
Hello, world!
```

### Functions with parameters

Functions can accept parameters to customize their behavior.

```
function Greet {
    param (
        [string]$name
    )
    Write-Output "Hello, $name"
}

# Call the function
Greet -name "Carlos"
```

#### Explanation:

- The `[string]$name` parameter allows passing a value to the function.
- The parameter value is used within the function body.

**Expected output:**

```
Hello, Carlos
```

### Functions with return values

Functions can return a value using `return`.

```
function Add {
    param (
        [int]$a,
        [int]$b
    )
    return $a + $b
}

# Call the function
$result = Add -a 5 -b 3
Write-Output "Result: $result"
```

#### Explanation:

- The `Add` function takes two parameters (`a` and `b`), adds them, and returns the result.
- The returned value is stored in the `$result` variable.

**Expected output:**

```
Result: 8
```

### Advanced functions with parameter validation

PowerShell allows adding validations to parameters using attributes.

```
function ValidateNumber {
    param (
        [ValidateRange(1, 100)]
        [int]$number
    )
    Write-Output "Valid number: $number"
}

# Call the function
ValidateNumber -number 50
```

#### Explanation:

- `[ValidateRange(1, 100)]` ensures that the `$number` parameter value is between 1 and 100.
- If a value outside that range is passed, PowerShell generates an error.

**Expected output:**

```
Valid number: 50
```

### Functions with multiple parameters and complex logic

Functions can handle multiple parameters and execute more advanced logic.

```
function AnalyzeNumber {
    param (
        [int]$number
    )
    if ($number -lt 0) {
        Write-Output "The number is negative"
    } elseif ($number -eq 0) {
        Write-Output "The number is zero"
    } else {
        Write-Output "The number is positive"
    }
}

# Call the function
AnalyzeNumber -number -5
```

**Expected output:**

```
The number is negative
```

### Functions that work with collections

Functions can manipulate arrays or collections as input or output.

#### Example of a function that calculates the average:

```
function CalculateAverage {
    param (
        [int[]]$numbers
    )
    $sum = 0
    foreach ($number in $numbers) {
        $sum += $number
    }
    return $sum / $numbers.Length
}

# Call the function
$average = CalculateAverage -numbers @(10, 20, 30)
Write-Output "The average is: $average"
```

**Expected output:**

```
The average is: 20
```
