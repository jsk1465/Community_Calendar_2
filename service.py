from flask import Flask,render_template,jsonify,request
from dummy import data

app = Flask(__name__)

API_ROUTE = "/api/v1/resources/"

def getAPIRoute(line):
    return API_ROUTE + line

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/regWeek")
def regWeek():
    return render_template("weekCalendar.html")

@app.route("/monthCalendar")
def monthCalendar():
    return render_template("monthCalendar.html")


@app.route(getAPIRoute("data/all"),methods=['GET'])
def api_test():
    print(request.args)
    if('country' in request.args):
        name = request.args['country']
    else:
        return jsonify(data)
    results = [item for item in data if name==item['country']]
    return jsonify(results)

if (__name__ == "__main__"):
    app.run(debug=True)