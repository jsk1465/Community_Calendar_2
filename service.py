from flask import Flask,render_template,jsonify,request
from dummy import data
import sqlite3
app = Flask(__name__)

API_ROUTE = "/api/v1/resources/"



def getAPIRoute(line):
    return API_ROUTE + line

@app.route("/")
def home():
    return render_template("home.html")

@app.route(getAPIRoute("data/all"),methods=['GET'])
def api_test():
    print(request.args)
    if('country' in request.args):
        fName = request.args['country']
    else:
        return jsonify(data)
    results = [item for item in data if fName==item['country']]
    return jsonify(results)

if (__name__ == "__main__"):
    app.run(debug=True)