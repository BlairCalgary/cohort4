class Store:
    def __init__(self, name):
        self.name = name
        self.items = []
        # You'll need 'name' as an argument to this method.
        # Then, initialise 'self.name' to be the argument, and 'self.items' to be an empty list.
    
    def add_item(self, name, price):
        item = {"name":name,"price":price}
        self.items.append(item)
        # Create a dictionary with keys name and price, and append that to self.items.

    def stock_price(self):
        return sum([item['price'] for item in self.items])
        # Add together all item prices in self.items and return the total.

class ClassTest:
    def instance_method(self):
            print(f"Called instance_method of {self}")

    @classmethod
    def class_method(cls):
        print(f"Called class_method of {cls}")

    @staticmethod
    def static_method():
        print("Called static_method")

test = ClassTest()
test.instance_method()
ClassTest.instance_method(test)

ClassTest.class_method()

ClassTest.static_method()