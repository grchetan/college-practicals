
class Student:

 
    def __init__(self, student_name, roll_number, marks):
        self.student_name = student_name
        self.roll_number = roll_number
        self.marks = marks

  
    def display_details(self):
        print("Student Name:", self.student_name)
        print("Roll Number:", self.roll_number)
        print("Marks:", self.marks)



student_object = Student("Rahul Sharma", 101, 88)


student_object.display_details()
