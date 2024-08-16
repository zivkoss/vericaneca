print("Hello, welcome to NetworlChuck Coffe!!!!!!!!!!")

name = input("What is your name?\n")

print("Hello " + name + ", thank you so much for comming in today.\n\n\n")

menu = "Black Coffee, Espresso, Latte, Capuccino"

print(name + ", what would you like from our menu today? Here is what we are serving.\n" + menu)

order = input()

price = 8

quantity = input("How many coffees would you like?\n")

total = price * int(quantity)

print("Thank you. Your total is: $" + str(total)) 

print

print("Sounds good " + name + ", we'll have that " + order + " ready for you in a moment.")