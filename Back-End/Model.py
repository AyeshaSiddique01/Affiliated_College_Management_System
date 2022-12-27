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
