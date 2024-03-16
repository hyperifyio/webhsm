package webhsm

import "fmt"

// Release is current version of the webhsm library.
var Release = R{0, 0, 1}

// R holds the version of this library.
type R struct {
	Major, Minor, Patch int
}

func (r R) String() string {
	return fmt.Sprintf("%d.%d.%d", r.Major, r.Minor, r.Patch)
}
