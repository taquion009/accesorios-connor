import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import style from 'styles/slider.module.scss'

interface Props {
  imgs: StaticImageData[]
  speed: number
  space: number
  width: number
  speedTransition: number
}

const sliderMove = (
  width: number,
  slider: HTMLDivElement,
  speed: number,
  speedTransition: number,
  length: number,
) => {
  let position = 0

  if (slider.style.left !== '') {
    position = Math.trunc(
      Number(slider.style.left.split('px')[0]) / (width * -1),
    )

    slider.style.transition = `none`
    slider.style.left = `${position * width * -1}px`
  }

  const interval = setInterval(() => {
    position += 1
    if (slider) {
      slider.style.transition = `left ${speedTransition}ms ease-in-out`
      slider.style.left = `${position * width * -1}px`

      if (position * width * -1 <= length * width * -1) {
        setTimeout(() => {
          if (!slider) return
          position = 0

          slider.style.transition = `none`
          slider.style.left = `0px`
        }, speedTransition)
      }
    }
  }, speed)

  return interval
}

const Slider: React.FC<Props> = ({
  imgs,
  speed = 2000,
  space = 300,
  width = 300,
  speedTransition = 1000,
}) => {
  const slider = useRef<HTMLDivElement>(null)
  const [widthSlider, setWidthSlider] = React.useState(width)

  useEffect(() => {
    if (window) {
      setWidthSlider(
        width > window.innerWidth - 32 ? window.innerWidth - 32 : width,
      )

      window.addEventListener('resize', () => {
        setWidthSlider(
          width > window.innerWidth - 32 ? window.innerWidth - 32 : width,
        )
      })
    }
  }, [width, space])

  useEffect(() => {
    if (!slider.current) return

    const iter = sliderMove(
      widthSlider + space,
      slider.current,
      speed,
      speedTransition,
      imgs.length,
    )

    return () => {
      clearTimeout(iter)
    }
  }, [speed, imgs, widthSlider, space, speedTransition])

  return (
    <div className={style.containerSlider} style={{ width: widthSlider }}>
      <div ref={slider}>
        {imgs.map((img, index) => (
          <div
            key={index}
            className="slider__item"
            style={{ width: widthSlider, marginRight: space }}
          >
            <Image src={img} width={width} alt="slider" layout="responsive" />
          </div>
        ))}
        <div
          className="slider__item"
          style={{
            width: widthSlider,
            marginRight: space,
          }}
        >
          <Image src={imgs[0]} width={width} alt="slider" layout="responsive" />
        </div>
      </div>
    </div>
  )
}

export default Slider
