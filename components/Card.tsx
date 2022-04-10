import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  image: string
  price: number
}

const Card: React.FC<Props> = ({ title, price, image }) => {
  const convertImage = (w: number, h: number) => `
  <svg
  role="img"
  width="200"
  height="200"
  aria-labelledby="loading-aria"
  viewBox="0 0 200 200"
  preserveAspectRatio="none"
xmlns="http://www.w3.org/2000/svg"
>
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clip-path="url(#clip-path)"
    style='fill: url("#fill");'
  ></rect>
  <defs>
    <clipPath id="clip-path">
        <rect x="0" y="0" rx="3" ry="3" width="200" height="200" />
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stop-color="#f3f3f3"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="1.59996"
        stop-color="#ecebeb"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="2.59996"
        stop-color="#f3f3f3"
        stop-opacity="1"
      >
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
</svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)
  return (
    <div>
      <Image
        src={image}
        alt="image"
        width={200}
        height={200}
        layout="responsive"
        priority
        objectFit="contain"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          convertImage(700, 475),
        )}`}
      />
      <div>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default Card
