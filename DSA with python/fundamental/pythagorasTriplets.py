def isPythagorasTriplet(a, b, c):
    max_num = max(a, b, c)
    if max_num == a:
        return b*b + c*c == a*a
    elif max_num == b:
        return a*a + c*c == b*b
    else:
        return a*a + b*b == c*c

ans = isPythagorasTriplet(3, 4, 5)
print(ans)  # Output: True


print(isPythagorasTriplet(5, 3, 4))  # True (3² + 4² = 5²)
print(isPythagorasTriplet(6, 4, 5))  # False (4² + 5² ≠ 6²)
print(isPythagorasTriplet(13, 12, 5)) # True (5² + 12² = 13²)