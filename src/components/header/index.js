'use client'

import LogoBlock from './logo-block'
import NavBlock from './nav-block'
import { MenuIcon } from './menu-button'

import styles from './PageHeader.module.scss'
import { useState } from 'react'

export default function PageHeader() {

  const navList = [
    { id: 0, title: '首页', subtitle: 'HOME', href: '/'},
    { id: 1, title: '技术', subtitle: 'TECH', href: '/tech'},
    { id: 2, title: '二次元', subtitle: 'ACGN', href: '/acgn'},
    { id: 3, title: '时间线', subtitle: 'TIMELINE', href: '/timeline'},
    { id: 4, title: '关于我', subtitle: 'ABOUT', href: '/about'},
  ]

  const [opened, setOpened] = useState(false)

  return (
    <header className={styles.header}>
      <LogoBlock key={'logo-block'} />
      <nav className={styles.nav}>
        <MenuIcon opened={opened} onClick={() => setOpened(!opened)} />
        <ul className={opened ? styles.opened : styles.closed}>
          {navList.map((item, index) =>
            <NavBlock
              key={item.id}
              sort={index}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
            />
          )}
        </ul>
      </nav>
    </header>
  );
}