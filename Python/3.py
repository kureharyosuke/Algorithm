import math

def solution(num: int) -> str:
    pencil = math.ceil(num / 12)
    answer = f"{pencil} " + "다스"
    return answer

print(solution(25)) # OUTPUT: 3다스

print(solution(178)) # OUTPUT: 15 + 다스
