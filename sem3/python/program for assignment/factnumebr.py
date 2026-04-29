
def iterative_fact(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result


def recursive_fact(n):
    if n <= 1:
        return 1
    else:
        return n * recursive_fact(n - 1)


num = int(input("Enter a number: "))

iter_result = iterative_fact(num)
rec_result = recursive_fact(num)

print("Factorial using Iteration:", iter_result)
print("Factorial using Recursion:", rec_result)
