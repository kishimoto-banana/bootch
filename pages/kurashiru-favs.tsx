import { GetStaticProps, NextPage } from 'next'
import { formatToTimeZone } from 'date-fns-timezone'

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
const revalidateSecond = 10 // 30分
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
      <h3 className="pt-8 text-2xl font-medium">
        ぼくのクラシルお気に入りレシピ
      </h3>
      <p className="pt-2 text-sm">最終更新日時：{fetchedAt}</p>
      <div className="my-12 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div className="max-w-recipeCard">
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
              <img
                src={recipe.imageUrl}
                className="object-fit h-56 w-full rounded-lg"
              />
              <p className="text-md font-bold text-gray-900 ">{recipe.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KurashiruFavs
