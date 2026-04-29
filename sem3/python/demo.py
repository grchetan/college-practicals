x = int(input("Enter a number: "))

reversed_x = int(str(x)[::-1])

if reversed_x == x:
    print(f"{x} reads as {reversed_x} from left to right and from right to left.")
elif reversed_x != x and x > 0:
    print(f"From left to right, it reads {x}. From right to left, it becomes {reversed_x}. Therefore it is not a palindrome.")
else:
    print(f"Reads {x} from right to left. Therefore it is not a palindrome.")
