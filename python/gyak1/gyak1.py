#1.feladat
l = []
for i in range(1,121):
    l.append(i)
print(l)

#2.feladat
summ = 0
for i in l:
    summ += i
print(summ)
print(sum(l))

#3.feladat
h = []
for i in l:
    if i%3 == 0:
        h.append(i)
print(h)
print(len(h))

#4.feladat
szor = 1
for i in l:
    szor *= i
print(szor)
print(len(str(szor)))

#5.feladat
def factor(n):
    if n <= 1:
        return 1
    return n*factor(n-1)

for i in range(1,71):
    print(i, "faktora: ",factor(i))
print(len(str(factor(70))))

#6.feladat
def is_prime(n):
    if n == 1:
        return False
    for i in range(2,n):
        if n % i == 0:
            return False
    return True

summa = 0
for i in range(1,121):
    if is_prime(i):
        summa += 1
        print(i)
print(summa)

