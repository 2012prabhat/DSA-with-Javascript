person = {
    "name": "Alice",
    "age": 25,
    "is_student": True
}


del person['name']
person['name'] = "Prabhat Kumar"

person.pop('name')

print(list(person.keys()))
print(person.values())  # dict_values(['Alice', 'Engineer'])
print(person.items())  # dict_items([('name', 'Alice'), ...])
print(person)