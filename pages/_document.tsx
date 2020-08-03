import { css, Global } from '@emotion/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ReactComponentElement } from 'react'
import { GA_TRACKING_ID } from '../utils/gtag'

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --light: #f7f7f7;
        --dark: #1a1a1a;
        --med: #808080;
        --interactive: rgb(0, 104, 179);
        --interactive-alpha: rgb(0, 150, 255, 0.25);
        --focus: #f3bf4e;
        --danger: rgb(227, 61, 38);
        --safety: #579d1f;
        --warning: #e4b500;

        --foreground: var(--light);
        --background: var(--dark);

        --fontStack: 'Inter', -apple-system, system-ui, BlinkMacSystemFont,
          sans-serif;
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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): ReactComponentElement<typeof Html> {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            content="Lucid Underground shows you the current real-time status for the London Underground, DLR, TfL Rail, and London Overground in a minimal, no-fuss interface."
            name="Description"
          />
          <meta content="#0068b3" name="theme-color" />
          <link
            href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/inter.css"
            rel="stylesheet"
          />
          <link href="/images/favicon.png" rel="shortcut icon" />
          <link href="/images/app-icon.png" rel="apple-touch-icon" />
          <link href="/images/app-icon.png" rel="shortcut icon" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="Underground" name="apple-mobile-web-app-title" />
          <meta content="yes" name="mobile-web-app-capable" />
          <link href="/manifest.json" rel="manifest" />
          <link
            as="fetch"
            crossOrigin="anonymous"
            href="/api/data"
            rel="preload"
          />
          <link href="https://www.google-analytics.com" rel="preconnect" />
          <link href="https://www.googletagmanager.com" rel="preconnect" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
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
