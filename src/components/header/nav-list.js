import NavBlock from './nav-block'
import styles from './PageHeader.module.scss'

export default function NavList({ navItems, opened }) {
  return (
    <ul className={opened ? styles.opened : styles.closed}>
      {navItems.map((item, index) =>
        <NavBlock
          key={item.id}
          sort={index}
          title={item.title}
          subtitle={item.subtitle}
          href={item.href}
        />
      )}
    </ul>
  )
}