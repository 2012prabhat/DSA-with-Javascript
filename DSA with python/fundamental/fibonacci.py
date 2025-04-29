def getFibonacci(num):
    if num==0:
        return [0];
    if num==1:
        return [0,1];
    a = 0;
    b = 1
    ans = 0;
    ansArr = [];
    ansArr.append(a)
    ansArr.append(b)
    while(ans<num):
        ans = a+b
        if ans>num:
            break
        ansArr.append(ans);
        a = b;
        b = ans;
    
    return ansArr
    
    
finalAns = getFibonacci(10);
print(finalAns)