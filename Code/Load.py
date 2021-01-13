import pandas
import mysql.connector as sql

def connect_to_database(host, db, user, pw, **kwargs):
    try:
        connection = sql.connect(   host=host,
                                    database=db,
                                    user=user,
                                    password=pw)
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)

    except sql.Error as e:
        print("Error while connecting to MySQL", e)

    return connection

def create_querry_from_json():

def get_table_name_from_json(json_object):
    

def get_columns_from_json():

def create_table():
    connection = connect_to_database(host='localhost', db='fintech', user='root', pw='Mag1c-Keyb0ard')

    mycursor = sql.cursor()
    mycursor.execute("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))")

    connection.close()
    print("MySQL connection is closed")


