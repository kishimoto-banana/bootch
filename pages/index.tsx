import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="bootchです" />
        <meta property="og:site_name" content="bootch" />
        <meta property="og:title" content="bootch" />
        <meta property="og:description" content="bootchです" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bootch.app/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://bootch.app/" />
      </Head>
      <div>
        <main className="flex min-h-screen">
          <div className="w-1/6 md:w-1/4"></div>
          <div className="flex flex-col">
            <div className="h-1/3"></div>
            <div className="mb-8">
              <p className="text-md pb-2 font-semibold md:text-lg">
                私が作りました
              </p>
              <div className="grid grid-cols-1 gap-2 lg:flex lg:flex-row lg:gap-0 lg:space-x-4">
                <a
                  href="https://ftune-web.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md  underline underline-offset-1 hover:text-gray-600 md:text-lg"
                >
                  Ftune
                </a>
                <Link href="/kurashiru-favs">
                  <a className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg">
                    ぼくのクラシルお気に入りレシピ
                  </a>
                </Link>
                <a
                  href="https://owarai-eikyo-map.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg"
                >
                  お笑い影響マップ
                </a>
                <a
                  href="https://tokakuka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg"
                >
                  トカクカ
                </a>
              </div>
            </div>

            <p className="text-md pb-2 font-semibold md:text-lg">生産者</p>
            <div className="flex flex-row space-x-4">
              <a
                href="https://twitter.com/unpuy_tw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg"
              >
                Twitter
              </a>
              <a
                href="https://github.com/kishimoto-banana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg"
              >
                GitHub
              </a>
              <a
                href="https://pompom168.hatenablog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg"
              >
                はてなブログ
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
