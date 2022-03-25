import header from 'styles/header.module.scss'
import React from 'react'
import Link from 'next/link'

const MenuDesk: React.FC = () => {
  return (
    <div className={header.containerMenuDesk}>
      <nav className={header.containerMenuDeskNav}>
        <ul className={header.itemMenuDesk}>
          <li>
            <Link href="/collares">
              <a>COLLARES</a>
            </Link>
          </li>
          <li>
            <Link href="/pulseras">
              <a>PULSERAS</a>
            </Link>
          </li>
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
        </ul>
      </nav>
    </div>
  )
}

export default MenuDesk
