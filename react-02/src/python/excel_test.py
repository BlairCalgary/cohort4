from excel import breakIntoDict, getCustID, getCustName, getInvLines, getProdPrice, getDate
import datetime

testDict = breakIntoDict()

def test_getCustID():
    assert(getCustID(100))==1
    assert(getCustID(101))==2
    assert(getCustID(104))==1
    assert(getCustID(105))==2

def test_getCustName():
    assert(getCustName(1))=='Blair'
    assert(getCustName(2))=='Greg'
    assert(getCustName(3))=='Larry'
    assert(getCustName(4))=='Roman'

def test_getInvLines():
    assert(getInvLines(100))==[(2,1),(3,1),(4,1)]
    assert(getInvLines(103))==[(2,4)]
    assert(getInvLines(105))==[(6,3),(7,2)]

def test_getProdPrice():
    dictOne = getProdPrice([(1,2)])
    assert(len(dictOne))==1
    assert(dictOne[1]['qty'])==2
    assert(dictOne[1]['product'])=='Banded Peak - Plainsbreaker'
    assert(dictOne[1]['price'])==17.99
    dictOne = getProdPrice([(2,1),(4,1),(6,1)])
    assert(len(dictOne))==3
    assert(dictOne[1]['qty'])==1
    assert(dictOne[2]['product'])=='Cabin - Sunshine Rain'
    assert(dictOne[3]['price'])==20.5

def test_getDate():
    date = getDate(100).date() 
    targetdate = datetime.date(2020,6,9)
    assert(date)==targetdate
    