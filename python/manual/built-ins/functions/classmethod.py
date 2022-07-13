class MyClass:
    prop = 'A Simple Class Property'

    @classmethod
    def my_method(cls):
        print('yo')
        print(cls)


mc = MyClass()

mc.my_method()
print(mc.prop)
