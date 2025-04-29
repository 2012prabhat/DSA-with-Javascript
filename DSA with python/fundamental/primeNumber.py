import math

def checkPrime(num):
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

# Test cases
print(checkPrime(1))   # False
print(checkPrime(2))   # True
print(checkPrime(17))  # True
print(checkPrime(25))  # False