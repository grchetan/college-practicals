    # Open source file in read mode
file1 = open("input.txt", "r")

# Open destination file in write mode
file2 = open("output.txt", "w")

# Read file line by line
for line in file1:
    print(line.strip())   
    
    # Check if 'a' is present in the line
    if 'a' not in line:
        file2.write(line)

# Close both files
file1.close()
file2.close()

print("\nLines without 'a' have been written to output.txt")
