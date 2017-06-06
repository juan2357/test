import webbrowser
import time

count=0
print("This program started on "+time.ctime())
while (count < 3):
    time.sleep(5)
    webbrowser.open("https://www.youtube.com/watch?v=VDvr08sCPOc")
    count = count + 1
