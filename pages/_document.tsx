import { Head, Html, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '../lib/gtag'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>bootch</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Yomogi&family=Zen+Kaku+Gothic+New:wght@300&family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="bootchです" />
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
