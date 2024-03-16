// Copyright (c) 2024. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
)

//go:embed dist/*
var dist embed.FS

func main() {

	distFS, err := fs.Sub(dist, "dist")
	if err != nil {
		log.Fatalf("Failed to create sub filesystem: %v", err)
	}

	fs := http.FileServer(http.FS(distFS))
	http.Handle("/", handlerWithCORS(fs))

	log.Println("Listening on :8080...")
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}

}

// handlerWithCORS wraps an http.Handler with CORS headers
func handlerWithCORS(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*") // allow requests from any origin
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			return // preflight handled
		}

		// Serve the request with the original handler
		h.ServeHTTP(w, r)
	}
}
