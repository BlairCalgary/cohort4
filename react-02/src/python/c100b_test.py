from c100b import add

def test_add():
    sumAnswer, size = add(1,2)
    assert sumAnswer == 3
    assert size == 'small'
    sumAnswer, size = add(5,6)
    assert sumAnswer == 11
    assert size == 'medium'
    sumAnswer, size = add(10,21)
    assert sumAnswer == 31
    assert size == 'large'
    sumAnswer, size = add(50,51)
    assert sumAnswer == 101
    assert size == 'extra large'