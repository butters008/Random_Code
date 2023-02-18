# Author: Keith Butterfield
# This is going to be a simple calc that will take the amount of debt you have
# and will tell you how long it will take you to pay it all off

class User: 
  def __init__(self, name, income):
    self.name = name
    self.income = income

class Debt:
  def __init__(self) -> None:
    pass

p1 = User("Keith", 55000)
print(p1.name, p1.income)


def main():
  print()

main()