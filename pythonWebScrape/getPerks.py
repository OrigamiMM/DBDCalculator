import json
import requests
from bs4 import BeautifulSoup
url = 'https://deadbydaylight.fandom.com/wiki/Survivor_Perks'

page = requests.get(url)

soup = BeautifulSoup(page.content, "html.parser")

data = {
    'perks' : []
}





entries = soup.find_all('tr')
counter = 0
for entry in entries[1:]:
    trs = entry.find_all("th")
    tdText = entry.find("td")
    
    #wired encoding for accented characters
    name = trs[1].find('a')['title']
    if name == 'Déjà Vu': name = 'Deja Vu'
    descriptionHTML = tdText.find("div", class_="formattedPerkDesc") #.encode_contents().decode('utf-8') 
    for span in descriptionHTML.find_all('span', {'class': 'iconLink'}):
        span.decompose()
    for a in descriptionHTML.find_all('a'):
        a.unwrap()
    description = descriptionHTML.encode_contents().decode('utf-8')

    imgUrl = trs[0].find('a')['href']
    sourceSurvivor = 'Any'
    sourceUrl = None
    
    if(trs[2].find_all('a') != []):
        sourceSurvivor = trs[2].find_all('a')[0]['title']
        sourceUrl = trs[2].find_all('a')[1]['href']

    data['perks'].append({
        'name':  name,
        'description':  description,
        'imgUrl': imgUrl,
        'sourceSurvivor': sourceSurvivor,
        'sourceUrl': sourceUrl,
        'modifiers': None
    })

json_string = json.dumps(data, indent=2)
with open('perks.json', 'w') as outfile:
    outfile.write(json_string)

