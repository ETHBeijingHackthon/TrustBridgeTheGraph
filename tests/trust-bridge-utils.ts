import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  NFTCollected,
  NFTCreated,
  NFTReviewed,
  Transfer
} from "../generated/TrustBridge/TrustBridge"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createNFTCollectedEvent(
  nftId: BigInt,
  collector: Address,
  NFTCollected: BigInt
): NFTCollected {
  let nftCollectedEvent = changetype<NFTCollected>(newMockEvent())

  nftCollectedEvent.parameters = new Array()

  nftCollectedEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  nftCollectedEvent.parameters.push(
    new ethereum.EventParam("collector", ethereum.Value.fromAddress(collector))
  )
  nftCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "NFTCollected",
      ethereum.Value.fromUnsignedBigInt(NFTCollected)
    )
  )

  return nftCollectedEvent
}

export function createNFTCreatedEvent(
  id: BigInt,
  fid: BigInt,
  sort: string,
  owner: Address,
  cover: string,
  multimedia: string,
  title: string,
  description: string
): NFTCreated {
  let nftCreatedEvent = changetype<NFTCreated>(newMockEvent())

  nftCreatedEvent.parameters = new Array()

  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("fid", ethereum.Value.fromUnsignedBigInt(fid))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("sort", ethereum.Value.fromString(sort))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("cover", ethereum.Value.fromString(cover))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("multimedia", ethereum.Value.fromString(multimedia))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  nftCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return nftCreatedEvent
}

export function createNFTReviewedEvent(
  nftId: BigInt,
  reviewId: BigInt,
  nftScore: BigInt,
  reviewer: Address,
  score: BigInt,
  description: string,
  multimedia: string
): NFTReviewed {
  let nftReviewedEvent = changetype<NFTReviewed>(newMockEvent())

  nftReviewedEvent.parameters = new Array()

  nftReviewedEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  nftReviewedEvent.parameters.push(
    new ethereum.EventParam(
      "reviewId",
      ethereum.Value.fromUnsignedBigInt(reviewId)
    )
  )
  nftReviewedEvent.parameters.push(
    new ethereum.EventParam(
      "nftScore",
      ethereum.Value.fromUnsignedBigInt(nftScore)
    )
  )
  nftReviewedEvent.parameters.push(
    new ethereum.EventParam("reviewer", ethereum.Value.fromAddress(reviewer))
  )
  nftReviewedEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )
  nftReviewedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  nftReviewedEvent.parameters.push(
    new ethereum.EventParam("multimedia", ethereum.Value.fromString(multimedia))
  )

  return nftReviewedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
