using CopilotPractice.Core;

Console.WriteLine("=== Copilot Practice - Calculator Demo ===");
Console.WriteLine();

var calculator = new Calculator();

// Demonstrate basic arithmetic operations
Console.WriteLine("Basic Calculator Operations:");
Console.WriteLine($"10 + 5 = {calculator.Add(10, 5)}");
Console.WriteLine($"10 - 5 = {calculator.Subtract(10, 5)}");
Console.WriteLine($"10 * 5 = {calculator.Multiply(10, 5)}");
Console.WriteLine($"10 / 5 = {calculator.Divide(10, 5)}");

Console.WriteLine();
Console.WriteLine("Interactive Calculator:");
Console.WriteLine("Enter 'quit' to exit");

while (true)
{
    Console.Write("Enter first number (or 'quit'): ");
    var input1 = Console.ReadLine();
    
    if (input1?.ToLower() == "quit")
        break;
    
    if (!double.TryParse(input1, out double num1))
    {
        Console.WriteLine("Invalid number. Please try again.");
        continue;
    }
    
    Console.Write("Enter operation (+, -, *, /): ");
    var operation = Console.ReadLine();
    
    Console.Write("Enter second number: ");
    var input2 = Console.ReadLine();
    
    if (!double.TryParse(input2, out double num2))
    {
        Console.WriteLine("Invalid number. Please try again.");
        continue;
    }
    
    try
    {
        double result = operation switch
        {
            "+" => calculator.Add(num1, num2),
            "-" => calculator.Subtract(num1, num2),
            "*" => calculator.Multiply(num1, num2),
            "/" => calculator.Divide(num1, num2),
            _ => throw new ArgumentException("Invalid operation")
        };
        
        Console.WriteLine($"Result: {num1} {operation} {num2} = {result}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
    }
    
    Console.WriteLine();
}
