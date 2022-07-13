# https://realpython.com/python-enumerate/#:~:text=Python's%20enumerate()%20lets%20you%20write%20Pythonic%20for%20loops%20when,to%20increment%20the%20counter%20yourself.

b = ['insurance', 'field', 'is', 'safe', 'for', 'recession']

h = enumerate(b)
for count, i in enumerate(b):
    print(i)
    print(count)
