import asyncio


async def iterate_letters(word, delay):
    for i in range(len(word)):
        yield word[i]
        await asyncio.sleep(delay)


async def do_thing(s, delay):
    print('start do_thing')
    n = [i async for i in aiter(iterate_letters(s, delay))]
    print('finish do_thing')
    print(n)


x = iterate_letters('now then', 0.005)
print(x)

my_words = 'I woke up the fire, out of ash and ember.'
el = asyncio.new_event_loop()
el2 = asyncio.new_event_loop()
try:
    el.run_until_complete(do_thing(my_words, 0.005))
    el2.run_until_complete(do_thing(my_words, 0.005))
finally:
    el.close()
    el2.close()


