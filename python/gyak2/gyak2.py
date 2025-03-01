"""
print("I'm", "learning", "Python", sep = "---", end = "****")
print()
print("I'm", "learning", "Python", sep = "\n")

print('22'+'333')
print(4*('22'+'333'))
print('\"I\'m\"')
print("+"+ 10*"-"+"+")
print(("|"+ " "*10 + "|\n")*5,end="")
print("+" + 10 * "-"+"+")
print()
a, b, c = 12, 35, 14.6
print ("Széles: %d, hosszú: %d, magas: %f" % (a, b, c))

print("Széles: {}, hosszú: {}, magas: {}".format(a, b, c) )

print("A téglatest térfogata =", a*b*c, "egység")
print("cím: {}/{}, idő: {}, tartam: {:.2f}".format("Delta", 12,
'16:45', 46.278) )

márka = "Opel"
típus = "Astra"
print(f"Az {típus} egy {márka} gyártmány.")

print(0.000000000002)
#8-as
print(0o123)
#16-os
print(0x123)

#balról jobbra
print(9%5%3)
#jobbról balra
print(2**3**2)


print(4.5//2)

print(12%4.2)

a = 6
b = 3
a /= 2 * b
print(a)

"""
"""
nem jó sajnos, fáradt vagyok otthon megcsinálom
ora = int(input("Add meg az órát"))
perc = int(input("Add meg a percet"))
mp = int(input("Add meg a mp-et"))

idotartam = int(input("Add meg az idotartamot"))
"""
"""
ev = int(input("Add meg év"))
if(ev%4 == 0 and (ev%100!= 0 or ev % 400 == 0)):
    print("szök")
else:
    print("nem")
"""
"""
szam = int(input("szam:"))
def collatz(n):
    print(n)
    if(n == 1):
        return
    if(n % 2 == 0):
        return collatz(n/2)
    else:
        return collatz(n*3 +1)
    
print(collatz(szam))
"""
"""
szo = input("Szó:")
szo = szo.upper()
ujszo = ""
#csinálhatok egy listát is és utána ráhívom az in-t
for a in szo:
    if a != "A" and a != "Á" and a != "E" and a != "É" and a != "I" and a != "Í" and a != "Ö" and a != "Ő"  and a != "U" and a != "Ú"  and a != "Ü" and a != "Ű":
        ujszo+=a
print(ujszo)
"""

#tükrözés
szo = input("Szó:")
tukor = ""
for i in range(-1, -len(szo)-1,-1):
    tukor += szo[i]
print(szo+tukor)