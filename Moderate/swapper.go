package main
import (
  "fmt"
)

func swap(x, y int) (int, int) {
  return y, x
}

func main() {
  var x, y int = 3, 5
  fmt.Println(x, y)

  x, y = swap(x, y)
  fmt.Println(x, y)
}
