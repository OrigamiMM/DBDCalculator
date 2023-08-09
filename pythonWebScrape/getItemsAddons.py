import json
import requests
from bs4 import BeautifulSoup

addonsURL = 'https://deadbydaylight.fandom.com/wiki/Add-ons'
itemsURL = 'https://deadbydaylight.fandom.com/wiki/Items'

data = {
    'items' : {
        'flashlights': [],
        'keys': [],
        'maps': [],
        'med-kits': [],
        'toolboxes': []
    },
    'addons' : {
        'flashlight': [],
        'key': [],
        'map': [],
        'med-kit': [],
        'toolbox': []
    }
}

#getItems
page = requests.get(itemsURL)
soup = BeautifulSoup(page.content, "html.parser")
allContent = soup.find("div", class_="mw-parser-output")
tables = allContent.find_all("table", class_="wikitable")

itemsList = list(data['items'].keys())
for itemIndex, itemTable in enumerate(tables[2:7]):
    item = itemsList[itemIndex]
    for entry in itemTable.find_all("tr"):
        cols = entry.find_all("th")
        cols.append(entry.find('td'))

        imgUrl = cols[0].find('a')["href"]
        name = cols[1].find('a').text
        description = cols[2].decode_contents()
        
        data['items'][item].append({
            'name': name,
            'description': description,
            'imgUrl': imgUrl,
            'stats': []
        })

#getAddons
page = requests.get(addonsURL)
soup = BeautifulSoup(page.content, "html.parser")
allContent = soup.find("div", class_="mw-parser-output")
tables = allContent.find_all("table", class_="wikitable")

addonsList = list(data['addons'].keys())
for addonIndex, addonTable in enumerate(tables[3:8]):
    addon = addonsList[addonIndex]
    for entry in addonTable.find_all("tr")[1:]:
        cols = entry.find_all("th")
        cols.append(entry.find('td'))

        imgUrl = cols[0].find('a')["href"]
        name = cols[1].find('a').text
        description = cols[2].decode_contents()
        
        data['addons'][addon].append({
            'name': name,
            'description': description,
            'imgUrl': imgUrl,
            'stats': []
        })


json_string = json.dumps(data, indent=2)
with open('itemsAndAddons.json', 'w') as outfile:
    outfile.write(json_string)