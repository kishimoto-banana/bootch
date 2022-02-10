import Head from 'next/head'

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
const existsGaId = GA_ID !== ''

const GoogleAnalytics = () => {
  return (
    <>
      {existsGaId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
            }}
          />
        </>
      )}
    </>
  )
}

const Home = () => {
  return (
    <div>
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

      <main className="flex min-h-screen">
        <div className="w-1/6 md:w-1/3"></div>
        <div className="flex flex-col">
          <div className="h-1/3"></div>
          <div className="mb-8">
            <p className="text-md pb-2 font-semibold md:text-lg">
              私が作りました
            </p>
            <div className="flex flex-row space-x-4">
              <a
                href="https://ftune-web.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md underline underline-offset-1 hover:text-gray-600 md:text-lg"
              >
                Ftune
              </a>
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
  )
}

export default Home
