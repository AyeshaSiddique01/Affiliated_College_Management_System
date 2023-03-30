from flask import *
from flask import Flask, request, session, jsonify
from werkzeug.wrappers import response
from Model import model
from datetime import datetime
# pip install flask_cors
from flask_cors import CORS
from fileinput import filename
import os
from pathlib import Path
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from BusinessObjects import *
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)
app.config.from_object("config")
app.secret_key = app.config["SECRET_KEY"]

@app.route('/SignUpPersonalInfo', methods=["POST"])
def SignUpPersonalInfo() :
	usr_name = request.form['usr_name']
	usr_cnic = request.form["usr_cnic"]
	usr_email = request.form["usr_email"]
	usr_address = request.form["usr_address"]
	usr_bio = request.form["usr_bio"]
	usr_gender = request.form["usr_gender"]
	usr_password = request.form["usr_password"]
	usr_phone = request.form["usr_phone"]
	usr_profile_pic = "Static\Resumes\ProfilePics\empty.png"
	usr_active_status = True

	_hashed_password = generate_password_hash(usr_password)

	data = User()
	data.usr_name = usr_name
	data.usr_password = _hashed_password
	data.usr_cnic = usr_cnic
	data.usr_profile_pic = usr_profile_pic
	data.usr_address = usr_address
	data.usr_email = usr_email
	data.usr_active_status = usr_active_status
	data.usr_bio = usr_bio
	data.usr_gender = usr_gender
	data.usr_phoneno = usr_phone
	m = model()
	if (m.checkEmailExist(usr_email) == False) :
		user_id = m.InsertUser(data)  		#insertion function return userid
		session["user_id"] = user_id
		session["usr_email"] = usr_email
		session["usr_name"] = usr_name		
		return render_template("SignupExaminerInfo.html")
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
	transcript = request.form["transcript"]
	examiner_id = session.get("examiner_id")
	data = qualification(examiner_id, degree_title, transcript, institution, starting_date, ending_date)
	m = model()
	m.InsertExaminerQualification(data)
	print("Qualification inserted")
	return jsonify("Home") 

@app.route('/ExaminerExperience', methods=["POST", "GET"])
def ExaminerExperience() :
	job_title = request.form["job_title"]
	organization = request.form["organization"]
	reference_email = request.form["reference_email"]
	starting_date = request.form["starting_date"]
	ending_date = request.form["ending_date"]
	ExperianceLetter = request.form["ExperianceLetter"]
	examiner_id = session.get("examiner_id")
	data = experience(examiner_id, job_title, ExperianceLetter, organization, reference_email, starting_date, ending_date)
	m = model()
	m.InsertExaminerExperience(data)
	print("Experience inserted")
	name = session.get("usr_name")
	# Email = session.get("usr_email")
	Email = "bitf19a008@pucit.edu.pk"
	text = '''\
                <html>
                <body>
                    <p>Hi <b>{name}</b>,<br><br>
                    Welcome to Affliated college management system...!!<br>
                    Hope you have a great experience :)
                    </p>
                </body>
                </html>
                '''
	text = MIMEText(text.format(name = name),"html")
	mail(Email,text)
	print("succeed")
	return jsonify("home") #ya abhi nae ata

@app.route('/ExaminerLogin', methods=["POST", "GET"])
def ExaminerLogin() :
	email = request.form["email"]
	password = request.form["password"]
	m = model()
	usrID = m.getUserID(email)
	#chk email exist
	if (m.checkEmailExist(email)) :
		usr_pass = m.getUserPassword(email)
		if check_password_hash(usr_pass, password):
			examiner_id = m.ValidatePassword(email, usr_pass)
			if (examiner_id > 0) :									
				session["examiner_id"] = examiner_id
				print("logged in")
				return jsonify("dashboard")
			else :
				return jsonify("Invalid Password")
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

def mail(email,text):
        senderMail = "ayeshasiddique1306@gmail.com"
        message = MIMEMultipart("alternative")
        message.attach(text)
        message = message.as_string()
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(senderMail, "Ayesha@1284356", True)
            server.sendmail(
                senderMail, email, message
            )

@app.route('/profile',methods=['GET','POST'])
def profile():
	examiner_id = session.get("examiner_id")
	m = model()
	user_ = m.getDataofUser( session.get("user_id"))
	examiner_ = m.getDataofExaminer("examiner",examiner_id)
	data = {
		"usr_name" : user_.usr_name,
		"usr_phoneno" : user_.usr_phoneno,
		"usr_cnic" : user_.usr_cnic,
		"usr_address" : user_.usr_address,
		"usr_email" : user_.usr_email,
		"usr_profile_pic" : user_.usr_profile_pic,
		"usr_bio" : user_.usr_bio,
		"usr_gender" : user_.usr_gender,
		"usr_active_status" : user_.usr_active_status,
		"institution" : examiner_.institution,
		"availability" : examiner_.availability,
		"ranking" : examiner_.ranking,
		"resume" : examiner_.resume,
		"acceptance_count" : examiner_.acceptance_count,
		"rejection_count" : examiner_.rejection_count,
		"qualification" : m.getDataofExaminer("qualification",examiner_id),
		"experience" : m.getDataofExaminer("experience",examiner_id)
	}
	return jsonify(data)


# Running app
if __name__ == '__main__':
	app.run(debug=True)