import LogoBlock from '../logo-block'
import NavBlock from '../nav-block'

import styles from './PageHeader.module.css'

export default function PageHeader({ selectedHref }) {

  const navList = [
    { id: 0, title: '首页', subtitle: 'HOME', href: '/'},
    { id: 1, title: '关于我', subtitle: 'ABOUT ME', href: '/about'},
  ]

  return (
    <header className={styles.header}>
      <LogoBlock />
      <nav className={styles.nav}>
        {navList.map(item =>
          <NavBlock key={item.id} title={item.title} subtitle={item.subtitle} href={item.href} selected={selectedHref === item.href} />
        )}
      </nav>
    </header>
  );
}