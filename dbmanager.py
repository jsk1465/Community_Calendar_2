import sqlite3

DB_FILE_NAME = 'dummy_data.db'
QUERRY_FOLDER = 'queries/'



def openSql(fileName):
    data = None
    with open(QUERRY_FOLDER + fileName,'r') as f:
        data = ' '.join(f.readlines())
    return data

initData = openSql("init.sql")

class DBManager:
    def __init__(self):
        self.connection = sqlite3.connect(DB_FILE_NAME)
        self.cursor = self.connection.cursor()
    def create(self):
        self.cursor.execute(openSql("init.sql"))
    def destory(self):
        pass
    def addCountry(self,name,population):
        self.cursor.execute("INSERT INTO CountryPopulation(name,population) VALUES(?,?)",(name,population))

    def finish(self):
        self.connection.commit()

def main():
    dbm = DBManager()
    dbm.create()
    dbm.addCountry("America",1)
    dbm.addCountry("India",2)
    dbm.addCountry("America2",11)
    dbm.addCountry("India2",22)
    dbm.addCountry("America3",111)
    dbm.addCountry("India3",222)
    dbm.finish()

if __name__ == "__main__":
    main()