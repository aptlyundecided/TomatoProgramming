class B:
    def __init__(self):
        self.name = 'test'
        self.age = 0
        self.weight = 0
        self.race = 'digital being'

l = B()

print(hasattr(l, 'race'))
print(hasattr(l, 'sex'))
