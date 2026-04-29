import math

class Point:
    # Initializer to set x and y coordinates
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # Method to display coordinates
    def show(self):
        print(f"Point is at ({self.x}, {self.y})")

    # Method to change coordinates
    def move(self, new_x, new_y):
        self.x = new_x
        self.y = new_y

    # Method to calculate distance between two points
    def dist(self, other):
        return math.sqrt((other.x - self.x)**2 + (other.y - self.y)**2)


# ---------- Testing the Class ----------

p1 = Point(3, 4)
p2 = Point(7, 10)

p1.show()
p2.show()

p1.move(10, 20)
p1.show()

print("Distance between points:", p1.dist(p2))
