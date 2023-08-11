relevantActions = ["repair", "base-repair", "progression", "repair-progression"]


def filterStats(stats, selectedAction):
    relevantStats = []
    for subStats in stats:
        actionStats = [
            (s["action"], s["percent"])
            for s in subStats
            if s["action"] in selectedAction
        ]
        if actionStats:
            relevantStats.append(actionStats)
    return [
        stat for statList in relevantStats for stat in statList
    ]  # condense into 1d array


def genItemStats(item, addons):
    if item == None:
        emptyItem = {"BNP": False, "speedFunction": lambda c: 0}
        return emptyItem
    hasBNP = "Brand New Part" in [addon["name"] for addon in addons]
    addonStats = [a["stats"] for a in addons]
    speed = item["speed"] + sum([s["speed"] for s in addonStats])
    charges = item["charges"] + sum([s["charges"] for s in addonStats])

    def speedFunc(c):
        if c <= charges:
            return speed
        return 0

    item = {"BNP": hasBNP, "speedFunction": speedFunc}
    return item


def generateGenPlayer(player):
    activeStats = player["activePlayerStats"]
    item = genItemStats(player["item"], player["addons"])
    relevantGenStats = filterStats(activeStats, relevantActions)
    activeRepairBuffs = sum(
        [per for action, per in relevantGenStats if action == "repair"]
    )  # sum all the repair buffs
    hasProve = "base-repair" in [
        s[0] for s in relevantGenStats
    ]  # check if player has Prove

    player = {
        "hasProve": hasProve,
        "BNP": item["BNP"],
        "baseRepair": 1,
        "activeRepairBuffs": activeRepairBuffs,
        "itemFunction": item["speedFunction"],
    }
    return player


def generatePlayerSpeed(player, hasProve, n):
    proveBonus = (0.15 * n) if hasProve else 0
    repairPen = (n * 0.15)
    
    def speed(c):
        positiveModifiers = player['activeRepairBuffs'] + proveBonus + player['itemFunction'](c)
        negativeModifiers = repairPen
        speed = (1 + positiveModifiers) * (1-negativeModifiers)
        return speed

    return speed

# Gen instace takes in an array of processed players, notes if prove and how many BNP are present
# Calculates each player speed using global modifiers like other player penalty and prove buffs
def makeGenInstance(players):
    hasProve = any([p["hasProve"] for p in players])
    bnpCount = sum([player["BNP"] for player in players])
    numOthers = len(players) - 1

    playerSpeeds = [generatePlayerSpeed(p, hasProve, numOthers) for p in players]

    def globalSpeed(c):
        speed = sum([p(c) for p in playerSpeeds])
        return speed

    genInstance = {"BNP": bnpCount, "speed": globalSpeed}
    return genInstance
