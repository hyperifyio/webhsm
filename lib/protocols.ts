export interface Attribute {
  type?: number;
  value?: Uint8Array;
}

export function encodeAttribute(message: Attribute): Uint8Array {
  let bb = popByteBuffer();
  _encodeAttribute(message, bb);
  return toUint8Array(bb);
}

function _encodeAttribute(message: Attribute, bb: ByteBuffer): void {
  // optional uint32 type = 1;
  let $type = message.type;
  if ($type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $type);
  }

  // optional bytes value = 2;
  let $value = message.value;
  if ($value !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $value.length), writeBytes(bb, $value);
  }
}

export function decodeAttribute(binary: Uint8Array): Attribute {
  return _decodeAttribute(wrapByteBuffer(binary));
}

function _decodeAttribute(bb: ByteBuffer): Attribute {
  let message: Attribute = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 type = 1;
      case 1: {
        message.type = readVarint32(bb) >>> 0;
        break;
      }

      // optional bytes value = 2;
      case 2: {
        message.value = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Mechanism {
  mechanism?: number;
  parameter?: Uint8Array;
}

export function encodeMechanism(message: Mechanism): Uint8Array {
  let bb = popByteBuffer();
  _encodeMechanism(message, bb);
  return toUint8Array(bb);
}

function _encodeMechanism(message: Mechanism, bb: ByteBuffer): void {
  // optional uint32 mechanism = 1;
  let $mechanism = message.mechanism;
  if ($mechanism !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $mechanism);
  }

  // optional bytes parameter = 2;
  let $parameter = message.parameter;
  if ($parameter !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $parameter.length), writeBytes(bb, $parameter);
  }
}

export function decodeMechanism(binary: Uint8Array): Mechanism {
  return _decodeMechanism(wrapByteBuffer(binary));
}

