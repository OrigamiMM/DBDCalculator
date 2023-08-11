import json

modifiers = {}
f = open("modifiers-repair.txt", "r")

lineCounter = 0
name = ''
for line in f.readlines():
    lineStrip = line.strip()
    if lineStrip == '-----':
        lineCounter = 0
        continue
    if lineCounter == 0:
        name = lineStrip
        modifiers[name] = {
            'reciever': None,
            'activation': None,
            'healthActivation': None,
            'stats': []
        }
    elif lineCounter == 1:
        modifiers[name]['reciever'] = lineStrip
    elif lineCounter == 2:
        modifiers[name]['activation'] = lineStrip
    elif lineCounter == 3:
        modifiers[name]['healthActivation'] = lineStrip
    elif lineCounter >= 4:
        effectsLine, percentage = lineStrip.split(';')
        effects = effectsLine.split(',')
        for effect in effects:
            modifiers[name]['stats'].append({
                'action': effect,
                'percent':  float(percentage.strip('%'))/100
            })
    lineCounter+=1

with open('perks.json') as f:
    data = json.load(f)

perks = data['perks']

for perk in perks:
    name = perk["name"]
    if name in modifiers:
        perk["modifiers"] = modifiers[name]

json_string = json.dumps(data, indent=2)
with open('perks.json', 'w') as outfile:
    outfile.write(json_string)