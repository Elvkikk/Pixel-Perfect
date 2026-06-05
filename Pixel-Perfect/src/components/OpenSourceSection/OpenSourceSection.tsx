import openSourceGear from '../../assets/open-source-gear.png'
import styles from './OpenSourceSection.module.scss'

export function OpenSourceSection() {
  return (
    <section className={styles.openSourceSection}>
      <div className={styles.sectionInner}>
        <div className={styles.gearIllustration} aria-hidden="true">
          <img className={styles.gearIcon} src={openSourceGear} alt="" />
        </div>

        <div className={styles.contentNarrow}>
          <h2>Bring the best of open source to you, your team, and your company</h2>
          <p>
            Relied upon by more than 17 million developers worldwide, npm is
            committed to making JavaScript development elegant, productive, and
            safe. The free npm Registry has become the center of JavaScript code
            sharing, and with more than two million packages, the largest software
            registry in the world. Our other tools and services take the Registry,
            and the work you do around it, to the next level.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OpenSourceSection
