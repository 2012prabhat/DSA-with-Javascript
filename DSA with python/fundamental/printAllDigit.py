numArr = [];
def printAllDigit(num):
    while(num>0):
        lastDig = num%10;
        num = num//10;
        numArr.append(lastDig)

printAllDigit(12345)
print(numArr)

for i in range(0,len(numArr),1):
    print(numArr[i])