import React from 'react'
import Head from 'next/head'
import { Container } from '@/GlobalStyles'
import { List } from '@/components/List'

export const Home = React.memo(
  (): JSX.Element => {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <List />
        </Container>
      </>
    )
  }
)

export default Home
