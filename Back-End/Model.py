from BusinessObjects import *
from psycopg2 import psycopg2  #pip install psycopg2

class model:
    def __init__(self):
        try:
            self.connection = psycopg2.connect(
                database="ACMS",            #write your Dbname
                host="localhost",
                user="postgres",
                password="aiman12345",      #write your dbPassword
                port="5432")
        except Exception as e:
            print(str(e))
    
    def __del__(self):
        if self.connection != None:
            self.connection.close()

    def InsertUser(self, user):
        cursor = None       #not taking profile pic in input
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                query = f'''insert into public.user(usr_name,usr_password,usr_cnic,usr_address,usr_email,usr_active_status,usr_bio,usr_gender) 
	                        values ('{user.usr_name}', '{user.usr_password}', '{user.usr_cnic}', '{user.usr_address}', '{user.usr_email}', '{user.usr_active_status}', '{user.usr_bio}', '{user.usr_gender}');
                            '''
                cursor.execute(query)
                self.connection.commit()
                id = model.getUserID(user.usr_email)  
                return id
            else:
                return 0
        except Exception as e:
            print("Exception in insertExaminer", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def getUserID(self, email): 
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                cursor.execute(f'''select usr_id from public.user where usr_email = '{email}';''')
                id = cursor.fetchone()
                return id[0]
            else:
                return 0
        except Exception as e:
            print("Exception in getUserID", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def getExaminerID(self, userid): 
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                cursor.execute(f'''select examiner_id from public.examiner where "user_id " = {userid};''')
                id = cursor.fetchone()
                return id[0]
            else:
                return 0
        except Exception as e:
            print("Exception in getExaminerID", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def InsertExaminer(self, examiner):  # return examinerID
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                query = f'''insert into public.examiner("user_id ","institution ","availability","ranking","resume","acceptance_count","rejection_count") 
                            values('{examiner.user_id}', '{examiner.institution}', '{examiner.availability}', '{examiner.ranking}', '{examiner.resume}', '{examiner.acceptance_count}', '{examiner.rejection_count}');
                            '''
                cursor.execute(query)
                self.connection.commit()
                id = model.getExaminerID(examiner.user_id)  
                return id
            else:
                return 0
        except Exception as e:
            print("Exception in insertExaminer", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def checkEmailExist(self , usr_email):
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                cursor.execute(f"select usr_email from public.user;")
                emailList = cursor.fetchall()
                for e in emailList:
                    if usr_email == e[0]: 
                        return True
                return False
            else:
                return False
        except Exception as e:
            print("Exception in checkEmailExist", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def ValidatePassword(self, email, password): #return examiner id
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                cursor.execute(f'''select usr_password from public.user where "usr_email" = '{email}';''')
                pwd = cursor.fetchone()
                if(pwd == password):
                    uID = model.getUserID(email)
                    eID = model.getExaminerID(uID)
                    return eID[0]
                return 0
            else:
                return 0
        except Exception as e:
            print("Exception in ValidatePassword", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

        return True

    def InsertExaminerQualification(self,qualification):
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                query = f'''insert into public.qualification("examiner_id", "degree_title", "institution", "starting_date", "ending_date") 
                values('{qualification.examiner_id}', '{qualification.degree_title}', '{qualification.institution}', '{qualification.starting_date}', '{qualification.ending_date}');
                '''
                cursor.execute(query)
                self.connection.commit()
        except Exception as e:
            print("Exception in insertExaminerQualification", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def InsertExaminerExperience(self, experience): 
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                query = f'''insert into public.experience("examiner_id", "job_title", "organization", "reference_email", "starting_date", "ending_date") 
                        values('{experience.examiner_id}', '{experience.job_title}', '{experience.organization}','{experience.reference_email}' ,'{experience.starting_date}', '{experience.ending_date}');
                        '''
                cursor.execute(query)
                self.connection.commit()
        except Exception as e:
            print("Exception in insertExaminerExperience", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()
