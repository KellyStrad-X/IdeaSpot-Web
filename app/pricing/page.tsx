'use client';

import { useState } from 'react';
import styles from './pricing.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const scrollToWaitlist = () => {
    window.location.href = '/#signup';
  };

  return (
    <main className={styles.pricingPage}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="IdeaSpot" width={100} height={100} className={styles.logoImage} />
          </Link>
          <button
            className={styles.navButton}
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Go PRO for unlimited use!</h1>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="IdeaSpot" width={120} height={120} />
          </div>
        </header>

        {/* PRO Label */}
        <div className={styles.proLabel}>PRO</div>

        {/* Plan Cards */}
        <div className={styles.planCards}>
          {/* Monthly Plan */}
          <button
            className={`${styles.planCard} ${selectedPlan === 'monthly' ? styles.selected : ''}`}
            onClick={() => setSelectedPlan('monthly')}
          >
            <div className={styles.badge}>&nbsp;</div>
            <div className={styles.planTitle}>Monthly</div>
            <div className={styles.price}>$6.99/mo</div>
            <div className={styles.subtitle}>&nbsp;</div>
            <div className={styles.checkmark}>
              {selectedPlan === 'monthly' ? '☑' : '☐'}
            </div>
            <div className={styles.selectedLabel}>
              {selectedPlan === 'monthly' ? 'Selected' : ''}
            </div>
          </button>

          {/* Annual Plan */}
          <button
            className={`${styles.planCard} ${selectedPlan === 'yearly' ? styles.selected : ''}`}
            onClick={() => setSelectedPlan('yearly')}
          >
            <div className={styles.badge}>Recommended!</div>
            <div className={styles.planTitle}>Annual</div>
            <div className={styles.price}>$66.99/yr</div>
            <div className={styles.subtitle}>save ~$17!</div>
            <div className={styles.checkmark}>
              {selectedPlan === 'yearly' ? '☑' : '☐'}
            </div>
            <div className={styles.selectedLabel}>
              {selectedPlan === 'yearly' ? 'Selected' : ''}
            </div>
          </button>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✓</span>
            <span>Unlimited ideas analyzed</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✓</span>
            <span>5 comprehensive analysis cards per idea</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✓</span>
            <span>Full conversation history</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✓</span>
            <span>Advanced AI-powered insights</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✓</span>
            <span>Priority support</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={styles.ctaButton}
          onClick={scrollToWaitlist}
        >
          Join Waitlist
          <span className={styles.arrow}>→</span>
        </button>

        {/* Tagline */}
        <div className={styles.tagline}>
          <p className={styles.taglineMain}>Never let a fleeting Idea Pass.</p>
          <p className={styles.taglineEmphasis}>It may just be the ONE.</p>
        </div>

        {/* Beta Notice */}
        <p className={styles.betaNotice}>
          Free for beta testers. Join the waitlist to get early access!
        </p>
      </div>
    </main>
  );
}
