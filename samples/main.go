package main

import (
	"fmt"
	"strings"
)

type Shade string

const (
	Mint   Shade = "mint"
	Violet Shade = "violet"
)

type Aurora struct {
	Shade   Shade
	Visible bool
}

func (a Aurora) Describe() string {
	if !a.Visible {
		return "clouded"
	}
	return fmt.Sprintf("visible %s aurora", strings.ToUpper(string(a.Shade)))
}

func main() {
	skies := make(chan Aurora, 1)
	go func() { skies <- Aurora{Shade: Mint, Visible: true}; close(skies) }()
	for sky := range skies {
		fmt.Println(sky.Describe())
	}
}
