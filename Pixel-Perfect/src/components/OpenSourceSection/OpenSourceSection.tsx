import styles from './OpenSourceSection.module.scss'

export function OpenSourceSection() {
  return (
    <section className={styles.openSourceSection}>
      <div className={styles.sectionInner}>
        <div className={styles.gearIllustration} aria-hidden="true">
          <svg className={styles.gearIcon} viewBox="0 0 16 16" focusable="false">
            <defs>
              <linearGradient id="npm-gear-gradient" x1="2" y1="2" x2="14" y2="14">
                <stop offset="0%" stopColor="#ef8236" />
                <stop offset="42%" stopColor="#cb3837" />
                <stop offset="100%" stopColor="#9f2d2f" />
              </linearGradient>
            </defs>
            <path
              fill="url(#npm-gear-gradient)"
              fillRule="evenodd"
              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.46 1.46 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311a1.46 1.46 0 0 1-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.46 1.46 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.46 1.46 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.46 1.46 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.46 1.46 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.46 1.46 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.46 1.46 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 0 0-5.858 2.929 2.929 0 0 0 0 5.858"
            />
          </svg>
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
