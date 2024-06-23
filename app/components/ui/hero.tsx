import { useTranslation } from 'react-i18next'

// Types
export interface heroContentsTypes {
  headline: string
  subheadline: string
  image?: string
  topText?: string
  bottomText?: any
}

export default function HeroWithImage({
  heroContents,
}: {
  heroContents: heroContentsTypes
}) {
  const { t } = useTranslation()

  return (
    <section className="body-font z-10 text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <div className="mb-4"></div>
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
            {t(heroContents.headline)}
          </h1>
          <p className="mb-8 leading-relaxed">{t(heroContents.subheadline)}</p>
        </div>
        <div className="dark:border-border-300 w-5/6 rounded-lg border-2 border-dashed border-gray-800 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src={heroContents.image ?? 'https://dummyimage.com/720x600'}
          />
        </div>
      </div>
    </section>
  )
}
