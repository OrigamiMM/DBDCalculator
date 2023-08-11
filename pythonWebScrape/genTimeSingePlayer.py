import math
# roadmap: 
# calc base single player
# calc single player with simple perk effects
#

item = {
    'speed': .8,
    'charges': 44,
}

def generateItemFunction(item):
    def itemSpeed(c):
        if c <= item['charges']:
            return item['speed']
        return 0
    return itemSpeed

player1 = {
    'BNP' : False,
    'baseRepair': 1.0,
    'perkModifiers': 0,
    'itemSpeedFunction': generateItemFunction(item)
}

def calculateObjectiveTime(objectiveCharges, speed):
    seconds = 0
    for c in range(1, objectiveCharges+1):
        seconds += 1 / speed(c)
    seconds = (math.floor(seconds * 100)) /100
    return seconds

def calcGenTime(player):
    genCharges = 80
    def speed(c):
        chargesPerSecond = player['baseRepair'] + player['perkModifiers'] + player['itemSpeedFunction'](c)
        return chargesPerSecond
    seconds = calculateObjectiveTime(genCharges, speed)
    return seconds

print(calcGenTime(player1))