'use client'

import LogoBlock from './logo-block'
import { MenuIcon } from './menu-button'
import NavList from './nav-list'

import styles from './PageHeader.module.scss'
import { useState } from 'react'

export default function PageHeader({ navItems }) {
  const [opened, setOpened] = useState(false)

  return (
    <header className={styles.header}>
      <LogoBlock key={'logo-block'} />
      <nav className={styles.nav}>
        <MenuIcon opened={opened} onClick={() => setOpened(!opened)} />
        <NavList opened={opened} navItems={navItems} />
      </nav>
    </header>
  );
}