iab = ['1', '2', '3', '4', '5', '6', '7']


def get_two(val):
    return val == '2' or val == '1'


x = filter(get_two, iab)


for i in x:
    print(i)
