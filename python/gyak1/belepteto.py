with open("/Users/nagybalazs/Desktop/egyetem/4felev/python/gyak1/bedat.txt", "r") as f:
    adatok = f.read().splitlines()
adat = []
for elem in adatok:
    adat.append(elem.split())


print(adat[0][1])
print(adat[-1][1])