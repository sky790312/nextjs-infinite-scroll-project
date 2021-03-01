import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media (min-width: 1140px) {
    width: 1140px;
  }
`

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#929292',
    blue: '#1434d8',
    lightBlue: '#099bdd',
  },
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
