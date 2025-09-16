# Copilot Practice

A C# project created using .NET templates to demonstrate basic software development practices.

## Project Structure

This solution contains three projects:

- **CopilotPractice.Core** - A class library containing the core business logic (Calculator class)
- **CopilotPractice.ConsoleApp** - A console application that demonstrates usage of the Core library
- **CopilotPractice.Tests** - Unit tests for the Core library using xUnit framework

## Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later

## Building the Project

To build the entire solution:

```bash
dotnet build
```

## Running the Application

To run the console application:

```bash
dotnet run --project src/CopilotPractice.ConsoleApp
```

## Running Tests

To run all unit tests:

```bash
dotnet test
```

## Features

The Calculator class provides basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division (with divide-by-zero protection)

The console application demonstrates both automated calculations and an interactive calculator mode.

## Development

### Project Dependencies

- CopilotPractice.ConsoleApp → CopilotPractice.Core
- CopilotPractice.Tests → CopilotPractice.Core

### Solution Structure

```
├── src/
│   ├── CopilotPractice.Core/          # Class library
│   └── CopilotPractice.ConsoleApp/    # Console application
├── tests/
│   └── CopilotPractice.Tests/         # Unit tests
├── CopilotPractice.sln                # Solution file
└── .gitignore                         # Git ignore rules
```