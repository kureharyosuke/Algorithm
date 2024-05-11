def solution4_1(array, divisor):
  result = [num for num in array if num % divisor == 0]
  return result if result else [-1]
  
print(solution4_1([5, 7, 6, 10], 2)) 
print(solution4_1([5, 9, 7, 10], 5))  
print(solution4_1([3, 7, 11], 5))     

# def solution4_2(array, divisor):