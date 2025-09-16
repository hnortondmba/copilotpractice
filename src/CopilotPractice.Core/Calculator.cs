namespace CopilotPractice.Core;

/// <summary>
/// A simple calculator class that provides basic arithmetic operations.
/// </summary>
public class Calculator
{
    /// <summary>
    /// Adds two numbers and returns the result.
    /// </summary>
    /// <param name="a">First number</param>
    /// <param name="b">Second number</param>
    /// <returns>The sum of a and b</returns>
    public double Add(double a, double b)
    {
        return a + b;
    }

    /// <summary>
    /// Subtracts the second number from the first and returns the result.
    /// </summary>
    /// <param name="a">First number</param>
    /// <param name="b">Second number</param>
    /// <returns>The difference of a and b</returns>
    public double Subtract(double a, double b)
    {
        return a - b;
    }

    /// <summary>
    /// Multiplies two numbers and returns the result.
    /// </summary>
    /// <param name="a">First number</param>
    /// <param name="b">Second number</param>
    /// <returns>The product of a and b</returns>
    public double Multiply(double a, double b)
    {
        return a * b;
    }

    /// <summary>
    /// Divides the first number by the second and returns the result.
    /// </summary>
    /// <param name="a">Dividend</param>
    /// <param name="b">Divisor</param>
    /// <returns>The quotient of a and b</returns>
    /// <exception cref="DivideByZeroException">Thrown when b is zero</exception>
    public double Divide(double a, double b)
    {
        if (b == 0)
        {
            throw new DivideByZeroException("Cannot divide by zero");
        }
        return a / b;
    }
}
