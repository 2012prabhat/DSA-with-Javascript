try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("Not a valid number!")
except ZeroDivisionError:
    print("Can't divide by zero!")
except Exception as e:  # Catch-all
    print(f"Something went wrong: {e}")