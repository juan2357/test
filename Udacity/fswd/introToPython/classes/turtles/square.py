import turtle

def drawSquare():
    window = turtle.Screen()
    window.bgcolor("red")

    juan = turtle.Turtle()
    juan.shape("turtle")
    juan.color("yellow")
    juan.speed(2)

    i = 0
    while (i < 4):
        juan.forward(100)
        juan.right(90)
        i = i+1


def drawCircle():
    window = turtle.Screen()
    window.bgcolor("red")

    mini = turtle.Turtle()
    mini.shape("arrow")
    mini.color("blue")
    mini.circle(100)

def drawTriangle():
    window = turtle.Screen()
    window.bgcolor("red")

    bri = turtle.Turtle()
    bri.shape("triangle")
    bri.color("green")

    i = 0
    while (i < 3):
        bri.forward(100)
        bri.left(120)
        i = i+1

    window.exitonclick()

drawSquare()
drawCircle()
drawTriangle()

