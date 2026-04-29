value = input("Enter a string: ")

reversed = value[::-1]


if value == reversed:
    print(f"this is palindrom {value}")

else:
    print(f"this is not palindrom {value}")