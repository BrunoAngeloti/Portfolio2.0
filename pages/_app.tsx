import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../styles/globals'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />      
    </ThemeProvider>
  )
}

export default MyApp
