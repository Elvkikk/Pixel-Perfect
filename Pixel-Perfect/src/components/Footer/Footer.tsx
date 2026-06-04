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
        <div className={styles.footerBrand}>
          <a className={styles.footerMark} href="#" aria-label="npm home">
            npm
          </a>
          <a className={styles.githubLink} href="#" aria-label="GitHub">
            <svg aria-hidden="true" viewBox="0 0 19 19">
              <use href="/icons.svg#github-icon" />
            </svg>
          </a>
        </div>

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
      <div className={styles.colorBar} />
    </footer>
  )
}
