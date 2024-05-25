import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { authenticator } from '#app/modules/auth/auth.server'
import { cn } from '#app/utils/misc'
import { useTheme } from '#app/utils/hooks/use-theme.js'
import { siteConfig } from '#app/utils/constants/brand'
import { ROUTE_PATH as LOGIN_PATH } from '#app/routes/auth+/login'
import { Button, buttonVariants } from '#app/components/ui/button'
import { ThemeSwitcherHome } from '#app/components/misc/theme-switcher'
import ShadowPNG from '#public/images/shadow.png'
import Navigation from '#app/components/ui/navigation'

export const meta: MetaFunction = () => {
  return [{ title: `${siteConfig.siteTitle} - Starter Kit` }]
}

export async function loader({ request }: LoaderFunctionArgs) {
  const sessionUser = await authenticator.isAuthenticated(request)
  return json({ user: sessionUser } as const)
}

export default function Index() {
  const { user } = useLoaderData<typeof loader>()
  const theme = useTheme()

  return (
    <div className="relative flex h-full w-full flex-col bg-card">
      {/* Navigation */}
      <Navigation user={user} />

      {/* Content */}
      <div className="z-10 mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-6">
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-12 md:p-24">
          <Button
            variant="outline"
            className={cn(
              'hidden h-8 rounded-full bg-white/40 px-3 text-sm font-bold backdrop-blur hover:text-primary dark:bg-secondary md:flex',
            )}>
            <span className="flex items-center font-medium text-primary/60">
              Introducing
              <svg
                className="mx-1 h-[14px] w-[14px] text-primary"
                strokeLinejoin="round"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {siteConfig.siteTitle}
          </Button>
          <h1 className="text-center text-6xl font-bold leading-tight text-primary md:text-7xl lg:leading-tight">
            Production Ready
            <br />
            SaaS Stack for Remix
          </h1>
          <p className="max-w-screen-md text-center text-lg !leading-normal text-muted-foreground md:text-xl">
            Launch in days with a modern{' '}
            <span className="font-medium text-primary">Production-Ready Stack</span>
            <br className="hidden lg:inline-block" /> Stripe integration. Vite-powered.
            Open Source.
          </p>
          <div className="mt-2 flex w-full items-center justify-center gap-2">
            <Link
              to={LOGIN_PATH}
              className={cn(buttonVariants({ size: 'sm' }), 'hidden sm:flex')}>
              Get Started
            </Link>
            <a
              href="https://github.com/dev-xo/remix-saas/tree/main/docs#welcome-to-%EF%B8%8F-remix-saas-documentation"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: 'sm', variant: 'outline' }),
                'hidden dark:bg-secondary dark:hover:opacity-80 sm:flex',
              )}>
              Explore Documentation
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <h2 className="text-center font-serif text-xl font-medium text-primary/60">
            Built for Developers
          </h2>
          <div className="my-8 flex flex-wrap items-center justify-center gap-10 gap-y-8 lg:gap-14">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Remix.run"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://remix.run">
              <div className="relative flex h-6 w-[98px] items-center justify-center">
                <svg
                  viewBox="0 0 1200 627"
                  className="absolute h-20 w-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M378.379 360.512C380.018 381.564 380.018 391.433 380.018 402.204H331.306C331.306 399.858 331.348 397.712 331.39 395.535C331.522 388.769 331.66 381.714 330.564 367.466C329.115 346.606 320.131 341.971 303.613 341.971H288.979H227V304.018H305.931C326.796 304.018 337.229 297.671 337.229 280.868C337.229 266.092 326.796 257.138 305.931 257.138H227V220H314.625C361.861 220 385.334 242.308 385.334 277.943C385.334 304.597 368.816 321.98 346.502 324.877C365.338 328.644 376.35 339.363 378.379 360.512Z"
                    fill="currentColor"
                  />
                  <path
                    d="M227 402.204V373.912H278.506C287.109 373.912 288.977 380.292 288.977 384.097V402.204H227Z"
                    fill="currentColor"
                  />
                  <path
                    d="M967.943 273.308H919.548L897.523 304.018L876.079 273.308H824.206L870.862 336.757L820.148 402.523H868.544L894.335 367.467L920.127 402.523H972L920.996 334.728L967.943 273.308Z"
                    fill="currentColor"
                  />
                  <path
                    d="M486.716 356.458C482.369 366.598 474.255 370.944 461.504 370.944C447.304 370.944 435.713 363.411 434.553 347.477H525.259V334.439C525.259 299.383 502.365 269.832 459.186 269.832C418.905 269.832 388.766 299.093 388.766 339.944C388.766 381.084 418.325 406 459.765 406C493.961 406 517.724 389.486 524.389 359.934L486.716 356.458ZM435.133 324.878C436.872 312.71 443.537 303.439 458.606 303.439C472.516 303.439 480.051 313.29 480.631 324.878H435.133Z"
                    fill="currentColor"
                  />
                  <path
                    d="M663.111 295.327C657.604 280.261 645.723 269.832 622.829 269.832C603.413 269.832 589.503 278.523 582.548 292.719V273.308H535.602V402.523H582.548V339.075C582.548 319.663 588.054 306.916 603.413 306.916C617.613 306.916 621.091 316.187 621.091 333.86V402.523H668.037V339.075C668.037 319.663 673.253 306.916 688.902 306.916C703.102 306.916 706.29 316.187 706.29 333.86V402.523H753.236V321.402C753.236 294.458 742.804 269.832 707.159 269.832C685.425 269.832 670.066 280.841 663.111 295.327Z"
                    fill="currentColor"
                  />
                  <path
                    d="M768.591 273.308V402.524H815.538V273.308H768.591ZM768.301 261.14H815.827V220H768.301V261.14Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Vite"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://vitejs.dev">
              <svg
                viewBox="0 0 256 257"
                className="h-8 w-8 transition group-hover:scale-110 group-hover:brightness-125"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid">
                <defs>
                  <linearGradient
                    x1="-.828%"
                    y1="7.652%"
                    x2="57.636%"
                    y2="78.411%"
                    id="vite-1">
                    <stop stopColor="currentColor" offset="0%" />
                    <stop stopColor="currentColor" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="43.376%"
                    y1="2.242%"
                    x2="50.316%"
                    y2="89.03%"
                    id="vite-2">
                    <stop stopColor="#FFEA83" offset="0%" />
                    <stop stopColor="#FFDD35" offset="8.333%" />
                    <stop stopColor="#FFA800" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
                  fill="url(#vite-1)"
                />
                <path
                  d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
                  fill="url(#vite-2)"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Stripe"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://stripe.com">
              <svg
                className="h-8 w-auto"
                viewBox="0 0 60 25"
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={25}>
                <path
                  fill="currentColor"
                  d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Prisma"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://www.prisma.io">
              <svg
                className="h-9 w-auto"
                viewBox="0 0 256 310"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M254.313 235.519 148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722 17.542 17.542 0 0 0-.101-14.76l-.008.008zm-23.802 9.683-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18h.007z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Resend"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://resend.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 16"
                width={60}
                fill="none"
                className="h-6 w-auto">
                <path
                  d="M0.820068 15V1.00001H7.02007C7.88674 1.00001 8.6734 1.20001 9.38007 1.60001C10.0867 1.98668 10.6401 2.51334 11.0401 3.18001C11.4534 3.84668 11.6601 4.60668 11.6601 5.46001C11.6601 6.30001 11.4534 7.06668 11.0401 7.76001C10.6401 8.44001 10.0867 8.98001 9.38007 9.38001C8.6734 9.78001 7.88674 9.98001 7.02007 9.98001H3.72007V15H0.820068ZM8.76007 15L5.20007 8.68001L8.28007 8.18001L12.2401 15.02L8.76007 15ZM3.72007 7.54001H6.88007C7.24007 7.54001 7.5534 7.46001 7.82007 7.30001C8.10007 7.12668 8.3134 6.89334 8.46007 6.60001C8.60673 6.29335 8.68007 5.95335 8.68007 5.58001C8.68007 5.18001 8.5934 4.83335 8.42007 4.54001C8.24674 4.24668 7.9934 4.02001 7.66007 3.86001C7.32674 3.68668 6.94007 3.60001 6.50007 3.60001H3.72007V7.54001Z"
                  fill="currentColor"
                />
                <path
                  d="M18.0534 15.2C16.9067 15.2 15.9 14.9667 15.0333 14.5C14.18 14.0333 13.5134 13.3933 13.0333 12.58C12.5667 11.7667 12.3333 10.8333 12.3333 9.78001C12.3333 8.95335 12.4667 8.20001 12.7333 7.52001C13 6.84001 13.3733 6.25335 13.8533 5.76001C14.3333 5.25335 14.9 4.86668 15.5534 4.60001C16.22 4.32001 16.94 4.18001 17.7134 4.18001C18.4334 4.18001 19.1 4.31335 19.7134 4.58001C20.3267 4.84668 20.8534 5.22001 21.2934 5.70001C21.7467 6.16668 22.0934 6.72668 22.3334 7.38001C22.5734 8.02001 22.68 8.71335 22.6534 9.46001L22.6334 10.34H14.1334L13.6733 8.60001H20.2934L19.9734 8.96001V8.52001C19.9467 8.16001 19.8267 7.84001 19.6133 7.56001C19.4134 7.26668 19.1534 7.04001 18.8334 6.88001C18.5134 6.70668 18.1533 6.62001 17.7533 6.62001C17.1667 6.62001 16.6667 6.73335 16.2533 6.96001C15.8533 7.18668 15.5467 7.52001 15.3333 7.96001C15.12 8.40001 15.0133 8.93335 15.0133 9.56001C15.0133 10.2 15.1467 10.7533 15.4134 11.22C15.6934 11.6867 16.08 12.0533 16.5734 12.32C17.08 12.5733 17.6733 12.7 18.3533 12.7C18.82 12.7 19.2467 12.6267 19.6334 12.48C20.02 12.3333 20.4333 12.08 20.8734 11.72L22.2334 13.62C21.8467 13.9667 21.42 14.26 20.9534 14.5C20.4867 14.7267 20.0067 14.9 19.5133 15.02C19.02 15.14 18.5334 15.2 18.0534 15.2Z"
                  fill="currentColor"
                />
                <path
                  d="M27.3121 15.2C26.3254 15.2 25.4454 15.04 24.6721 14.72C23.9121 14.3867 23.2988 13.9333 22.8321 13.36L24.6121 11.84C25.0121 12.28 25.4654 12.6 25.9721 12.8C26.4788 12.9867 26.9854 13.08 27.4921 13.08C27.6921 13.08 27.8721 13.06 28.0321 13.02C28.2054 12.9667 28.3521 12.9 28.4721 12.82C28.5921 12.7267 28.6788 12.62 28.7321 12.5C28.7988 12.3667 28.8321 12.2267 28.8321 12.08C28.8321 11.7867 28.7121 11.56 28.4721 11.4C28.3388 11.32 28.1321 11.2333 27.8521 11.14C27.5721 11.0333 27.2121 10.92 26.7721 10.8C26.0921 10.6267 25.5121 10.4267 25.0321 10.2C24.5654 9.96001 24.1921 9.69335 23.9121 9.40001C23.6721 9.12001 23.4854 8.82001 23.3521 8.50001C23.2321 8.16668 23.1721 7.80001 23.1721 7.40001C23.1721 6.92001 23.2788 6.48668 23.4921 6.10001C23.7054 5.70001 23.9988 5.36001 24.3721 5.08001C24.7588 4.80001 25.1988 4.58668 25.6921 4.44001C26.1854 4.28001 26.7054 4.20001 27.2521 4.20001C27.7988 4.20001 28.3321 4.26668 28.8521 4.40001C29.3721 4.53335 29.8521 4.72668 30.2921 4.98001C30.7454 5.22001 31.1388 5.50668 31.4721 5.84001L29.9521 7.52001C29.7121 7.29334 29.4388 7.08668 29.1321 6.90001C28.8388 6.71335 28.5321 6.56668 28.2121 6.46001C27.8921 6.35335 27.6054 6.30001 27.3521 6.30001C27.1254 6.30001 26.9188 6.32001 26.7321 6.36001C26.5588 6.40001 26.4121 6.46668 26.2921 6.56001C26.1721 6.64001 26.0788 6.74001 26.0121 6.86001C25.9588 6.98001 25.9321 7.11334 25.9321 7.26001C25.9321 7.40668 25.9654 7.54668 26.0321 7.68001C26.1121 7.81335 26.2188 7.92668 26.3521 8.02001C26.4988 8.10001 26.7121 8.19335 26.9921 8.30001C27.2854 8.40668 27.6788 8.52668 28.1721 8.66001C28.8121 8.83335 29.3521 9.02668 29.7921 9.24001C30.2454 9.45335 30.6054 9.70001 30.8721 9.98001C31.0988 10.22 31.2654 10.4933 31.3721 10.8C31.4788 11.1067 31.5321 11.4467 31.5321 11.82C31.5321 12.4733 31.3454 13.0533 30.9721 13.56C30.6121 14.0667 30.1121 14.4667 29.4721 14.76C28.8321 15.0533 28.1121 15.2 27.3121 15.2Z"
                  fill="currentColor"
                />
                <path
                  d="M37.5768 15.2C36.4301 15.2 35.4235 14.9667 34.5568 14.5C33.7035 14.0333 33.0368 13.3933 32.5568 12.58C32.0901 11.7667 31.8568 10.8333 31.8568 9.78001C31.8568 8.95335 31.9901 8.20001 32.2568 7.52001C32.5235 6.84001 32.8968 6.25335 33.3768 5.76001C33.8568 5.25335 34.4235 4.86668 35.0768 4.60001C35.7435 4.32001 36.4635 4.18001 37.2368 4.18001C37.9568 4.18001 38.6235 4.31335 39.2368 4.58001C39.8501 4.84668 40.3768 5.22001 40.8168 5.70001C41.2701 6.16668 41.6168 6.72668 41.8568 7.38001C42.0968 8.02001 42.2035 8.71335 42.1768 9.46001L42.1568 10.34H33.6568L33.1968 8.60001H39.8168L39.4968 8.96001V8.52001C39.4701 8.16001 39.3501 7.84001 39.1368 7.56001C38.9368 7.26668 38.6768 7.04001 38.3568 6.88001C38.0368 6.70668 37.6768 6.62001 37.2768 6.62001C36.6901 6.62001 36.1901 6.73335 35.7768 6.96001C35.3768 7.18668 35.0701 7.52001 34.8568 7.96001C34.6435 8.40001 34.5368 8.93335 34.5368 9.56001C34.5368 10.2 34.6701 10.7533 34.9368 11.22C35.2168 11.6867 35.6035 12.0533 36.0968 12.32C36.6035 12.5733 37.1968 12.7 37.8768 12.7C38.3435 12.7 38.7701 12.6267 39.1568 12.48C39.5435 12.3333 39.9568 12.08 40.3968 11.72L41.7568 13.62C41.3701 13.9667 40.9435 14.26 40.4768 14.5C40.0101 14.7267 39.5301 14.9 39.0368 15.02C38.5435 15.14 38.0568 15.2 37.5768 15.2Z"
                  fill="currentColor"
                />
                <path
                  d="M43.2755 15V4.42001H45.9955L46.0755 6.58001L45.5155 6.82001C45.6622 6.34001 45.9222 5.90668 46.2955 5.52001C46.6822 5.12001 47.1422 4.80001 47.6755 4.56001C48.2089 4.32001 48.7689 4.20001 49.3555 4.20001C50.1555 4.20001 50.8222 4.36001 51.3555 4.68001C51.9022 5.00001 52.3089 5.48668 52.5755 6.14001C52.8555 6.78001 52.9955 7.57335 52.9955 8.52001V15H50.1555V8.74001C50.1555 8.26001 50.0889 7.86001 49.9555 7.54001C49.8222 7.22001 49.6155 6.98668 49.3355 6.84001C49.0689 6.69334 48.7355 6.62668 48.3355 6.64001C48.0155 6.64001 47.7155 6.69335 47.4355 6.80001C47.1689 6.89334 46.9355 7.03335 46.7355 7.22001C46.5489 7.40668 46.3955 7.62001 46.2755 7.86001C46.1689 8.10001 46.1155 8.36001 46.1155 8.64001V15H44.7155C44.4089 15 44.1355 15 43.8955 15C43.6555 15 43.4489 15 43.2755 15Z"
                  fill="currentColor"
                />
                <path
                  d="M58.8569 15.2C57.9236 15.2 57.0903 14.9667 56.3569 14.5C55.6369 14.02 55.0636 13.3733 54.6369 12.56C54.2236 11.7333 54.0169 10.78 54.0169 9.70001C54.0169 8.64668 54.2236 7.70668 54.6369 6.88001C55.0636 6.04001 55.6369 5.38668 56.3569 4.92001C57.0903 4.44001 57.9236 4.20001 58.8569 4.20001C59.3503 4.20001 59.8236 4.28001 60.2769 4.44001C60.7436 4.58668 61.1569 4.79335 61.5169 5.06001C61.8903 5.32668 62.1903 5.62668 62.4169 5.96001C62.6436 6.28001 62.7703 6.61335 62.7969 6.96001L62.0769 7.10001V0.200012H64.9369V15H62.2369L62.1169 12.56L62.6769 12.62C62.6503 12.9533 62.5303 13.2733 62.3169 13.58C62.1036 13.8867 61.8169 14.1667 61.4569 14.42C61.1103 14.66 60.7103 14.8533 60.2569 15C59.8169 15.1333 59.3503 15.2 58.8569 15.2ZM59.4969 12.84C60.0303 12.84 60.4969 12.7067 60.8969 12.44C61.2969 12.1733 61.6103 11.8067 61.8369 11.34C62.0636 10.8733 62.1769 10.3267 62.1769 9.70001C62.1769 9.08668 62.0636 8.54668 61.8369 8.08001C61.6103 7.61335 61.2969 7.24668 60.8969 6.98001C60.4969 6.71335 60.0303 6.58001 59.4969 6.58001C58.9636 6.58001 58.4969 6.71335 58.0969 6.98001C57.7103 7.24668 57.4036 7.61335 57.1769 8.08001C56.9636 8.54668 56.8569 9.08668 56.8569 9.70001C56.8569 10.3267 56.9636 10.8733 57.1769 11.34C57.4036 11.8067 57.7103 12.1733 58.0969 12.44C58.4969 12.7067 58.9636 12.84 59.4969 12.84Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="shadcn/ui"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://ui.shadcn.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-10 w-10">
                <rect width={256} height={256} fill="none" />
                <line
                  x1={208}
                  y1={128}
                  x2={128}
                  y2={208}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
                <line
                  x1={192}
                  y1={40}
                  x2={40}
                  y2={192}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Fly.io"
              className="flex items-center text-primary opacity-80 grayscale transition hover:opacity-100"
              href="https://fly.io">
              <svg viewBox="0 0 259 84" className="h-9" fillRule="evenodd">
                <title id="title-F7R838wtvsn8DF6B"></title>
                <desc id="description-F7R838wtzc_8DF6R"></desc>
                <g buffered-rendering="static">
                  <path
                    d="M57.413 10.134h9.454c8.409 0 15.236 6.827 15.236 15.236v33.243c0 8.409-6.827 15.236-15.236 15.236h-.745c-4.328-.677-6.205-1.975-7.655-3.072l-12.02-9.883a1.692 1.692 0 0 0-2.128 0l-3.905 3.211-10.998-9.043a1.688 1.688 0 0 0-2.127 0L12.01 68.503c-3.075 2.501-5.109 2.039-6.428 1.894C2.175 67.601 0 63.359 0 58.613V25.37c0-8.409 6.827-15.236 15.237-15.236h9.433l-.017.038-.318.927-.099.318-.428 1.899-.059.333-.188 1.902-.025.522-.004.183.018.872.043.511.106.8.135.72.16.663.208.718.54 1.52.178.456.94 1.986.332.61 1.087 1.866.416.673 1.517 2.234.219.296 1.974 2.569.638.791 2.254 2.635.463.507 1.858 1.999.736.762 1.216 1.208-.244.204-.152.137c-.413.385-.805.794-1.172 1.224a10.42 10.42 0 0 0-.504.644 8.319 8.319 0 0 0-.651 1.064 6.234 6.234 0 0 0-.261.591 5.47 5.47 0 0 0-.353 1.606l-.007.475a5.64 5.64 0 0 0 .403 1.953 5.44 5.44 0 0 0 1.086 1.703c.338.36.723.674 1.145.932.359.22.742.401 1.14.539a6.39 6.39 0 0 0 2.692.306h.005a6.072 6.072 0 0 0 2.22-.659c.298-.158.582-.341.848-.549a5.438 5.438 0 0 0 1.71-2.274c.28-.699.417-1.446.405-2.198l-.022-.393a5.535 5.535 0 0 0-.368-1.513 6.284 6.284 0 0 0-.285-.618 8.49 8.49 0 0 0-.67-1.061 11.022 11.022 0 0 0-.354-.453 14.594 14.594 0 0 0-1.308-1.37l-.329-.28.557-.55 2.394-2.5.828-.909 1.287-1.448.837-.979 1.194-1.454.808-1.016 1.187-1.587.599-.821.85-1.271.708-1.083 1.334-2.323.763-1.524.022-.047.584-1.414a.531.531 0 0 0 .02-.056l.629-1.962.066-.286.273-1.562.053-.423.016-.259.019-.978-.005-.182-.05-.876-.062-.68-.31-1.961c-.005-.026-.01-.052-.018-.078l-.398-1.45-.137-.403-.179-.446Zm4.494 41.455a3.662 3.662 0 0 0-3.61 3.61 3.663 3.663 0 0 0 3.61 3.609 3.665 3.665 0 0 0 3.611-3.609 3.663 3.663 0 0 0-3.611-3.61Z"
                    fill="url(#a)"
                    fillOpacity={1}
                  />
                  <path
                    d="M35.639 72.544l-.637.535a3.332 3.332 0 01-2.09.762H15.235a15.176 15.176 0 01-9.654-3.451c1.319.145 3.353.607 6.428-1.894l15.277-13.44a1.693 1.693 0 012.127 0l10.997 9.042 3.904-3.21c.619-.5 1.51-.5 2.128 0l12.019 9.882c1.45 1.097 3.327 2.394 7.654 3.071H58.12a3.394 3.394 0 01-1.963-.654l-.14-.108-.593-.493a1.247 1.247 0 00-.158-.159c-.672-.563-9.187-7.617-9.187-7.617a1 1 0 00-1.281.002s.021.026-9.038 7.615a1.12 1.12 0 00-.121.117zm26.262-20.96a3.678 3.678 0 00-3.61 3.609 3.68 3.68 0 003.61 3.609 3.68 3.68 0 003.61-3.609 3.678 3.678 0 00-3.61-3.609zM38.566 40.648L37.35 39.44l-.736-.762-1.858-1.999-.463-.507-2.253-2.634-.638-.791-1.974-2.569-.219-.296-1.517-2.234-.416-.673-1.087-1.866-.332-.61-.94-1.985-.178-.456-.539-1.52-.208-.718-.16-.663-.135-.72-.106-.8-.043-.511-.018-.872.004-.183.025-.522.188-1.901.059-.333.428-1.899.098-.318.318-.927.102-.24.506-1.112.351-.662.489-.806.487-.718.347-.456.4-.482.44-.484.377-.378.918-.808.671-.549c.016-.014.033-.026.05-.038l.794-.537.631-.402 1.198-.631c.018-.011.039-.02.058-.029l1.698-.705.157-.059 1.51-.442.638-.143.862-.173.572-.087.877-.109.598-.053 1.187-.063.465-.005.881.018.229.013 1.276.106 1.687.238.195.041 1.668.415.49.146.544.188.663.251.524.222.77.363.485.249.872.512.325.2 1.189.868.341.296.828.754.041.041.703.754.242.273.825 1.096.168.262.655 1.106.197.379.369.825.386.963.137.403.398 1.45a.89.89 0 01.018.078l.31 1.961.062.679.05.876.005.182-.019.978-.016.259-.053.423-.273 1.562-.066.286-.629 1.962a.626.626 0 01-.02.056l-.584 1.414-.022.047-.763 1.523-1.334 2.323-.708 1.083-.849 1.271-.599.821-1.187 1.587-.808 1.016-1.194 1.453-.837.979-1.287 1.448-.828.909-2.394 2.5-.556.55.328.28c.465.428.902.885 1.308 1.37.122.148.24.299.354.453.249.336.473.691.67 1.06.106.2.201.407.285.618.191.484.32.996.368 1.513l.022.393c.012.752-.125 1.5-.405 2.198a5.438 5.438 0 01-1.71 2.274c-.266.208-.55.391-.848.549a6.08 6.08 0 01-2.219.659h-.005a6.403 6.403 0 01-2.692-.306 5.882 5.882 0 01-1.14-.539 5.523 5.523 0 01-1.145-.932 5.458 5.458 0 01-1.086-1.703 5.662 5.662 0 01-.403-1.953l.007-.475a5.47 5.47 0 01.353-1.606c.077-.202.164-.399.261-.591.19-.37.408-.725.651-1.063.159-.221.328-.436.504-.644.367-.43.759-.839 1.172-1.224l.152-.137.244-.204z"
                    fill="currentColor"
                  />
                  <path
                    d="M35.002 73.079l9.796-8.267a1 1 0 011.281-.002l9.938 8.269c.604.492 1.36.761 2.139.762h-25.28c.776 0 1.527-.269 2.126-.762zM41.1 43.568l.096.028c.031.015.057.036.085.055l.08.071c.198.182.39.373.575.569.13.139.257.282.379.43.155.187.3.383.432.587.057.09.11.181.16.276.043.082.082.167.116.253.06.15.105.308.119.469l-.003.302a1.726 1.726 0 01-.817 1.343 2.333 2.333 0 01-.994.327l-.373.011-.315-.028a2.398 2.398 0 01-.433-.105 2.07 2.07 0 01-.41-.192l-.246-.18a1.685 1.685 0 01-.56-.96 2.418 2.418 0 01-.029-.19l-.009-.288c.005-.078.017-.155.034-.232.043-.168.105-.331.183-.486.101-.194.216-.381.344-.559.213-.288.444-.562.691-.821.159-.168.322-.331.492-.488l.121-.109c.084-.055.085-.055.181-.083h.101zM40.481 3.42l.039-.003v33.665l-.084-.155a94.101 94.101 0 01-3.093-6.267 67.257 67.257 0 01-2.099-5.255 41.665 41.665 0 01-1.265-4.326c-.265-1.163-.469-2.343-.553-3.535a16.923 16.923 0 01-.029-1.528c.008-.444.026-.887.054-1.33.044-.696.115-1.391.217-2.081.081-.543.181-1.084.304-1.619.098-.425.212-.847.342-1.262.188-.6.413-1.186.675-1.758.096-.206.199-.411.307-.612.65-1.204 1.532-2.313 2.687-3.054a5.609 5.609 0 012.498-.88zm4.365.085l2.265.646c1.049.387 2.059.891 2.987 1.521a11.984 11.984 0 013.212 3.204c.502.748.918 1.555 1.243 2.398.471 1.247.763 2.554.866 3.882.03.348.047.697.054 1.046.008.324.006.649-.02.973-.064.725-.2 1.442-.407 2.14a17.03 17.03 0 01-.587 1.684c-.28.685-.591 1.357-.932 2.013-.754 1.457-1.623 2.852-2.553 4.201a65.451 65.451 0 01-3.683 4.806 91.02 91.02 0 01-4.417 4.896 93.66 93.66 0 002.907-5.949c.5-1.124.971-2.26 1.414-3.407.487-1.26.927-2.537 1.317-3.83.29-.969.546-1.948.757-2.938.181-.849.323-1.707.411-2.57.074-.72.101-1.444.083-2.166a30.867 30.867 0 00-.049-1.325c-.106-1.775-.376-3.545-.894-5.248a15.341 15.341 0 00-.714-1.892c-.663-1.444-1.588-2.793-2.84-3.778l-.42-.307z"
                    fill="white"
                  />
                  <path
                    d="M179.213 64.297l-10.751-23.015c-.898-1.917-1.433-2.618-2.331-3.431l-.874-.788c-.697-.676-1.155-1.302-1.155-2.045 0-1.064.843-1.96 2.378-1.96h9.334c1.465 0 2.378.762 2.378 1.9 0 .635-.292 1.111-.661 1.578-.438.555-1.008 1.096-1.008 2.082 0 .618.18 1.234.527 2.021l6.416 15.025 5.755-14.647c.354-.974.596-1.832.596-2.519 0-1.069-.581-1.505-1.029-1.983-.39-.415-.702-.854-.702-1.557 0-1.149.935-1.9 2.193-1.9h5.748c1.612 0 2.378.834 2.378 1.9 0 .682-.393 1.314-1.166 1.996l-.813.668c-1.132.925-1.656 2.263-2.251 3.647l-8.716 20.998c-1.03 2.455-2.563 5.863-4.905 8.659-2.379 2.84-5.587 5.048-9.932 5.048-3.638 0-5.84-1.737-5.84-4.24 0-2.293 1.696-4.12 3.924-4.12 1.22 0 1.855.576 2.499 1.169.532.489 1.072.991 2.137.991.988 0 1.908-.418 2.742-1.093 1.274-1.03 2.341-2.652 3.129-4.384zm63.175-.082c4.839 0 8.804-1.658 11.897-4.967 3.09-3.304 4.636-7.281 4.636-11.931 0-4.539-1.469-8.268-4.396-11.191-2.926-2.921-6.723-4.388-11.396-4.388-4.92 0-8.944 1.597-12.077 4.78-3.135 3.186-4.703 7.045-4.703 11.578 0 4.493 1.496 8.301 4.483 11.425 2.99 3.126 6.84 4.694 11.556 4.694zm-40.921-.36c2.798 0 4.788-1.884 4.788-4.6 0-2.652-2.055-4.54-4.788-4.54-2.863 0-4.912 1.891-4.912 4.54 0 2.713 2.05 4.6 4.912 4.6zm9.964-4.305l.681-.72c.81-.787 1.071-1.582 1.071-3.774V42.097c0-1.895-.258-2.741-1.062-3.465l-.801-.718c-.785-.693-1.043-1.124-1.043-1.816 0-.984.763-1.791 1.99-2.071l5.44-1.32c.52-.126 1.107-.249 1.562-.249.626 0 1.138.206 1.497.563.36.358.572.873.572 1.517v20.518c0 2.069.251 3.031 1.115 3.758a.359.359 0 01.039.039l.608.708c.764.743 1.081 1.236 1.081 1.914 0 1.209-.912 1.9-2.377 1.9h-9.211c-1.396 0-2.316-.687-2.316-1.9 0-.681.317-1.178 1.154-1.925zm-61.567.001l.681-.721c.811-.787 1.071-1.582 1.071-3.774V27.999c0-1.835-.194-2.736-1.053-3.459l-.822-.796c-.709-.689-.968-1.116-.968-1.805 0-.985.767-1.789 1.927-2.07l5.378-1.32c.521-.126 1.107-.249 1.563-.249.621 0 1.147.187 1.522.542.376.356.608.885.608 1.598v34.616c0 2.074.258 2.981 1.125 3.766l.694.734c.769.748 1.025 1.238 1.025 1.919 0 .502-.153.907-.426 1.216-.385.435-1.03.684-1.89.684h-9.21c-.86 0-1.505-.249-1.891-.684-.272-.309-.425-.714-.425-1.216 0-.682.253-1.176 1.091-1.924zm-25.079-13.934v9.319c0 1.404.278 2.701 1.435 3.768l.748.726c.838.813 1.093 1.3 1.093 2.045 0 1.138-.913 1.9-2.378 1.9h-10.385c-1.465 0-2.377-.762-2.377-1.9 0-.884.259-1.303 1.097-2.049l.745-.724c.868-.786 1.434-1.857 1.434-3.766V30.039c0-1.517-.336-2.758-1.435-3.769l-.749-.726c-.77-.747-1.092-1.238-1.092-1.985 0-1.206.915-1.96 2.377-1.96h27.817c1.063 0 1.997.237 2.594.822.415.407.68.981.71 1.778l.433 6.421c.043.803-.194 1.472-.657 1.885-.319.284-.748.454-1.288.454-.681 0-1.203-.257-1.669-.701-.419-.399-.792-.959-1.213-1.618-1.016-1.624-1.489-2.208-2.572-2.967-1.507-1.112-3.803-1.494-8.145-1.494-2.505 0-4.086.109-5.082.366-.644.166-1.016.382-1.215.699-.204.324-.226.734-.226 1.235v12.618h6.523c1.561 0 2.659-.282 3.931-2.021l.007-.01c.51-.649.879-1.127 1.23-1.444.409-.37.802-.545 1.323-.545a1.9 1.9 0 011.883 1.901v8.699c0 1.165-.908 1.96-1.883 1.96-.485 0-.879-.173-1.289-.535-.353-.31-.723-.775-1.203-1.396-1.392-1.802-2.375-2.089-3.999-2.089h-6.523zm110.214-.22c0-3.121.68-5.364 2.089-6.713 1.392-1.332 2.888-2.006 4.496-2.006 2.212 0 4.205 1.238 6.003 3.672 1.837 2.489 2.746 5.853 2.746 10.086 0 3.124-.682 5.388-2.093 6.776-1.391 1.369-2.886 2.063-4.493 2.063-2.212 0-4.204-1.248-6.002-3.701-1.838-2.51-2.746-5.904-2.746-10.177zm-18.202-16.878c2.804 0 4.788-1.578 4.788-4.3 0-2.658-1.982-4.24-4.788-4.24-2.871 0-4.851 1.583-4.851 4.24 0 2.656 1.981 4.3 4.851 4.3z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <radialGradient
                    cx="53.096%"
                    cy="49.564%"
                    fx="53.096%"
                    fy="49.564%"
                    r="93.348%"
                    gradientTransform="matrix(.77604 0 0 1 .119 0)"
                    id="a">
                    <stop stopColor="#BA7BF0" offset="0%" />
                    <stop stopColor="#996BEC" offset="45%" />
                    <stop stopColor="#5046E4" offset="100%" />
                  </radialGradient>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative z-10 flex flex-col border border-border backdrop-blur-sm lg:flex-row">
          <div className="flex w-full flex-col items-start justify-center gap-6 border-r border-primary/10 p-10 lg:p-12">
            <p className="h-14 text-lg text-primary/60">
              <span className="font-semibold text-primary">Production Ready.</span> Build
              your app on a solid, scalable, well-tested foundation.
            </p>
            <Link to={LOGIN_PATH} className={buttonVariants({ size: 'sm' })}>
              Get Started
            </Link>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-6 p-10 lg:w-[60%] lg:border-b-0 lg:p-12">
            <p className="h-14 text-lg text-primary/60">
              <span className="font-semibold text-primary">Ready to Ship.</span>{' '}
              Deployments ready with a single command.
            </p>
            <a
              href="https://github.com/dev-xo/remix-saas/tree/main/docs#welcome-to-%EF%B8%8F-remix-saas-documentations"
              target="_blank"
              rel="noreferrer"
              className={cn(
                `${buttonVariants({ variant: 'outline', size: 'sm' })} dark:bg-secondary dark:hover:opacity-80`,
              )}>
              Explore Documentation
            </a>
          </div>

          <div className="absolute left-0 top-0 z-10 flex flex-col items-center justify-center">
            <span className="absolute h-6 w-[1px] bg-primary/40" />
            <span className="absolute h-[1px] w-6 bg-primary/40" />
          </div>
          <div className="absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center">
            <span className="absolute h-6 w-[1px] bg-primary/40" />
            <span className="absolute h-[1px] w-6 bg-primary/40" />
          </div>
        </div>
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-6 p-12">
          <h1 className="text-center text-4xl font-bold leading-tight text-primary md:text-6xl">
            Proudly Open Source
          </h1>
          <p className="text-center text-lg text-primary/60">
            Remix SaaS is a fully Open Source project.
            <br />
            The code is available on GitHub.
          </p>
          <a
            href="https://github.com/dev-xo/remix-saas"
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 select-none items-center gap-2 rounded-full bg-green-500/5 px-2 py-1 pr-2.5 text-base font-medium tracking-tight text-green-600 ring-1 ring-inset ring-green-600/20 backdrop-blur-sm dark:bg-yellow-800/40 dark:text-yellow-100 dark:ring-yellow-200/50 md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 dark:text-yellow-100"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Star Us on GitHub
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="z-10 flex w-full flex-col items-center justify-center gap-8 py-6">
        <a
          href="https://twitter.com/DanielKanem"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center hover:scale-110">
          <svg
            className="h-8 w-8 text-primary"
            strokeLinejoin="round"
            viewBox="0 0 16 16">
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

      {/* Background */}
      <img
        src={ShadowPNG}
        alt="Hero"
        className={`fixed left-0 top-0 z-0 h-full w-full opacity-60 ${theme === 'dark' ? 'invert' : ''}`}
      />
      <div className="base-grid fixed h-screen w-screen opacity-40" />
      <div className="fixed bottom-0 h-screen w-screen bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
    </div>
  )
}
