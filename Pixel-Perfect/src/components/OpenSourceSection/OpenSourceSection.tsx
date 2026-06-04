import Antigravity from '../Antigravity'
import styles from './OpenSourceSection.module.scss'

export function OpenSourceSection() {
  return (
    <>
      <section className={styles.openSourceSection}>
        <div className={styles.antigravityLayer} aria-hidden="true">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={0.75}
            particleSize={1.25}
            lerpSpeed={0.035}
            color="#cb3837"
            autoAnimate
            particleVariance={0.7}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={2}
            particleShape="capsule"
            fieldStrength={10}
            opacity={0.34}
          />
        </div>
        <div className={styles.contentWide}>
          <div className={styles.hexIllustration} aria-hidden="true">
            <span />
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

      <div className={styles.colorBar} />
    </>
  )
}
export default OpenSourceSection;
