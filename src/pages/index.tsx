import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>ホーム | あさひのはちみつ</title>
        <meta
          name='description'
          content='採れたて新鮮はちみつなら、あさひのはちみつ'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        ホーム画面
      </main>
    </>
  )
}
