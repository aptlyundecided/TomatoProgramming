m = dict(one=1, two=2, three=3)
n = {'check': 0, 'out': 0, 'the': 0, 'melody': 0}
o = dict([('four', 4), ('ten', 10), ('twelve', 12)])
p = dict({'this': True, 'can': True, 'be': { 'JSON': True }})
for key in m:
    print(key + ': ' + str(m[key]))
print('')
for key in n:
    print(key + ': ' + str(n[key]))
print('')
for key in o:
    print(key + ': ' + str(o[key]))
print('')
for key in p:
    print(key + ': ' + str(p[key]))
