package main
import (
  "fmt"
)

// count how many ways can a child hop up steps by one, two, or three steps
// 1 (1) -> 1
// 2 (2) -> 11, 2
// 3 (4) -> 111, 12, 21, 3
// 4 (7) -> 1111, 112, 121, 211, 22, 13, 31
// 5 (13) -> 11111, 1112, 1121, 1211, 2111, 122, 212, 221, 113, 131, 311, 23, 32
// ==================================================
func swap(a int, b int, c int) (int, int, int) {
  return b, c, a+b+c
}

func helper() func(int) int {
  var one, two, three = 1, 2, 4

  return func(i int) int {
    if i == 1 {
      return one
    } else if i == 2 {
      return two
    } else if i == 3 {
      return three
    } else {
      one, two, three = swap(one, two, three)
      return three
    }
  }
}

func stepper(steps int) int {
  tracker := helper()
  if steps <= 3 {
    return tracker(steps)
  }

  var result int
  for i := 4; i <= steps; i++ {
    result = tracker(i)
  }
  return result
}

func main() {
  fmt.Println(stepper(1))
  fmt.Println(stepper(2))
  fmt.Println(stepper(5))
}
