import json
import genInstance as genInstance
import calcGenTime

with open("perks.json", "r") as f:
    perkData = json.load(f)
    perks = perkData["perks"]

with open("itemsAndAddons.json", "r") as f:
    itemAddonData = json.load(f)
    itemData = itemAddonData["items"]
    medkits = itemData["med-kits"]
    toolboxes = itemData["toolboxes"]
    addons = itemAddonData["addons"]
    toolAddons = addons["toolbox"]
    medAddons = addons["med-kit"]

# sample, active resilience and Deja Vu
# In this case, we confirmed these perks are active and applied to player
# So we only use the stats in the modifiers.

player1 = {
    "activePlayerStats": [
        perks[95]["modifiers"]["stats"],  # Resilence: 9% repair buff
        perks[43]["modifiers"]["stats"],  # Deja Vu: 6% repair buff
        perks[8]["modifiers"]["stats"],  # Balanced 150% run buff
        perks[86]["modifiers"]["stats"],  # prove thyself
    ],
    "item": None,
    "addons": [],
}
player2 = {
    "activePlayerStats": [
        # perks[95]["modifiers"]["stats"],  # Resilence: 9% repair buff
        perks[8]["modifiers"]["stats"],  # Balanced 150% run buff
    ],
    "item": toolboxes[3]["stats"],  # commodius Toolbox: 50% speed buff, 32 capacity
    "addons": [
        toolAddons[3],
        toolAddons[5],
    ],  # spool: 0 speed, 12 capacity, socket: speed 0.3, 0 capacity
}

playerNothing = {
    "activePlayerStats": [],
    "item": None,
    "addons": [],
}

playerProve = {
    "activePlayerStats": [perks[86]["modifiers"]["stats"]],  # prove
    "item": None,
    "addons": [],
}

playerEngineers = {
    "activePlayerStats": [],
    "item": toolboxes[4]["stats"],
    "addons": [],
}

playerEngineersCharge = {
    "activePlayerStats": [],
    "item": toolboxes[3]["stats"],
    "addons": [
        toolAddons[0],
        toolAddons[3],
    ],
}


processedPlayer = genInstance.generateGenPlayer(player2)
proEmptyPlayer = genInstance.generateGenPlayer(playerNothing)
proProvePlayer = genInstance.generateGenPlayer(playerProve)
proEngineer = genInstance.generateGenPlayer(playerEngineers)
proEngineerCharge = genInstance.generateGenPlayer(playerEngineersCharge)

genI = genInstance.makeGenInstance([processedPlayer])
testGenInst = genInstance.makeGenInstance(
    [proEngineerCharge, proEngineerCharge, proEngineerCharge, proEngineerCharge]
)

print(testGenInst["speed"](2))
print(calcGenTime.calcGenTime(testGenInst))
