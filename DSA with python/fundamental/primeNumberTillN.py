import math

def isPrime(num):
    if num <= 1:
        return False  # 1 and negatives are not primes
    if num == 2:
        return True   # 2 is the only even prime
    if num % 2 == 0:
        return False  # Even numbers > 2 are not primes
    
    max_divisor = math.isqrt(num) + 1  # Check up to √num
    for i in range(3, max_divisor, 2):  # Skip even numbers
        if num % i == 0:
            return False
    return True


def getPrimeTillN(k):
    num = 2
    primeArr = []
    while(num<=k):
        if(isPrime(num) == True):
            primeArr.append(num)
        num +=1
    return primeArr;


result = getPrimeTillN(13);
print(result)
        
        
    
        