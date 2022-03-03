import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>bootch</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="bootchです" />
        <meta property="og:site_name" content="bootch" />
        <meta property="og:title" content="bootch" />
        <meta property="og:description" content="bootchです" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bootch.app/" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://bootch.app/" />
      </Head>

      {children}
    </div>
  )
}

export default Layout
