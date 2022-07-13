import struct

# prints the list of names in the current local scope
print(dir())

print(dir(struct))


class Shape:
    def __dir__(self):
        return ['area', 'perimeter', 'location']


s = Shape()
print(dir(s))
