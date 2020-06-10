# User inputs 2 numbers to be added. Program returns the answer with a classification base on size
first = int(input('Enter first number to add: '))
second = int(input('Enter second number to add: '))
def add(first, second):
    answer = first + second
    if answer > 100:
        size = 'extra large'
    elif answer >= 20:
        size = 'large'
    elif answer >= 10:
        size = 'medium'
    else:
        size = 'small'
    return (answer,size)
    # print(f'{first} + {second} = {answer}.')
    # print(f'{answer} is a {size} number.')

sumAnswer,size = add(first, second)
print(f'{first} + {second} = {sumAnswer}. It is a(n) {size} number.')