import json
import urllib.request
from PIL import Image
  
with open('perks.json') as f:
    data = json.load(f)

perks = data['perks']

for perk in perks:
    imgName = '{}.png'.format(perk['name'].replace(" ", "").replace(':',""))
    path = '../assets/perkImages/{}'.format(imgName)
    #urllib.request.urlretrieve(perk['imgUrl'], imgName)
    #img = Image.open(imgName)
    #img.save(path, 'png')
    perk['imgUrl'] = path

json_string = json.dumps(data, indent=2)
with open('perks.json', 'w') as outfile:
    outfile.write(json_string)