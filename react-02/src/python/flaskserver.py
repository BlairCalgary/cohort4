from excel import breakIntoDict
from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/datadump")
def datadump():
    flaskDict = breakIntoDict()
    return jsonify(flaskDict)

@app.route("/template")
def templated_datadump():
    name = 'blair'
    flaskDict = breakIntoDict()
    return render_template('templated.html', name=name, dict=flaskDict)

app.run(port=5000)
