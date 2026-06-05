import heroArt from '../../assets/hero.png'
import styles from './MarketingIntro.module.scss'

export function MarketingIntro() {
  return (
    <section className={styles.heroMarketingSection}>
      <img className={styles.heroBackgroundArt} src={heroArt} alt="" aria-hidden="true" />

      <div className={styles.heroMarketingInner}>
        <div className={`${styles.contentNarrow} ${styles.fadeUp}`}>
          <h1>Build amazing things</h1>
          <p>
            We&apos;re GitHub, the company behind the npm Registry and npm CLI. We
            offer those to the community for free, but our day job is building and
            selling useful tools for developers like you.
          </p>
        </div>

        <div className={`${styles.contentNarrow} ${styles.marketingContent} ${styles.fadeUp} ${styles.fadeUpLate}`}>
          <h2>Take your JavaScript development up a notch</h2>
          <p>
            Get started today for free, or step up to npm Pro to enjoy a premium
            JavaScript development experience, with features like private packages.
          </p>
          <div className={styles.ctaRow}>
            <a className={`${styles.button} ${styles.buttonYellow}`} href="#">
              Sign up for free
            </a>
            <a className={`${styles.button} ${styles.buttonLight}`} href="#">
              Learn about Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MarketingIntro;
