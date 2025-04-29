fruits = ['mango','apple','banana'];
fruits.append('kiwi');
fruits.insert(2,'Guvava');

#fruits after 2nd index
fruits1 = fruits[3:]

# fruits before last index
fruits2 = fruits[:-1]
print(fruits)
print(fruits1)
print(fruits2)
fruits.remove('kiwi')

popped = fruits.pop()
print(popped)

print(fruits)


