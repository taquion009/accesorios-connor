import React from 'react'
import Image from 'next/image'
import style from 'styles/footer.module.scss'
import iconInstagram from 'public/img/icon-instagram.svg'
import iconWhatsApp from 'public/img/icon-whatsapp.svg'
import logo2 from 'public/img/logo2.png'
import figure6 from 'public/img/figure/figure-6.svg'
import figure12 from 'public/img/figure/figure-12.svg'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.listSocial}>
        <li>
          <a href="https://www.instagram.com/">
            <Image src={iconInstagram} width={24} height={24} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5491134123412">
            <Image src={iconWhatsApp} width={24} height={24} alt="WhatsApp" />
          </a>
        </li>
      </ul>
      <Image src={logo2} width={154} height={159} alt="Logo" />
      <ul className={style.listContacs}>
        <li>
          <a href="mailto:sodia@mgai.com">support@openui.design</a>
        </li>
        <li>
          <p>+60 825 876</p>
        </li>
        <li>
          <p>08:00 - 22:00 - Todos los dias</p>
        </li>
      </ul>
      <ul className={style.listLinks}>
        <li>
          <Link href="/about">
            <a>Sobre mí</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
      <div className={style.containerFigure}>
        <div className={style.figure6}>
          <Image src={figure6} alt="Figure 6" layout="fixed" />
        </div>
        <div className={style.figure12}>
          <Image src={figure12} alt="Figure 12" layout="fixed" />
        </div>
      </div>
      <p className={style.creador}>Desarrollado con ❤ por Rodrigo Milesi.</p>
    </footer>
  )
}

export default Footer
