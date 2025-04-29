def getInverseNum(num):
    is_negative = False;
    reversed_num = 0;
    
    if num < 0:
        is_negative=True;
        num = -num
        
    while(num>0):
        lastDig = num % 10;
        reversed_num = reversed_num * 10 + lastDig;
        num = num // 10;
    if(is_negative):
        return -reversed_num
    else:
        return reversed_num


num1 = -1234
finalAns = getInverseNum(num1)
print(finalAns)