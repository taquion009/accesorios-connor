import React from 'react'
import style from 'styles/sectionSlider.module.scss'
import figure2 from 'public/img/figure/figure-2.svg'
import figure3 from 'public/img/figure/figure-3.svg'
import figure4 from 'public/img/figure/figure-4.svg'
import figure5 from 'public/img/figure/figure-5.svg'
import figure6 from 'public/img/figure/figure-6.svg'
import pulsera from 'public/img/pulsera.png'
import Image from 'next/image'
import Slider from './Slider'

const SectionSlider: React.FC = () => {
  return (
    <section className={style.sectionSlider}>
      <div className={style.containerContent}>
        <div className={style.containerSlider}>
          <Slider
            imgs={[pulsera, pulsera, pulsera, pulsera, pulsera]}
            speed={3500}
            speedTransition={1000}
            space={300}
            width={300}
          />
          <div className={style.containerTitle}>
            <h1>GRABA TUS RECUERDOS</h1>
            <h2>PULSERAS PERSONALIZADAS</h2>
          </div>
        </div>
        <a href="#new" className={style.button}>
          Explorar Colección
        </a>
      </div>
      <div className={style.containerFigure}>
        <div className={style.figure1}>
          <Image
            src={figure2}
            alt="figure"
            width={249}
            height={136}
            layout="fixed"
          />
        </div>
        <div className={style.figure2}>
          <Image
            src={figure3}
            alt="figure 2"
            width={334}
            height={382}
            layout="fixed"
          />
        </div>
        <div className={style.figure3}>
          <Image
            src={figure4}
            alt="figure 3"
            width={178.41}
            height={389.14}
            layout="fixed"
          />
        </div>
        <div className={style.figure4}>
          <Image
            src={figure5}
            alt="figure 4"
            width={858.59}
            height={707.45}
            layout="fixed"
          />
        </div>
        <div className={style.figure5}>
          <Image
            src={figure6}
            alt="figure 5"
            width={475.47}
            height={759.47}
            layout="fixed"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionSlider
