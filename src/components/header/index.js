'use client'

import { usePathname } from 'next/navigation'
import { MenuIcon } from '@components'
import LogoBlock from './logo-block'
import NavBlock from './nav-block'

import styles from './PageHeader.module.scss'

export default function PageHeader() {

  const selectedHref = usePathname()

  const navList = [
    { id: 0, title: '首页', subtitle: 'HOME', href: '/'},
    { id: 1, title: '技术', subtitle: 'TECH', href: '/tech'},
    { id: 2, title: '二次元', subtitle: 'ACGN', href: '/acgn'},
    { id: 3, title: '时间线', subtitle: 'TIMELINE', href: '/timeline'},
    { id: 4, title: '关于我', subtitle: 'ABOUT', href: '/about'},
  ]

  return (
    <header className={styles.header}>
      <LogoBlock key={'logo-block'} />
      <nav className={styles.nav}>
        <MenuIcon className={styles.menu} color={styles.barColor} />
        <ul>
          {navList.map((item, index) =>
            <NavBlock key={item.id} sort={index} title={item.title} subtitle={item.subtitle} href={item.href} selected={selectedHref === item.href} />
          )}
        </ul>
      </nav>
    </header>
  );
}