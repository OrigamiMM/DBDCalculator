import json
import urllib.request
from PIL import Image
import re
  
with open('itemsAndAddons.json') as f:
    data = json.load(f)

pattern = "[^0-9a-zA-Z]+"
items = data['items']


for itemType in items:
    for item in items[itemType]:
        #imgName = '{}.png'.format(item['name'].replace(" ", "").replace(':',""))
        imgName = '{}.png'.format(re.sub(pattern, '',item['name']))
        savedPath = imgName
        # path = '../assets/itemImages/{}'.format(imgName)
        #urllib.request.urlretrieve(item['imgUrl'], imgName)
        # img = Image.open(imgName)
        # img.save(path, 'png')
        item['imgUrl'] = savedPath

addons = data['addons']
for addonType in addons:
    for addon in addons[addonType]:
        #imgName = '{}.png'.format(addon['name'].replace(" ", "").replace(':',""))
        imgName = '{}.png'.format(re.sub(pattern, '',addon['name']))
        savedPath = imgName
        # path = '../assets/addonImages/{}'.format(imgName)
        urllib.request.urlretrieve(addon['imgUrl'], imgName)
        # img = Image.open(imgName)
        # img.save(path, 'png')
        addon['imgUrl'] = savedPath

json_string = json.dumps(data, indent=2)
with open('itemsAndAddons.json', 'w') as outfile:
    outfile.write(json_string)