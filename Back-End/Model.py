from BusinessObjects import *
import psycopg2  #pip install psycopg2

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
            print("Exception in insertExaminer", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def InsertExaminer(self, user):  # inherited from user   return examinerID
        cursor = None
        try:
            if self.connection != None:
                cursor = self.connection.cursor()
                query = f''''''
                cursor.execute(query)
                self.connection.commit()
                return True
            else:
                return False
        except Exception as e:
            print("Exception in insertExaminer", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def checkEmailExist(self , usr_email):      #check again
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
            print("Exception in checkEmailExists", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    def ValidatePassword(email, password): #return examiner id
        return True

    def InsertExaminerQualification(self,qualification):
        print("inserted")

    def InsertExaminerExperience(self, experience): 
        print("inserted")   