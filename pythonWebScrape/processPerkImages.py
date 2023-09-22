import json
import urllib.request
from PIL import Image
import re
  
with open('perks.json') as f:
    data = json.load(f)

perks = data['perks']
pattern = "[^0-9a-zA-Z]+"

for perk in perks:
    #imgName = '{}.png'.format(perk['name'].replace(" ", "").replace(':',""))
    imgName = '{}.png'.format(re.sub(pattern, '', perk['name']))

    path = '../assets/perkImages/{}'.format(imgName)
    urllib.request.urlretrieve(perk['imgUrl'], imgName)
    #img = Image.open(imgName)
    #img.save(path, 'png')
    perk['imgUrl'] = imgName

json_string = json.dumps(data, indent=2)
with open('perks.json', 'w') as outfile:
    outfile.write(json_string)