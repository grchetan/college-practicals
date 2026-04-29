
s = input("Enter a string: ")

s = s.lower()

rev_s = s[::-1]

if s == rev_s:
    print("The given string is a Palindrome")
else:
    print("The given string is Not a Palindrome")
