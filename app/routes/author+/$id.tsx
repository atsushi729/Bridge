import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'

const Author = () => {
  return (
    <>
      <Navigation />

      <div className="mx-auto mt-5 flex max-w-6xl flex-col overflow-hidden rounded-lg border border-gray-300 font-sans dark:bg-black md:flex-row">
        <div className="flex items-center justify-center p-4 md:w-1/3">
          <img
            src="/images/motivation.jpeg"
            alt="Darragh Grealish"
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="p-6 dark:text-white md:w-2/3">
          <h1 className="text-2xl font-bold">Atsushi Hatakeyama</h1>
          <h2 className="mb-4 text-xl text-gray-700">
            Full stack developer @ Tata consultancy services
          </h2>
          <p className="mb-6 text-gray-800 dark:text-white">
            スイスを拠点に、さまざまな国際的なクライアントと実践的なコンサルティングの両方を行うDarraghは、56Kの共同設立者です。クラウドは、ネットワークおよび通信テクノロジーの開発およびツールとクラウドネイティブの実現に焦点を当てたスタートアップ企業であり、SwisscomとAkamaiの元従業員であるDarraghは、25年以上にわたって産業および研究の経験を持ち、ネットワークエッジとパブリッククラウドのインターフェイス間の組み込みのシステムとテレコムで学びました。5Gとエッジクラウドの両方でAWSと提携している企業CTOを務めている彼は、通信事業者のCSPとISVにクラウドネイティブの考え方を採用することが重要であると感じています。AWS
            Community BuildersとARM
            InnovatorsプログラムのメンバーであるDarragh氏と彼のチームは、さまざまな業種の開発者と協力して、ツールと開発者との関係、およびクラウドネイティブの考え方での5G技術の促進を実現しています。
          </p>
          <div className="text-gray-800 dark:text-white">
            <p>
              <strong>所在地:</strong>
              <br /> ベトナム：ハノイ
            </p>
            <p className="mt-4">
              <strong>ノウハウ</strong>
              <br />
              開発者の生産性、ソフトウェア・セキュア・サプライチェーン、Kubernetes
            </p>
            <p className="mt-4">
              <strong>技術動向</strong>
              <br />
              AI、ブロックチェーン、Web3など
            </p>
            <p className="mt-4">
              <strong>プログラミング言語</strong>
              <br />
              ニミキュ、パッシュ、C/C++エンベデッド、錆、ジャワ
            </p>
            <p className="mt-4">
              <strong>対象</strong>
              <br />
              ブログ記事、動画コンテンツ、前で話す、製品説明会、コンファレンス（ブースデモ）、ミートアップ、ソーシャルメディア
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Author
