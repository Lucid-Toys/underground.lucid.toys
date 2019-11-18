import { css, Global } from "@emotion/core"
import Document, { Head, Html, Main, NextScript } from "next/document"

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --light: #f7f7f7;
        --dark: #1a1a1a;
        --med: #808080;
        --interactive: rgb(0, 150, 255);
        --interactive-alpha: rgb(0, 150, 255, 0.25);
        --focus: #f3bf4e;
        --danger: rgb(227, 61, 38);
        --safety: #579d1f;
        --warning: #e4b500;

        --foreground: var(--light);
        --background: var(--dark);

        --fontStack: "IBM Plex Sans", -apple-system, system-ui,
          BlinkMacSystemFont, sans-serif;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --foreground: var(--light);
          --background: var(--dark);
        }
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
      }

      html {
        font: 100%/1.25 var(--fontStack);
        color: var(--foreground);
        background-color: var(--background);
      }

      body,
      #__next {
        min-height: 100vh;
      }

      #__next {
        display: flex;
        flex-direction: column;
      }
    `}
  />
)

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
          <link rel="apple-touch-icon" href="/images/app-icon.png" />
          <link rel="shortcut icon" href="/images/app-icon.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Underground" />
        </Head>
        <body>
          <GlobalStyles />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default UndergroundDocument
