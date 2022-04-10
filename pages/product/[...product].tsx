import Head from 'next/head'
import React from 'react'
import SectionFAQ from 'components/SectionFAQ'
import ProductDetail from 'components/ProductDetail'
import style from 'styles/product.module.scss'
import ImagesZoom from 'components/ImagesZoom'
import Image from 'next/image'
import figure7 from 'public/img/figure/figure-6.svg'
import figure13 from 'public/img/figure/figure-13.svg'
import iconArrowBack from 'public/img/icon-arrow-back.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Product: React.FC<{
  product: Product
}> = ({ product }) => {
  const router = useRouter()

  if (!product) return <div>No hay producto</div>

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.containerButtonBack}>
            <button onClick={() => router.back()}>
              <Image
                src={iconArrowBack}
                alt="icon-arrow-back"
                width={18}
                height={18}
              />
              VOLVER
            </button>
          </div>
          <ImagesZoom
            images={product.image.map((image, index) => ({
              image: image,
              alt: product.title + ' - ' + index,
              id: image + index,
            }))}
            size={400}
          />
          <ProductDetail {...product} />
        </div>
        <div className={style.containerFigure}>
          <div className={style.figure7}>
            <Image src={figure7} alt="figure 7" layout="fixed" />
          </div>
          <div className={style.figure13}>
            <Image src={figure13} alt="figure 13" layout="fixed" />
          </div>
        </div>
      </section>
      <SectionFAQ
        questions={[
          {
            question: '¿Qué es el coronavirus?',
            answer:
              'El coronavirus es una enfermedad infecciosa causada por una ' +
              'subclase de la influenza que se ha descubierto más recientemente. ' +
              'Esta enfermedad se ha asociado con muchos otros virus, incluyendo ' +
              'la influenza A y la influenza B. El nombre del virus se debe a que ',
            id: 1,
          },
          {
            question: '¿Qué es el universo?',
            answer:
              'El universo es una enorme cantidad de cosa. ' +
              'Por ejemplo, una persona puede tener una vida de una sola ' +
              'vez, pero puede tener una vida de mil millones de veces. ' +
              'El universo es una cantidad enorme de cosas. Por ejemplo, ' +
              'un humano puede tener una vida de una sola vez, pero puede ',
            id: 2,
          },
          {
            question: '¿Qué es un auto?',
            answer:
              'Un auto es un vehículo automotor de uso particular, ' +
              'comercial o de servicio, que tiene un motor eléctrico, ' +
              'que tiene una o más ruedas, una o más asientos, una o más ',
            id: 3,
          },
          {
            question: '¿Qué es un vaso?',
            answer:
              'Un vaso es un recipiente de una solución, ' +
              'es decir, un recipiente que contiene una solución, ' +
              'como una bebida, un jugo, una crema, una salsa, una salsa, ',
            id: 4,
          },
        ]}
      />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  const paths = products.map((product: any) => ({
    params: {
      product: [String(product.id)],
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: {
    product: string[]
  }
}) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.product[0]}`,
  )
  const product = await res.json()
  const data: Product = {
    title: product.title,
    image: [product.image],
    price: product.price,
    id: product.id,
  }

  return {
    props: {
      product: data,
    },
  }
}

export default Product
