import { css, Global } from "@emotion/core"
import fetch from "isomorphic-unfetch"
import TFLLineStatusList from "../components/TFLLineStatusList"
import Timeline from "../components/Timeline"

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
        font: 115%/1.25 var(--fontStack);
        min-height: 100%;
        color: var(--foreground);
        background-color: var(--background);
      }

      body,
      #__next {
        min-height: 100vh;
      }

      #__next {
        display: flex;
      }
    `}
  />
)

const Index = ({ lineStatuses }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <TFLLineStatusList lineStatuses={lineStatuses} />
      <Timeline />
    </React.Fragment>
  )
}

Index.getInitialProps = async function() {
  const result = await fetch("https://api.tfl.gov.uk/line/mode/tube/status")
  const data = await result.json()

  return {
    lineStatuses: data,
  }
}

export default Index
