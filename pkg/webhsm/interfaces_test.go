// Copyright (c) 2024. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

package webhsm_test

import (
	"testing"

	"github.com/miekg/pkcs11"

	"github.com/hyperifyio/webhsm/pkg/webhsm"
)

func TestPKCS11InterfaceIsCompatibleWith(t *testing.T) {
	t.Skip("Skipping interface compatibility test for now")
	var _ webhsm.PKCS11 = pkcs11.New("/usr/lib/softhsm/libsofthsm2.so")
}
