// Copyright (c) 2024. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

package webhsm

import (
	"github.com/miekg/pkcs11"
)

// PKCS11 defines a set of operations available in the PKCS#11 context.
// It is intentionally compatible with miekg/pkcs11 library. Would have used
// their interface directly, but as of version 1.1.1 it did not provide one.
type PKCS11 interface {

	// Token and Session Management

	OpenSession(slotID uint, flags uint) (pkcs11.SessionHandle, error)
	CloseSession(sh pkcs11.SessionHandle) error
	CloseAllSessions(slotID uint) error
	GetSessionInfo(sh pkcs11.SessionHandle) (pkcs11.SessionInfo, error)
	Login(sh pkcs11.SessionHandle, userType uint, pin string) error
	Logout(sh pkcs11.SessionHandle) error

	// Object Management

	CreateObject(sh pkcs11.SessionHandle, temp []*pkcs11.Attribute) (pkcs11.ObjectHandle, error)
	CopyObject(sh pkcs11.SessionHandle, o pkcs11.ObjectHandle, temp []*pkcs11.Attribute) (pkcs11.ObjectHandle, error)
	DestroyObject(sh pkcs11.SessionHandle, oh pkcs11.ObjectHandle) error
	GetObjectSize(sh pkcs11.SessionHandle, oh pkcs11.ObjectHandle) (uint, error)
	GetAttributeValue(sh pkcs11.SessionHandle, o pkcs11.ObjectHandle, a []*pkcs11.Attribute) ([]*pkcs11.Attribute, error)
	SetAttributeValue(sh pkcs11.SessionHandle, o pkcs11.ObjectHandle, a []*pkcs11.Attribute) error
	FindObjectsInit(sh pkcs11.SessionHandle, temp []*pkcs11.Attribute) error
	FindObjects(sh pkcs11.SessionHandle, max int) ([]pkcs11.ObjectHandle, bool, error)
	FindObjectsFinal(sh pkcs11.SessionHandle) error

	// Encryption and Decryption

	EncryptInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, o pkcs11.ObjectHandle) error
	Encrypt(sh pkcs11.SessionHandle, message []byte) ([]byte, error)
	EncryptUpdate(sh pkcs11.SessionHandle, plain []byte) ([]byte, error)
	EncryptFinal(sh pkcs11.SessionHandle) ([]byte, error)
	DecryptInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, o pkcs11.ObjectHandle) error
	Decrypt(sh pkcs11.SessionHandle, cipher []byte) ([]byte, error)
	DecryptUpdate(sh pkcs11.SessionHandle, cipher []byte) ([]byte, error)
	DecryptFinal(sh pkcs11.SessionHandle) ([]byte, error)

	// Signing and Verification

	SignInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, o pkcs11.ObjectHandle) error
	Sign(sh pkcs11.SessionHandle, message []byte) ([]byte, error)
	SignUpdate(sh pkcs11.SessionHandle, message []byte) error
	SignFinal(sh pkcs11.SessionHandle) ([]byte, error)
	SignRecoverInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, key pkcs11.ObjectHandle) error
	SignRecover(sh pkcs11.SessionHandle, data []byte) ([]byte, error)
	VerifyInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, key pkcs11.ObjectHandle) error
	Verify(sh pkcs11.SessionHandle, data []byte, signature []byte) error
	VerifyUpdate(sh pkcs11.SessionHandle, part []byte) error
	VerifyFinal(sh pkcs11.SessionHandle, signature []byte) error
	VerifyRecoverInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, key pkcs11.ObjectHandle) error
	VerifyRecover(sh pkcs11.SessionHandle, signature []byte) ([]byte, error)

	// Digesting

	DigestInit(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism) error
	Digest(sh pkcs11.SessionHandle, message []byte) ([]byte, error)
	DigestUpdate(sh pkcs11.SessionHandle, message []byte) error
	DigestKey(sh pkcs11.SessionHandle, key pkcs11.ObjectHandle) error
	DigestFinal(sh pkcs11.SessionHandle) ([]byte, error)

	// Key Management

	GenerateKey(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, temp []*pkcs11.Attribute) (pkcs11.ObjectHandle, error)
	GenerateKeyPair(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, public, private []*pkcs11.Attribute) (pkcs11.ObjectHandle, pkcs11.ObjectHandle, error)
	WrapKey(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, wrappingkey, key pkcs11.ObjectHandle) ([]byte, error)
	UnwrapKey(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, unwrappingkey pkcs11.ObjectHandle, wrappedkey []byte, a []*pkcs11.Attribute) (pkcs11.ObjectHandle, error)
	DeriveKey(sh pkcs11.SessionHandle, m []*pkcs11.Mechanism, basekey pkcs11.ObjectHandle, a []*pkcs11.Attribute) (pkcs11.ObjectHandle, error)

	// Random Number Generation

	SeedRandom(sh pkcs11.SessionHandle, seed []byte) error
	GenerateRandom(sh pkcs11.SessionHandle, length int) ([]byte, error)

	// Other Operations

	WaitForSlotEvent(flags uint) chan pkcs11.SlotEvent
}

// Verifies compatibility with miekg/pkcs11
var _ PKCS11 = pkcs11.New("/usr/lib/softhsm/libsofthsm2.so")
