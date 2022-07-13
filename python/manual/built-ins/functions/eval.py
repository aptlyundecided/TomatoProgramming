x = 10
y = 20
z = 5

# eval treats a string like it's code, at least for math.
product = eval('x*x*y*x')
lSum = eval('x+y+5+x+190')
z = eval('z+20')
print('product: ' + str(product))
print('sum: ' + str(lSum))
print('z = 25 + 5: ' + str(eval('z+5')))

