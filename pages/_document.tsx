import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) =>
            function enhance(props: any) {
              return sheet.collectStyles(<App {...props} />)
            }
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>

          <meta charSet="UTF-8" />
          <meta name="description" content="Site do desenvolvedor Bruno Angeloti" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://brunoangeloti.vercel.app/" />
          <meta property="og:url" content="https://brunoangeloti.vercel.app/" />
          <meta property="og:site_name" content="BRUNO ANGELOTI" />
          <link rel="icon" href="/favicon.svg" sizes="32x32"/>
          <link rel="icon" href="/favicon.svg" sizes="192x192"/>
          <link rel="apple-touch-icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:label1" content="Est. reading time"></meta>
          <meta name="twitter:data1" content="16 minutes"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}