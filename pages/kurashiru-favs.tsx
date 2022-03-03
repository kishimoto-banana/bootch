import { formatToTimeZone } from 'date-fns-timezone'
import { GetStaticProps, NextPage } from 'next'

type Recipe = {
  url: string
  title: string
  imageUrl: string
}

type Recipes = Recipe[]

type Props = {
  recipes: Recipes
  fetchedAt: string
}

const kurashiruFavApiEndpoint =
  'https://script.google.com/macros/s/AKfycbyaQbxvKkLoGeVoCOiaCpbfTOm3QC5Q-hfZ-YwMKQDa7F4OCzlvb0BQh7IoxEru7P1ohQ/exec'
const revalidateSecond = 60 * 30 // 30分
const formatStyle = 'YYYY-MM-DD HH:mm:ss'

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fetchedAt = formatToTimeZone(new Date(), formatStyle, {
    timeZone: 'Asia/Tokyo',
  })
  const res = await fetch(kurashiruFavApiEndpoint, { redirect: 'follow' })
  const recipes: Recipes = await res.json()
  return { props: { recipes, fetchedAt }, revalidate: revalidateSecond }
}

const KurashiruFavs: NextPage<Props> = ({ recipes, fetchedAt }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col">
        <h3 className="pt-8 text-lg font-medium md:text-2xl">
          ぼくのクラシルお気に入りレシピ
        </h3>
        <a
          href="https://twitter.com/unpuy_tw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline"
        >
          <p className="text-right">@unpuy_tw</p>
        </a>
        <p className="pt-1 text-right text-sm">最終更新日時：{fetchedAt}</p>
      </div>
      <div className="mt-8 mb-4 grid grid-cols-1 gap-4 px-4  md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div className="md:max-w-recipeCard">
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center md:flex-col">
                <img
                  src={recipe.imageUrl}
                  className="h-20 w-20 rounded-lg object-cover md:h-56 md:w-full"
                />
                <p className="text-md pl-2 font-bold text-gray-900 md:pt-1 md:pl-0">
                  {recipe.title}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KurashiruFavs
