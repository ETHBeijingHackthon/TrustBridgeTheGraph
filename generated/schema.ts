// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NFTCollectedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTCollectedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTCollectedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTCollectedEntity", id.toString(), this);
    }
  }

  static load(id: string): NFTCollectedEntity | null {
    return changetype<NFTCollectedEntity | null>(
      store.get("NFTCollectedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collector(): Bytes {
    let value = this.get("collector");
    return value!.toBytes();
  }

  set collector(value: Bytes) {
    this.set("collector", Value.fromBytes(value));
  }

  get nftId(): BigInt {
    let value = this.get("nftId");
    return value!.toBigInt();
  }

  set nftId(value: BigInt) {
    this.set("nftId", Value.fromBigInt(value));
  }
}

export class NFTCreatedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTCreatedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTCreatedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTCreatedEntity", id.toString(), this);
    }
  }

  static load(id: string): NFTCreatedEntity | null {
    return changetype<NFTCreatedEntity | null>(
      store.get("NFTCreatedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(<Bytes>value));
    }
  }

  get nftId(): BigInt | null {
    let value = this.get("nftId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nftId(value: BigInt | null) {
    if (!value) {
      this.unset("nftId");
    } else {
      this.set("nftId", Value.fromBigInt(<BigInt>value));
    }
  }

  get fid(): BigInt | null {
    let value = this.get("fid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set fid(value: BigInt | null) {
    if (!value) {
      this.unset("fid");
    } else {
      this.set("fid", Value.fromBigInt(<BigInt>value));
    }
  }

  get sort(): string | null {
    let value = this.get("sort");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sort(value: string | null) {
    if (!value) {
      this.unset("sort");
    } else {
      this.set("sort", Value.fromString(<string>value));
    }
  }

  get coverUri(): string | null {
    let value = this.get("coverUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set coverUri(value: string | null) {
    if (!value) {
      this.unset("coverUri");
    } else {
      this.set("coverUri", Value.fromString(<string>value));
    }
  }

  get mediaType(): string | null {
    let value = this.get("mediaType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mediaType(value: string | null) {
    if (!value) {
      this.unset("mediaType");
    } else {
      this.set("mediaType", Value.fromString(<string>value));
    }
  }

  get multimedia(): string | null {
    let value = this.get("multimedia");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set multimedia(value: string | null) {
    if (!value) {
      this.unset("multimedia");
    } else {
      this.set("multimedia", Value.fromString(<string>value));
    }
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get score(): BigInt | null {
    let value = this.get("score");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set score(value: BigInt | null) {
    if (!value) {
      this.unset("score");
    } else {
      this.set("score", Value.fromBigInt(<BigInt>value));
    }
  }

  get reviewCount(): BigInt | null {
    let value = this.get("reviewCount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set reviewCount(value: BigInt | null) {
    if (!value) {
      this.unset("reviewCount");
    } else {
      this.set("reviewCount", Value.fromBigInt(<BigInt>value));
    }
  }

  get collectCount(): BigInt | null {
    let value = this.get("collectCount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set collectCount(value: BigInt | null) {
    if (!value) {
      this.unset("collectCount");
    } else {
      this.set("collectCount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class NFTReviewedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTReviewedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NFTReviewedEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NFTReviewedEntity", id.toString(), this);
    }
  }

  static load(id: string): NFTReviewedEntity | null {
    return changetype<NFTReviewedEntity | null>(
      store.get("NFTReviewedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reviewer(): Bytes {
    let value = this.get("reviewer");
    return value!.toBytes();
  }

  set reviewer(value: Bytes) {
    this.set("reviewer", Value.fromBytes(value));
  }

  get nftId(): BigInt {
    let value = this.get("nftId");
    return value!.toBigInt();
  }

  set nftId(value: BigInt) {
    this.set("nftId", Value.fromBigInt(value));
  }

  get score(): BigInt {
    let value = this.get("score");
    return value!.toBigInt();
  }

  set score(value: BigInt) {
    this.set("score", Value.fromBigInt(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get mediaType(): string | null {
    let value = this.get("mediaType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mediaType(value: string | null) {
    if (!value) {
      this.unset("mediaType");
    } else {
      this.set("mediaType", Value.fromString(<string>value));
    }
  }

  get multimedia(): string | null {
    let value = this.get("multimedia");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set multimedia(value: string | null) {
    if (!value) {
      this.unset("multimedia");
    } else {
      this.set("multimedia", Value.fromString(<string>value));
    }
  }
}
