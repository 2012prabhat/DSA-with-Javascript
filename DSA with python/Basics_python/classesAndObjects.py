class student:
    
    def __init__(self,name,age):
        self.name = name;
        self.age = age;
        
    def describeYourself(self):
        print(f'My name is {self.name} and my age is {self.age}')
        
        
person1  = student('Prabhat',27)
person1.describeYourself()

print(person1.age)
print(person1.name)
        