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

export default function BuyNow() {
  const price = 0.0001
  return (
    <Container className="mt-4 sm:mt-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <div className="mx-auto h-[450px] w-[400px] rounded-lg bg-gray-800 px-5 py-2">
            <h1 className="my-[10px] text-center text-[20px]">
              Every is Lakh Coin out price will increase
            </h1>
            <hr />
            <h1 className="my-[10px] text-center text-[20px]">
              Current Price - $${price}
            </h1>
            <hr />
            <h1 className="my-[10px] text-center text-[20px]">
              Total out / Current out
            </h1>
            <hr />
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
