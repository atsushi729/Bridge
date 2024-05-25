import ShadowPNG from '#public/images/shadow.png'
import { useTheme } from '#app/utils/hooks/use-theme'

const Background = () => {
  const theme = useTheme()

  return (
    <>
      {' '}
      <img
        src={ShadowPNG}
        alt="Hero"
        className={`fixed left-0 top-0 z-0 h-full w-full opacity-60 ${theme === 'dark' ? 'invert' : ''}`}
      />
      <div className="base-grid fixed h-screen w-screen opacity-40" />
      <div className="fixed bottom-0 h-screen w-screen bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
    </>
  )
}

export default Background
