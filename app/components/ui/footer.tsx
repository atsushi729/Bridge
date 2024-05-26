import { ThemeSwitcherHome } from '../misc/theme-switcher'

const Footer = () => {
  return (
    <footer className="z-10 flex w-full flex-col items-center justify-center gap-8 py-6">
      <a
        href="https://twitter.com/DanielKanem"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center hover:scale-110">
        <svg className="h-8 w-8 text-primary" strokeLinejoin="round" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <ThemeSwitcherHome />

      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <p className="flex items-center whitespace-nowrap text-center text-sm font-medium text-primary/60">
          Built by&nbsp;
          <a
            href="https://twitter.com/DanielKanem"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-primary hover:text-primary hover:underline">
            DanielKanem
          </a>
        </p>
        <p className="flex items-center whitespace-nowrap text-center text-sm font-medium text-primary/60">
          Source code available on&nbsp;{' '}
          <a
            href="https://github.com/dev-xo/remix-saas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:text-primary hover:underline">
            GitHub.
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
