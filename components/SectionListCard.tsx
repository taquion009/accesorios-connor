import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '/styles/SectionListCard.module.scss'
import iconArrowRight from 'public/img/icon-arrow-right.svg'
import figure7 from 'public/img/figure/figure-7.svg'
import figure8 from 'public/img/figure/figure-8.svg'
import Card from './Card'

const SectionListCard: React.FC = () => {
  const [list, setList] = React.useState<Product[]>([])
  const [category, setCategory] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    setIsLoading(true)
    let url = 'https://fakestoreapi.com/products'
    if (category !== 'new' && category !== '') {
      url = `https://fakestoreapi.com/products/category/${category}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        res.length = 8
        const data: Product[] = res.map((item: any) => ({
          title: item.title,
          image: item.image,
          price: item.price,
          id: item.id,
        }))

        setList(data)
        setIsLoading(false)
      })
      .catch((err: any) => {
        console.log(err)
        setIsLoading(false)
      })
  }, [category])

  return (
    <section className={style.containerSectionListCard}>
      <div>
        <h3>LO MAS NUEVO</h3>
        <nav>
          <ul>
            <li>
              <input
                type="radio"
                id="new"
                name="categories"
                value="new"
                defaultChecked
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="new">NUEVO</label>
            </li>
            <li>
              <input
                type="radio"
                id="pulsera"
                name="categories"
                value="women's clothing"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="pulsera">PULSERAS</label>
            </li>
            <li>
              <input
                type="radio"
                id="collares"
                name="categories"
                value="jewelery"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="collares">COLLARES</label>
            </li>
            <li>
              <input
                type="radio"
                id="regalos"
                name="categories"
                value="electronics"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="regalos">REGALOS</label>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.containerListCard}>
        {!isLoading ? (
          list.map((item) => (
            <Link href="/" key={item.id}>
              <a className={style.card}>
                <Card
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </a>
            </Link>
          ))
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </div>
      <Link href="/products">
        <a className={style.linkExplorar}>
          EXPLORAR MAS <Image src={iconArrowRight} alt="icon arrow right" />
        </a>
      </Link>
      <div className={style.containerFigures}>
        <div className={style.figure7}>
          <Image src={figure7} alt="figure 7" layout="fixed" />
        </div>
        <div className={style.figure8}>
          <Image src={figure8} alt="figure 8" layout="fixed" />
        </div>
      </div>
    </section>
  )
}

export default SectionListCard

const Skeleton = () => (
  <svg
    role="img"
    width="150"
    height="200"
    aria-labelledby="loading-aria"
    viewBox="0 0 150 200"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{ fill: 'url("#fill")' }}
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <rect x="0" y="0" rx="3" ry="3" width="150" height="121" />
        <rect x="40" y="184" rx="3" ry="3" width="60" height="15" />
        <rect x="0" y="131" rx="3" ry="3" width="150" height="38" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
)
