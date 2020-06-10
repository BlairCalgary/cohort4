def test_number():
    x = 3
    assert x == 3

def test_string():
    name = 'blair'
    assert name == 'blair'

def test_boolean():
    status = True
    assert status == True

def test_array():
    myArray = [1,3,'five']
    assert myArray[0] == 1
    assert myArray[1] == 3
    assert myArray[2] == 'five'

def test_tuple():
    myTuple = ['ten',5,2]
    assert myTuple[0] == 'ten'
    assert myTuple[1] == 5
    assert myTuple[2] == 2

def test_dict():
    myDict = {
        "name": "Blair",
        "age": 44,
    }
    assert myDict['name'] == 'Blair'
    assert myDict['age'] == 44
    
def test_none():
    hone = None
    assert hone is None

def test_array_mod():
    myArr = [0,1,2]
    new = 4
    myArr.insert(0, new)
    assert myArr == [4,0,1,2]
    myArr.append(3)
    assert myArr == [4,0,1,2,3]
    newArr = [6,5]
    myArr.extend(newArr)
    assert myArr == [4,0,1,2,3,6,5]
    myArr[3] = 7
    assert myArr == [4,0,1,7,3,6,5]
    
def test_for():
    myArr = [0,1,2]
    for x in myArr:
        myArr[x]=myArr[x]*2
    assert myArr == [0,2,4]    
    
def test_while():
    x = 0
    while x < 5:
        x+=1
    assert x == 5

def test_lookup():
    myDict = {
        "name":"T2G",
        "style":"IPA",
        "brewery":"Dandy"
    }
    if 'name' in myDict.keys():
        assert myDict['name']=="T2G"
    else:
        assert False