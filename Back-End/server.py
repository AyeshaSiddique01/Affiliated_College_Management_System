from flask import *
from werkzeug.wrappers import response
from Model import model
from datetime import datetime
# pip install flask_cors
from flask_cors import CORS
from BusinessObjects import *

app = Flask(__name__)
CORS(app)

@app.route('/SignUp', methods=["POST", "GET"])
def SignUp() :
	# FName = request.form["FName"]
	# LName = request.form["LName"]
	# PhoneNo = request.form["PhoneNo"]
	# EmailID = request.form["email"]
	# Gender = request.form["Gender"]
	# Password = request.form["pwd"]
	# DOB = request.form["DOB"]
	# print(FName)
	# # DOB = request.form["DOB"]
	# data = User(FName, LName, PhoneNo, EmailID, Gender, DOB, Password)
	# m = model()
	# m.insertUser(data)
	print("inserted")
	return render_template("/")
# Running app
if __name__ == '__main__':
	app.run(debug=True)