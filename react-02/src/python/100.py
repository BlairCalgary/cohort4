# User inputs 2 numbers to be added. Program returns the answer with a classification base on size
first = int(input('Enter first number to add: '))
second = int(input('Enter second number to add: '))
def add(first, second):
    answer = first + second
    if answer >= 20:
        size = 'large'
    elif answer >= 10:
        size = 'medium'
    else:
        size = 'small'
    print(f'{first} + {second} = {answer}.')
    print(f'{answer} is a {size} number.')

add(first, second)