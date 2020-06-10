from c220 import lines, else_count, char_count
def test_lines():
    assert lines() == 147
    
def test_else():
    assert else_count() == 1
   
def test_char():
    assert char_count() == 3158
   