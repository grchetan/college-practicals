
nums = list(map(int, input("Enter elements separated by space: ").split()))

unique_nums = list(set(nums))


unique_nums.sort()

if len(unique_nums) < 2:
    print("Second largest element does not exist")
else:
    print("Second largest element is:", unique_nums[-2])
