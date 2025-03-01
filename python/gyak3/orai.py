"""
lista = [1, 2, 3]
lista = lista.append(10)
print(lista)
"""
#print(8^2)
#print(8^3)
#print(7|2)
#print(7|8)
#print(bin(7))
#print(0b011)
"""
x = 4
y = 1
a = x & y
b = x | y
c = ~x
d = x ^ 5
e = x >> 2
f = x << 2
print(a, b, c, d, e, f)
"""
"""
a = [1,3,43,25,1,34,4]
b = a[:]
b.append(4)
print(b)
print(a)

j = [i**2 for i in range(10) if i%3 == 0]
k = [i**2 if i%3 == 0 else 2*i for i in range(10)]
print(j)
print(k)
"""
"""
számok = [i for i in range(10)]
print(számok)
páros_számok = [i*2 for i in range(10)]
print(páros_számok)
ps = [i for i in range(10) if i % 2 == 0]
print(ps)
páratlan_számok = [i*2+1 for i in range(10)]
print(páratlan_számok)
ptl = [i for i in range(10) if i % 2 == 1]
print(ptl)
négyzet = [i**2 for i in range(10)]
print(négyzet)
ps_négyzet = [i**2 for i in range(10) if i % 2 == 0]
print(ps_négyzet)
ptl_négyzet = [i**2 for i in range(10) if i % 2 == 1]
print(ptl_négyzet)
köbszámok = [i**3 for i in range (11)]
print(köbszámok)
fibo = [1, 1]
[fibo.append(fibo[-1] + fibo[-2]) for i in range(8)]
print(fibo)
törtek = [i/10 for i in range(11)]
print(törtek)
tört = [60/i for i in range(1,7)]
print(tört)
tört_eg = [60//i for i in range(1,7)]
print(tört_eg)
"""
"""
a = [0, 1, 2, 3, 4, 5]
a.insert(0, 6)
del a[1]
a.append(0)
print(a)
"""
"""
a = [1, 2, [3, 4], [5]]
print(a[2])
print(a[2][0])
print(len(a))
"""
"""
b = ['a','b','c','d','e','f']
print(b[1:4])
print(b[4:])
print(b[:4])
print(b[3:-2])
print(b[-3:4])
print(b[::2])
print(b[1::2])
print(b[::-1])
"""
"""
for i in range(945,960):
    print(chr(i))
"""
"""
try:
    érték = int(input("Kérek egy számot: "))
    print(1 / érték)
except ValueError:
    print("Helytelen bemenet.")
except ZeroDivisionError:
    print("Nagyon helytelen bemenet.")
except:
    print("Mi történt?")
"""
"""
ABC = "abcdefghijklmnopqrstuvwxyz"
print("d" in ABC)
print("A" in ABC)
print("0" in ABC)
print("mno" in ABC)
print("x" in ABC and "y" in ABC)
print("x" in ABC or "Y" in ABC)
print(" " not in ABC) 
"""
"""
print("kép kép kép".rfind("ké"))
print("kép kép kép".rfind("ké", 9))
print("kép kép kép".rfind("ké", 3, 10))
"""
"""
greek_1 = ['omega', 'alpha', 'pi', 'gamma']
greek_2 = sorted(greek_1)
print(greek_1)
print(greek_2)
greek_1.sort()
print(greek_1)
print(greek_2.sort(reverse = True))
print(greek_2)
"""
"""
Tuple = (1, 2, 3)
print(Tuple[2])
tup = 1, 2, 3
print(tup)
a, b, c = tup
print(a * b * c)
"""
"""
b = {2,4,6}
b.add(8)
print(b)
b.update([10,12,12])
print(b)
#hibaüzenet removera
b.remove(6)
print(b)
#discardra nem!
b.discard(8)
print(b)
b.clear()
print(b) 
"""
