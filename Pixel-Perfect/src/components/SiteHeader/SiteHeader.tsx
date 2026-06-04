import styles from './SiteHeader.module.scss'

export function SiteHeader() {
  return (
    <>
      <div className={styles.colorBar} />

      <header className={styles.siteHeader}>
        <div className={styles.topNav}>
          <a className={styles.heartLink} href="#" aria-label="npm loves developers">
            ❤
          </a>
          <nav aria-label="Primary navigation">
            <a href="#">Pro</a>
            <a href="#">Teams</a>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
          </nav>
        </div>

        <div className={styles.searchNav}>
          <a className={styles.npmMark} href="#" aria-label="npm home">
            npm
          </a>

          <form className={styles.packageSearch} role="search">
            <label className="sr-only" htmlFor="package-search">
              Search packages
            </label>
            <span aria-hidden="true" className={styles.searchGlyph} />
            <input id="package-search" type="search" placeholder="Search packages" />
            <button type="submit">Search</button>
          </form>

          <div className={styles.authActions}>
            <a className={styles.signUp} href="#">
              Sign Up
            </a>
            <a className={styles.signIn} href="#">
              Sign In
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
export default SiteHeader;
