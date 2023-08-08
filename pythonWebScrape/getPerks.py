import json
url = 'https://deadbydaylight.fandom.com/wiki/Survivor_Perks'

data = {
    'perks' : []
}

perk1 = {'name': "We'll Make it"}
perk2 = {'name': "Ace in the Hole"}

data['perks'].append(perk1)
data['perks'].append(perk2)

json_string = json.dumps(data, indent=2)
print(json_string)
with open('perks.json', 'w') as outfile:
    outfile.write(json_string)