function _decodeMechanism(bb: ByteBuffer): Mechanism {
  let message: Mechanism = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 mechanism = 1;
      case 1: {
        message.mechanism = readVarint32(bb) >>> 0;
        break;
      }

      // optional bytes parameter = 2;
      case 2: {
        message.parameter = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface OpenSessionRequest {
  slotID?: Long;
  flags?: Long;
}

export function encodeOpenSessionRequest(message: OpenSessionRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeOpenSessionRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeOpenSessionRequest(message: OpenSessionRequest, bb: ByteBuffer): void {
  // optional uint64 slotID = 1;
  let $slotID = message.slotID;
  if ($slotID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $slotID);
  }

  // optional uint64 flags = 2;
  let $flags = message.flags;
  if ($flags !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $flags);
  }
}

export function decodeOpenSessionRequest(binary: Uint8Array): OpenSessionRequest {
  return _decodeOpenSessionRequest(wrapByteBuffer(binary));
}

function _decodeOpenSessionRequest(bb: ByteBuffer): OpenSessionRequest {
  let message: OpenSessionRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 slotID = 1;
      case 1: {
        message.slotID = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 flags = 2;
      case 2: {
        message.flags = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface OpenSessionResponse {
  sessionHandle?: Long;
  error?: string;
}

export function encodeOpenSessionResponse(message: OpenSessionResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeOpenSessionResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeOpenSessionResponse(message: OpenSessionResponse, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeOpenSessionResponse(binary: Uint8Array): OpenSessionResponse {
  return _decodeOpenSessionResponse(wrapByteBuffer(binary));
}

function _decodeOpenSessionResponse(bb: ByteBuffer): OpenSessionResponse {
  let message: OpenSessionResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CloseSessionRequest {
  sessionHandle?: Long;
}

export function encodeCloseSessionRequest(message: CloseSessionRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeCloseSessionRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeCloseSessionRequest(message: CloseSessionRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeCloseSessionRequest(binary: Uint8Array): CloseSessionRequest {
  return _decodeCloseSessionRequest(wrapByteBuffer(binary));
}

function _decodeCloseSessionRequest(bb: ByteBuffer): CloseSessionRequest {
  let message: CloseSessionRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CloseSessionResponse {
  error?: string;
}

export function encodeCloseSessionResponse(message: CloseSessionResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeCloseSessionResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCloseSessionResponse(message: CloseSessionResponse, bb: ByteBuffer): void {
  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeCloseSessionResponse(binary: Uint8Array): CloseSessionResponse {
  return _decodeCloseSessionResponse(wrapByteBuffer(binary));
}

function _decodeCloseSessionResponse(bb: ByteBuffer): CloseSessionResponse {
  let message: CloseSessionResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CloseAllSessionsRequest {
  slotID?: Long;
}

export function encodeCloseAllSessionsRequest(message: CloseAllSessionsRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeCloseAllSessionsRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeCloseAllSessionsRequest(message: CloseAllSessionsRequest, bb: ByteBuffer): void {
  // optional uint64 slotID = 1;
  let $slotID = message.slotID;
  if ($slotID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $slotID);
  }
}

export function decodeCloseAllSessionsRequest(binary: Uint8Array): CloseAllSessionsRequest {
  return _decodeCloseAllSessionsRequest(wrapByteBuffer(binary));
}

function _decodeCloseAllSessionsRequest(bb: ByteBuffer): CloseAllSessionsRequest {
  let message: CloseAllSessionsRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 slotID = 1;
      case 1: {
        message.slotID = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CloseAllSessionsResponse {
  error?: string;
}

export function encodeCloseAllSessionsResponse(message: CloseAllSessionsResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeCloseAllSessionsResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCloseAllSessionsResponse(message: CloseAllSessionsResponse, bb: ByteBuffer): void {
  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeCloseAllSessionsResponse(binary: Uint8Array): CloseAllSessionsResponse {
  return _decodeCloseAllSessionsResponse(wrapByteBuffer(binary));
}

function _decodeCloseAllSessionsResponse(bb: ByteBuffer): CloseAllSessionsResponse {
  let message: CloseAllSessionsResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GetSessionInfoRequest {
  sessionHandle?: Long;
}

export function encodeGetSessionInfoRequest(message: GetSessionInfoRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeGetSessionInfoRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeGetSessionInfoRequest(message: GetSessionInfoRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeGetSessionInfoRequest(binary: Uint8Array): GetSessionInfoRequest {
  return _decodeGetSessionInfoRequest(wrapByteBuffer(binary));
}

function _decodeGetSessionInfoRequest(bb: ByteBuffer): GetSessionInfoRequest {
  let message: GetSessionInfoRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GetSessionInfoResponse {
  slotID?: Long;
  state?: number;
  flags?: Long;
  deviceError?: number;
  error?: string;
}

export function encodeGetSessionInfoResponse(message: GetSessionInfoResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeGetSessionInfoResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeGetSessionInfoResponse(message: GetSessionInfoResponse, bb: ByteBuffer): void {
  // optional uint64 slotID = 1;
  let $slotID = message.slotID;
  if ($slotID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $slotID);
  }

  // optional uint32 state = 2;
  let $state = message.state;
  if ($state !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $state);
  }

  // optional uint64 flags = 3;
  let $flags = message.flags;
  if ($flags !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $flags);
  }

  // optional uint32 deviceError = 4;
  let $deviceError = message.deviceError;
  if ($deviceError !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32(bb, $deviceError);
  }

  // optional string error = 5;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $error);
  }
}

export function decodeGetSessionInfoResponse(binary: Uint8Array): GetSessionInfoResponse {
  return _decodeGetSessionInfoResponse(wrapByteBuffer(binary));
}

function _decodeGetSessionInfoResponse(bb: ByteBuffer): GetSessionInfoResponse {
  let message: GetSessionInfoResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 slotID = 1;
      case 1: {
        message.slotID = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint32 state = 2;
      case 2: {
        message.state = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint64 flags = 3;
      case 3: {
        message.flags = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint32 deviceError = 4;
      case 4: {
        message.deviceError = readVarint32(bb) >>> 0;
        break;
      }

      // optional string error = 5;
      case 5: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LoginRequest {
  sessionHandle?: Long;
  userType?: number;
  pin?: string;
}

export function encodeLoginRequest(message: LoginRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeLoginRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeLoginRequest(message: LoginRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint32 userType = 2;
  let $userType = message.userType;
  if ($userType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $userType);
  }

  // optional string pin = 3;
  let $pin = message.pin;
  if ($pin !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $pin);
  }
}

export function decodeLoginRequest(binary: Uint8Array): LoginRequest {
  return _decodeLoginRequest(wrapByteBuffer(binary));
}

function _decodeLoginRequest(bb: ByteBuffer): LoginRequest {
  let message: LoginRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint32 userType = 2;
      case 2: {
        message.userType = readVarint32(bb) >>> 0;
        break;
      }

      // optional string pin = 3;
      case 3: {
        message.pin = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LoginResponse {
  error?: string;
}

export function encodeLoginResponse(message: LoginResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeLoginResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeLoginResponse(message: LoginResponse, bb: ByteBuffer): void {
  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeLoginResponse(binary: Uint8Array): LoginResponse {
  return _decodeLoginResponse(wrapByteBuffer(binary));
}

function _decodeLoginResponse(bb: ByteBuffer): LoginResponse {
  let message: LoginResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LogoutRequest {
  sessionHandle?: Long;
}

export function encodeLogoutRequest(message: LogoutRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeLogoutRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeLogoutRequest(message: LogoutRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeLogoutRequest(binary: Uint8Array): LogoutRequest {
  return _decodeLogoutRequest(wrapByteBuffer(binary));
}

function _decodeLogoutRequest(bb: ByteBuffer): LogoutRequest {
  let message: LogoutRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LogoutResponse {
  error?: string;
}

export function encodeLogoutResponse(message: LogoutResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeLogoutResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeLogoutResponse(message: LogoutResponse, bb: ByteBuffer): void {
  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeLogoutResponse(binary: Uint8Array): LogoutResponse {
  return _decodeLogoutResponse(wrapByteBuffer(binary));
}

function _decodeLogoutResponse(bb: ByteBuffer): LogoutResponse {
  let message: LogoutResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CreateObjectRequest {
  sessionHandle?: Long;
  attributes?: Attribute[];
}

export function encodeCreateObjectRequest(message: CreateObjectRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeCreateObjectRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeCreateObjectRequest(message: CreateObjectRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Attribute attributes = 2;
  let array$attributes = message.attributes;
  if (array$attributes !== undefined) {
    for (let value of array$attributes) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeCreateObjectRequest(binary: Uint8Array): CreateObjectRequest {
  return _decodeCreateObjectRequest(wrapByteBuffer(binary));
}

function _decodeCreateObjectRequest(bb: ByteBuffer): CreateObjectRequest {
  let message: CreateObjectRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Attribute attributes = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.attributes || (message.attributes = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CreateObjectResponse {
  objectHandle?: Long;
  error?: string;
}

export function encodeCreateObjectResponse(message: CreateObjectResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeCreateObjectResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCreateObjectResponse(message: CreateObjectResponse, bb: ByteBuffer): void {
  // optional uint64 objectHandle = 1;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $objectHandle);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeCreateObjectResponse(binary: Uint8Array): CreateObjectResponse {
  return _decodeCreateObjectResponse(wrapByteBuffer(binary));
}

function _decodeCreateObjectResponse(bb: ByteBuffer): CreateObjectResponse {
  let message: CreateObjectResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 objectHandle = 1;
      case 1: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CopyObjectRequest {
  sessionHandle?: Long;
  objectHandle?: Long;
  attributes?: Attribute[];
}

export function encodeCopyObjectRequest(message: CopyObjectRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeCopyObjectRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeCopyObjectRequest(message: CopyObjectRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint64 objectHandle = 2;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $objectHandle);
  }

  // repeated Attribute attributes = 3;
  let array$attributes = message.attributes;
  if (array$attributes !== undefined) {
    for (let value of array$attributes) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeCopyObjectRequest(binary: Uint8Array): CopyObjectRequest {
  return _decodeCopyObjectRequest(wrapByteBuffer(binary));
}

function _decodeCopyObjectRequest(bb: ByteBuffer): CopyObjectRequest {
  let message: CopyObjectRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 objectHandle = 2;
      case 2: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Attribute attributes = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.attributes || (message.attributes = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CopyObjectResponse {
  newObjectHandle?: Long;
  error?: string;
}

export function encodeCopyObjectResponse(message: CopyObjectResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeCopyObjectResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeCopyObjectResponse(message: CopyObjectResponse, bb: ByteBuffer): void {
  // optional uint64 newObjectHandle = 1;
  let $newObjectHandle = message.newObjectHandle;
  if ($newObjectHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $newObjectHandle);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeCopyObjectResponse(binary: Uint8Array): CopyObjectResponse {
  return _decodeCopyObjectResponse(wrapByteBuffer(binary));
}

function _decodeCopyObjectResponse(bb: ByteBuffer): CopyObjectResponse {
  let message: CopyObjectResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 newObjectHandle = 1;
      case 1: {
        message.newObjectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DestroyObjectRequest {
  sessionHandle?: Long;
  objectHandle?: Long;
}

export function encodeDestroyObjectRequest(message: DestroyObjectRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDestroyObjectRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDestroyObjectRequest(message: DestroyObjectRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint64 objectHandle = 2;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $objectHandle);
  }
}

export function decodeDestroyObjectRequest(binary: Uint8Array): DestroyObjectRequest {
  return _decodeDestroyObjectRequest(wrapByteBuffer(binary));
}

function _decodeDestroyObjectRequest(bb: ByteBuffer): DestroyObjectRequest {
  let message: DestroyObjectRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 objectHandle = 2;
      case 2: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DestroyObjectResponse {
  error?: string;
}

export function encodeDestroyObjectResponse(message: DestroyObjectResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDestroyObjectResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDestroyObjectResponse(message: DestroyObjectResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeDestroyObjectResponse(binary: Uint8Array): DestroyObjectResponse {
  return _decodeDestroyObjectResponse(wrapByteBuffer(binary));
}

function _decodeDestroyObjectResponse(bb: ByteBuffer): DestroyObjectResponse {
  let message: DestroyObjectResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GetObjectSizeRequest {
  sessionHandle?: Long;
  objectHandle?: Long;
}

export function encodeGetObjectSizeRequest(message: GetObjectSizeRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeGetObjectSizeRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeGetObjectSizeRequest(message: GetObjectSizeRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint64 objectHandle = 2;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $objectHandle);
  }
}

export function decodeGetObjectSizeRequest(binary: Uint8Array): GetObjectSizeRequest {
  return _decodeGetObjectSizeRequest(wrapByteBuffer(binary));
}

function _decodeGetObjectSizeRequest(bb: ByteBuffer): GetObjectSizeRequest {
  let message: GetObjectSizeRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 objectHandle = 2;
      case 2: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GetObjectSizeResponse {
  size?: Long;
  error?: string;
}

export function encodeGetObjectSizeResponse(message: GetObjectSizeResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeGetObjectSizeResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeGetObjectSizeResponse(message: GetObjectSizeResponse, bb: ByteBuffer): void {
  // optional uint64 size = 1;
  let $size = message.size;
  if ($size !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $size);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeGetObjectSizeResponse(binary: Uint8Array): GetObjectSizeResponse {
  return _decodeGetObjectSizeResponse(wrapByteBuffer(binary));
}

function _decodeGetObjectSizeResponse(bb: ByteBuffer): GetObjectSizeResponse {
  let message: GetObjectSizeResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 size = 1;
      case 1: {
        message.size = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GetAttributeValueRequest {
  sessionHandle?: Long;
  objectHandle?: Long;
  attributes?: Attribute[];
}

export function encodeGetAttributeValueRequest(message: GetAttributeValueRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeGetAttributeValueRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeGetAttributeValueRequest(message: GetAttributeValueRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint64 objectHandle = 2;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $objectHandle);
  }

  // repeated Attribute attributes = 3;
  let array$attributes = message.attributes;
  if (array$attributes !== undefined) {
    for (let value of array$attributes) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeGetAttributeValueRequest(binary: Uint8Array): GetAttributeValueRequest {
  return _decodeGetAttributeValueRequest(wrapByteBuffer(binary));
}

function _decodeGetAttributeValueRequest(bb: ByteBuffer): GetAttributeValueRequest {
  let message: GetAttributeValueRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 objectHandle = 2;
      case 2: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Attribute attributes = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.attributes || (message.attributes = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GetAttributeValueResponse {
  attributes?: Attribute[];
  error?: string;
}

export function encodeGetAttributeValueResponse(message: GetAttributeValueResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeGetAttributeValueResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeGetAttributeValueResponse(message: GetAttributeValueResponse, bb: ByteBuffer): void {
  // repeated Attribute attributes = 1;
  let array$attributes = message.attributes;
  if (array$attributes !== undefined) {
    for (let value of array$attributes) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeGetAttributeValueResponse(binary: Uint8Array): GetAttributeValueResponse {
  return _decodeGetAttributeValueResponse(wrapByteBuffer(binary));
}

function _decodeGetAttributeValueResponse(bb: ByteBuffer): GetAttributeValueResponse {
  let message: GetAttributeValueResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Attribute attributes = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.attributes || (message.attributes = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SetAttributeValueRequest {
  sessionHandle?: Long;
  objectHandle?: Long;
  attributes?: Attribute[];
}

export function encodeSetAttributeValueRequest(message: SetAttributeValueRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSetAttributeValueRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSetAttributeValueRequest(message: SetAttributeValueRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint64 objectHandle = 2;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $objectHandle);
  }

  // repeated Attribute attributes = 3;
  let array$attributes = message.attributes;
  if (array$attributes !== undefined) {
    for (let value of array$attributes) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSetAttributeValueRequest(binary: Uint8Array): SetAttributeValueRequest {
  return _decodeSetAttributeValueRequest(wrapByteBuffer(binary));
}

function _decodeSetAttributeValueRequest(bb: ByteBuffer): SetAttributeValueRequest {
  let message: SetAttributeValueRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 objectHandle = 2;
      case 2: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Attribute attributes = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.attributes || (message.attributes = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SetAttributeValueResponse {
  error?: string;
}

export function encodeSetAttributeValueResponse(message: SetAttributeValueResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSetAttributeValueResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSetAttributeValueResponse(message: SetAttributeValueResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeSetAttributeValueResponse(binary: Uint8Array): SetAttributeValueResponse {
  return _decodeSetAttributeValueResponse(wrapByteBuffer(binary));
}

function _decodeSetAttributeValueResponse(bb: ByteBuffer): SetAttributeValueResponse {
  let message: SetAttributeValueResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FindObjectsInitRequest {
  sessionHandle?: Long;
  template?: Attribute[];
}

export function encodeFindObjectsInitRequest(message: FindObjectsInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindObjectsInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeFindObjectsInitRequest(message: FindObjectsInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Attribute template = 2;
  let array$template = message.template;
  if (array$template !== undefined) {
    for (let value of array$template) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeFindObjectsInitRequest(binary: Uint8Array): FindObjectsInitRequest {
  return _decodeFindObjectsInitRequest(wrapByteBuffer(binary));
}

function _decodeFindObjectsInitRequest(bb: ByteBuffer): FindObjectsInitRequest {
  let message: FindObjectsInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Attribute template = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.template || (message.template = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FindObjectsInitResponse {
  error?: string;
}

export function encodeFindObjectsInitResponse(message: FindObjectsInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindObjectsInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeFindObjectsInitResponse(message: FindObjectsInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeFindObjectsInitResponse(binary: Uint8Array): FindObjectsInitResponse {
  return _decodeFindObjectsInitResponse(wrapByteBuffer(binary));
}

function _decodeFindObjectsInitResponse(bb: ByteBuffer): FindObjectsInitResponse {
  let message: FindObjectsInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FindObjectsRequest {
  sessionHandle?: Long;
  maxObjectCount?: number;
}

export function encodeFindObjectsRequest(message: FindObjectsRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindObjectsRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeFindObjectsRequest(message: FindObjectsRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint32 maxObjectCount = 2;
  let $maxObjectCount = message.maxObjectCount;
  if ($maxObjectCount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $maxObjectCount);
  }
}

export function decodeFindObjectsRequest(binary: Uint8Array): FindObjectsRequest {
  return _decodeFindObjectsRequest(wrapByteBuffer(binary));
}

function _decodeFindObjectsRequest(bb: ByteBuffer): FindObjectsRequest {
  let message: FindObjectsRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint32 maxObjectCount = 2;
      case 2: {
        message.maxObjectCount = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FindObjectsResponse {
  objectHandles?: Long[];
  moreObjects?: boolean;
  error?: string;
}

export function encodeFindObjectsResponse(message: FindObjectsResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindObjectsResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeFindObjectsResponse(message: FindObjectsResponse, bb: ByteBuffer): void {
  // repeated uint64 objectHandles = 1;
  let array$objectHandles = message.objectHandles;
  if (array$objectHandles !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$objectHandles) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // optional bool moreObjects = 2;
  let $moreObjects = message.moreObjects;
  if ($moreObjects !== undefined) {
    writeVarint32(bb, 16);
    writeByte(bb, $moreObjects ? 1 : 0);
  }

  // optional string error = 3;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $error);
  }
}

export function decodeFindObjectsResponse(binary: Uint8Array): FindObjectsResponse {
  return _decodeFindObjectsResponse(wrapByteBuffer(binary));
}

function _decodeFindObjectsResponse(bb: ByteBuffer): FindObjectsResponse {
  let message: FindObjectsResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated uint64 objectHandles = 1;
      case 1: {
        let values = message.objectHandles || (message.objectHandles = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ true));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ true));
        }
        break;
      }

      // optional bool moreObjects = 2;
      case 2: {
        message.moreObjects = !!readByte(bb);
        break;
      }

      // optional string error = 3;
      case 3: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FindObjectsFinalRequest {
  sessionHandle?: Long;
}

export function encodeFindObjectsFinalRequest(message: FindObjectsFinalRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindObjectsFinalRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeFindObjectsFinalRequest(message: FindObjectsFinalRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeFindObjectsFinalRequest(binary: Uint8Array): FindObjectsFinalRequest {
  return _decodeFindObjectsFinalRequest(wrapByteBuffer(binary));
}

function _decodeFindObjectsFinalRequest(bb: ByteBuffer): FindObjectsFinalRequest {
  let message: FindObjectsFinalRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FindObjectsFinalResponse {
  error?: string;
}

export function encodeFindObjectsFinalResponse(message: FindObjectsFinalResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindObjectsFinalResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeFindObjectsFinalResponse(message: FindObjectsFinalResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeFindObjectsFinalResponse(binary: Uint8Array): FindObjectsFinalResponse {
  return _decodeFindObjectsFinalResponse(wrapByteBuffer(binary));
}

function _decodeFindObjectsFinalResponse(bb: ByteBuffer): FindObjectsFinalResponse {
  let message: FindObjectsFinalResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  objectHandle?: Long;
}

export function encodeEncryptInitRequest(message: EncryptInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptInitRequest(message: EncryptInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 objectHandle = 3;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $objectHandle);
  }
}

export function decodeEncryptInitRequest(binary: Uint8Array): EncryptInitRequest {
  return _decodeEncryptInitRequest(wrapByteBuffer(binary));
}

function _decodeEncryptInitRequest(bb: ByteBuffer): EncryptInitRequest {
  let message: EncryptInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 objectHandle = 3;
      case 3: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptInitResponse {
  error?: string;
}

export function encodeEncryptInitResponse(message: EncryptInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptInitResponse(message: EncryptInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeEncryptInitResponse(binary: Uint8Array): EncryptInitResponse {
  return _decodeEncryptInitResponse(wrapByteBuffer(binary));
}

function _decodeEncryptInitResponse(bb: ByteBuffer): EncryptInitResponse {
  let message: EncryptInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptRequest {
  sessionHandle?: Long;
  message?: Uint8Array;
}

export function encodeEncryptRequest(message: EncryptRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptRequest(message: EncryptRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes message = 2;
  let $message = message.message;
  if ($message !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $message.length), writeBytes(bb, $message);
  }
}

export function decodeEncryptRequest(binary: Uint8Array): EncryptRequest {
  return _decodeEncryptRequest(wrapByteBuffer(binary));
}

function _decodeEncryptRequest(bb: ByteBuffer): EncryptRequest {
  let message: EncryptRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes message = 2;
      case 2: {
        message.message = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptResponse {
  encryptedData?: Uint8Array;
  error?: string;
}

export function encodeEncryptResponse(message: EncryptResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptResponse(message: EncryptResponse, bb: ByteBuffer): void {
  // optional bytes encryptedData = 1;
  let $encryptedData = message.encryptedData;
  if ($encryptedData !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $encryptedData.length), writeBytes(bb, $encryptedData);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeEncryptResponse(binary: Uint8Array): EncryptResponse {
  return _decodeEncryptResponse(wrapByteBuffer(binary));
}

function _decodeEncryptResponse(bb: ByteBuffer): EncryptResponse {
  let message: EncryptResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes encryptedData = 1;
      case 1: {
        message.encryptedData = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptUpdateRequest {
  sessionHandle?: Long;
  part?: Uint8Array;
}

export function encodeEncryptUpdateRequest(message: EncryptUpdateRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptUpdateRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptUpdateRequest(message: EncryptUpdateRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes part = 2;
  let $part = message.part;
  if ($part !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $part.length), writeBytes(bb, $part);
  }
}

export function decodeEncryptUpdateRequest(binary: Uint8Array): EncryptUpdateRequest {
  return _decodeEncryptUpdateRequest(wrapByteBuffer(binary));
}

function _decodeEncryptUpdateRequest(bb: ByteBuffer): EncryptUpdateRequest {
  let message: EncryptUpdateRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes part = 2;
      case 2: {
        message.part = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptUpdateResponse {
  encryptedPart?: Uint8Array;
  error?: string;
}

export function encodeEncryptUpdateResponse(message: EncryptUpdateResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptUpdateResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptUpdateResponse(message: EncryptUpdateResponse, bb: ByteBuffer): void {
  // optional bytes encryptedPart = 1;
  let $encryptedPart = message.encryptedPart;
  if ($encryptedPart !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $encryptedPart.length), writeBytes(bb, $encryptedPart);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeEncryptUpdateResponse(binary: Uint8Array): EncryptUpdateResponse {
  return _decodeEncryptUpdateResponse(wrapByteBuffer(binary));
}

function _decodeEncryptUpdateResponse(bb: ByteBuffer): EncryptUpdateResponse {
  let message: EncryptUpdateResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes encryptedPart = 1;
      case 1: {
        message.encryptedPart = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptFinalRequest {
  sessionHandle?: Long;
}

export function encodeEncryptFinalRequest(message: EncryptFinalRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptFinalRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptFinalRequest(message: EncryptFinalRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeEncryptFinalRequest(binary: Uint8Array): EncryptFinalRequest {
  return _decodeEncryptFinalRequest(wrapByteBuffer(binary));
}

function _decodeEncryptFinalRequest(bb: ByteBuffer): EncryptFinalRequest {
  let message: EncryptFinalRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface EncryptFinalResponse {
  lastEncryptedPart?: Uint8Array;
  error?: string;
}

export function encodeEncryptFinalResponse(message: EncryptFinalResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeEncryptFinalResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeEncryptFinalResponse(message: EncryptFinalResponse, bb: ByteBuffer): void {
  // optional bytes lastEncryptedPart = 1;
  let $lastEncryptedPart = message.lastEncryptedPart;
  if ($lastEncryptedPart !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $lastEncryptedPart.length), writeBytes(bb, $lastEncryptedPart);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeEncryptFinalResponse(binary: Uint8Array): EncryptFinalResponse {
  return _decodeEncryptFinalResponse(wrapByteBuffer(binary));
}

function _decodeEncryptFinalResponse(bb: ByteBuffer): EncryptFinalResponse {
  let message: EncryptFinalResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes lastEncryptedPart = 1;
      case 1: {
        message.lastEncryptedPart = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  objectHandle?: Long;
}

export function encodeDecryptInitRequest(message: DecryptInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptInitRequest(message: DecryptInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 objectHandle = 3;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $objectHandle);
  }
}

export function decodeDecryptInitRequest(binary: Uint8Array): DecryptInitRequest {
  return _decodeDecryptInitRequest(wrapByteBuffer(binary));
}

function _decodeDecryptInitRequest(bb: ByteBuffer): DecryptInitRequest {
  let message: DecryptInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 objectHandle = 3;
      case 3: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptInitResponse {
  error?: string;
}

export function encodeDecryptInitResponse(message: DecryptInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptInitResponse(message: DecryptInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeDecryptInitResponse(binary: Uint8Array): DecryptInitResponse {
  return _decodeDecryptInitResponse(wrapByteBuffer(binary));
}

function _decodeDecryptInitResponse(bb: ByteBuffer): DecryptInitResponse {
  let message: DecryptInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptRequest {
  sessionHandle?: Long;
  cipherText?: Uint8Array;
}

export function encodeDecryptRequest(message: DecryptRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptRequest(message: DecryptRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes cipherText = 2;
  let $cipherText = message.cipherText;
  if ($cipherText !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $cipherText.length), writeBytes(bb, $cipherText);
  }
}

export function decodeDecryptRequest(binary: Uint8Array): DecryptRequest {
  return _decodeDecryptRequest(wrapByteBuffer(binary));
}

function _decodeDecryptRequest(bb: ByteBuffer): DecryptRequest {
  let message: DecryptRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes cipherText = 2;
      case 2: {
        message.cipherText = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptResponse {
  decryptedData?: Uint8Array;
  error?: string;
}

export function encodeDecryptResponse(message: DecryptResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptResponse(message: DecryptResponse, bb: ByteBuffer): void {
  // optional bytes decryptedData = 1;
  let $decryptedData = message.decryptedData;
  if ($decryptedData !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $decryptedData.length), writeBytes(bb, $decryptedData);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeDecryptResponse(binary: Uint8Array): DecryptResponse {
  return _decodeDecryptResponse(wrapByteBuffer(binary));
}

function _decodeDecryptResponse(bb: ByteBuffer): DecryptResponse {
  let message: DecryptResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes decryptedData = 1;
      case 1: {
        message.decryptedData = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptUpdateRequest {
  sessionHandle?: Long;
  part?: Uint8Array;
}

export function encodeDecryptUpdateRequest(message: DecryptUpdateRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptUpdateRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptUpdateRequest(message: DecryptUpdateRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes part = 2;
  let $part = message.part;
  if ($part !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $part.length), writeBytes(bb, $part);
  }
}

export function decodeDecryptUpdateRequest(binary: Uint8Array): DecryptUpdateRequest {
  return _decodeDecryptUpdateRequest(wrapByteBuffer(binary));
}

function _decodeDecryptUpdateRequest(bb: ByteBuffer): DecryptUpdateRequest {
  let message: DecryptUpdateRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes part = 2;
      case 2: {
        message.part = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptUpdateResponse {
  decryptedPart?: Uint8Array;
  error?: string;
}

export function encodeDecryptUpdateResponse(message: DecryptUpdateResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptUpdateResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptUpdateResponse(message: DecryptUpdateResponse, bb: ByteBuffer): void {
  // optional bytes decryptedPart = 1;
  let $decryptedPart = message.decryptedPart;
  if ($decryptedPart !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $decryptedPart.length), writeBytes(bb, $decryptedPart);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeDecryptUpdateResponse(binary: Uint8Array): DecryptUpdateResponse {
  return _decodeDecryptUpdateResponse(wrapByteBuffer(binary));
}

function _decodeDecryptUpdateResponse(bb: ByteBuffer): DecryptUpdateResponse {
  let message: DecryptUpdateResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes decryptedPart = 1;
      case 1: {
        message.decryptedPart = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptFinalRequest {
  sessionHandle?: Long;
}

export function encodeDecryptFinalRequest(message: DecryptFinalRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptFinalRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptFinalRequest(message: DecryptFinalRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeDecryptFinalRequest(binary: Uint8Array): DecryptFinalRequest {
  return _decodeDecryptFinalRequest(wrapByteBuffer(binary));
}

function _decodeDecryptFinalRequest(bb: ByteBuffer): DecryptFinalRequest {
  let message: DecryptFinalRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DecryptFinalResponse {
  lastDecryptedPart?: Uint8Array;
  error?: string;
}

export function encodeDecryptFinalResponse(message: DecryptFinalResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDecryptFinalResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDecryptFinalResponse(message: DecryptFinalResponse, bb: ByteBuffer): void {
  // optional bytes lastDecryptedPart = 1;
  let $lastDecryptedPart = message.lastDecryptedPart;
  if ($lastDecryptedPart !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $lastDecryptedPart.length), writeBytes(bb, $lastDecryptedPart);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeDecryptFinalResponse(binary: Uint8Array): DecryptFinalResponse {
  return _decodeDecryptFinalResponse(wrapByteBuffer(binary));
}

function _decodeDecryptFinalResponse(bb: ByteBuffer): DecryptFinalResponse {
  let message: DecryptFinalResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes lastDecryptedPart = 1;
      case 1: {
        message.lastDecryptedPart = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  objectHandle?: Long;
}

export function encodeSignInitRequest(message: SignInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSignInitRequest(message: SignInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 objectHandle = 3;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $objectHandle);
  }
}

export function decodeSignInitRequest(binary: Uint8Array): SignInitRequest {
  return _decodeSignInitRequest(wrapByteBuffer(binary));
}

function _decodeSignInitRequest(bb: ByteBuffer): SignInitRequest {
  let message: SignInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 objectHandle = 3;
      case 3: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignInitResponse {
  error?: string;
}

export function encodeSignInitResponse(message: SignInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSignInitResponse(message: SignInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeSignInitResponse(binary: Uint8Array): SignInitResponse {
  return _decodeSignInitResponse(wrapByteBuffer(binary));
}

function _decodeSignInitResponse(bb: ByteBuffer): SignInitResponse {
  let message: SignInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignRequest {
  sessionHandle?: Long;
  message?: Uint8Array;
}

export function encodeSignRequest(message: SignRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSignRequest(message: SignRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes message = 2;
  let $message = message.message;
  if ($message !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $message.length), writeBytes(bb, $message);
  }
}

export function decodeSignRequest(binary: Uint8Array): SignRequest {
  return _decodeSignRequest(wrapByteBuffer(binary));
}

function _decodeSignRequest(bb: ByteBuffer): SignRequest {
  let message: SignRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes message = 2;
      case 2: {
        message.message = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignResponse {
  signature?: Uint8Array;
  error?: string;
}

export function encodeSignResponse(message: SignResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSignResponse(message: SignResponse, bb: ByteBuffer): void {
  // optional bytes signature = 1;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeSignResponse(binary: Uint8Array): SignResponse {
  return _decodeSignResponse(wrapByteBuffer(binary));
}

function _decodeSignResponse(bb: ByteBuffer): SignResponse {
  let message: SignResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes signature = 1;
      case 1: {
        message.signature = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignUpdateRequest {
  sessionHandle?: Long;
  part?: Uint8Array;
}

export function encodeSignUpdateRequest(message: SignUpdateRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignUpdateRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSignUpdateRequest(message: SignUpdateRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes part = 2;
  let $part = message.part;
  if ($part !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $part.length), writeBytes(bb, $part);
  }
}

export function decodeSignUpdateRequest(binary: Uint8Array): SignUpdateRequest {
  return _decodeSignUpdateRequest(wrapByteBuffer(binary));
}

function _decodeSignUpdateRequest(bb: ByteBuffer): SignUpdateRequest {
  let message: SignUpdateRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes part = 2;
      case 2: {
        message.part = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignUpdateResponse {
  error?: string;
}

export function encodeSignUpdateResponse(message: SignUpdateResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignUpdateResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSignUpdateResponse(message: SignUpdateResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeSignUpdateResponse(binary: Uint8Array): SignUpdateResponse {
  return _decodeSignUpdateResponse(wrapByteBuffer(binary));
}

function _decodeSignUpdateResponse(bb: ByteBuffer): SignUpdateResponse {
  let message: SignUpdateResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignFinalRequest {
  sessionHandle?: Long;
}

export function encodeSignFinalRequest(message: SignFinalRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignFinalRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSignFinalRequest(message: SignFinalRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeSignFinalRequest(binary: Uint8Array): SignFinalRequest {
  return _decodeSignFinalRequest(wrapByteBuffer(binary));
}

function _decodeSignFinalRequest(bb: ByteBuffer): SignFinalRequest {
  let message: SignFinalRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignFinalResponse {
  signature?: Uint8Array;
  error?: string;
}

export function encodeSignFinalResponse(message: SignFinalResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignFinalResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSignFinalResponse(message: SignFinalResponse, bb: ByteBuffer): void {
  // optional bytes signature = 1;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeSignFinalResponse(binary: Uint8Array): SignFinalResponse {
  return _decodeSignFinalResponse(wrapByteBuffer(binary));
}

function _decodeSignFinalResponse(bb: ByteBuffer): SignFinalResponse {
  let message: SignFinalResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes signature = 1;
      case 1: {
        message.signature = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignRecoverInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  key?: Long;
}

export function encodeSignRecoverInitRequest(message: SignRecoverInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignRecoverInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSignRecoverInitRequest(message: SignRecoverInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 key = 3;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $key);
  }
}

export function decodeSignRecoverInitRequest(binary: Uint8Array): SignRecoverInitRequest {
  return _decodeSignRecoverInitRequest(wrapByteBuffer(binary));
}

function _decodeSignRecoverInitRequest(bb: ByteBuffer): SignRecoverInitRequest {
  let message: SignRecoverInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 key = 3;
      case 3: {
        message.key = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignRecoverInitResponse {
  error?: string;
}

export function encodeSignRecoverInitResponse(message: SignRecoverInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignRecoverInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSignRecoverInitResponse(message: SignRecoverInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeSignRecoverInitResponse(binary: Uint8Array): SignRecoverInitResponse {
  return _decodeSignRecoverInitResponse(wrapByteBuffer(binary));
}

function _decodeSignRecoverInitResponse(bb: ByteBuffer): SignRecoverInitResponse {
  let message: SignRecoverInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignRecoverRequest {
  sessionHandle?: Long;
  data?: Uint8Array;
}

export function encodeSignRecoverRequest(message: SignRecoverRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignRecoverRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSignRecoverRequest(message: SignRecoverRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes data = 2;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }
}

export function decodeSignRecoverRequest(binary: Uint8Array): SignRecoverRequest {
  return _decodeSignRecoverRequest(wrapByteBuffer(binary));
}

function _decodeSignRecoverRequest(bb: ByteBuffer): SignRecoverRequest {
  let message: SignRecoverRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes data = 2;
      case 2: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SignRecoverResponse {
  signature?: Uint8Array;
  error?: string;
}

export function encodeSignRecoverResponse(message: SignRecoverResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSignRecoverResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSignRecoverResponse(message: SignRecoverResponse, bb: ByteBuffer): void {
  // optional bytes signature = 1;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeSignRecoverResponse(binary: Uint8Array): SignRecoverResponse {
  return _decodeSignRecoverResponse(wrapByteBuffer(binary));
}

function _decodeSignRecoverResponse(bb: ByteBuffer): SignRecoverResponse {
  let message: SignRecoverResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes signature = 1;
      case 1: {
        message.signature = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  key?: Long;
}

export function encodeVerifyInitRequest(message: VerifyInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyInitRequest(message: VerifyInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 key = 3;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $key);
  }
}

export function decodeVerifyInitRequest(binary: Uint8Array): VerifyInitRequest {
  return _decodeVerifyInitRequest(wrapByteBuffer(binary));
}

function _decodeVerifyInitRequest(bb: ByteBuffer): VerifyInitRequest {
  let message: VerifyInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 key = 3;
      case 3: {
        message.key = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyInitResponse {
  error?: string;
}

export function encodeVerifyInitResponse(message: VerifyInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyInitResponse(message: VerifyInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeVerifyInitResponse(binary: Uint8Array): VerifyInitResponse {
  return _decodeVerifyInitResponse(wrapByteBuffer(binary));
}

function _decodeVerifyInitResponse(bb: ByteBuffer): VerifyInitResponse {
  let message: VerifyInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyRequest {
  sessionHandle?: Long;
  data?: Uint8Array;
  signature?: Uint8Array;
}

export function encodeVerifyRequest(message: VerifyRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyRequest(message: VerifyRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes data = 2;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }

  // optional bytes signature = 3;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 26);
    writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
  }
}

export function decodeVerifyRequest(binary: Uint8Array): VerifyRequest {
  return _decodeVerifyRequest(wrapByteBuffer(binary));
}

function _decodeVerifyRequest(bb: ByteBuffer): VerifyRequest {
  let message: VerifyRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes data = 2;
      case 2: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional bytes signature = 3;
      case 3: {
        message.signature = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyResponse {
  error?: string;
}

export function encodeVerifyResponse(message: VerifyResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyResponse(message: VerifyResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeVerifyResponse(binary: Uint8Array): VerifyResponse {
  return _decodeVerifyResponse(wrapByteBuffer(binary));
}

function _decodeVerifyResponse(bb: ByteBuffer): VerifyResponse {
  let message: VerifyResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyUpdateRequest {
  sessionHandle?: Long;
  part?: Uint8Array;
}

export function encodeVerifyUpdateRequest(message: VerifyUpdateRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyUpdateRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyUpdateRequest(message: VerifyUpdateRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes part = 2;
  let $part = message.part;
  if ($part !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $part.length), writeBytes(bb, $part);
  }
}

export function decodeVerifyUpdateRequest(binary: Uint8Array): VerifyUpdateRequest {
  return _decodeVerifyUpdateRequest(wrapByteBuffer(binary));
}

function _decodeVerifyUpdateRequest(bb: ByteBuffer): VerifyUpdateRequest {
  let message: VerifyUpdateRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes part = 2;
      case 2: {
        message.part = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyUpdateResponse {
  error?: string;
}

export function encodeVerifyUpdateResponse(message: VerifyUpdateResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyUpdateResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyUpdateResponse(message: VerifyUpdateResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeVerifyUpdateResponse(binary: Uint8Array): VerifyUpdateResponse {
  return _decodeVerifyUpdateResponse(wrapByteBuffer(binary));
}

function _decodeVerifyUpdateResponse(bb: ByteBuffer): VerifyUpdateResponse {
  let message: VerifyUpdateResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyFinalRequest {
  sessionHandle?: Long;
  signature?: Uint8Array;
}

export function encodeVerifyFinalRequest(message: VerifyFinalRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyFinalRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyFinalRequest(message: VerifyFinalRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes signature = 2;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
  }
}

export function decodeVerifyFinalRequest(binary: Uint8Array): VerifyFinalRequest {
  return _decodeVerifyFinalRequest(wrapByteBuffer(binary));
}

function _decodeVerifyFinalRequest(bb: ByteBuffer): VerifyFinalRequest {
  let message: VerifyFinalRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes signature = 2;
      case 2: {
        message.signature = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyFinalResponse {
  error?: string;
}

export function encodeVerifyFinalResponse(message: VerifyFinalResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyFinalResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyFinalResponse(message: VerifyFinalResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeVerifyFinalResponse(binary: Uint8Array): VerifyFinalResponse {
  return _decodeVerifyFinalResponse(wrapByteBuffer(binary));
}

function _decodeVerifyFinalResponse(bb: ByteBuffer): VerifyFinalResponse {
  let message: VerifyFinalResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyRecoverInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  key?: Long;
}

export function encodeVerifyRecoverInitRequest(message: VerifyRecoverInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyRecoverInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyRecoverInitRequest(message: VerifyRecoverInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 key = 3;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $key);
  }
}

export function decodeVerifyRecoverInitRequest(binary: Uint8Array): VerifyRecoverInitRequest {
  return _decodeVerifyRecoverInitRequest(wrapByteBuffer(binary));
}

function _decodeVerifyRecoverInitRequest(bb: ByteBuffer): VerifyRecoverInitRequest {
  let message: VerifyRecoverInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 key = 3;
      case 3: {
        message.key = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyRecoverInitResponse {
  error?: string;
}

export function encodeVerifyRecoverInitResponse(message: VerifyRecoverInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyRecoverInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyRecoverInitResponse(message: VerifyRecoverInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeVerifyRecoverInitResponse(binary: Uint8Array): VerifyRecoverInitResponse {
  return _decodeVerifyRecoverInitResponse(wrapByteBuffer(binary));
}

function _decodeVerifyRecoverInitResponse(bb: ByteBuffer): VerifyRecoverInitResponse {
  let message: VerifyRecoverInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyRecoverRequest {
  sessionHandle?: Long;
  signature?: Uint8Array;
}

export function encodeVerifyRecoverRequest(message: VerifyRecoverRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyRecoverRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyRecoverRequest(message: VerifyRecoverRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes signature = 2;
  let $signature = message.signature;
  if ($signature !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $signature.length), writeBytes(bb, $signature);
  }
}

export function decodeVerifyRecoverRequest(binary: Uint8Array): VerifyRecoverRequest {
  return _decodeVerifyRecoverRequest(wrapByteBuffer(binary));
}

function _decodeVerifyRecoverRequest(bb: ByteBuffer): VerifyRecoverRequest {
  let message: VerifyRecoverRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes signature = 2;
      case 2: {
        message.signature = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface VerifyRecoverResponse {
  data?: Uint8Array;
  error?: string;
}

export function encodeVerifyRecoverResponse(message: VerifyRecoverResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeVerifyRecoverResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeVerifyRecoverResponse(message: VerifyRecoverResponse, bb: ByteBuffer): void {
  // optional bytes data = 1;
  let $data = message.data;
  if ($data !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $data.length), writeBytes(bb, $data);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeVerifyRecoverResponse(binary: Uint8Array): VerifyRecoverResponse {
  return _decodeVerifyRecoverResponse(wrapByteBuffer(binary));
}

function _decodeVerifyRecoverResponse(bb: ByteBuffer): VerifyRecoverResponse {
  let message: VerifyRecoverResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes data = 1;
      case 1: {
        message.data = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestInitRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
}

export function encodeDigestInitRequest(message: DigestInitRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestInitRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestInitRequest(message: DigestInitRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeDigestInitRequest(binary: Uint8Array): DigestInitRequest {
  return _decodeDigestInitRequest(wrapByteBuffer(binary));
}

function _decodeDigestInitRequest(bb: ByteBuffer): DigestInitRequest {
  let message: DigestInitRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestInitResponse {
  error?: string;
}

export function encodeDigestInitResponse(message: DigestInitResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestInitResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestInitResponse(message: DigestInitResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeDigestInitResponse(binary: Uint8Array): DigestInitResponse {
  return _decodeDigestInitResponse(wrapByteBuffer(binary));
}

function _decodeDigestInitResponse(bb: ByteBuffer): DigestInitResponse {
  let message: DigestInitResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestRequest {
  sessionHandle?: Long;
  message?: Uint8Array;
}

export function encodeDigestRequest(message: DigestRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestRequest(message: DigestRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes message = 2;
  let $message = message.message;
  if ($message !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $message.length), writeBytes(bb, $message);
  }
}

export function decodeDigestRequest(binary: Uint8Array): DigestRequest {
  return _decodeDigestRequest(wrapByteBuffer(binary));
}

function _decodeDigestRequest(bb: ByteBuffer): DigestRequest {
  let message: DigestRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes message = 2;
      case 2: {
        message.message = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestResponse {
  digest?: Uint8Array;
  error?: string;
}

export function encodeDigestResponse(message: DigestResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestResponse(message: DigestResponse, bb: ByteBuffer): void {
  // optional bytes digest = 1;
  let $digest = message.digest;
  if ($digest !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $digest.length), writeBytes(bb, $digest);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeDigestResponse(binary: Uint8Array): DigestResponse {
  return _decodeDigestResponse(wrapByteBuffer(binary));
}

function _decodeDigestResponse(bb: ByteBuffer): DigestResponse {
  let message: DigestResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes digest = 1;
      case 1: {
        message.digest = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestUpdateRequest {
  sessionHandle?: Long;
  message?: Uint8Array;
}

export function encodeDigestUpdateRequest(message: DigestUpdateRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestUpdateRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestUpdateRequest(message: DigestUpdateRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes message = 2;
  let $message = message.message;
  if ($message !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $message.length), writeBytes(bb, $message);
  }
}

export function decodeDigestUpdateRequest(binary: Uint8Array): DigestUpdateRequest {
  return _decodeDigestUpdateRequest(wrapByteBuffer(binary));
}

function _decodeDigestUpdateRequest(bb: ByteBuffer): DigestUpdateRequest {
  let message: DigestUpdateRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes message = 2;
      case 2: {
        message.message = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestUpdateResponse {
  error?: string;
}

export function encodeDigestUpdateResponse(message: DigestUpdateResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestUpdateResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestUpdateResponse(message: DigestUpdateResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeDigestUpdateResponse(binary: Uint8Array): DigestUpdateResponse {
  return _decodeDigestUpdateResponse(wrapByteBuffer(binary));
}

function _decodeDigestUpdateResponse(bb: ByteBuffer): DigestUpdateResponse {
  let message: DigestUpdateResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestKeyRequest {
  sessionHandle?: Long;
  key?: Long;
}

export function encodeDigestKeyRequest(message: DigestKeyRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestKeyRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestKeyRequest(message: DigestKeyRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional uint64 key = 2;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $key);
  }
}

export function decodeDigestKeyRequest(binary: Uint8Array): DigestKeyRequest {
  return _decodeDigestKeyRequest(wrapByteBuffer(binary));
}

function _decodeDigestKeyRequest(bb: ByteBuffer): DigestKeyRequest {
  let message: DigestKeyRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 key = 2;
      case 2: {
        message.key = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestKeyResponse {
  error?: string;
}

export function encodeDigestKeyResponse(message: DigestKeyResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestKeyResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestKeyResponse(message: DigestKeyResponse, bb: ByteBuffer): void {
  // optional string error = 1;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $error);
  }
}

export function decodeDigestKeyResponse(binary: Uint8Array): DigestKeyResponse {
  return _decodeDigestKeyResponse(wrapByteBuffer(binary));
}

function _decodeDigestKeyResponse(bb: ByteBuffer): DigestKeyResponse {
  let message: DigestKeyResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 1;
      case 1: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestFinalRequest {
  sessionHandle?: Long;
}

export function encodeDigestFinalRequest(message: DigestFinalRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestFinalRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestFinalRequest(message: DigestFinalRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }
}

export function decodeDigestFinalRequest(binary: Uint8Array): DigestFinalRequest {
  return _decodeDigestFinalRequest(wrapByteBuffer(binary));
}

function _decodeDigestFinalRequest(bb: ByteBuffer): DigestFinalRequest {
  let message: DigestFinalRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DigestFinalResponse {
  digest?: Uint8Array;
  error?: string;
}

export function encodeDigestFinalResponse(message: DigestFinalResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDigestFinalResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDigestFinalResponse(message: DigestFinalResponse, bb: ByteBuffer): void {
  // optional bytes digest = 1;
  let $digest = message.digest;
  if ($digest !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $digest.length), writeBytes(bb, $digest);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeDigestFinalResponse(binary: Uint8Array): DigestFinalResponse {
  return _decodeDigestFinalResponse(wrapByteBuffer(binary));
}

function _decodeDigestFinalResponse(bb: ByteBuffer): DigestFinalResponse {
  let message: DigestFinalResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes digest = 1;
      case 1: {
        message.digest = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GenerateKeyRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  template?: Attribute[];
}

export function encodeGenerateKeyRequest(message: GenerateKeyRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeGenerateKeyRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeGenerateKeyRequest(message: GenerateKeyRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated Attribute template = 3;
  let array$template = message.template;
  if (array$template !== undefined) {
    for (let value of array$template) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeGenerateKeyRequest(binary: Uint8Array): GenerateKeyRequest {
  return _decodeGenerateKeyRequest(wrapByteBuffer(binary));
}

function _decodeGenerateKeyRequest(bb: ByteBuffer): GenerateKeyRequest {
  let message: GenerateKeyRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // repeated Attribute template = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.template || (message.template = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GenerateKeyResponse {
  objectHandle?: Long;
  error?: string;
}

export function encodeGenerateKeyResponse(message: GenerateKeyResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeGenerateKeyResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeGenerateKeyResponse(message: GenerateKeyResponse, bb: ByteBuffer): void {
  // optional uint64 objectHandle = 1;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $objectHandle);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeGenerateKeyResponse(binary: Uint8Array): GenerateKeyResponse {
  return _decodeGenerateKeyResponse(wrapByteBuffer(binary));
}

function _decodeGenerateKeyResponse(bb: ByteBuffer): GenerateKeyResponse {
  let message: GenerateKeyResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 objectHandle = 1;
      case 1: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GenerateKeyPairRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  publicTemplate?: Attribute[];
  privateTemplate?: Attribute[];
}

export function encodeGenerateKeyPairRequest(message: GenerateKeyPairRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeGenerateKeyPairRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeGenerateKeyPairRequest(message: GenerateKeyPairRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated Attribute publicTemplate = 3;
  let array$publicTemplate = message.publicTemplate;
  if (array$publicTemplate !== undefined) {
    for (let value of array$publicTemplate) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated Attribute privateTemplate = 4;
  let array$privateTemplate = message.privateTemplate;
  if (array$privateTemplate !== undefined) {
    for (let value of array$privateTemplate) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeGenerateKeyPairRequest(binary: Uint8Array): GenerateKeyPairRequest {
  return _decodeGenerateKeyPairRequest(wrapByteBuffer(binary));
}

function _decodeGenerateKeyPairRequest(bb: ByteBuffer): GenerateKeyPairRequest {
  let message: GenerateKeyPairRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // repeated Attribute publicTemplate = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.publicTemplate || (message.publicTemplate = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      // repeated Attribute privateTemplate = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.privateTemplate || (message.privateTemplate = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GenerateKeyPairResponse {
  publicObjectHandle?: Long;
  privateObjectHandle?: Long;
  error?: string;
}

export function encodeGenerateKeyPairResponse(message: GenerateKeyPairResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeGenerateKeyPairResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeGenerateKeyPairResponse(message: GenerateKeyPairResponse, bb: ByteBuffer): void {
  // optional uint64 publicObjectHandle = 1;
  let $publicObjectHandle = message.publicObjectHandle;
  if ($publicObjectHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $publicObjectHandle);
  }

  // optional uint64 privateObjectHandle = 2;
  let $privateObjectHandle = message.privateObjectHandle;
  if ($privateObjectHandle !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $privateObjectHandle);
  }

  // optional string error = 3;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $error);
  }
}

export function decodeGenerateKeyPairResponse(binary: Uint8Array): GenerateKeyPairResponse {
  return _decodeGenerateKeyPairResponse(wrapByteBuffer(binary));
}

function _decodeGenerateKeyPairResponse(bb: ByteBuffer): GenerateKeyPairResponse {
  let message: GenerateKeyPairResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 publicObjectHandle = 1;
      case 1: {
        message.publicObjectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 privateObjectHandle = 2;
      case 2: {
        message.privateObjectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 3;
      case 3: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface WrapKeyRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  wrappingKey?: Long;
  key?: Long;
}

export function encodeWrapKeyRequest(message: WrapKeyRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeWrapKeyRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeWrapKeyRequest(message: WrapKeyRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 wrappingKey = 3;
  let $wrappingKey = message.wrappingKey;
  if ($wrappingKey !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $wrappingKey);
  }

  // optional uint64 key = 4;
  let $key = message.key;
  if ($key !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $key);
  }
}

export function decodeWrapKeyRequest(binary: Uint8Array): WrapKeyRequest {
  return _decodeWrapKeyRequest(wrapByteBuffer(binary));
}

function _decodeWrapKeyRequest(bb: ByteBuffer): WrapKeyRequest {
  let message: WrapKeyRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 wrappingKey = 3;
      case 3: {
        message.wrappingKey = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional uint64 key = 4;
      case 4: {
        message.key = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface WrapKeyResponse {
  wrappedKey?: Uint8Array;
  error?: string;
}

export function encodeWrapKeyResponse(message: WrapKeyResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeWrapKeyResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeWrapKeyResponse(message: WrapKeyResponse, bb: ByteBuffer): void {
  // optional bytes wrappedKey = 1;
  let $wrappedKey = message.wrappedKey;
  if ($wrappedKey !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $wrappedKey.length), writeBytes(bb, $wrappedKey);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeWrapKeyResponse(binary: Uint8Array): WrapKeyResponse {
  return _decodeWrapKeyResponse(wrapByteBuffer(binary));
}

function _decodeWrapKeyResponse(bb: ByteBuffer): WrapKeyResponse {
  let message: WrapKeyResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes wrappedKey = 1;
      case 1: {
        message.wrappedKey = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UnwrapKeyRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  unwrappingKey?: Long;
  wrappedKey?: Uint8Array;
  template?: Attribute[];
}

export function encodeUnwrapKeyRequest(message: UnwrapKeyRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeUnwrapKeyRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeUnwrapKeyRequest(message: UnwrapKeyRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 unwrappingKey = 3;
  let $unwrappingKey = message.unwrappingKey;
  if ($unwrappingKey !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $unwrappingKey);
  }

  // optional bytes wrappedKey = 4;
  let $wrappedKey = message.wrappedKey;
  if ($wrappedKey !== undefined) {
    writeVarint32(bb, 34);
    writeVarint32(bb, $wrappedKey.length), writeBytes(bb, $wrappedKey);
  }

  // repeated Attribute template = 5;
  let array$template = message.template;
  if (array$template !== undefined) {
    for (let value of array$template) {
      writeVarint32(bb, 42);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeUnwrapKeyRequest(binary: Uint8Array): UnwrapKeyRequest {
  return _decodeUnwrapKeyRequest(wrapByteBuffer(binary));
}

function _decodeUnwrapKeyRequest(bb: ByteBuffer): UnwrapKeyRequest {
  let message: UnwrapKeyRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 unwrappingKey = 3;
      case 3: {
        message.unwrappingKey = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes wrappedKey = 4;
      case 4: {
        message.wrappedKey = readBytes(bb, readVarint32(bb));
        break;
      }

      // repeated Attribute template = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        let values = message.template || (message.template = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UnwrapKeyResponse {
  objectHandle?: Long;
  error?: string;
}

export function encodeUnwrapKeyResponse(message: UnwrapKeyResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeUnwrapKeyResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeUnwrapKeyResponse(message: UnwrapKeyResponse, bb: ByteBuffer): void {
  // optional uint64 objectHandle = 1;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $objectHandle);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeUnwrapKeyResponse(binary: Uint8Array): UnwrapKeyResponse {
  return _decodeUnwrapKeyResponse(wrapByteBuffer(binary));
}

function _decodeUnwrapKeyResponse(bb: ByteBuffer): UnwrapKeyResponse {
  let message: UnwrapKeyResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 objectHandle = 1;
      case 1: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DeriveKeyRequest {
  sessionHandle?: Long;
  mechanisms?: Mechanism[];
  baseKey?: Long;
  template?: Attribute[];
}

export function encodeDeriveKeyRequest(message: DeriveKeyRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeDeriveKeyRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeDeriveKeyRequest(message: DeriveKeyRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // repeated Mechanism mechanisms = 2;
  let array$mechanisms = message.mechanisms;
  if (array$mechanisms !== undefined) {
    for (let value of array$mechanisms) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeMechanism(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint64 baseKey = 3;
  let $baseKey = message.baseKey;
  if ($baseKey !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $baseKey);
  }

  // repeated Attribute template = 4;
  let array$template = message.template;
  if (array$template !== undefined) {
    for (let value of array$template) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeAttribute(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeDeriveKeyRequest(binary: Uint8Array): DeriveKeyRequest {
  return _decodeDeriveKeyRequest(wrapByteBuffer(binary));
}

function _decodeDeriveKeyRequest(bb: ByteBuffer): DeriveKeyRequest {
  let message: DeriveKeyRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Mechanism mechanisms = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.mechanisms || (message.mechanisms = []);
        values.push(_decodeMechanism(bb));
        bb.limit = limit;
        break;
      }

      // optional uint64 baseKey = 3;
      case 3: {
        message.baseKey = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // repeated Attribute template = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.template || (message.template = []);
        values.push(_decodeAttribute(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface DeriveKeyResponse {
  objectHandle?: Long;
  error?: string;
}

export function encodeDeriveKeyResponse(message: DeriveKeyResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeDeriveKeyResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeDeriveKeyResponse(message: DeriveKeyResponse, bb: ByteBuffer): void {
  // optional uint64 objectHandle = 1;
  let $objectHandle = message.objectHandle;
  if ($objectHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $objectHandle);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeDeriveKeyResponse(binary: Uint8Array): DeriveKeyResponse {
  return _decodeDeriveKeyResponse(wrapByteBuffer(binary));
}

function _decodeDeriveKeyResponse(bb: ByteBuffer): DeriveKeyResponse {
  let message: DeriveKeyResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 objectHandle = 1;
      case 1: {
        message.objectHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SeedRandomRequest {
  sessionHandle?: Long;
  seed?: Uint8Array;
}

export function encodeSeedRandomRequest(message: SeedRandomRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSeedRandomRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSeedRandomRequest(message: SeedRandomRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional bytes seed = 2;
  let $seed = message.seed;
  if ($seed !== undefined) {
    writeVarint32(bb, 18);
    writeVarint32(bb, $seed.length), writeBytes(bb, $seed);
  }
}

export function decodeSeedRandomRequest(binary: Uint8Array): SeedRandomRequest {
  return _decodeSeedRandomRequest(wrapByteBuffer(binary));
}

function _decodeSeedRandomRequest(bb: ByteBuffer): SeedRandomRequest {
  let message: SeedRandomRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional bytes seed = 2;
      case 2: {
        message.seed = readBytes(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SeedRandomResponse {
  error?: string;
}

export function encodeSeedRandomResponse(message: SeedRandomResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeSeedRandomResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeSeedRandomResponse(message: SeedRandomResponse, bb: ByteBuffer): void {
  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeSeedRandomResponse(binary: Uint8Array): SeedRandomResponse {
  return _decodeSeedRandomResponse(wrapByteBuffer(binary));
}

function _decodeSeedRandomResponse(bb: ByteBuffer): SeedRandomResponse {
  let message: SeedRandomResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GenerateRandomRequest {
  sessionHandle?: Long;
  length?: number;
}

export function encodeGenerateRandomRequest(message: GenerateRandomRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeGenerateRandomRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeGenerateRandomRequest(message: GenerateRandomRequest, bb: ByteBuffer): void {
  // optional uint64 sessionHandle = 1;
  let $sessionHandle = message.sessionHandle;
  if ($sessionHandle !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $sessionHandle);
  }

  // optional int32 length = 2;
  let $length = message.length;
  if ($length !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($length));
  }
}

export function decodeGenerateRandomRequest(binary: Uint8Array): GenerateRandomRequest {
  return _decodeGenerateRandomRequest(wrapByteBuffer(binary));
}

function _decodeGenerateRandomRequest(bb: ByteBuffer): GenerateRandomRequest {
  let message: GenerateRandomRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 sessionHandle = 1;
      case 1: {
        message.sessionHandle = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional int32 length = 2;
      case 2: {
        message.length = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface GenerateRandomResponse {
  randomData?: Uint8Array;
  error?: string;
}

export function encodeGenerateRandomResponse(message: GenerateRandomResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeGenerateRandomResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeGenerateRandomResponse(message: GenerateRandomResponse, bb: ByteBuffer): void {
  // optional bytes randomData = 1;
  let $randomData = message.randomData;
  if ($randomData !== undefined) {
    writeVarint32(bb, 10);
    writeVarint32(bb, $randomData.length), writeBytes(bb, $randomData);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeGenerateRandomResponse(binary: Uint8Array): GenerateRandomResponse {
  return _decodeGenerateRandomResponse(wrapByteBuffer(binary));
}

function _decodeGenerateRandomResponse(bb: ByteBuffer): GenerateRandomResponse {
  let message: GenerateRandomResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional bytes randomData = 1;
      case 1: {
        message.randomData = readBytes(bb, readVarint32(bb));
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface WaitForSlotEventRequest {
  flags?: Long;
}

export function encodeWaitForSlotEventRequest(message: WaitForSlotEventRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeWaitForSlotEventRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeWaitForSlotEventRequest(message: WaitForSlotEventRequest, bb: ByteBuffer): void {
  // optional uint64 flags = 1;
  let $flags = message.flags;
  if ($flags !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $flags);
  }
}

export function decodeWaitForSlotEventRequest(binary: Uint8Array): WaitForSlotEventRequest {
  return _decodeWaitForSlotEventRequest(wrapByteBuffer(binary));
}

function _decodeWaitForSlotEventRequest(bb: ByteBuffer): WaitForSlotEventRequest {
  let message: WaitForSlotEventRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 flags = 1;
      case 1: {
        message.flags = readVarint64(bb, /* unsigned */ true);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface WaitForSlotEventResponse {
  slotID?: Long;
  error?: string;
}

export function encodeWaitForSlotEventResponse(message: WaitForSlotEventResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeWaitForSlotEventResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeWaitForSlotEventResponse(message: WaitForSlotEventResponse, bb: ByteBuffer): void {
  // optional uint64 slotID = 1;
  let $slotID = message.slotID;
  if ($slotID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $slotID);
  }

  // optional string error = 2;
  let $error = message.error;
  if ($error !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $error);
  }
}

export function decodeWaitForSlotEventResponse(binary: Uint8Array): WaitForSlotEventResponse {
  return _decodeWaitForSlotEventResponse(wrapByteBuffer(binary));
}

function _decodeWaitForSlotEventResponse(bb: ByteBuffer): WaitForSlotEventResponse {
  let message: WaitForSlotEventResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint64 slotID = 1;
      case 1: {
        message.slotID = readVarint64(bb, /* unsigned */ true);
        break;
      }

      // optional string error = 2;
      case 2: {
        message.error = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Long {
  low: number;
  high: number;
  unsigned: boolean;
}

interface ByteBuffer {
  bytes: Uint8Array;
  offset: number;
  limit: number;
}

function pushTemporaryLength(bb: ByteBuffer): number {
  let length = readVarint32(bb);
  let limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb: ByteBuffer, type: number): void {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value: string): Long {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value: Long): string {
  let low = value.low;
  let high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

let f32 = new Float32Array(1);
let f32_u8 = new Uint8Array(f32.buffer);

let f64 = new Float64Array(1);
let f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value: number): Long {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

let bbStack: ByteBuffer[] = [];

function popByteBuffer(): ByteBuffer {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb: ByteBuffer): void {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes: Uint8Array): ByteBuffer {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb: ByteBuffer): Uint8Array {
  let bytes = bb.bytes;
  let limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb: ByteBuffer, offset: number): void {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb: ByteBuffer): boolean {
  return bb.offset >= bb.limit;
}

function grow(bb: ByteBuffer, count: number): number {
  let bytes = bb.bytes;
  let offset = bb.offset;
  let limit = bb.limit;
  let finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    let newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb: ByteBuffer, count: number): number {
  let offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb: ByteBuffer, count: number): Uint8Array {
  let offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb: ByteBuffer, buffer: Uint8Array): void {
  let offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb: ByteBuffer, count: number): string {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  let offset = advance(bb, count);
  let fromCharCode = String.fromCharCode;
  let bytes = bb.bytes;
  let invalid = '\uFFFD';
  let text = '';

  for (let i = 0; i < count; i++) {
    let c1 = bytes[i + offset], c2: number, c3: number, c4: number, c: number;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb: ByteBuffer, text: string): void {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  let n = text.length;
  let byteCount = 0;

  // Write the byte count first
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  let offset = grow(bb, byteCount);
  let bytes = bb.bytes;

  // Then write the bytes
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb: ByteBuffer, buffer: ByteBuffer): void {
  let offset = grow(bb, buffer.limit);
  let from = bb.bytes;
  let to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (let i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb: ByteBuffer): number {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb: ByteBuffer): number {
  let offset = advance(bb, 8);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 8);
  let bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb: ByteBuffer, unsigned: boolean): Long {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb: ByteBuffer, value: Long): void {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb: ByteBuffer): number {
  let c = 0;
  let value = 0;
  let b: number;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb: ByteBuffer, value: number): void {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb: ByteBuffer, unsigned: boolean): Long {
  let part0 = 0;
  let part1 = 0;
  let part2 = 0;
  let b: number;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb: ByteBuffer, value: Long): void {
  let part0 = value.low >>> 0;
  let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  let part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  let size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  let offset = grow(bb, size);
  let bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb: ByteBuffer): number {
  let value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb: ByteBuffer, value: number): void {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb: ByteBuffer): Long {
  let value = readVarint64(bb, /* unsigned */ false);
  let low = value.low;
  let high = value.high;
  let flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void {
  let low = value.low;
  let high = value.high;
  let flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}
