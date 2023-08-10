import json
import requests
from bs4 import BeautifulSoup
import re
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
        stats = None
        speed=None
        charges = None
        description = cols[2].get_text()
        if item == "med-kits":
            pattern = re.compile(r'Altruistic Healing speed of (\S+)')
            match = pattern.search(description)
            if match:
               speed = match.group(1).strip()
               speed = int(speed[1:-1])*.01
        elif item == "toolboxes":
            pattern = re.compile(r'Capacity of (\S+)')
            match = pattern.search(description)
            if match:
                charges=int(match.group(1).strip())
                
            
        stats = {
                    'speed': speed,
                    'charges':charges
                }   
        data['items'][item].append({
            'name': name,
            'description': description,
            'imgUrl': imgUrl,
            'stats': stats
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
       
        stats = None
        description = cols[2].get_text()
        speed=None
        charges = None
        if addon == "med-kit":
            pattern = re.compile(r'Healing speed of Med-Kits by (\S+)')
            match = pattern.search(description)
            if match:
                speed = match.group(1).strip()
                speed = int(speed)*.01
            pattern2 = re.compile(r'Charges of Med-Kits by (\S+)')
            match2 = pattern2.search(description)
            if match2:
                charges = int(match2.group(1).strip())
        elif addon == "toolbox":
            pattern = re.compile(r'Repair speed of the Toolbox by (\S+)')
            match = pattern.search(description)
            if match:
                speed = match.group(1).strip()
                speed = int(speed)*.01
            pattern2 = re.compile(r'Capacity of the Toolbox by (\S+)')
            match2 = pattern2.search(description.strip())
            if match2:
                charges = int(match2.group(1).strip())
        stats = {
                    'speed': speed,
                    'charges':charges
                }   
        data['addons'][addon].append({
            'name': name,
            'description': description,
            'imgUrl': imgUrl,
            'stats': stats
        })


json_string = json.dumps(data, indent=2)
with open('itemsAndAddons.json', 'w') as outfile:
    outfile.write(json_string)
