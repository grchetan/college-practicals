
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    return a / b

print("---- Simple Calculator ----")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")

choice = int(input("Enter your choice (1-4): "))


n1 = float(input("Enter first number: "))
n2 = float(input("Enter second number: "))

if choice == 1:
    print("Result:", add(n1, n2))

elif choice == 2:
    print("Result:", sub(n1, n2))

elif choice == 3:
    print("Result:", mul(n1, n2))

elif choice == 4:
    print("Result:", div(n1, n2))

else:
    print("Invalid Choice")
