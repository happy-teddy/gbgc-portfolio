import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'FAQ',
  description: '',
}

export default function Faq() {
  return (
    <Container className="mt-4 sm:mt-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            What is God Token?
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              God Token is a revolutionary new crypto token on the GBGC chain.
              Our mission is to provide crypto enthusiasts with an opportunity
              to earn daily rewards and gain easy access to high-potential
              investments through our partnership with Gworld.
            </p>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Why Choose God Token?
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <ul className="ml-[30px] list-disc">
              <li>
                <strong>1% Daily USDT Rewards</strong>: Earn 1% of your
                investment in USDT every day just by holding God Token.
              </li>
              <li>
                <strong>Backed by Gworld</strong>: Your rewards are provided by
                Gworld, a trusted investment company.
              </li>
              <li>
                <strong>Easy Access to Investments</strong>: : Get a seamless
                entry into Gworld&apos;s investment opportunities through God
                Token.
              </li>
              <li>
                <strong>High Liquidity</strong>: Trade your God Tokens on
                exchanges for potentially higher prices.
              </li>
            </ul>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            How It Works
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <ul className="ml-[30px] list-disc">
              <li>
                <strong>Buy God Token</strong>: Purchase God Token on the GBGC
                chain.
              </li>
              <li>
                <strong>Earn Daily Rewards</strong>: Receive 1% of your
                investment in USDT every day.
              </li>
              <li>
                <strong>Access Gworld Investments</strong>: Utilize your God
                Tokens to gain entry into exclusive Gworld investment
                opportunities.
              </li>
              <li>
                <strong>Trade for Profit</strong>: Sell your God Tokens on
                exchanges for higher prices.
              </li>
            </ul>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Benefits of Holding God Token
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <ul className="ml-[30px] list-disc">
              <li>
                <strong>Daily Earnings</strong>: Enjoy the stability of daily
                USDT rewards.
              </li>
              <li>
                <strong>Investment Opportunities</strong>: Benefit from
                Gworld&apos;s proven investment strategies.
              </li>
              <li>
                <strong>Growth Potential</strong>: Potential to sell your tokens
                at higher prices on exchanges.
              </li>
              <li>
                <strong>Community</strong>: Join a growing community of
                like-minded investors.
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <ul
            role="list"
            className="grid grid-cols-1 gap-[20px] lg:grid-cols-2"
          >
            <a className="flex gap-4" href="https://x.com/gworldgod">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="1x"
                className="h-[20px] w-[20px]"
              />
              Follow on X
            </a>
            <a
              className="flex gap-4"
              href=" https://www.instagram.com/_g.world/"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="h-[20px] w-[20px]"
              />
              Follow on Instagram
            </a>
            <a
              className="flex gap-4"
              href="https://www.facebook.com/profile.php?id=61561656124722"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="1x"
                className="h-[20px] w-[20px]"
              />
              Follow on Facebook
            </a>
            <a className="flex gap-4" href="https://t.me/+0Rk3y7LzbmZiZmRl">
              <FontAwesomeIcon
                icon={faTelegram}
                size="1x"
                className="h-[20px] w-[20px]"
              />
              Follow on Telegram
            </a>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@godcoin.world
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
