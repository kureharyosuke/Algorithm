def solution4(array, divisor):
  result = [num for num in array if num % divisor == 0]
  return result if result else [-1]
  
print(solution4([5, 7, 6, 10], 2)) 
print(solution4([5, 9, 7, 10], 5))  # [5, 10]
print(solution4([3, 7, 11], 5))     # [-1]