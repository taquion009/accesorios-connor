import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import style from 'styles/sectionCustom.module.scss'
import custom from 'public/img/custom.png'
import figure9 from 'public/img/figure/figure-9.svg'
import figure10 from 'public/img/figure/figure-10.svg'

const SectionCustom: React.FC = () => {
  return (
    <section className={style.sectionCustom}>
      <h3>Crea tu propia pulsera</h3>
      <div className={style.customImagePreview}>
        <Image src={custom} alt="Custom" layout="fixed" />
      </div>
      <Link href="/custom">
        <a className={style.button}>Crealo Ahora</a>
      </Link>
      <div className={style.containerFigure}>
        <div className={style.figure9}>
          <Image src={figure9} alt="Figure 9" layout="fixed" />
        </div>
        <div className={style.figure10}>
          <Image src={figure10} alt="Figure 10" layout="fixed" />
        </div>
      </div>
    </section>
  )
}

export default SectionCustom
