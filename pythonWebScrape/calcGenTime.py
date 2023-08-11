import math


def calculateObjectiveTime(objectiveCharges, speed):
    seconds = 0
    for c in range(1, objectiveCharges + 1):
        seconds += 1 / speed(c)
    seconds = (math.floor(seconds * 100)) / 100
    return seconds


# genInstance is information of the current set up of current players and their selection
# genInstance speed is a sum of all the payers speeds, that is abstracted away in a global speed function
# genInstance contains information on # of BNP to adjust genCharges
def calcGenTime(genInstance):
    genCharges = 90 - (10 * genInstance["BNP"])

    def speed(c):
        chargesPerSecond = genInstance["speed"](c)
        return chargesPerSecond

    seconds = calculateObjectiveTime(genCharges, speed)
    return seconds
