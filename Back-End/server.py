from flask import *
from werkzeug.wrappers import response
from Model import model
from datetime import datetime
# pip install flask_cors
from flask_cors import CORS
from fileinput import filename
import os
from pathlib import Path
from BusinessObjects import *

app = Flask(__name__)
CORS(app)
app.config.from_object("config")
app.secret_key = app.config["SECRET_KEY"]

@app.route('/SignUpPersonalInfo', methods=["POST", "GET"])
def SignUpPersonalInfo() :
	usr_name = request.form['usr_name']
	usr_cnic = request.form["usr_cnic"]
	usr_email = request.form["usr_email"]
	usr_address = request.form["usr_address"]
	usr_bio = request.form["usr_bio"]
	usr_gender = request.form["usr_gender"]
	usr_password = request.form["usr_password"]
	usr_profile_pic = "Static\Resumes\ProfilePics\empty.png"
	usr_active_status = True
	
	data = User()
	data.usr_name = usr_name
	data.usr_password = usr_password
	data.usr_cnic = usr_cnic
	data.usr_profile_pic = usr_profile_pic
	data.usr_address = usr_address
	data.usr_email = usr_email
	data.usr_active_status = usr_active_status
	data.usr_bio = usr_bio
	data.usr_gender = usr_gender
	m = model()
	if (m.checkEmailExist(usr_email) == False) :
		user_id = m.InsertUser(data)  		#insertion function return userid
		session["user_id"] = user_id
		return jsonify("SignUpExaminerInfo")
	else :
		return jsonify("EmailExist")

@app.route('/SignUpExaminerInfo', methods=["POST", "GET"])
def SignUpExaminerInfo() :
	user_id = session.get("user_id")
	institution = request.form["institution"]
	# Get File and Save in a directory 
	f = request.files["resume"]    
	resume = f"Static\Resumes\{user_id}.pdf"
	if Path(resume).is_file() :
		os.remove(resume)
	f.save(resume) 
	availability = True
	ranking = 0
	acceptance_count = 0
	rejection_count = 0	
	data = examiner(user_id, institution, availability, ranking, resume, acceptance_count, rejection_count)
	m = model()
	examiner_id = m.InsertExaminer(data)
	session["examiner_id"] = examiner_id
	print("Examiner inserted")
	return jsonify("ExaminerQualification") #ya abhi nae ata

@app.route('/ExaminerQualification', methods=["POST", "GET"])
def ExaminerQualification() :
	degree_title = request.form["degree_title"]
	institution = request.form["institution"]
	starting_date = request.form["starting_date"]
	ending_date = request.form["ending_date"]
	examiner_id = session.get("examiner_id")
	data = qualification(examiner_id, degree_title, institution, starting_date, ending_date)
	m = model()
	m.InsertExaminerQualification(data)
	print("Qualification inserted")
	return jsonify("Home") #ya abhi nae ata

@app.route('/ExaminerExperience', methods=["POST", "GET"])
def ExaminerExperience() :
	job_title = request.form["job_title"]
	organization = request.form["organization"]
	reference_email = request.form["reference_email"]
	starting_date = request.form["starting_date"]
	ending_date = request.form["ending_date"]
	examiner_id = session.get("examiner_id")
	data = experience(examiner_id, job_title, organization, reference_email, starting_date, ending_date)
	m = model()
	m.InsertExaminerExperience(data)
	print("Experience inserted")
	return jsonify("home") #ya abhi nae ata

@app.route('/ExaminerLogin', methods=["POST", "GET"])
def ExaminerLogin() :
	email = request.form["email"]
	password = request.form["password"]
	m = model()
	#chk email exist
	if (m.checkEmailExist(email)) :
		examiner_id = m.ValidatePassword(email, password)
		if (examiner_id > 0) :									# 0 sy shuru hota ya 1
			session["examiner_id"] = examiner_id
			print("logged in")
			return jsonify("dashboard")
		else :
			return jsonify("Invalid Password")
	else :
		return jsonify("Email does not exist")
@app.route('/userdata', methods=['GET'])
def userdata():
    userdata = {
        'name': 'John',
        'age': '43',
        'status': 'Active',
        'password': 'ABC123',
        'email': 'john@example.com'
    }
    return jsonify(userdata)
# Running app
if __name__ == '__main__':
	app.run(debug=True)