class A:
    def __init__(self):
        self.name = 'Alex'
        self.age = 36
        self.weight = 195

    def show_props(self):
        for attr in self.__dict__:
            print(attr, ': ', self.__dict__[attr])


alex = A()
alex.show_props()
a = getattr(alex, 'age')
a = getattr(alex, 'age')
print(a)
