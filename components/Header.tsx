import style from 'styles/header.module.scss'
import React from 'react'
import Image from 'next/image'
import logo from 'public/img/logo.svg'
import iconBag from 'public/img/icon-bag.svg'
import MenuMoblie from './MenuMoblie'
import Link from 'next/link'
import MenuDesk from './MenuDesk'

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.containerHeader}>
        <MenuMoblie />
        <Link href="/">
          <a className={style.logo}>
            <Image
              src={logo}
              alt="Logo accesorios connor"
              width={76}
              height={64}
            />
          </a>
        </Link>
        <MenuDesk />
        <div className={style.cart}>
          <Link href="/cart">
            <a>
              <span className={style.spanCart}>CARRITO</span>
              <Image src={iconBag} width={24} height={24} alt="icon bag" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
