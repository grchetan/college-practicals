list = []

maxsize = int(input("Enter number of elements you want to insert: "))

top = 0

while top < maxsize:
    list.append(int(input("Enter an element: ")))
    top += 1

maxelement = list[0]

for i in list:
    if i > maxelement:
        maxelement = i

print(maxelement)