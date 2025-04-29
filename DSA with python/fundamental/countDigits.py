import math
num = -12345;
num = abs(num)
count = 0;
while(num!=0):
    num = math.floor(num/10);
    count+=1

print(count)