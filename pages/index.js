import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>bootch</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&family=Yomogi&family=Zen+Kaku+Gothic+New:wght@300&family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="bootchです" />
      </Head>

      <main className="flex min-h-screen items-center">
        <div className="w-1/5 md:w-1/3"></div>
        <div className="flex flex-col">
          <div className="mb-8">
            <p className="text-md pb-2 font-semibold md:text-lg">
              私が作りました
            </p>
            <div className="flex flex-row gap-4">
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

          <p className="text-md pb-2 font-semibold md:text-lg">誰？</p>
          <div className="flex flex-row gap-4">
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
