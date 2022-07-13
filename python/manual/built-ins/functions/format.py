t1 = 'test value: {price:.4f}'

print(t1)
print(t1.format(price=12.1275454545))
print(t1.format(price=0))


dr = ['pysl', 'pysl']

print('checker {}'.format(tuple(dr)))
print('checker {}'.format((dr[0], dr[0])))
