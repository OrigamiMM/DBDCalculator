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
    # data['perks'].append({
    #     'name': entry.find_all('a')[1].text
    # })
    col = entry.children
    print(type(col))

    break

# print(tbody.prettify())


# json_string = json.dumps(data, indent=2)
# with open('perks.json', 'w') as outfile:
#     outfile.write(json_string)

