import Image from 'next/image'
import React from 'react'
import figure11 from 'public/img/figure/figure-11.svg'
import style from 'styles/SectionFavoriteMonth.module.scss'
import Carrusel from './Carrusel'
import Link from 'next/link'

const SectionFavoriteMonth: React.FC = () => {
  const [list, setList] = React.useState<Product[]>([])

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        res.length = 6
        const data: Product[] = res.map((item: any) => ({
          title: item.title,
          image: [item.image],
          price: item.price,
          id: item.id,
        }))

        setList(data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])

  return (
    <section className={style.section}>
      <h3>Favoritos del mes</h3>
      <div className={style.containerCarrusel}>
        {!!list.length && (
          <Carrusel
            items={list.map((item: Product) => ({
              image: item.image,
              id: item.id,
              alt: item.title,
              content: (
                <Link href={`/product/${item.id}`}>
                  <a draggable={false}>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                  </a>
                </Link>
              ),
            }))}
            width={300}
            height={500}
          />
        )}
      </div>
      <div className={style.containerFigure}>
        <div className={style.figure11}>
          <Image src={figure11} alt="Figure 11" layout="fill" />
        </div>
      </div>
    </section>
  )
}

export default SectionFavoriteMonth
