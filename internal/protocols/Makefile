.PHONY: all build protoc clean

all: build

build: protoc

protoc: pkcs11.pb.go

pkcs11.pb.go: pkcs11.proto
	protoc --proto_path=. \
		--go_out=. --go_opt=paths=source_relative \
		pkcs11.proto

clean:
	rm -f pkcs11.pb.go
