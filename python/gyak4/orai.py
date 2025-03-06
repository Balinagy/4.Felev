"""
#6. feladat
elsohalmaz = {1,23,5,5,21,5,234,5,1,3}
masodikhalmaz = {5,124,5,2,46,1,3,6,1}
#csak jelzés a típusannotáció, nem köt!
def Jaccard(elso : set, masodik : set) -> float:
    Halmazok hasonlóságát mérő index
    return 0. if len(elso|masodik)==0 else (len(elso&masodik)/len(elso|masodik))
print(Jaccard(elsohalmaz,masodikhalmaz))

#7. feladat
mx = [[1,2,3],[4,5,6],[7,8,9]]
print([x for row in mx for x in row])

#5. feladat
#a
from math import radians
def radianMaker(degree):
    return radians(degree)
print(radianMaker(180))

#b
def radianTwo(degree):
    fixedDegree = 20
    return(radians((degree+fixedDegree)%360))
print(radianTwo(180))
"""

#multiply
print((lambda a,b: a*b)(2,5))
#is_even
print((lambda a,b: a==b)(2,5))
#reverse_string
print((lambda x: x[::-1])('asd'))
#square
print((lambda a: a**a)(2))
#filter_even
print(list(filter(lambda x: x % 2 == 0, [1,5,2,3,31,56])))
#to_uppercase
print(list(map(lambda x: x.upper(), ['a','hu','fsa','fas'])))
#sort_by_second

#stringhossz
print(list(map(lambda x: len(x), ['a','hu','fsa','fas'])))
#két lista metszete