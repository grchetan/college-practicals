
number_of_elements = int(input("Enter how many elements you want to enter: "))

numbers_list = []

for index in range(number_of_elements):
    value = int(input("Enter number: "))
    numbers_list.append(value)

for outer_index in range(number_of_elements):
    for inner_index in range(0, number_of_elements - outer_index - 1):
        if numbers_list[inner_index] > numbers_list[inner_index + 1]:
            
            temp = numbers_list[inner_index]
            numbers_list[inner_index] = numbers_list[inner_index + 1]
            numbers_list[inner_index + 1] = temp


print("Sorted List in Ascending Order:", numbers_list)


numbers_list.reverse()
print("Sorted List in Descending Order:", numbers_list)
