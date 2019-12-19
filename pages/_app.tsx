import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React, { ReactElement } from 'react'
import * as gtag from '../utils/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default class UndergroundApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render(): ReactElement {
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
