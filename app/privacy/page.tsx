import styles from '../terms/legal.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - IdeaSpot',
  description: 'Privacy Policy for IdeaSpot',
};

export default function Privacy() {
  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>

        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: November 11, 2025</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            IdeaSpot ("we," "our," or "us") respects your privacy and is committed to protecting your
            personal data. This privacy policy explains how we collect, use, and safeguard your information
            when you use our mobile application.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Email address, name, and authentication credentials</li>
            <li><strong>Idea Content:</strong> Business ideas, descriptions, and related information you submit</li>
            <li><strong>Communication Data:</strong> Messages you send us for support or feedback</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with the App, features used, and time spent</li>
            <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
            <li><strong>Log Data:</strong> IP address, access times, and error logs</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain the IdeaSpot service</li>
            <li>Process your business ideas through our AI analysis system</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about updates, features, and support</li>
            <li>Analyze usage patterns and improve our service</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. AI Processing</h2>
          <p>
            Your business ideas are processed using Anthropic's Claude API to generate analysis and recommendations.
            This processing is subject to Anthropic's data usage policies. We do not use your idea content to
            train our AI models or share it publicly.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Storage and Security</h2>
          <p>
            We use Firebase (Google Cloud Platform) to store your data securely. We implement industry-standard
            security measures including:
          </p>
          <ul>
            <li>Encrypted data transmission (HTTPS/TLS)</li>
            <li>Secure authentication systems</li>
            <li>Access controls and monitoring</li>
            <li>Regular security audits</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Firebase (Google) for hosting, Anthropic for AI processing</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          <p>
            To exercise these rights, contact us at privacy@ideaspot.app
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to provide
            services. You may request deletion of your account and data at any time. Some data may be retained
            for legal or legitimate business purposes after account deletion.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Children's Privacy</h2>
          <p>
            IdeaSpot is not intended for users under the age of 13 (or 16 in some jurisdictions). We do not
            knowingly collect personal information from children. If we become aware that a child has provided
            personal information, we will delete it.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries other than your country of residence.
            We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. California Privacy Rights</h2>
          <p>
            California residents have specific rights under the California Consumer Privacy Act (CCPA),
            including the right to know what personal information is collected, the right to delete,
            and the right to opt-out of the sale of personal information (we do not sell personal information).
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. GDPR Compliance</h2>
          <p>
            If you are in the European Economic Area (EEA), you have additional rights under the General
            Data Protection Regulation (GDPR), including the right to data portability, the right to object
            to processing, and the right to lodge a complaint with a supervisory authority.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any material changes
            by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@ideaspot.app
            <br />
            <strong>Support:</strong> support@ideaspot.app
          </p>
        </section>
      </div>
    </main>
  );
}
