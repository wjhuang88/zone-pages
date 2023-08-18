'use client'

import { usePathname } from 'next/navigation'
import LogoBlock from '../logo-block'
import NavBlock from '../nav-block'

import styles from './PageHeader.module.css'

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
        {navList.map(item =>
          <NavBlock key={item.id} title={item.title} subtitle={item.subtitle} href={item.href} selected={selectedHref === item.href} />
        )}
      </nav>
    </header>
  );
}