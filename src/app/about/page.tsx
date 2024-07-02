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
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-4 sm:mt-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Our Mission
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              We believe in the power of decentralized finance to unlock new
              opportunities for wealth creation. Our primary goal is to offer a
              secure, transparent, and rewarding investment experience. By
              holding God Token, our users can earn 1% daily USDT rewards and
              benefit from the robust investment strategies of Gworld.
            </p>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            What We Offer
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <ul className="ml-[30px] list-disc">
              <li>
                <strong>Daily Rewards</strong>: Holders of God Token earn 1% of
                their investment in USDT every day.{' '}
              </li>
              <li>
                <strong>Investment Opportunities</strong>: Easy access to
                GWorld&apos;s exclusive investment opportunities.{' '}
              </li>
              <li>
                <strong>Liquidity</strong>: Trade God Tokens on exchanges for
                potentially higher returns. <br />
              </li>
              <li>
                <strong>Community Engagement</strong>: Join a growing community
                of investors and enthusiasts who share a passion for crypto and
                blockchain technology.
              </li>
            </ul>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Tokenomics
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <ul className="ml-[30px] list-disc">
              <li>
                <strong>Total Supply</strong>: 5,000,000,000 GOD
              </li>
              <li>
                <strong>Development</strong>: 10% (500,000,000 GOD)
              </li>
              <li>
                <strong>CEX Listings</strong>: 5% (250,000,000 GOD)
              </li>
              <li>
                <strong>Treasury</strong>: 1% (50,000,000 GOD)
              </li>
              <li>
                <strong>Rewards Pool</strong>: 60% (3,000,000,000 GOD)
              </li>
              <li>
                <strong>Partnerships and Ecosystem Growth</strong>: 14%
                (700,000,000 GOD)
              </li>
              <li>
                <strong>Team and Advisors</strong>: 10% (500,000,000 GOD)
              </li>
            </ul>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Our Partnership with Gworld
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Gworld is a reputable investment company known for its successful
              strategies and commitment to investor growth. Our partnership with
              Gworld ensures that the daily rewards for God Token holders are
              not only reliable but also backed by sound financial practices.
              This collaboration allows us to provide our users with consistent
              returns and valuable investment opportunities.
            </p>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Roadmap
          </h1>
          <div className="mt-[20px] grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
                Q1: Token Creation and Initial Launch
              </h2>
              <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <ul className="ml-[30px] list-disc">
                  <li>
                    <strong>Token Creation</strong>: Successfully created God
                    Token on the GBGC chain.
                  </li>
                  <li>
                    <strong>Smart Contract Development</strong>: Developed and
                    deployed smart contracts.
                  </li>
                  <li>
                    <strong>Partnership with Gworld</strong>: Formalized
                    partnership with Gworld
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
                Q2: Growth and Expansion
              </h2>
              <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <ul className="ml-[30px] list-disc">
                  <li>
                    <strong>Website Launch</strong>: Official website launched.
                  </li>
                  <li>
                    <strong>Social Media Setup</strong>: Established presence on
                    major social media platforms.
                  </li>
                  <li>
                    <strong>Community Engagement</strong>: Organized AMA
                    sessions, webinars, and events.
                  </li>
                  <li>
                    <strong>Community Building</strong>: Began building a
                    community of early adopters and supporters.
                  </li>
                  <li>
                    <strong>Marketing Campaigns</strong>: Initiated targeted
                    marketing campaigns.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
                Q3: Enhancement and Integration
              </h2>
              <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <ul className="ml-[30px] list-disc">
                  <li>
                    <strong>Platform Enhancements</strong>: Implemented platform
                    improvements.
                  </li>
                  <li>
                    <strong>Integration with Gworld Investments</strong>:
                    Facilitated access to Gworld's investments.
                  </li>
                  <li>
                    <strong>Reward Optimization</strong>: Enhanced the reward
                    distribution system.
                  </li>
                  <li>
                    <strong>Partnership Expansion</strong>: Sought additional
                    partnerships.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
                Q4: Future Developments
              </h2>
              <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <ul className="ml-[30px] list-disc">
                  <li>
                    <strong>Advanced Features</strong>: Introduced new features
                    and tools.
                  </li>
                  <li>
                    <strong>Global Outreach</strong>: Expanded reach to
                    international markets.
                  </li>
                  <li>
                    <strong>Sustainability Initiatives</strong>: Focused on
                    sustainable practices.
                  </li>
                  <li>
                    <strong>Exchange Listing</strong>: God Token will listing on
                    Tier 1 & 2 Exchange
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="mb-[20px] mt-[40px] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Join Us Today!
          </h1>
          <div className="my-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Don't miss out on the opportunity to be part of the next big thing
              in crypto. Start earning daily rewards and gain access to
              exclusive investments with God Token.
            </p>
          </div>
        </div>
        <div className="">
          <ul
            role="list"
            className="grid grid-cols-1 gap-[20px] lg:grid-cols-2"
          >
            <a className="flex gap-4" href="https://twitter.com/gbgccoin">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="1x"
                className="h-[20px] w-[20px]"
              />
              Follow on X
            </a>
            <a
              className="flex gap-4"
              href="https://www.instagram.com/gbgccoin/"
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
              href="https://www.facebook.com/profile.php?id=100087517007504"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="1x"
                className="h-[20px] w-[20px]"
              />
              Follow on Facebook
            </a>
            <a className="flex gap-4" href="https://t.me/gbgccoin">
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
