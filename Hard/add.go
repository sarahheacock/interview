package main
import (
  "fmt"
)

// write a funcion that adds two numbers without plus
func add(numOne, numTwo int) int {
  for numTwo > 0 {
    total, carry := numOne ^ numTwo, (numOne & numTwo) << 1
    numOne = total
    numTwo = carry
  }

  return numOne
}

func main(){
  fmt.Println(add(5, 3))
}
