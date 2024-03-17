.PHONY: all build clean

all: build

build: protocols.ts

protocols.ts: ../internal/protocols/pkcs11.proto
	npx pbjs --ts ./protocols.ts ../internal/protocols/pkcs11.proto

clean:
	rm -f ./protocols.ts
