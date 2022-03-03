import { Head, Html, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '../lib/gtag'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Yomogi&family=Zen+Kaku+Gothic+New:wght@300&family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
        <GoogleAnalytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
