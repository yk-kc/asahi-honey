import Image from 'next/image'
import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'

type HeaderItemTypes = {
  text: string
  url: string
}

export default function Header() {
  const HEADER_ITEMS: HeaderItemTypes[] = [
    { text: 'TOP', url: '/' },
    { text: '商品一覧', url: '/products' },
    { text: 'お知らせ', url: '/news' },
    { text: 'お問い合わせ', url: '/contact' },
  ]
  return (
    <header>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <Image src='/images/logo.png' alt='' width={60} height={60} />
        </Link>
      </div>
      <div className={styles.navContainer}>
        <nav>
          <ul className={styles.navFlex}>
            {HEADER_ITEMS.map((item, _) => {
              return (
                <li key={_} className={styles.linkSpace}>
                  <Link href={item.url} className={styles.linkText}>
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
