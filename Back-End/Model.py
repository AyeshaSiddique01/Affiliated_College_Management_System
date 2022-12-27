from BusinessObjects import *
import psycopg2  #pip install psycopg2

class model:
    def __init__(self):
        try:
            self.connection = psycopg2.connect(
                database="ACMS",
                host="localhost",
                user="postgres",
                password="Ayesha@1306",
                port="5432")
        except Exception as e:
            print(str(e))
    
    def __del__(self):
        if self.connection != None:
            self.connection.close()

    def insertUser(self, user):  # agar admin
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
            print("Exception in insertAdmin", str(e))
            return False
        finally:
            if cursor != None:
                cursor.close()

    