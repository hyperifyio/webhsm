.PHONY: build myworker clean

build: myworker

myworker: ./myworker.go ./docroot/myworker.html ./docroot/myworker.js
	go build -o myworker ./myworker.go

clean:
	rm -f myworker
