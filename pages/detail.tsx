import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { fetchAsset } from '@/api'
import { FlexCenterContainer } from '@/GlobalStyles'
import { useRouter } from 'next/router'

export const Detail: React.FC<{data: any[]}> = React.memo(
  ({ data }) => {
    const router = useRouter()

    /**
     * not sure the spec wanna refresh current page again or go outside link..?
     */
    const goPermalLink = () => {
      // TODO: handle permalink.
      console.log('goPermalLink: ', data.permalink)
    }

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DetailContainer>
          <FlexCenterLeftContainer>
            <LeftArrow onClick={() => router.back()} />
            <h1>{data.collection.name}</h1>
          </FlexCenterLeftContainer>
          <Img src={data.image_url} />
          <h2>{data.name}</h2>
          <h2>{data.description}</h2>
          <Button onClick={goPermalLink}>permallink</Button>
        </DetailContainer>
      </>
    )
  }
)

export async function getServerSideProps(ctx) {
  const { contractAddress, tokenId } = ctx.query
  const data = await fetchAsset(contractAddress, tokenId)

  return { props: { data } }
}

export default Detail

const DetailContainer = styled.div`
  text-align: center;
  margin: 40px 20px 100px;
`

const FlexCenterLeftContainer = styled(FlexCenterContainer)`
  > i,
  h1 {
    margin-right: auto;
  }
`

const LeftArrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  cursor: pointer;
`

const Img = styled.img`
  width: 100%;
`

const Button = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #d8d8d8;
`
