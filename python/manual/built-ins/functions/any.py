a = [False, True, False]
b = [False, False, False]
c = iter(a)
d = iter(b)
e = any(c)
f = any(d)

print('One True: ' + str(e))
print('No True: ' + str(f))
