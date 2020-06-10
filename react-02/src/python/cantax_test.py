from cantax import taxes

def test_taxes():
    tax = taxes(15000)
    assert tax == 2250
    tax = taxes(50000)
    assert tax == 7580.57
    tax = taxes(100000)
    assert tax == 17991.78
    tax = taxes(225000)
    assert tax == 53152.87

        