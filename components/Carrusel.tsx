import React from 'react'
import Image from 'next/image'
import style from 'styles/carrusel.module.scss'
import arrowCarrusel from 'public/img/arrow-carrusel.svg'

interface Props {
  items: Product[]
  width: number
  height: number
}

const handleClickMove = (
  rigth: Boolean,
  slider: HTMLUListElement,
  width: number,
  setSelect: React.Dispatch<
    React.SetStateAction<{
      select: number
      length: number
    }>
  >,
  lenghtSection: number,
) => {
  const move = rigth ? -width : width
  const left = parseInt(slider.style.left.replace('px', '')) || 0
  const newLeft = left + move
  slider.style.transition = `left 350ms ease-in-out`
  let position = Math.round(newLeft / width)

  if (newLeft * -1 < 0) {
    position = 0
  }

  if (newLeft * -1 >= lenghtSection * width) {
    position = lenghtSection * -1
  }

  setSelect((after) => ({ select: position * -1, length: after.length }))
  slider.style.left = `${position * width}px`
}

const dragCarrusel = (
  slider: HTMLUListElement,
  width: number,
  length: number,
  setSelect: React.Dispatch<
    React.SetStateAction<{
      select: number
      length: number
    }>
  >,
  lenghtSection: number,
): any => {
  let start: null | number = null
  let left: number = 0

  const mousedown = (e: MouseEvent) => {
    start = e.clientX
  }
  slider.addEventListener('mousedown', mousedown)

  let mousemove = (e: MouseEvent) => {
    if (start) {
      const x = e.clientX
      const diff = x - start
      left = Number(slider.style.left.split('px')[0])

      if (left * -1 <= (length - 1) * width && left * -1 >= 0) {
        slider.style.transition = `none`

        slider.style.left = `${left + diff}px`
        start = x
      }
    }
  }

  slider.addEventListener('mousemove', mousemove)

  const mouseup = () => {
    if (start) {
      start = null
      let position = Math.round(left / width)

      if (left * -1 < 0) {
        position = 0
      }

      if (left * -1 >= lenghtSection * width) {
        position = lenghtSection * -1
      }

      setSelect((after) => ({
        select: position * -1,
        length: after.length,
      }))
      slider.style.transition = `left 350ms ease-in-out`
      slider.style.left = `${position * width}px`
    }
  }

  slider.addEventListener('mouseup', mouseup)

  //mobile
  const touchstart = (e: TouchEvent) => {
    start = e.touches[0].clientX
  }

  slider.addEventListener('touchstart', touchstart)

  const touchmove = (e: TouchEvent) => {
    if (start) {
      const x = e.touches[0].clientX
      const diff = x - start
      left = Number(slider.style.left.split('px')[0])

      if (left * -1 <= (length - 1) * width && left * -1 >= 0) {
        slider.style.transition = `none`

        slider.style.left = `${left + diff}px`
        start = x
      }
    }
  }

  slider.addEventListener('touchmove', touchmove)

  const touchend = () => {
    if (start) {
      start = null
      let position = Math.round(left / width)

      if (left * -1 < 0) {
        position = 0
      }

      if (left * -1 >= lenghtSection * width) {
        position = lenghtSection * -1
      }

      setSelect((after) => ({
        select: position * -1,
        length: after.length,
      }))
      slider.style.transition = `left 350ms ease-in-out`
      slider.style.left = `${position * width}px`
    }
  }

  slider.addEventListener('touchend', touchend)

  return {
    mousedown,
    mousemove,
    mouseup,
    touchmove,
    touchend,
    touchstart,
  }
}

const HandleMove = (
  width: number,
  slider: HTMLUListElement,
  length: number,
  setSelect: React.Dispatch<
    React.SetStateAction<{
      select: number
      length: number
    }>
  >,
  widthWindow: number,
): any => {
  let position = 0

  if (slider.style.left !== '') {
    position = Math.trunc(
      Number(slider.style.left.split('px')[0]) / (width * -1),
    )

    slider.style.transition = `none`
    slider.style.left = `${position * width * -1}px`
  }

  return dragCarrusel(slider, width, length, setSelect, widthWindow)
}

