a = [True, True, True]
b = [False, True, True]
c = iter(a)
d = iter(b)
e = all(c)
f = all(d)

print('All true: ' + str(e))
print('One False: ' + str(f))
