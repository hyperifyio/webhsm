# Path to the Go WebAssembly JS support file
WASM_EXEC_JS := $(shell go env GOROOT)/misc/wasm/wasm_exec.js

all: build

.PHONY: build js wasm examples clean

build: js wasm webhsm examples

js: tsc

wasm: dist/webhsm.wasm dist/wasm_exec.js

examples:
	make -C ./examples/myworker build

webhsm: ./webhsm.go ./dist/webhsm.js ./dist/wasm_exec.js ./dist/webhsm.wasm ./dist/webhsm-worker.js ./dist/webhsm.html
	go build -o webhsm ./webhsm.go

examples/myworker: ./webhsm.go
	go build -o examples/myworker ./examples/myworker.go

tsc: src/webhsm.ts src/webhsm.ts src/webhsm-worker.ts tsconfig.json
	node_modules/.bin/tsc

dist/webhsm.wasm: ./misc/wasm/main.go
	GOOS=js GOARCH=wasm go build -o ./dist/webhsm.wasm ./misc/wasm/main.go

dist/wasm_exec.js: $(WASM_EXEC_JS)
	cp $(WASM_EXEC_JS) ./dist/wasm_exec.js

dist/webhsm.html: ./src/webhsm.html
	cp -f ./src/webhsm.html ./dist/webhsm.html

clean:
	rm -f \
      dist/webhsm.js \
	  dist/webhsm.wasm \
	  dist/wasm_exec.js \
	  dist/webhsm-iframe.js \
	  dist/webhsm-worker.js \
	  dist/webhsm.html \
	  webhsm
	test -d dist && rmdir dist || true
	make -C ./examples/myworker clean
