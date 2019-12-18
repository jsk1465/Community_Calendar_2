def createCountry(nation,data):
    return {
        'country':str(nation),
        'info':str(data)
    }
data = [
    createCountry('American','1'),
    createCountry('Bangladesh','2'),
    createCountry('Cezch','3'),
    createCountry('Dutch','4')
]