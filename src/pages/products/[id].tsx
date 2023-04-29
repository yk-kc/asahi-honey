import { GetServerSideProps } from 'next'
import React from 'react'

type Product = {
  id: string
  name: string
}

type Props = {
  product: Product
}

export default function Product({ product }: Props) {
  return <div>{product.id}</div>
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  // TODO: MicroCMSに置き換え
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  )
  const product = await res.json()

  return {
    props: {
      product,
    },
  }
}
