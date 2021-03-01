const defaultOwnerID = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91'
const defaultOffset = 0
const defaultLimit = 20

export const baseUrl = 'https://api.opensea.io'

export const fetchAssets = async (
  offset = defaultOffset,
  limit = defaultLimit,
  owner = defaultOwnerID
) =>
  await fetch(
    `${baseUrl}/api/v1/assets?` +
      new URLSearchParams({
        owner,
        limit: String(limit),
        offset: String(offset),
      }),
    {
      method: 'GET',
    }
  ).then((response) => response.json())

export const fetchAsset = async (contractAddress: string, tokenId: string) =>
  await fetch(`${baseUrl}/api/v1/asset/${contractAddress}/${tokenId}`, {
    method: 'GET',
  }).then((response) => response.json())
