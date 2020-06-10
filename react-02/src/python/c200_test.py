from c200 import email

def test_email():
    myEmail = email('Blair','Hone')
    assert myEmail=='blair.hone@evolveu.ca'
    myEmail = email('Lauren','Keaney')
    assert myEmail=='lauren.keaney@evolveu.ca'
