package main

import (
	"fmt"
	// m "math"
	// "os"
	// "strconv"
)

func main() {
	fmt.Println("Hello world!")

	solution([]int{2, 7, 11, 15}, 9)
}

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// Arrays have a fixed size, slices do not

func solution(numArray []int, target int) { // A []int is a slice, and a [n]int is an array
	var indices []int

	for i := 0; i < len(numArray); i++ {
		for j := i + 1; j < len(numArray) - 1; j++ {
			fmt.Println(i, j)
			fmt.Println("Values", numArray[i], numArray[j])
			if numArray[i] + numArray[j] == target {
				indices = append(indices, i, j)
			}
		}
	}

	fmt.Println(indices)
	// return indices
}