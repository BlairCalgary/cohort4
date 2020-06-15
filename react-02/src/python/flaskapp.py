from flask import Flask, jsonify, request, render_template


app = Flask(__name__)
stores = [
    {
        'name': 'My Wonderful Store',
        'items': [
            {
                'name': 'My Item',
                'price': 15.99
            }
        ]
    }
]

# @app.route('/')
# def home():
#     return "Hello, world!"

# POST - used to receive data
# GET - used to send data back only

@app.route('/')
def home():
    return render_template('index.html')

# POST /store data: {name:}
@app.route('/store', methods=['POST'])
def create_store():
    request_data = request.get_json()
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)

# GET /store/<string:name>
@app.route('/store/<string:name>') #'http://127.0.0.1:500/store/some_name'
def get_store(name):
    # iterate over store
    # if store name matches return that one,
    # if none, return error
    for store in stores:
        if store['name'] == name:
            return jsonify(store)
    return jsonify({'message': name + ' not found'})

# GET /store
@app.route('/store') #'http://127.0.0.1:500/store/some_name'
def get_stores():
    return jsonify({'stores': stores})
    
# GET /store/<string:name>/item {name:, price:}
@app.route('/store/<string:name>/item')
def create_item_in_store(name):
    
    for store in stores:
        if store['name'] == name:
            return jsonify({'items': store['items']})
    return jsonify({'message': name + ' not found'})

# POST /store/<string:name>/item
@app.route('/store/<string:name>/item', methods=['POST']) #'http://127.0.0.1:500/store/some_name'
def get_item_in_store(name):
    request_data = request.get_json()
    for store in stores:
        if store['name'] == name:
            new_item = {
                'name': request_data['name'],
                'price': request_data['price']
            }
            store['items'].append(new_item)
            return jsonify(new_item)
    return jsonify({'message': name + ' not found'})


app.run(port=5000)