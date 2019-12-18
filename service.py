from flask import Flask,render_template,jsonify,request

app = Flask(__name__)

API_ROUTE = "/api/v1/resources/"

data = [{
        'fName':'Jon',
        'lName':"Kirk",
    },{
        'fName':'Yemi',
        'lName':'Orekoya'
    }]

def getAPIRoute(line):
    return API_ROUTE + line

@app.route("/")
def home():
    return render_template("home.html")

@app.route(getAPIRoute("data/all"),methods=['GET'])
def api_test():
    print(request.args)
    if('fName' in request.args):
        fName = request.args['fName']
    else:
        return jsonify(data)
    results = [item for item in data if fName==item['fName']]
    return jsonify(results)

if (__name__ == "__main__"):
    app.run(debug=True)