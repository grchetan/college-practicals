n = int(input("Enter a number of terms you want to print: "))

firstTerm = 0
secondTerm = 1

print(firstTerm, secondTerm, end = " ")

for i in range(1, n - 1):

    thirdTerm = firstTerm + secondTerm
    print(thirdTerm, end = " ")
    firstTerm = secondTerm
    secondTerm = thirdTerm