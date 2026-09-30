import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head><title>ShortLink — Free Shortener</title><meta name="description" content="Professional link management with human-focused analytics." /></Head>
      <main className={styles.hero}>
        <nav className={styles.nav}><div className={styles.brand}>SHORT<span>LINK</span></div><Link href="/login" className={styles.navButton}>Sign in</Link></nav>
        <section className={styles.heroInner}>
          <div className={styles.badge}>● Traffic Shield included</div>
          <h1>Free short links.<br/><em>Cleaner traffic.</em></h1>
          <p>Professional link management with human-focused analytics, OG previews and built-in traffic protection.</p>
          <div className={styles.actions}><Link href="/login" className={styles.primary}>Create your first short link →</Link><a href="#features" className={styles.secondary}>Explore features</a></div>
        </section>
        <section id="features" className={styles.features}>
          <article><b>01</b><h2>Human-focused analytics</h2><p>Separate automated requests from human click activity so your totals stay useful.</p></article>
          <article><b>02</b><h2>OG Preview controls</h2><p>Set title, description and feature image for clean social previews.</p></article>
          <article><b>03</b><h2>Single & Bulk</h2><p>Create individual links or batches with the same professional workflow.</p></article>
          <article><b>04</b><h2>Domain Control</h2><p>Keep destination creation aligned with your allowed website rules.</p></article>
        </section>
        <footer>SHORTLINK — Professional link management with human-focused analytics.</footer>
      </main>
    </>
  )
}
