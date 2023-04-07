import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import {
  NFTCollected,
  NFTCreated,
  NFTReviewed,
} from '../generated/TrustBridge/TrustBridge'
import {
  NFTCollectedEntity,
  NFTCreatedEntity,
  NFTReviewedEntity,
} from '../generated/schema'

export function handleNFTCollected(event: NFTCollected): void {
  let entity = new NFTCollectedEntity(event.transaction.hash.toHex())
  entity.collector = event.params.collector
  entity.nftId = event.params.nftId
  entity.save()

  let nftCreatedEntity = NFTCreatedEntity.load(event.params.nftId.toHex())
  if (nftCreatedEntity == null) {
    nftCreatedEntity = new NFTCreatedEntity(event.params.nftId.toHex())
  }
  nftCreatedEntity.collectCount = event.params.NFTCollected
  nftCreatedEntity.save()
}

export function handleNFTCreated(event: NFTCreated): void {
  let entity = new NFTCreatedEntity(event.params.id.toHex())
  entity.owner = event.params.owner
  entity.nftId = event.params.id
  entity.fid = event.params.fid
  entity.sort = event.params.sort
  entity.coverUri = event.params.cover
  entity.mediaType = event.params.mediaType
  entity.multimedia = event.params.multimedia
  entity.title = event.params.title
  entity.description = event.params.description
  entity.score = BigInt.fromI32(0)
  entity.reviewCount = BigInt.fromI32(0)
  entity.collectCount = BigInt.fromI32(0)
  entity.save()
}

export function handleNFTReviewed(event: NFTReviewed): void {
  let entity = new NFTReviewedEntity(event.params.reviewId.toHex())
  entity.reviewer = event.params.reviewer
  entity.nftId = event.params.nftId
  entity.score = event.params.score
  entity.description = event.params.description
  entity.mediaType = event.params.mediaType
  entity.multimedia = event.params.multimedia
  entity.save()

  let nftCreatedEntity = NFTCreatedEntity.load(event.params.nftId.toHex())
  if (nftCreatedEntity == null) {
    nftCreatedEntity = new NFTCreatedEntity(event.params.nftId.toHex())
  }
  nftCreatedEntity.score = event.params.nftScore
  nftCreatedEntity.reviewCount = event.params.reviewCount
  nftCreatedEntity.save()
}

// export function handleTransfer(event: Transfer): void {}

// function fromHexString(arg0: string): import('@graphprotocol/graph-ts').Bytes {
//   throw new Error('Function not implemented.')
// }
