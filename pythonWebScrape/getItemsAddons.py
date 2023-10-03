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
        descriptionText = cols[2].text
        descriptionHTML = cols[2]
        for span in descriptionHTML.find_all('span', {'class': 'iconLink'}):
            span.decompose()
        for a in descriptionHTML.find_all('a'):
            a.unwrap()
        description = descriptionHTML.encode_contents().decode('utf-8')

        speedPattern = re.compile(r'speed of (\S+)')
        capacityPattern = re.compile(r'Capacity of (\S+)')

        if item == "med-kits" or item == "toolboxes":
            speedMatch = speedPattern.search(descriptionText)
            capMatch = capacityPattern.search(descriptionText)
            if speedMatch:
               speed = speedMatch.group(1).strip()
               #speed = int(speed[1:])*.01
               speed = float(speed[1:])/100
            else:
                #Commodious Toolbox is the only item that uses phrase 'speed by'
                #since only 1 item, think this single else is fine
                speed = 0.5
            if capMatch:
                charges=int(capMatch.group(1).strip()) 
            
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
        descriptionText = cols[2].text
        descriptionHTML = cols[2]
        for span in descriptionHTML.find_all('span', {'class': 'iconLink'}):
            span.decompose()
        for a in descriptionHTML.find_all('a'):
            a.unwrap()
        description = descriptionHTML.encode_contents().decode('utf-8')
        speed=None
        charges = None
        if addon == "med-kit":
            pattern = re.compile(r'Healing speed of Med-Kits by (\S+)')
            match = pattern.search(descriptionText)
            if match:
                speed = match.group(1).strip()
                speed = int(speed)*.01
            pattern2 = re.compile(r'Charges of Med-Kits by (\S+)')
            match2 = pattern2.search(descriptionText)
            if match2:
                charges = int(match2.group(1).strip())
        elif addon == "toolbox":
            pattern = re.compile(r'Repair speed of the Toolbox by (\S+)')
            match = pattern.search(descriptionText)
            if match:
                speed = match.group(1).strip()
                speed = int(speed)*.01
            pattern2 = re.compile(r'Capacity of the Toolbox by (\S+)')
            match2 = pattern2.search(descriptionText.strip())
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
