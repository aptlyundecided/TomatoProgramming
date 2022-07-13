class T:
    def __init__(self):
        self.name = 'test me out'
        self.age = 1

    def print_props(self):
        for attr in self.__dict__:
            print(attr, ': ', self.__dict__[attr])


t_inst = T()
t_inst.print_props()
del t_inst.name
t_inst.print_props()
print('')
print('--Next--')
t2 = T()
t2.print_props()
delattr(t2, 'age')
t2.print_props()
