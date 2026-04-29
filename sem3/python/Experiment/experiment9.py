def add_student():
    file = open("student_detailsfile.txt", "a")
    roll = input("Enter Roll No: ")
    name = input("Enter Name: ")
    course = input("Enter Course: ")
    file.write(roll + "," + name + "," + course + "\n")
    file.close()
    print("Student Added Successfully!\n")

def search_student():
    roll = input("Enter Roll No to Search: ")
    found = False
    file = open("student_detailsfile.txt", "r")
    
    for line in file:
        data = line.strip().split(",")
        if data[0] == roll:
            print("Student Found:")
            print("Roll No:", data[0])
            print("Name:", data[1])
            print("Course:", data[2])
            found = True
    
    if not found:
        print("Student Not Found!")
    
    file.close()

def delete_student():
    roll = input("Enter Roll No to Delete: ")
    file = open("student_detailsfile.txt", "r")
    lines = file.readlines()
    file.close()

    file = open("student_detailsfile.txt", "w")
    found = False
    
    for line in lines:
        data = line.strip().split(",")
        if data[0] != roll:
            file.write(line)
        else:
            found = True
    
    file.close()

    if found:
        print("Student Deleted Successfully!")
    else:
        print("Student Not Found!")

def update_student():
    roll = input("Enter Roll No to Update: ")
    file = open("student_detailsfile.txt", "r")
    lines = file.readlines()
    file.close()

    file = open("student_detailsfile.txt", "w")
    found = False

    for line in lines:
        data = line.strip().split(",")
        if data[0] == roll:
            name = input("Enter New Name: ")
            course = input("Enter New Course: ")
            file.write(roll + "," + name + "," + course + "\n")
            found = True
        else:
            file.write(line)

    file.close()

    if found:
        print("Student Updated Successfully!")
    else:
        print("Student Not Found!")

# ✅ Main Program
while True:
    print("\n--- Student Details Management ---")
    print("1. Add Student")
    print("2. Search Student")
    print("3. Delete Student")
    print("4. Update Student")
    print("5. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        add_student()
    elif choice == "2":
        search_student()
    elif choice == "3":
        delete_student()
    elif choice == "4":
        update_student()
    elif choice == "5":
        print("Program Exit Successfully!")
        break
    else:
        print("Invalid Choice!")
