num1 = int(input("Enter a first number"))
num2 = int(input("Enter a second number"))
op = input("select oprators\nsum +\nminus -\ndivide /\nmultiply * ")

if op == "+":
    print("Result", num1 + num2)
elif op == "-":
    print("Result", num1 - num2)
elif op == "*":
      print("Result", num1 * num2)

elif op == "/":
      print("Result", num1 / num2)

else:
    print("Invalid operator")