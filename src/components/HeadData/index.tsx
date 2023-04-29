import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}
export default function HeadData({ title = '' }: Props) {
  return (
    <Head>
      <title>{title} | あさひのはちみつ</title>
      <meta
        name='description'
        content='採れたて新鮮はちみつなら、あさひのはちみつ'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
