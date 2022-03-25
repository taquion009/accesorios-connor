import header from 'styles/header.module.scss'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import iconMenu from 'public/img/icon-menu.svg'
import iconCloseMenu from 'public/img/icon-close-menu.svg'
import iconInstagram from 'public/img/icon-instagram.svg'
import iconWhatsapp from 'public/img/icon-whatsapp.svg'
import figure1 from 'public/img/figure/figure-1.svg'

const MenuMoblie: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={header.containerMenuMovil}>
      <button
        onClick={() => setIsOpen((before) => !before)}
        className={!isOpen ? header.active : ''}
      >
        <Image src={iconMenu} width={24} height={24} alt="icon menu open" />
      </button>
      <button
        onClick={() => setIsOpen((before) => !before)}
        className={isOpen ? header.active : ''}
      >
        <Image
          src={iconCloseMenu}
          width={24}
          height={24}
          alt="icon menu close"
        />
      </button>
      <nav
        className={`
            ${header.containerMenuMovilNav}
            ${isOpen ? header.containerMenuMovilNavActive : ''}
            `}
      >
        <ul className={header.itemMenuMovilOne}>
          <li>
            <Link href="/pulseras">
              <a>Pulseras</a>
            </Link>
          </li>
          <li>
            <Link href="/collares">
              <a>Collares</a>
            </Link>
          </li>
          <li>
            <Link href="/custom">
              <a>Pulseras personalizadas</a>
            </Link>
          </li>
        </ul>
        <hr />
        <ul className={header.itemMenuMovilTwo}>
          <li>
            <Link href="/about">
              <a>SOBRE MÍ</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACTO</a>
            </Link>
          </li>
          <li>
            <Link href="/preguntas">
              <a>PREGUNTAS FRECUENTES</a>
            </Link>
          </li>
        </ul>
        <ul className={header.itemMenuMovilThree}>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/pulseras_de_diamante/"
            >
              <Image
                src={iconInstagram}
                width={24}
                height={24}
                alt="icon instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=51997777777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={iconWhatsapp}
                width={24}
                height={24}
                alt="icon whatsapp"
              />
            </a>
          </li>
        </ul>
        <figure className={header.figure1}>
          <span>
            <Image src={figure1} width={200} height={200} alt="figure 1" />
          </span>
        </figure>
      </nav>
    </div>
  )
}

export default MenuMoblie
