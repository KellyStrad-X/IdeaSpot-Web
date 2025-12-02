import Image from 'next/image';
import styles from './download.module.css';

export const metadata = {
  title: 'Download IdeaSpot - App Store',
  description: 'Download IdeaSpot from the App Store. Turn fleeting ideas into validated concepts.',
};

export default function DownloadPage() {
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
