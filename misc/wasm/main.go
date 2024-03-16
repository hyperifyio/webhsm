// Copyright (c) 2024. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

package main

import (
	"syscall/js"
)

func main() {
	c := make(chan struct{}, 0)
	println("webhsm initialized")
	registerCallbacks()
	registerMessageListener()
	<-c
}

func add(this js.Value, inputs []js.Value) interface{} {
	if len(inputs) < 2 {
		return "Not enough arguments"
	}
	return inputs[0].Int() + inputs[1].Int()
}

func registerCallbacks() {
	js.Global().Set("add", js.FuncOf(add))
}

func registerMessageListener() {
	js.Global().Call("addEventListener", "message", js.FuncOf(messageHandler))
}

func messageHandler(this js.Value, inputs []js.Value) interface{} {
	message := inputs[0].Get("data").String()
	println("Message received from parent iframe:", message)
	return nil
}