const Carrusel: React.FC<Props> = ({ items, width, height }) => {
  const slider = React.useRef<HTMLUListElement>(null)
  const [widthSlider, setWidthSlider] = React.useState(width)
  const [lenghtSection, setLenghtSection] = React.useState(items.length)
  const [select, setSelect] = React.useState<{
    select: number
    length: number
  }>({
    select: 0,
    length: items.length,
  })

  React.useEffect(() => {
    if (window) {
      let windowWidth = window.innerWidth - 96
      const newWidthSlider = width > windowWidth ? windowWidth : width
      let lenghtSection = 0
      setWidthSlider(newWidthSlider)
      let suma = 0
      let resta = 0

      if (windowWidth < 1200) {
        lenghtSection =
          items.length - Math.floor(windowWidth / (newWidthSlider + 64))
        if (Math.floor(windowWidth / (newWidthSlider + 64)) === 0) {
          suma = 1
        } else {
          resta = 1
        }
      } else {
        lenghtSection =
          items.length - Math.floor((1200 - 96) / (newWidthSlider + 64))

        if (Math.floor((1200 - 96) / (newWidthSlider + 64)) === 0) {
          suma = 1
        } else {
          resta = 1
        }
      }

      setSelect((after) => ({
        select: after.select,
        length: lenghtSection + resta,
      }))

      setLenghtSection(lenghtSection - suma)

      window.addEventListener('resize', () => {
        windowWidth = window.innerWidth - 96
        const newWidthSlider = width > windowWidth ? windowWidth : width
        let lenghtSection = 0
        let suma = 0
        let resta = 0
        setWidthSlider(newWidthSlider)

        if (windowWidth < 1200) {
          lenghtSection =
            items.length - Math.floor(windowWidth / (newWidthSlider + 64))
          if (Math.floor(windowWidth / (newWidthSlider + 64)) === 0) {
            suma = 1
          } else {
            resta = 1
          }
        } else {
          lenghtSection =
            items.length - Math.floor((1200 - 96) / (newWidthSlider + 64))

          if (Math.floor((1200 - 96) / (newWidthSlider + 64)) === 0) {
            suma = 1
          } else {
            resta = 1
          }
        }

        setSelect((after) => ({
          select: after.select,
          length: lenghtSection + resta,
        }))

        setLenghtSection(lenghtSection - suma)
      })
    }
  }, [width, items])

  React.useEffect(() => {
    if (!slider.current) return
    let UlElement = slider.current
    let events = HandleMove(
      widthSlider + 64,
      UlElement,
      items.length,
      setSelect,
      lenghtSection,
    )

    return () => {
      UlElement.removeEventListener('mousedown', events.mousedown)
      UlElement.removeEventListener('mousemove', events.mousemove)
      UlElement.removeEventListener('mouseup', events.mouseup)
      UlElement.removeEventListener('touchstart', events.touchstart)
      UlElement.removeEventListener('touchmove', events.touchmove)
      UlElement.removeEventListener('touchend', events.touchend)
    }
  }, [items, widthSlider, lenghtSection])

  const clickSection = (id: number) => {
    setSelect((after) => ({
      select: id,
      length: after.length,
    }))

    if (!slider.current) return
    slider.current.style.transition = `left 350ms ease-in-out`
    slider.current.style.left = `${id * (widthSlider + 64) * -1}px`
  }

  return (
    <div className={style.containerCarrusel}>
      <button
        className={style.arrowLeft}
        onClick={() => {
          if (!slider.current) return null
          handleClickMove(
            false,
            slider.current,
            widthSlider + 64,
            setSelect,
            lenghtSection,
          )
        }}
      >
        <Image
          src={arrowCarrusel}
          alt="Arrow Carrusel"
          width={60}
          height={35}
          layout="fixed"
        />
      </button>
      <button
        onClick={() => {
          if (!slider.current) return null
          handleClickMove(
            true,
            slider.current,
            widthSlider + 64,
            setSelect,
            lenghtSection,
          )
        }}
      >
        <Image
          src={arrowCarrusel}
          alt="Arrow Carrusel"
          width={60}
          height={35}
          layout="fixed"
        />
      </button>
      <ul ref={slider}>
        {items.map((item) => (
          <li key={item.id} style={{ width: widthSlider }}>
            <Image
              src={item.image}
              alt={item.title}
              width={widthSlider}
              height={height}
              objectFit="cover"
              layout="fixed"
              draggable={false}
            />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={style.selector}>
        <ul>
          {select.length > 0 &&
            Array(select.length)
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className={select.select === index ? style.select : ''}
                  onClick={() => clickSection(index)}
                ></li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default Carrusel
