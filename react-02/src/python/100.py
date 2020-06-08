# User inputs 2 numbers to be added. Program returns the answer with a classification base on size
first = int(input('Enter first number to add: '))
second = int(input('Enter second number to add: '))
answer = first + second
print(f'{first} + {second} = {answer}.')
if answer >= 20:
    size = 'large'
elif answer >= 10:
    size = 'medium'
else:
    size = 'small'
print(f'{answer} is a {size} number.')