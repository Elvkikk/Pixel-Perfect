import styles from './Footer.module.scss'

const linkGroups = [
  {
    title: 'Support',
    links: ['Help', 'Advisories', 'Status', 'Contact npm'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Press', 'Careers'],
  },
  {
    title: 'Terms',
    links: ['Policies', 'Terms of Use', 'Code of Conduct', 'Privacy'],
  },
]

export function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <a className={styles.footerMark} href="#" aria-label="npm home">
          npm
        </a>

        <div className={styles.linkGrid}>
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} links`}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </footer>
  )
}
