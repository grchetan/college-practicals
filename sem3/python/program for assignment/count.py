inputString = input("Enter a string: ")
originalString = inputString
inputString = inputString.lower()

vowelCount = 0
alphabetCount = 0
digitCount = 0
symbolCount = 0

for i in inputString:
    if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
        vowelCount += 1
    elif i.isalpha():
        alphabetCount += 1
    elif i.isdigit():
        digitCount += 1
    else:
        symbolCount += 1

print(f"Vowels in {originalString}: {vowelCount}")
print(f"Consonants in {originalString}: {alphabetCount}")
print(f"Digits in {originalString}: {digitCount}")
print(f"Symbols in {originalString}: {symbolCount}")