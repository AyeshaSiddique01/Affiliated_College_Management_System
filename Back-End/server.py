from flask import *
from flask import Flask, request, session, jsonify, redirect
from flask_session import Session
from werkzeug.wrappers import response
from Model import model
from datetime import datetime
# pip install flask_cors
from flask_cors import CORS
from fileinput import filename
import os
from pathlib import Path
import smtplib, ssl , random,string
# pip install flask_mail
from flask_mail import Mail, Message
from BusinessObjects import *
from werkzeug.security import generate_password_hash, check_password_hash
# pip install flask_jwt_extended
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity

app = Flask(__name__)
# CORS(app)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config.from_object("config")
app.secret_key = app.config["SECRET_KEY"]
app.config['JWT_SECRET_KEY'] = 'super-secret'

jwt = JWTManager(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'elite.express243@gmail.com'
app.config['MAIL_PASSWORD'] = 'njsopxyyzkkssixt'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = "elite.express243@gmail.com"
mail = Mail(app) 
verification_code = "".join(random.choices(string.ascii_letters+string.digits,k=10))

@app.route('/SignUpPersonalInfo', methods=["POST"])
def SignUpPersonalInfo():
    usr_name = request.json.get("usr_name")
    usr_cnic = request.json.get("usr_cnic")
    usr_email = request.json.get("usr_email")
    usr_address = request.json.get("usr_address")
    usr_bio = request.json.get("usr_bio")
    usr_gender = request.json.get("usr_gender")
    usr_password = request.json.get("usr_password")
    usr_phone = request.json.get("usr_phone")
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
    if (m.checkEmailExist(usr_email) == False):
        user_id = m.InsertUser(data)  # insertion function return userid
        if user_id != False:
            print("user_id in p: ", user_id)
            session['user_id'] = user_id
            print(session.get("user_id"))
            session["usr_email"] = usr_email
            session["usr_name"] = usr_name
            access_token = create_access_token(identity=usr_email)
            #sending email
            #verification_code = "".join(random.choices(string.ascii_letters+string.digits,k=10))
            #session["verification_code"] = verification_code 
            return jsonify(access_token=access_token), 200
        else:
            return jsonify({"error": "Error in insertion of personal info"}), 401
    else:
        return jsonify({"error": "Email exists"}), 401

@app.route('/SignUpExaminerInfo', methods=["POST", "GET"])
def SignUpExaminerInfo():        
    institution = request.form.get("institution")
    user_id = session.get('user_id')
    # Get File and Save in a directory
    f = request.files.get("resume")
    resume = f"Static\Resumes\{user_id}.pdf"
    if Path(resume).is_file():
        os.remove(resume)
    f.save(resume)
    availability = True
    ranking = 0
    acceptance_count = 0
    rejection_count = 0
    print("user_id in next func: " , user_id)
    data = examiner(user_id, institution, availability, ranking,
                    resume, acceptance_count, rejection_count)
    m = model()
    examiner_id = m.InsertExaminer(data)
    if examiner_id != False:
        session["examiner_id"] = examiner_id
        print("Examiner inserted")
        access_token = create_access_token(identity=user_id)
        return jsonify(access_token=access_token), 200
    return jsonify({"error": "Error in insertion"}), 401

@app.route('/ExaminerQualification', methods=["POST", "GET"])
def ExaminerQualification():
    examiner_id = session.get("examiner_id")
    degree_title = request.form.get("degree_title")
    institution = request.form.get("institution")
    starting_date = request.form.get("starting_date")
    ending_date = request.form.get("ending_date")
    f = request.files.get("transcript")
    transcript = f"Static\\transcripts\{examiner_id}.pdf"
    if Path(transcript).is_file():
        os.remove(transcript)
    f.save(transcript)
    data = qualification(examiner_id, degree_title, transcript,
                         institution, starting_date, ending_date)
    m = model()
    if m.InsertExaminerQualification(data) != False:
        print("Qualification inserted")
        access_token = create_access_token(identity=examiner_id)
        return jsonify(access_token=access_token), 200
    return jsonify({"error": "Error in insertion"}), 401

@app.route('/ExaminerExperience', methods=["POST", "GET"])
def ExaminerExperience():
    examiner_id = session.get("examiner_id")
    job_title = request.form.get("job_title")
    organization = request.form.get("organization")
    reference_email = request.form.get("reference_email")
    starting_date = request.form.get("starting_date")
    ending_date = request.form.get("ending_date")
    ExperianceLetter = request.files.get("ExperianceLetter")
    ExperianceLetters = f"Static\ExperianceLetters\{examiner_id}.pdf"
    if Path(ExperianceLetters).is_file():
        os.remove(ExperianceLetters)
    ExperianceLetter.save(ExperianceLetters)
    data = experience(examiner_id, job_title, ExperianceLetter,
                      organization, reference_email, starting_date, ending_date)
    m = model()
    if m.InsertExaminerExperience(data) != False:
        print("Experience inserted")
        name = session.get("usr_name")
        # Email = session.get("usr_email")
														#email sent should be here
        print("verification_code", verification_code)
        verification_link = request.url_root + 'verify?code=' + verification_code
        message = Message('Verify your email', recipients=[session.get("usr_email")]) 
        message.html = f'<div style="background-color: #221e1e; border-radius: 20px; color: wheat; font-family: Tahoma, Verdana, sans-serif; padding: 10px;"><h1 style="text-align: center;"><strong>ٱلسَّلَامُ عَلَيْكُمْ <br /></strong></h1><h2 style="text-align: center;"><span style="color: brown;"> {session.get("usr_name")} </span></h2><hr/><p>Welcome to Exam Portal, before being able to use your account you need to verify that this is your email address by clicking here: {verification_link}</p><p style="text-align: left;"><span style="color: brown;">If you do not recognize this activity simply ignore this mail.&nbsp;</span></p><p>Kind Regards,<br /><span style="color: brown;"><strong>PUCIT Exam Portal</strong></span></p></div>'
        mail.send(message)
        print("succeed")
        access_token = create_access_token(identity=examiner_id)
        return jsonify(access_token=access_token), 200
    return jsonify({"error": "Error in insertion"}), 401

@app.route('/verify')
def verify():
    code = request.args.get('code')
#    print("code in query: ",code)
    if verification_code == code:
        return redirect("http://localhost:3000")
    else:
        return 'Invalid verification code!'
    
@app.route('/ExaminerLogin', methods=["POST"])
def ExaminerLogin():
    email = request.json.get("email")
    password = request.json.get("password")
    m = model()
    print(email, password)
    # chk email exist
    if (m.checkEmailExist(email)):
        usr_pass = m.getUserPassword(email)
        if check_password_hash(usr_pass, password):
            examiner_id = m.ValidatePassword(email, usr_pass)
            examiner_id = 1
            if (examiner_id > 0):
                session["examiner_id"] = examiner_id
                access_token = create_access_token(identity=email)
                return jsonify(access_token=access_token), 200
            else:
                return jsonify({"error": "Invalid Password"}), 401
        else:
            return jsonify({"error": "Invalid Password"}), 401
    else:
        return jsonify({"error": "Email does not exist"}), 401


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

@app.route('/profile', methods=['GET', 'POST'])
def profile():
    examiner_id = session.get("examiner_id")
    m = model()
    user_ = m.getDataofUser(session.get("user_id"))
    examiner_ = m.getDataofExaminer("examiner", examiner_id)
    data = {
        "usr_name": user_.usr_name,
        "usr_phoneno": user_.usr_phoneno,
        "usr_cnic": user_.usr_cnic,
        "usr_address": user_.usr_address,
        "usr_email": user_.usr_email,
        "usr_profile_pic": user_.usr_profile_pic,
        "usr_bio": user_.usr_bio,
        "usr_gender": user_.usr_gender,
        "usr_active_status": user_.usr_active_status,
        "institution": examiner_.institution,
        "availability": examiner_.availability,
        "ranking": examiner_.ranking,
        "resume": examiner_.resume,
        "acceptance_count": examiner_.acceptance_count,
        "rejection_count": examiner_.rejection_count,
        "qualification": m.getDataofExaminer("qualification", examiner_id),
        "experience": m.getDataofExaminer("experience", examiner_id)
    }
    return jsonify(data)


@app.route('/requestsRecieved', methods=['GET'])
def requestsRecieved():						# not accepted or rejected yet
	examiner_id = session.get("examiner_id")
	m = model()
	# return requests whose status is 1 i.e pending
	# prefer to make two separete functions
	duties =[]
	pracDuties = m.getPracRequests(examiner_id, 1)  # 1 for pending status
	examDuties = m.getTheoryRequests(examiner_id, 1)
	duties = examDuties + pracDuties
	return jsonify(duties)


@app.route('/acceptedRequests', methods=['GET'])
def acceptedRequests():						# accepted but haven't uploaded paper
	examiner_id = session.get("examiner_id")
	m = model()
	# return requested recieved and status is true and 
	# deadline of paper upload is date after today (i think ya nae aye ga if next line waly ko handle kr lean tw)
	# paper table does not has the entity has the same duty id  
	duties =[]
	pracDuties = m.getPracRequests(examiner_id, 2)  # 2 for accepted status
	examDuties = m.getTheoryRequests(examiner_id, 2)
	duties = examDuties + pracDuties
	return jsonify(duties)


@app.route('/duePaperRequests', methods=['GET'])
def duePaperRequests():						# accepted and uploaded paper and paper is not taken yet
    examiner_id = session.get("examiner_id")
    m = model()
    # paper table has the entity has the same duty id
    # and paper_date in exam_duty table is after today
    duties = m.getDuePaperRequests(examiner_id)
    return jsonify(duties)


@app.route('/dueResultRequests', methods=['GET'])
def dueResultRequests():					# paper done upload paper now
    examiner_id = session.get("examiner_id")
    m = model()
    # paper table has the entity has the same duty id has null result column
    # and result_date in exam_duty table is after today
    duties = m.DueResultRequests(examiner_id)
    return jsonify(duties)


@app.route("/RequestRecieved", methods=['GET', 'POST'])
def RequestRecieved():
    d_id = 1 								# ya front end sy get kr lean gy
    session["d_id"] = d_id
    m = model()
    # => using course code get crs code, crs title,
    # => request date, paper upload deadline from exam/duty table
    # => using rd_id get crs_book and crs_outline from both tables
    # => get prac_date, time and institute by using ac_id get name and location of
    # institute from affiliated_colleges table
    dutyDetails = m.getUploadPaperDutyDetails(d_id)
    return jsonify(dutyDetails)


@app.route("/UploadPaper", methods=['GET', 'POST'])
def UploadPaper():
    d_id = 1 								# ya front end sy get kr lean gy
    session["d_id"] = d_id
    m = model()
    # => using course code get crs code, crs title,
    # => request date, paper upload deadline from exam/duty table
    # => using rd_id get crs_book and crs_outline from both tables
    # => get prac_date, time and institute by using ac_id get name and location of
    # institute from affiliated_colleges table
    dutyDetails = m.getUploadPaperDutyDetails(d_id)
    if dutyDetails.prc_time != None:
        session["duty_type"] = "exam_duty"
    else:
        session["duty_type"] = "practical_duty"
    return jsonify(dutyDetails)


@app.route("/UploadResult", methods=['GET', 'POST'])
def UploadResult():
    d_id = 1 								# ya front end sy get kr lean gy
    session["d_id"] = d_id
    m = model()
    # => using course code get crs code, crs title,
    # => request date, result upload deadline from exam/duty table
    # => using rd_id get crs_book and crs_outline from both tables
    # => get prac_date, time and institute by using ac_id get name and location of
    # institute from affiliated_colleges table
    dutyDetails = m.getUploadResultDutyDetails(d_id)
    if dutyDetails.prc_time != None:
        session["duty_type"] = "exam_duty"
    else:
        session["duty_type"] = "practical_duty"
    return jsonify(dutyDetails)


@app.route("/GetPaper", methods=['GET'])
def GetPaper():
    d_id = session.get('d_id')
    paper = request.files["Paper"]
    papers = f"Static\papers\{d_id}.pdf"
    if Path(papers).is_file():
        os.remove(papers)
    paper.save(papers)
    m = model()
    # havn't
    m.uploadPaper(d_id, papers, session.get("duty_type"))
    return jsonify("Uploaded")


@app.route("/GetResult", methods=['GET'])
def GetResult():
    d_id = session.get('d_id')
    result = request.files["result"]
    results = f"Static\results\{d_id}.pdf"
    if Path(results).is_file():
        os.remove(results)
    result.save(results)
    m = model()
    m.uploadResult(d_id, results, session.get("duty_type"))
    return jsonify("Uploaded")


# Running app
if __name__ == '__main__':
    app.run(debug=True)
