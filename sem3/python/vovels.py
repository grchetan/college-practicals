stringInput = input("Enter a string: ")
stringLowerCase = stringInput.lower()
count = 0

for char in stringLowerCase:
    if char == 'a' or char == 'e' or char == 'i' or char == 'o'or char == 'u':
        count += 1

print(count)