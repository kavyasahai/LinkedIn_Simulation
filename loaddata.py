import csv
import MySQLdb

mydb = MySQLdb.connect(host='ubuntu@34.212.99.86',
    user='root',
    passwd='root',
    db='linkedin')
cursor = mydb.cursor()

csv_data = csv.reader(file('testdata.csv'))
for row in csv_data:
    cursor.execute('INSERT INTO users(username, \
          password, firstname, lastname )' \
          'VALUES("%s", "%s", "%s","%s")', 
          row)
#close the connection to the database.
mydb.commit()
cursor.close()
print "Done"