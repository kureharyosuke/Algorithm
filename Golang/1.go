
package main

import "fmt"

func main() {
  a, b, c := 5, 3, 7
  fmt.Println(findMin(a, b, c))
}

func findMin(a, b, c int) int {
  answer := a

  if b < answer {
    answer = b
  }

  if c < answer {
    answer = c
  }

  return answer
}
