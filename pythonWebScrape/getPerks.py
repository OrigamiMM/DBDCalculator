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
    name = trs[1].find('a')
    description = tdText.find("div", class_="formattedPerkDesc").decode_contents()
    imgUrl = trs[0].find('a')['href']
    source = 'Any'
    sourceUrl = None
    
    if(len(trs[2].find_all('a')) == 2):
        source = trs[2].find_all('a')[0]['href'][6:].replace('_', ' ')
        sourceUrl = trs[2].find_all('a')[1]['href']

    data['perks'].append({
        'name':  name,
        'description':  description,
        'imgUrl': imgUrl,
        'source': source,
        'sourceUrl': sourceUrl
    })

json_string = json.dumps(data, indent=2)
with open('perks.json', 'w') as outfile:
    outfile.write(json_string)

