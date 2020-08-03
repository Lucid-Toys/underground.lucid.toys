import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React, { ReactElement } from 'react'
import * as gtag from '../utils/gtag'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default class UndergroundApp extends App {
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
