import urllib

def readText():
    quotes = open("/Users/juanperez/Desktop/fswd/classes/profanityEditor/movieQuotes.txt")
    fileContents = quotes.read()
    print(fileContents)
    quotes.close()
    profantiyCheck(fileContents)

def profantiyCheck(textToCheck):
    connection = urllib.urlopen("http://www.wdylike.appspot.com/?q="+textToCheck)
    output = connection.read()
    print(output)
    connection.close()
    if "true" in output:
        print("Profantiy Alert!!")
    elif "false" in output:
        print("This document does not contain profanity.")
    else:
        print("This document could not be properly scanned.")

readText()
