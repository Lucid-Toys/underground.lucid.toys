import App from "next/app"
import Head from "next/head"
import Router from "next/router"
import React from "react"
import * as gtag from "../utils/gtag"

Router.events.on("routeChangeComplete", url => gtag.pageview(url))

export default class UndergroundApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Underground | Lucid Toys</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
