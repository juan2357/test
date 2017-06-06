import turtle

def drawSquare(x):
    for i in range (1, 5):
        x.forward(100)
        x.right(90)

def drawArt():
    window = turtle.Screen()
    window.bgcolor("red")

    juan = turtle.Turtle()
    juan.shape("turtle")
    juan.color("yellow")
    juan.speed(.2)
    for i in range(1, 37):
        drawSquare(juan)
        juan.right(10)
    juan.right(90)
    juan.forward(220)

    window.exitonclick()

drawArt()
