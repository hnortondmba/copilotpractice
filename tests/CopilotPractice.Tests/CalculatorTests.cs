using CopilotPractice.Core;

namespace CopilotPractice.Tests;

public class CalculatorTests
{
    private readonly Calculator _calculator;

    public CalculatorTests()
    {
        _calculator = new Calculator();
    }

    [Fact]
    public void Add_TwoPositiveNumbers_ReturnsCorrectSum()
    {
        // Arrange
        double a = 5;
        double b = 3;
        double expected = 8;

        // Act
        double result = _calculator.Add(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Add_PositiveAndNegativeNumber_ReturnsCorrectSum()
    {
        // Arrange
        double a = 5;
        double b = -3;
        double expected = 2;

        // Act
        double result = _calculator.Add(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Subtract_TwoPositiveNumbers_ReturnsCorrectDifference()
    {
        // Arrange
        double a = 10;
        double b = 4;
        double expected = 6;

        // Act
        double result = _calculator.Subtract(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Multiply_TwoNumbers_ReturnsCorrectProduct()
    {
        // Arrange
        double a = 6;
        double b = 7;
        double expected = 42;

        // Act
        double result = _calculator.Multiply(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Divide_TwoNumbers_ReturnsCorrectQuotient()
    {
        // Arrange
        double a = 15;
        double b = 3;
        double expected = 5;

        // Act
        double result = _calculator.Divide(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Divide_ByZero_ThrowsDivideByZeroException()
    {
        // Arrange
        double a = 10;
        double b = 0;

        // Act & Assert
        Assert.Throws<DivideByZeroException>(() => _calculator.Divide(a, b));
    }

    [Theory]
    [InlineData(0, 0, 0)]
    [InlineData(-5, -3, -8)]
    [InlineData(2.5, 3.7, 6.2)]
    public void Add_VariousInputs_ReturnsCorrectSum(double a, double b, double expected)
    {
        // Act
        double result = _calculator.Add(a, b);

        // Assert
        Assert.Equal(expected, result, precision: 10);
    }
}