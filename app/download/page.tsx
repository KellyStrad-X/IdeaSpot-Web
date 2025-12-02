'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './download.module.css';

export default function DownloadPage() {
  const [isInstagram, setIsInstagram] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const inInstagram = ua.includes('Instagram');
    setIsInstagram(inInstagram);
  }, []);

  if (isInstagram) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt="IdeaSpot"
              width={200}
              height={80}
              className={styles.logo}
              priority
            />
          </div>

          <h1 className={styles.title}>
            Get <span className={styles.highlight}>IdeaSpot</span>
          </h1>

          <p className={styles.subtitle}>
            Turn fleeting ideas into validated concepts
          </p>

          <div className={styles.instructions}>
            <p className={styles.instructionText}>
              To download from the App Store:
            </p>
            <ol className={styles.stepsList}>
              <li>Tap the <strong>⋯</strong> menu in the top right</li>
              <li>Select <strong>&quot;Open in Safari&quot;</strong></li>
              <li>Tap the banner at the top to download</li>
            </ol>
          </div>

          {!showInstructions && (
            <button
              className={styles.showButton}
              onClick={() => setShowInstructions(true)}
            >
              Show me where
            </button>
          )}

          {showInstructions && (
            <div className={styles.visualGuide}>
              <div className={styles.arrow}>↗</div>
              <p className={styles.guideText}>Tap the three dots up here</p>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.arrowUp}>
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.arrowIcon}>
            <path d="M12 4l-8 8h5v8h6v-8h5z"/>
          </svg>
        </div>

        <div className={styles.logoWrapper}>
          <Image
            src="/logo.png"
            alt="IdeaSpot"
            width={200}
            height={80}
            className={styles.logo}
            priority
          />
        </div>

        <h1 className={styles.title}>
          Get <span className={styles.highlight}>IdeaSpot</span>
        </h1>

        <p className={styles.subtitle}>
          Turn fleeting ideas into validated concepts
        </p>

        <div className={styles.instructions}>
          <p className={styles.instructionText}>
            Tap the banner at the top of your screen to download from the App Store
          </p>
        </div>
      </div>
    </main>
  );
}
