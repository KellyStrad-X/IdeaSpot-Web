import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="IdeaSpot" width={100} height={100} className={styles.logoImage} />
          </div>
          <button className={styles.navButton}>Join Waitlist</button>
        </div>
      </nav>

      {/* Hero Section with iPhone Mockups */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Turn fleeting ideas into <span className={styles.highlight}>validated concepts</span>
            </h1>
            <p className={styles.subtitle}>
              AI-powered analysis that transforms raw thoughts into research-backed business plans in minutes, not months.
            </p>
            <button className={styles.button}>
              Join Waitlist
            </button>
          </div>

          {/* iPhone Mockups */}
          <div className={styles.phoneMockups}>
            {['/IMG_4579.PNG', '/IMG_4580.PNG', '/IMG_4581.PNG', '/IMG_4582.PNG'].map((screenshot, i) => (
              <div key={i} className={styles.phoneContainer} style={{ '--index': i } as any}>
                <div className={styles.phone}>
                  <div className={styles.phoneNotch}></div>
                  <Image
                    src={screenshot}
                    alt={`IdeaSpot App Screenshot ${i + 1}`}
                    width={300}
                    height={650}
                    className={styles.phoneScreen}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className={styles.signup}>
        <div className={styles.signupCard}>
          <h2 className={styles.signupTitle}>Get Early Access</h2>
          <p className={styles.signupText}>
            Join our beta program and be the first to validate your ideas with IdeaSpot.
          </p>
          <form className={styles.signupForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Join Waitlist
            </button>
          </form>
          <p className={styles.disclaimer}>
            Free for beta testers. No credit card required.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Share Your Idea</h3>
              <p className={styles.stepText}>
                Chat naturally with our AI about your concept
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Get Analysis</h3>
              <p className={styles.stepText}>
                Receive 5 comprehensive analysis cards in minutes
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Take Action</h3>
              <p className={styles.stepText}>
                Use insights to validate and build your MVP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image src="/logo.png" alt="IdeaSpot" width={100} height={100} />
            </div>
            <p className={styles.tagline}>Ideas, validated</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Product</h4>
              <a href="#features" className={styles.footerLink}>Features</a>
              <a href="#pricing" className={styles.footerLink}>Pricing</a>
              <a href="#beta" className={styles.footerLink}>Beta Access</a>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Company</h4>
              <a href="#about" className={styles.footerLink}>About</a>
              <a href="#contact" className={styles.footerLink}>Contact</a>
              <a href="#blog" className={styles.footerLink}>Blog</a>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Legal</h4>
              <a href="/terms" className={styles.footerLink}>Terms of Service</a>
              <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2025 IdeaSpot. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
