import Document, { Head, Html, Main, NextScript } from "next/document"

class UndergroundDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default UndergroundDocument
