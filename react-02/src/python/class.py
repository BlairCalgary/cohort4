# class Book:
#     TYPES = ("hardcover", "paperback")

#     def __init__(self, name, book_type, weight):
#         self.name = name
#         self.book_type = book_type
#         self.weight = weight

#     def __repr__(self):
#         return f"<Book {self.name}, {self.book_type}, weighing {self.weight}g>"

#     @classmethod
#     def hardcover(cls, name, page_weight):
#         return cls(name, Book.TYPES[0], page_weight +100)

#     @classmethod
#     def paperback(cls, name, page_weight):
#         return cls(name, Book.TYPES[1], page_weight +100)



# book = Book.hardcover("Harry Potter", 1500)
# print(book)

# book = Book.hardcover("Python", 101)
# print(book)


class Store:
    def __init__(self, name):
        self.name = name
        self.items = []

    def add_item(self, name, price):
        self.items.append({
            'name': name,
            'price': price
        })

    def stock_price(self):
        total = 0
        for item in self.items:
            total += item['price']
        return total

    @classmethod
    def franchise(cls, store):
        return cls(store + " - franchise")
        # Return another store, with the same name as the argument's name, plus " - franchise"

    @staticmethod
    def store_details(store):
        # Return a string representing the argument
        # It should be in the format 'NAME, total stock price: TOTAL'
        for x in store.items:
            print(x)
        
        # print(f"price_mapping: {price_mapping}")
        return(f"{store.name}, total stock price:")

store = Store("Test")
store.add_item("Keyboard", 160)
store.store_details(store)
