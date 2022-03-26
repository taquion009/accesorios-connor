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

const Slider: React.FC<Props> = ({
  imgs,
  speed = 2000,
  space = 300,
  width = 300,
  speedTransition = 1000,
}) => {
  const slider = useRef<HTMLDivElement>(null)
  const [widthSlider, setWidthSlider] = React.useState(width)
  const [position, setPosition] = React.useState(0)

  useEffect(() => {
    if (window) {
      setWidthSlider(
        width > window.innerWidth - 32 ? window.innerWidth - 32 : width,
      )

      window.addEventListener('resize', () => {
        const newWidth =
          width > window.innerWidth - 32 ? window.innerWidth - 32 : width
        setWidthSlider(newWidth)

        if (!slider.current) return
        slider.current.style.left = `${position * (newWidth + space) * -1}px`
      })
    }
  }, [width, space, position])

  useEffect(() => {
    console.log('useEffect')
    let iter = setTimeout(() => {
      setPosition((after) => after + 1)
      if (slider.current) {
        slider.current.style.transition = `left ${speedTransition}ms ease-in-out`
        slider.current.style.left = `${position * (widthSlider + space) * -1}px`

        if (
          position * (widthSlider + space) * -1 <=
          (imgs.length * widthSlider + space * imgs.length) * -1
        ) {
          setTimeout(() => {
            if (!slider.current) return

            setPosition(0)

            slider.current.style.transition = `none`
            slider.current.style.left = `0px`
          }, speedTransition)
        }
      }
    }, speed)

    return () => clearTimeout(iter)
  }, [position, speed, imgs, widthSlider, space, speedTransition])

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
