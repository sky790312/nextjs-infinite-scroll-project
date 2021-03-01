import styled from 'styled-components'
import { useRouter } from 'next/router'

interface Props {
  name: string
  thumbnail: string
  tokenId: number
  contractAddress: string
}

export const Item: React.FC<Props> = ({
  name,
  thumbnail,
  tokenId,
  contractAddress,
}) => {
  const router = useRouter()

  const goDetail = () =>
    router.push({
      pathname: '/detail',
      query: { contractAddress, tokenId },
    })

  return (
    <ItemContainer onClick={goDetail}>
      <img src={thumbnail} />
      <h3>{name}</h3>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
