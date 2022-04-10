import Image from 'next/image'
import React, { useState } from 'react'
import style from 'styles/imagesZoom.module.scss'

const ImagesZoom: React.FC<{
  images: {
    image: string
    alt: string
    id: number | string
  }[]
  size?: number
}> = ({ images, size = 600 }) => {
  const [img, setImg] = useState(0)

  const zoom = (e: any) => {
    let zoomer = e.currentTarget

    let x = ((e.pageX - zoomer.offsetLeft) / zoomer.offsetWidth) * 100
    let y = ((e.pageY - zoomer.offsetTop) / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%'
    zoomer.style.backgroundSize = '150%'
  }

  return (
    <div className={style['product-images']}>
      <figure
        className={style.zoom}
        onMouseMove={zoom}
        style={{
          backgroundImage: `url(${images[img].image})`,
        }}
      >
        <div className={style['image-product']}>
          <Image
            src={images[img].image}
            alt={images[img].alt}
            width={size}
            height={size}
            objectFit="contain"
            layout="intrinsic"
          />
        </div>
      </figure>
      <div className={style['container-image-secondary']}>
        {images.length > 1 &&
          images.map((image, index) => (
            <Image
              className={style['image-product-secondary']}
              onClick={() => setImg(index)}
              src={image.image}
              key={image.id}
              width={200}
              height={200}
              alt={image.alt}
            />
          ))}
      </div>
    </div>
  )
}

export default ImagesZoom
