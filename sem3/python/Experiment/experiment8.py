import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Radius of big and small circles
R = 5    # Big circle radius
r = 0.5  # Small circle radius

# Ellipse parameters
a = 6    # Semi-major axis
b = 3    # Semi-minor axis

# Create figure and axis
fig, ax = plt.subplots()
ax.set_xlim(-8, 8)
ax.set_ylim(-8, 8)
ax.set_aspect('equal')
ax.set_title("Revolving Small Circle Around Big Circle (Elliptical Path)")
ax.set_xlabel("X-axis")
ax.set_ylabel("Y-axis")

# Draw big circle
theta = np.linspace(0, 2 * np.pi, 100)
x_big = R * np.cos(theta)
y_big = R * np.sin(theta)
ax.plot(x_big, y_big)

# Small circle plot object
small_circle, = ax.plot([], [], 'o')

# Elliptical path center points
t = np.linspace(0, 2 * np.pi, 200)

# Animation update function
def update(frame):
    x = a * np.cos(frame)
    y = b * np.sin(frame)

    # Small circle points
    theta2 = np.linspace(0, 2 * np.pi, 100)
    x_small = x + r * np.cos(theta2)
    y_small = y + r * np.sin(theta2)

    small_circle.set_data(x_small, y_small)
    return small_circle,

# Create animation
ani = FuncAnimation(fig, update, frames=t, interval=50)

# Show animation
plt.show()
