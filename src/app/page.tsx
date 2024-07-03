'use client'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { VictoryPie } from 'victory'
const data = [
  { x: 'DEV', y: 10 },
  { x: 'CEX', y: 5 },
  { x: 'TRE', y: 1 },
  { x: 'RP', y: 60 },
  { x: 'PEG', y: 14 },
  { x: 'TA', y: 10 },
]

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-full">
          <h1 className="mb-10 mt-[160px] text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
            Earn 1% Daily USDT with God Token
          </h1>
          <h2 className="mb-6 mt-16 text-xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            The Future of Crypto Investment on the GBGC Chain with Gworld
          </h2>
          <p className=" text-base text-zinc-600 dark:text-zinc-400">
            God Token is a revolutionary new crypto token on the GBGC chain. Our
            mission is to provide crypto enthusiasts with an opportunity to earn
            daily rewards and gain easy access to high-potential investments
            through our partnership with Gworld.
          </p>

          <h2 className="mb-6 mt-16 text-xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            Tokenomics
          </h2>
          <div className="flex gap-10">
            <div className="h-[200px] w-[200px]">
              <VictoryPie
                data={data}
                style={{ labels: { fill: '#ffffff', fontSize: '25px' } }}
              />
            </div>
            <div>
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
          </div>

          <h1 className="mb-[20px] mt-[40px] text-xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
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
                    Facilitated access to Gworld&apos;s investments.
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

          <div className="mb-[50px] mt-[100px] flex justify-center gap-5">
            <Button
              href="/GOD%20Token%20Whitepaper.pdf"
              variant="secondary"
              className="group mt-6 w-[150px]"
            >
              Whitepaper
              {/* <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" /> */}
            </Button>
          </div>
          <div className="mt-6 flex gap-6">
            <a href="https://x.com/gworldgod">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="1x"
                className="h-[20px] w-[20px]"
              />
            </a>
            <a href="https://www.instagram.com/_g.world/">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="h-[20px] w-[20px]"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61561656124722">
              <FontAwesomeIcon
                icon={faFacebookF}
                size="1x"
                className="h-[20px] w-[20px]"
              />
            </a>
            <a href="https://t.me/+0Rk3y7LzbmZiZmRl">
              <FontAwesomeIcon
                icon={faTelegram}
                size="1x"
                className="h-[20px] w-[20px]"
              />
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}
