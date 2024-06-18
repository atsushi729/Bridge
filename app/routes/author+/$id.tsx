import Background from '#app/components/ui/background'
import { Button } from '#app/components/ui/button'
import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'
import { users } from '#app/constants/user'
import { useParams } from '@remix-run/react'

const Author = () => {
  const { id } = useParams<{ id: string }>()
  const item = users.find((item) => item.id === Number(id))

  //---------------------------------------------
  //                 Event handler
  //---------------------------------------------
  const handleClick = () => {
    alert('OK')
  }

  return (
    <div className="flex h-full flex-col">
      {/* Navigation */}
      <Navigation />
      <div className="z-10 mx-auto mt-5 flex max-w-6xl flex-col overflow-hidden rounded-lg border border-gray-300 font-sans md:flex-row">
        <div className="flex items-center justify-center p-4 md:w-1/3">
          <img
            src={item?.image ? item.image : '/images/default-avatar.png'}
            alt={item?.name}
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="p-6 dark:text-white md:w-2/3">
          <h1 className="text-2xl font-bold">{item?.name}</h1>
          <h2 className="mb-4 text-xl text-gray-700">
            {item?.position}@{item?.company}
          </h2>
          <p className="mb-6 text-gray-800 dark:text-white">{item?.aboutAuthor}</p>
          <div className="text-gray-800 dark:text-white">
            <p>
              <strong>所在地:</strong>
              <br /> {item?.born}
            </p>
            <h4 className="mt-14 text-lg font-bold">スキルマッチ</h4>
            <hr></hr>
            <p className="mt-4">
              <strong>ノウハウ</strong>
              <br />
              {item?.knowledge}
            </p>
            <p className="mt-4">
              <strong>技術動向</strong>
              <br />
              {item?.techstack}
            </p>
            <p className="mt-4">
              <strong>プログラミング言語</strong>
              <br />
              {item?.language}
            </p>
            <p className="mt-4">
              <strong>対象</strong>
              <br />
              {item?.other}
            </p>
            <h4 className="mt-14 text-lg font-bold">カルチャーマッチ</h4>
            <hr></hr>
            <p className="mt-4">
              <strong>開発する上で大切にしていること</strong>
              <br />
              {item?.developAttitude}
            </p>
            <p className="mt-4">
              <strong>チーム内での立ち振る舞いについて</strong>
              <br />
              {item?.softskill}
            </p>
            <h4 className="mt-14 text-lg font-bold">キャリアマッチ</h4>
            <hr></hr>
            <p className="mt-4">
              <strong>将来の計画</strong>
              <br />
              {item?.carrer}
            </p>
            <p className="mt-4">
              <strong>期待するポジション</strong>
              <br />
              {item?.futurePosition}
            </p>
          </div>
        </div>
      </div>
      <Button
        size="sm"
        className="z-10 mx-auto my-10 w-24 "
        onClick={() => handleClick()}>
        採用する
      </Button>
      {/* Footer */}
      <Footer />
      {/* Background */}
      <Background />
    </div>
  )
}

export default Author
