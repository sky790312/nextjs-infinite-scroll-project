import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchAssets } from '@/api'
import { Item } from '@/components/Item'
import { Spinner } from '@/components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export const List: React.FC = () => {
  const [assets, setAssets] = useState([])
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const fetchData = async () => {
    try {
      const data = await fetchAssets(offset)
      const { assets: newAssets = [] } = data
      setAssets([...assets, ...newAssets])
      setOffset((prevOffset) => prevOffset + 20)
      !newAssets.length && setHasMore(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ListContainer>
      <InfiniteScroll
        dataLength={assets?.length ?? 0}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        {assets?.map((asset) => (
          <Item
            key={asset.id}
            name={asset.name}
            thumbnail={asset.image_thumbnail_url}
            contractAddress={asset.asset_contract.address}
            tokenId={asset.token_id}
          />
        ))}
      </InfiniteScroll>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  position: relative;
  padding: 50px;

  .infinite-scroll-component {
    display: flex;
    flex-wrap: wrap;
  }
`
